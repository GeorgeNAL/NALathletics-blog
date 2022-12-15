import React, { createContext, useReducer } from "react";

export enum CheckoutActions {
  SHIPPING = "SHIPPING",
}

type T_Shipping = {
  id: string;
  price: number;
};

type T_Payload = {
  shipping: T_Shipping;
};

type T_Action = {
  type: CheckoutActions;
  payload?: T_Payload;
};

type T_State = T_Payload;

const initialState: T_State = {
  shipping: {
    id: null,
    price: 0,
  },
};

export const CheckoutCtx = createContext<{
  state: T_State;
  // dispatch: React.Dispatch<any>;
  dispatch: React.Dispatch<T_Action>;
}>({
  state: initialState,
  dispatch: () => null,
});

function reducer(state: T_State, action: T_Action): T_State {
  const { type, payload } = action;
  switch (type) {
    case "SHIPPING":
      return {
        ...state,
        shipping: payload.shipping,
      };
    default:
      return state;
  }
}

export const CheckoutProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <CheckoutCtx.Provider value={{ state, dispatch }}>
      {children}
    </CheckoutCtx.Provider>
  );
};
