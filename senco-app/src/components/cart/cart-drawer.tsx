import { useContext } from "react";

import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";

import { CartActions, CartCtx } from "@definitions/context/cart";
import { CheckoutCtx } from "@definitions/context/checkout";
import PriceFormat from "@definitions/utils/price-format";

import CartItems from "./cart-items";

const CartDrawer = () => {
  const checkout = useContext(CheckoutCtx);
  const { state, dispatch } = useContext(CartCtx);

  const subTotal = state.cart.reduce(
    (total, item) => total + item.price * item.qty,
    0,
  );
  const shippingCost = checkout.state.shipping.price ?? 0;
  const total = subTotal + shippingCost;
  return (
    <Drawer
      size="md"
      placement="right"
      onClose={() => dispatch({ type: CartActions.CART_DRAWER_CLOSE })}
      isOpen={state.toggle}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader borderBottomWidth="1px">Shopping Cart</DrawerHeader>
        <DrawerBody>
          <VStack my={4} spacing={4}>
            <CartItems />
          </VStack>
        </DrawerBody>
        <DrawerFooter>
          <Stack width="full">
            <Stack>
              <Flex justify="space-between">
                <Text>Subtotal</Text>
                <Text fontFamily="mono">{PriceFormat(subTotal)}</Text>
              </Flex>
              <Flex justify="space-between">
                <Text>Shipping cost</Text>
                <Text fontFamily="mono">
                  {shippingCost ? <>+{PriceFormat(shippingCost)}</> : 0}
                </Text>
              </Flex>
              <Flex justify="space-between">
                <Text fontWeight="bold">Total</Text>
                <Text fontFamily="mono" fontWeight="bold">
                  {PriceFormat(total)}
                </Text>
              </Flex>
            </Stack>
            <Button width="full" size="lg">
              Checkout
            </Button>
            <Button width="full" size="lg" variant="outline" colorScheme="gray">
              Continue Shopping
            </Button>
          </Stack>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default CartDrawer;
