import React, { createContext, useReducer } from "react";

import CartItems, { savedItems } from "../data/cart_items";

export enum CartActions {
  CART_DRAWER_TOGGLE = "CART_DRAWER_TOGGLE",
  CART_DRAWER_CLOSE = "CART_DRAWER_CLOSE",
  ADD_PRODUCT = "ADD_PRODUCT",
  UPDATE_QTY = "UPDATE_QTY",
  REMOVE_PRODUCT = "REMOVE_PRODUCT",
}

type T_Payload = {
  id: string | number;
  title: string;
  image: string;
  price: number;
  sale_price?: number;
  rating?: number;
  qty: number;
  badge?: string;
  variants?: {
    key: string | number;
    value: string | number;
  }[];
};

export type T_Action = {
  type: CartActions;
  payload?: T_Payload;
};

type T_State = {
  toggle: boolean;
  cart: T_Payload[];
  saved: T_Payload[];
};

const initialState: T_State = {
  toggle: false,
  cart: CartItems,
  saved: savedItems,
};

export const CartCtx = createContext<{
  state: T_State;
  // dispatch: React.Dispatch<any>;
  dispatch: React.Dispatch<T_Action>;
}>({
  state: initialState,
  dispatch: () => null,
});

// Actions
const UPDATE_QTY = (state: T_State, payload: T_Payload): T_State => {
  // console.log("UPDATE_QTY", state, payload);
  const index = state.cart.findIndex((item) => item.id === payload.id);
  // console.log("FindIndex", index);
  if (index >= 0) {
    const newCart = [...state.cart];
    const updatedItem = {
      ...newCart[index],
    };
    updatedItem.qty = payload.qty;
    newCart[index] = updatedItem;
    return { ...state, cart: newCart };
  }

  // console.log("newState", newState);
  // console.log("payload", payload);
  return state;
};

function reducer(state: T_State, action: T_Action): T_State {
  const { type, payload } = action;
  switch (type) {
    case "CART_DRAWER_TOGGLE":
      return {
        ...state,
        toggle: !state.toggle,
      };
    case "CART_DRAWER_CLOSE":
      return {
        ...state,
        toggle: false,
      };
    case "ADD_PRODUCT":
      return {
        ...state,
        cart: state.cart.concat(payload),
        // cart: [...state.cart, payload],
      };
    case "UPDATE_QTY":
      return UPDATE_QTY(state, payload);
    case "REMOVE_PRODUCT":
      return {
        ...state,
        cart: state.cart.filter((item) => item !== payload),
      };
    default:
      return state;
  }
}

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <CartCtx.Provider value={{ state, dispatch }}>{children}</CartCtx.Provider>
  );
};
