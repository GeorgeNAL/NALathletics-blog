import React, { memo, useContext } from "react";

import {
  AspectRatio,
  Flex,
  Select,
  Stack,
  type StackProps,
  Text,
  useColorModeValue,
  VStack,
  Wrap,
} from "@chakra-ui/react";

import { CartActions, CartCtx } from "@definitions/context/cart";
import PriceFormat from "@definitions/utils/price-format";

import Image from "@components/image";

interface CartItemsProps extends StackProps {
  name?: string;
}

const CartItems: React.FC<CartItemsProps> = ({ name, direction }) => {
  const { state, dispatch } = useContext(CartCtx);
  const defaultName = name ?? "cart-items";
  return (
    <>
      {!!state.cart.length &&
        state.cart.map((item, idx) => (
          <Stack
            key={`${defaultName}-${item.title}-${idx}`}
            direction={direction ?? ["column", "row", "row"]}
            spacing={[5]}
            w="full"
            align="stretch"
          >
            <AspectRatio flex="1" maxW={24} ratio={1}>
              <Flex flex="1" w="full" h="full" p={0} bg="transparent">
                <Image
                  // loader={customLoader}
                  src={item.image}
                  alt={item.title}
                  // srcSet={item.image.srcSet}
                  width="96"
                  height="96"
                  layout="fixed"
                  objectFit="cover"
                  objectPosition="top center"
                />
              </Flex>
            </AspectRatio>

            {/* Product Details */}
            <VStack flex="2" align="stretch">
              <Flex justify="space-between">
                <Text noOfLines={2} fontWeight="bold">
                  {item.title}
                </Text>
                <Text fontFamily="mono">{PriceFormat(item.price)}</Text>
              </Flex>

              {/* Product variants */}
              <Wrap spacing={[1]} shouldWrapChildren>
                {item.variants.map((variant) => (
                  <Text
                    key={`${defaultName}-item-variants-${variant.key}`}
                    fontSize="sm"
                  >
                    <Text as="span" fontWeight="bold">
                      {variant.key}:
                    </Text>{" "}
                    {variant.value}
                  </Text>
                ))}
              </Wrap>

              {/* Quantity */}
              <Flex fontSize="sm" align="center" justify="space-between">
                {/* <Text fontWeight="bold">Quantity:</Text> */}
                <Select
                  w={16}
                  size="sm"
                  // defaultValue={item.qty}
                  value={item.qty}
                  bg={useColorModeValue("white", "gray.800")}
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                    dispatch({
                      type: CartActions.UPDATE_QTY,
                      payload: { ...item, qty: Number(e.target.value) },
                    })
                  }
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </Select>
              </Flex>
            </VStack>
          </Stack>
        ))}
    </>
  );
};

export default memo(CartItems);
