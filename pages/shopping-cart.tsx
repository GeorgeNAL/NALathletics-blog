import React, { useContext, useEffect, useRef, useState } from "react";

import { NextSeo } from "next-seo";

import { ArrowBackIcon, DeleteIcon } from "@chakra-ui/icons";
import {
  AspectRatio,
  Badge,
  Box,
  Button,
  chakra,
  Container,
  Divider,
  Flex,
  FormControl,
  Heading,
  HStack,
  Input,
  Link,
  Radio,
  RadioGroup,
  Select,
  SimpleGrid,
  Stack,
  StackDivider,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";

import { CartActions, CartCtx } from "@definitions/context/cart";
import { CheckoutActions, CheckoutCtx } from "@definitions/context/checkout";
import { ThemeColorContext } from "@definitions/context/theme";
import PriceFormat from "@definitions/utils/price-format";

import Image from "@components/image";
import Price from "@components/price";
import Rating from "@components/rating";

const ShoppingCartPage: React.FC = () => {
  const theme = useContext(ThemeColorContext);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const themeColorScheme = theme.colorScheme; // global default primary theme color
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { state, dispatch } = useContext(CartCtx);

  const bg = useColorModeValue("gray.100", "gray.900");
  const spacing = [5, 5, 10, 10];
  const spacingL = [10, 10, 20, 32];
  return (
    <>
      <NextSeo
        title="Senco React E-Commerce Shopping Cart"
        description="Senco React E-Commerce Website Template Shopping Cart example page"
      />
      <chakra.main pt={[28]}>
        <Container maxW="container.xl" mb={spacingL}>
          <Stack
            w="full"
            direction={["column", "column", "row"]}
            spacing={spacing}
            mb={spacingL}
          >
            <Stack
              align="stretch"
              flex="2"
              w="full"
              spacing={5}
              divider={<StackDivider />}
            >
              <Box>
                <Stack
                  align="center"
                  w="full"
                  // justify="space-between"
                  direction={["column", "row", "row"]}
                  mt={[0, 0, 8]}
                >
                  <Text fontSize="2xl" fontWeight={700}>
                    Shopping Cart
                  </Text>
                  <Text color="gray.500" fontWeight="semibold">
                    ({state.cart.length} items)
                  </Text>
                </Stack>
              </Box>
              <CartItems />
              <Button size="lg" variant="ghost" leftIcon={<ArrowBackIcon />}>
                Continue shopping
              </Button>
            </Stack>

            <Stack
              align="baseline"
              w="full"
              flex="1"
              p={[5, 10, 10]}
              rounded={["md", "xl", "xl"]}
              bg={bg}
            >
              <OrderSummary />
            </Stack>
          </Stack>
          <SavedForLater />
        </Container>
        <Subscribe />
      </chakra.main>
    </>
  );
};

/* A functional component that is rendering a list of items in the cart. */
const CartItems = () => {
  const { state, dispatch } = useContext(CartCtx);

  return (
    <Stack
      align="stretch"
      flex="2"
      w="full"
      spacing={5}
      divider={<StackDivider />}
    >
      {!!state.cart.length &&
        state.cart.map((item, idx) => (
          <Stack
            key={`cart-item-${item.title}-${idx}`}
            direction={["column", "row", "row", "row"]}
            spacing={[5]}
            // divider={<StackDivider />}
            // w="full"
            // align="stretch"
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
              <Text noOfLines={1} fontWeight="bold">
                {item.title}
              </Text>
              {/* Product variants */}
              {item.variants.map((variant) => (
                <Text key={`product-variant-${variant.key}`} fontSize="sm">
                  <Text as="span" fontWeight="bold">
                    {variant.key}:
                  </Text>{" "}
                  {variant.value}
                </Text>
              ))}
            </VStack>
            {/* Quantity */}
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
            <Price
              price={item.price}
              sale_price={item.sale_price}
              align="start"
            />
            <Button
              variant="outline"
              colorScheme="gray"
              size="sm"
              title="Delete product"
              aria-label="Delete product"
              // icon={}
            >
              <DeleteIcon display={["none", "inline", "inline"]} />
              <Text display={["inline", "none", "none"]} as="span">
                Delete
              </Text>
            </Button>
          </Stack>
        ))}
    </Stack>
  );
};

/**
 * It renders a box with a heading, a list of order summary items, a discount code
 * input, a shipping method selector, and a checkout button
 */
const OrderSummary = () => {
  const couponRef = useRef<HTMLInputElement>();
  const [coupon, setCoupon] = useState("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { state, dispatch } = useContext(CartCtx);
  const checkout = useContext(CheckoutCtx);

  const subTotal = state.cart.reduce(
    (total, item) => total + item.price * item.qty,
    0,
  );

  const shippingCost = checkout.state.shipping.price ?? 0;

  let discount;

  switch (coupon) {
    case "DISCOUNT5":
      discount = 0.05;
      break;
    case "DISCOUNT10":
      discount = 0.1;
      break;
    case "DISCOUNT15":
      discount = 0.15;
      break;
    case "DISCOUNT20":
      discount = 0.2;
      break;
    default:
      discount = 0;
  }

  const calcDiscount = (discount: number) => subTotal * discount;

  const total = subTotal + shippingCost - subTotal * discount;

  const borderColor = useColorModeValue("blackAlpha.300", "whiteAlpha.300");
  const inputBg = useColorModeValue("white", "gray.700");
  return (
    <Box
      rounded={["xl", "xl", "md", "md"]}
      maxW={["full", "full", "md"]}
      w="full"
    >
      <Heading as="h3" fontFamily="body" size="md" mb={[5, 5, 10]}>
        Order Summary
      </Heading>
      <VStack spacing={[5, 5, 5]}>
        <VStack w="full" align="stretch">
          <Flex justify="space-between">
            <Text fontWeight="semibold">Subtotal</Text>
            <Text fontFamily="mono" fontWeight="semibold">
              {PriceFormat(subTotal)}
            </Text>
          </Flex>
          <Flex justify="space-between">
            <Text>Shipping cost</Text>
            <Text fontFamily="mono">
              {shippingCost ? <>+{PriceFormat(shippingCost)}</> : 0}
            </Text>
          </Flex>
          <Flex justify="space-between">
            <Text>
              {discount ? (
                <mark>Discount ({discount * 100}%)</mark>
              ) : (
                "Discount"
              )}
            </Text>
            <Text>
              {discount ? (
                <chakra.mark fontFamily="mono">
                  -{PriceFormat(calcDiscount(discount))}
                </chakra.mark>
              ) : (
                0
              )}
            </Text>
          </Flex>
          <Flex justify="space-between">
            <Text>Estimated tax</Text>
            <Text fontFamily="mono">0</Text>
          </Flex>
        </VStack>

        <Divider borderColor={borderColor} />

        {/* Discount/Promotion code  */}
        <VStack w="full" align="start">
          <Stack
            w="full"
            align="center"
            direction={["column", "row", "row", "row"]}
          >
            <FormControl>
              {/* <FormLabel htmlFor="promotion">Promotion code</FormLabel> */}
              <Input
                ref={couponRef}
                // size="md"
                bg={inputBg}
                id="promotion"
                placeholder="Enter promotion code"
                maxLength={20}
                // onChange={(e: any) => setCoupon(e.target.value)}
                // defaultValue={"DISCOUNT20"}
              />
            </FormControl>
            <Button
              onClick={() => setCoupon(couponRef.current.value)}
              width={["full", "unset", "unset", "unset"]}
              // size="sm"
            >
              Apply
            </Button>
          </Stack>
          <Text textAlign="center" fontSize="xs" color="gray.400">
            DISCOUNT5, DISCOUNT10, DISCOUNT15
          </Text>
        </VStack>

        <Divider borderColor={borderColor} />

        <ShippingMethod />

        <Divider borderColor={borderColor} />

        <Flex w="full" align="center" justify="space-between">
          <Text fontSize="xl" fontWeight="bold">
            Order Total
          </Text>
          <Text fontSize="xl" fontFamily="mono" fontWeight="bold">
            {PriceFormat(total)}
          </Text>
        </Flex>

        {/* Action button */}
        <Button width="full" size="lg">
          Checkout
        </Button>
      </VStack>
    </Box>
  );
};
/**
 * It renders a list of radio buttons, and when one is selected, it updates the
 * state with the selected shipping method
 */
const ShippingMethod = () => {
  const { state, dispatch } = useContext(CheckoutCtx);

  useEffect(() => {
    // Set Standart shipping by default
    if (!state.shipping.id) {
      dispatch({
        type: CheckoutActions.SHIPPING,
        payload: {
          shipping: {
            id: "standart",
            price: 4.99,
          },
        },
      });
    }
  }, [state]);

  const items = [
    {
      value: "express",
      title: "Express",
      price: 14.99,
      body: "Dispatched in 24 hours",
    },
    {
      value: "standart",
      title: "Standart",
      price: 4.99,
      body: "Dispatched 1-2 days",
    },
  ];

  const changeAction = (id: string) => {
    const index = items.findIndex((item) => item.value === id);
    dispatch({
      type: CheckoutActions.SHIPPING,
      payload: {
        shipping: {
          id: id,
          price: items[index].price,
        },
      },
    });
  };

  return (
    <Box w="full">
      <Text fontWeight={700} fontSize="md" mb={4}>
        Shipping
      </Text>

      {/* <pre>{JSON.stringify(state, null, 2)}</pre> */}

      <RadioGroup size="md" defaultValue={"standart"} onChange={changeAction}>
        <Stack spacing={[2]}>
          {items.map((item) => (
            <Radio
              key={`shipping-${item.value}`}
              spacing="1rem"
              value={item.value}
            >
              <HStack as="span">
                <Text as="span" fontWeight="bold">
                  {item.title}
                </Text>
                <Text as="span" fontFamily="mono">
                  {PriceFormat(item.price)}
                </Text>
              </HStack>
              <Text as="span">{item.body}</Text>
            </Radio>
          ))}
        </Stack>
      </RadioGroup>
    </Box>
  );
};

const SavedForLater = () => {
  const { state } = useContext(CartCtx);
  return (
    <Box>
      <Text fontSize="xl" fontWeight="semibold" mb={[10]}>
        Saved for later ({state.saved.length} items)
      </Text>
      <SimpleGrid columns={[1, 1, 2, 4]} spacing={[5, 5, 10, 10]}>
        {!!state.saved.length &&
          state.saved.map((item, idx) => (
            <Box
              key={`saved-items-${item.id}-${idx}`}
              p={5}
              rounded="xl"
              borderWidth="1px"
              pos="relative"
            >
              {(item.badge || item.sale_price) && (
                <HStack
                  align="start"
                  top={7}
                  left={7}
                  pos="absolute"
                  zIndex="sticky"
                >
                  {item.badge && (
                    <Badge px={4} colorScheme="green" rounded="xl">
                      {item.badge}
                    </Badge>
                  )}
                  {item.sale_price && (
                    <Badge px={4} colorScheme="red" rounded="xl">
                      Sale
                    </Badge>
                  )}
                </HStack>
              )}
              <VStack spacing={[5]}>
                <Image
                  overflow="hidden"
                  flex="1"
                  w="full"
                  pos="relative"
                  bg={useColorModeValue("gray.50", "gray.900")}
                  rounded="xl"
                  src={item.image}
                  // layout="responsive"
                  width={400}
                  objectFit="cover"
                  objectPosition="top"
                  height={400}
                  alt={item.title}
                />
                <Text>{item.title}</Text>
                <Price price={item.price} sale_price={item.sale_price} />
                <Rating value={item.rating} />
                <Button
                  px={4}
                  size="sm"
                  variant="outline"
                  colorScheme="gray"
                  rounded="full"
                >
                  Add to cart
                </Button>
              </VStack>
            </Box>
          ))}
      </SimpleGrid>
    </Box>
  );
};

/**
 * We're using the `useColorModeValue` hook to set the background color of the
 * `<Box>` component to either `gray.100` or `transparent` depending on the current
 * color mode
 * @returns A function that returns a Subscribe component.
 */
const Subscribe = () => {
  const bg = useColorModeValue("gray.100", "transparent");
  const inputBg = useColorModeValue("white", "blackAlpha.400");
  return (
    <Box bg={bg} py={[20, 20, 32]}>
      <Container maxW="container.xl">
        <VStack spacing={[10]}>
          <Heading>Get the latest from Senco</Heading>

          <VStack w={"full"} maxW={640}>
            <Stack w="full" spacing={4} direction={["column", "column", "row"]}>
              <Input
                type="text"
                placeholder={"example@senco.themebiotic.com"}
                color={useColorModeValue("gray.800", "gray.200")}
                bg={inputBg}
                rounded="full"
                size="lg"
              />
              <Button
                size="lg"
                colorScheme="brand"
                rounded="full"
                flex="1 0 auto"
                // _hover={{ bg: "blue.500" }}
                // _focus={{ bg: "blue.500" }}
              >
                Subscribe
              </Button>
            </Stack>
            <Text size="xs" color="gray.500">
              You can unsubscribe at any time. Read our{" "}
              <Link fontWeight="semibold" color="brand.400">
                privacy policy
              </Link>
            </Text>
          </VStack>
        </VStack>
      </Container>
    </Box>
  );
};

export default ShoppingCartPage;
