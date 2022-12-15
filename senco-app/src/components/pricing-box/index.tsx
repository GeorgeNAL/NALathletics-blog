import { memo } from "react";

import {
  Box,
  Button,
  Circle,
  Heading,
  Stack,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";

import PriceFormat from "@definitions/utils/price-format";

// import Counter from "@components/counter";
import PopularTag from "@components/popular-tag";

import type IPricingBox from "./pricing-box";

const PricingBox: React.FC<IPricingBox.IProps> = ({
  title,
  body,
  price,
  yearlyPrice,
  image,
  circleBg = "yellow.200",
  button = "Try free for 30 days",
  period = "month",
  yearlyPeriod = "year",
  description = "No credit card required",
  isPromote = false,
  yearly = false,
  // currency = "$",
  color,
  ...rest
}) => {
  const bg = useColorModeValue("white", "gray.700");
  const colorMute = useColorModeValue("gray.500", "gray.400");

  // const priceFormat = (value: number) => {
  //   return value.toLocaleString(undefined, {
  //     // maximumSignificantDigits: 3,
  //     minimumFractionDigits: 0,
  //     maximumFractionDigits: 2,
  //   });
  // };

  return (
    <Box
      bg={bg}
      shadow="2xl"
      rounded="2xl"
      color={color}
      p={[4, 6, 10]}
      {...rest}
    >
      <VStack align="stretch" spacing={12}>
        <VStack align="stretch">
          <Stack
            align="center"
            direction={["column", "row", "row"]}
            justify="space-between"
          >
            <Circle bg={circleBg} size={20}>
              {image}
            </Circle>
            {isPromote && <PopularTag>Most Popular</PopularTag>}
          </Stack>
          <Heading>{title}</Heading>
          <Text fontSize="lg">{body}</Text>
        </VStack>
        <Heading size="2xl">
          <Text as="span" fontFamily="mono">
            {/* {currency} */}
            {yearly ? PriceFormat(yearlyPrice) : PriceFormat(price)}
          </Text>
          <Text as="span" fontSize="xl" fontWeight={500} fontFamily="body">
            /{yearly ? yearlyPeriod : period}
          </Text>
        </Heading>
        <VStack>
          <Button
            width="full"
            size="jumbo"
            rounded="full"
            colorScheme={isPromote ? "white" : "brand"}
          >
            {button}
          </Button>
          <Text color={color ?? colorMute}>{description}</Text>
        </VStack>
      </VStack>
    </Box>
  );
};

export default memo(PricingBox);
