import React, { useContext, useEffect, useRef, useState } from "react";

import { NextSeo } from "next-seo";

import {
  ChatIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  PhoneIcon,
} from "@chakra-ui/icons";
import {
  Box,
  Button,
  chakra,
  Checkbox,
  Container,
  Divider,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  HStack,
  Input,
  Radio,
  RadioGroup,
  Select,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";

import { CartCtx } from "@definitions/context/cart";
import { CheckoutActions, CheckoutCtx } from "@definitions/context/checkout";
import { ThemeColorContext } from "@definitions/context/theme";
import PriceFormat from "@definitions/utils/price-format";

import CartItems from "@components/cart/cart-items";
import PageTitle from "@components/page-title";
import {
  AmexIcon,
  MasterIcon,
  PaypalIcon,
  VisaIcon,
} from "@components/payment-icons";

const CheckoutPage: React.FC = () => {
  const theme = useContext(ThemeColorContext);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const themeColorScheme = theme.colorScheme; // global default primary theme color

  return (
    <>
      <NextSeo
        title="Checkout"
        description="Checkout Senco React E-Commerce Website Template"
      />
      <chakra.main>
        <VStack mb={0} spacing={10}>
          <PageTitle
            title="Checkout"
            body="Collect payment information and delivery information to complete orders"
          />
          <Content />
        </VStack>
      </chakra.main>
    </>
  );
};

const Content = () => {
  return (
    <Box w="full">
      <Container maxW="container.xl">
        <Flex direction={["column", "column", "row", "row"]}>
          <VStack
            data-aos="fade-up"
            data-aos-delay="100"
            w="full"
            mb={0}
            spacing={[10]}
            p={[5, 5, 10]}
          >
            <ShippingInformation />
            <Divider />
            <ShippingMethod />
            <Divider />
            <PaymentInformation />
            <Divider />
            <PageFooter />
          </VStack>
          <OrderSummary data-aos="fade-up" data-aos-delay="100" />
        </Flex>
      </Container>
    </Box>
  );
};

const ShippingInformation = () => {
  return (
    <Box w="full">
      <Heading as="h3" fontFamily="body" size="md" mb={10}>
        Shipping Information
      </Heading>
      <VStack spacing={[5]}>
        <FormControl>
          <FormLabel htmlFor="full_name">Full name</FormLabel>
          <Input id="full_name" placeholder="First and last name" />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="street_address">Street address</FormLabel>
          <Input id="street_address" placeholder="123 Main Street" />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="street_address_2">
            Address 2{" "}
            <Text as="span" fontSize="sm" opacity={0.5}>
              - Optional
            </Text>
          </FormLabel>
          <Input id="street_address_2" placeholder="Building E, Apartment 2" />
        </FormControl>

        <Stack w="full" direction={["column", "column", "row"]} spacing={[5]}>
          <FormControl maxW={400} width={400}>
            <FormLabel htmlFor="zip_code">Zip Code</FormLabel>
            <Input id="zip_code" placeholder="Zip code" />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="city">City</FormLabel>
            <Input id="city" placeholder="City" />
          </FormControl>
        </Stack>

        <FormControl>
          <FormLabel htmlFor="email">Email address</FormLabel>
          <Input
            id="email"
            type="email"
            placeholder="example@themebiotic.com"
          />
          <FormHelperText>
            The General Data Protection Regulation applies to all user data.
            (GDPR)
          </FormHelperText>
        </FormControl>

        <FormControl>
          <VStack align="start">
            <Checkbox id="same-as-shipping">
              Billing address is same as shipping
            </Checkbox>
            <Checkbox id="save-address">
              Save this information for next time
            </Checkbox>
          </VStack>
        </FormControl>
      </VStack>
    </Box>
  );
};

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
      <Heading as="h3" fontFamily="body" size="md" mb={10}>
        Shipping Method
      </Heading>

      <RadioGroup size="lg" defaultValue={"standart"} onChange={changeAction}>
        <SimpleGrid columns={[1, 1, 1, 2]} spacing={[5, 5, 10]}>
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
              <Text as="span" display="block">
                {item.body}
              </Text>
            </Radio>
          ))}
        </SimpleGrid>
      </RadioGroup>
    </Box>
  );
};

