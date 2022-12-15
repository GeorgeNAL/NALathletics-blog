import React, { memo } from "react";

import dynamic from "next/dynamic";

import { Spinner } from "@chakra-ui/react";

import { CartProvider } from "@definitions/context/cart";
import { CheckoutProvider } from "@definitions/context/checkout";
import { __DEV__ } from "@definitions/utils";

import CartDrawer from "@components/cart/cart-drawer";

import { ILayout } from "./layouts";

const HeaderDefault = dynamic(() => import("@components/header/header-1"), {
  loading: () => <Spinner />,
});

if (__DEV__) {
  HeaderDefault.displayName = "HeaderDefault";
}

const FooterDefault = dynamic(() => import("@components/footer/footer-1"), {
  loading: () => <Spinner />,
});

if (__DEV__) {
  FooterDefault.displayName = "FooterDefault";
}

const DefaultLayout: React.FC<ILayout.IProps> = ({
  header,
  footer,
  children,
}): JSX.Element => {
  return (
    <CheckoutProvider>
      <CartProvider>
        {header ? (
          header
        ) : (
          <HeaderDefault
            pos="absolute"
            zIndex="sticky"
            top={0}
            width="full"
            py={6}
          />
        )}
        {children}
        {footer ? footer : <FooterDefault />}
        <CartDrawer />
      </CartProvider>
    </CheckoutProvider>
  );
};

if (__DEV__) {
  DefaultLayout.displayName = "DefaultLayout";
}

export default memo(DefaultLayout);