const PaymentInformation = () => {
  return (
    <Box w="full">
      <Heading as="h3" fontFamily="body" size="md" mb={10}>
        Payment Information
      </Heading>
      <RadioGroup mb={10} defaultValue={"credit"} size="lg">
        <SimpleGrid columns={[1, 1, 1, 2]} spacing={[8, 8, 10]}>
          <Radio spacing="1rem" value="credit">
            <Text as="span" display="block" fontWeight="bold">
              Credit Card
            </Text>
            <Text as="span" display="block" mb={2}>
              Pay with credit card via Stripe
            </Text>
            <HStack as="span">
              <VisaIcon
                rounded="base"
                p={1}
                w={8}
                h={5}
                borderWidth="1px"
                borderColor="gray.300"
              />
              <MasterIcon
                rounded="base"
                p={1}
                w={8}
                h={5}
                borderWidth="1px"
                borderColor="gray.300"
              />
              <AmexIcon
                rounded="base"
                w={8}
                h={5}
                borderWidth="1px"
                borderColor="gray.300"
              />
            </HStack>
          </Radio>

          <Radio spacing="1rem" value="paypal">
            <Text as="span" display="block" fontWeight="bold">
              Paypal
            </Text>
            <Text as="span" display="block" mb={2}>
              Pay with your PayPal account
            </Text>
            <PaypalIcon
              rounded="base"
              p={1}
              w={8}
              h={5}
              borderWidth="1px"
              borderColor="gray.300"
            />
          </Radio>
        </SimpleGrid>
      </RadioGroup>
      <CreditCardPayment />
    </Box>
  );
};

const CreditCardPayment = () => {
  return (
    <Box w="full">
      <VStack w="full" spacing={[5]}>
        <Stack
          spacing={[5, 5, 5, 10]}
          w="full"
          direction={["column", "column", "column", "row"]}
        >
          <FormControl>
            <FormLabel htmlFor="card_number">Credit Card Number</FormLabel>
            <Input id="card_number" type="number" placeholder="Card Number" />
            <FormHelperText>Only numeric input allowed</FormHelperText>
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="name_on_card">Name on card</FormLabel>
            <Input id="name_on_card" placeholder="Full Name" />
            <FormHelperText>Full name as displayed on card</FormHelperText>
          </FormControl>
        </Stack>

        <Stack
          w="full"
          direction={["column", "column", "column", "row"]}
          spacing={[5, 5, 5, 10]}
        >
          <FormControl>
            <FormLabel id="expiry_date_year_label" htmlFor="expiry_date_year">
              Expiry date
            </FormLabel>
            <Stack direction={["column", "row", "row", "row"]} spacing={[5]}>
              <Select id="expiry_date_month">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </Select>
              <Select id="expiry_date_year">
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
              </Select>
            </Stack>
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="cvc">CVV/CVC</FormLabel>
            <Input id="cvc" placeholder="CVC" />
          </FormControl>
        </Stack>
      </VStack>
    </Box>
  );
};

const PageFooter = () => {
  return (
    <Stack
      direction={["column", "row", "row"]}
      align="stretch"
      justify="space-between"
      w="full"
    >
      <Button leftIcon={<ChevronLeftIcon />} variant="ghost">
        Return to cart
      </Button>
      <Button rightIcon={<ChevronRightIcon />} variant="ghost">
        Continue shopping
      </Button>
    </Stack>
  );
};

const OrderSummary: React.FC = (props) => {
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

  const bg = useColorModeValue("gray.100", "gray.900");
  const borderColor = useColorModeValue("blackAlpha.300", "whiteAlpha.300");
  const inputBg = useColorModeValue("white", "gray.700");
  return (
    <Box
      roundedTop={["xl", "xl", "md", "md"]}
      maxW={["full", "full", "md"]}
      w="full"
      bg={bg}
      p={[5, 5, 10]}
      {...props}
    >
      <Heading as="h3" fontFamily="body" size="md" mb={10}>
        Order Summary
      </Heading>
      <VStack spacing={[5, 5, 5]}>
        <CartItems />

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
                size="lg"
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
              size="lg"
            >
              Apply
            </Button>
          </Stack>
          <Text textAlign="center" fontSize="sm" color="gray.400">
            DISCOUNT5, DISCOUNT10, DISCOUNT15
          </Text>
        </VStack>

        <Divider borderColor={borderColor} />

        <VStack w="full" align="stretch">
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

        <Flex w="full" align="center" justify="space-between">
          <Text fontSize="xl" fontWeight="bold">
            Order Total
          </Text>
          <Text fontFamily="mono" fontSize="xl" fontWeight="bold">
            {PriceFormat(total)}
          </Text>
        </Flex>

        {/* Action button */}
        <Button width="full" size="jumbo">
          Checkout
        </Button>

        <VStack w="full" align="stretch">
          <Text fontSize="sm">
            Have questions? or Need help to complete your order?
          </Text>
          <HStack justify="center" align="center">
            <Button leftIcon={<ChatIcon />} variant="ghost">
              Live Chat
            </Button>
            <Button leftIcon={<PhoneIcon />} variant="ghost">
              Phone
            </Button>
          </HStack>
        </VStack>
      </VStack>
    </Box>
  );
};

export default CheckoutPage;
