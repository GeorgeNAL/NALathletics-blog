import { memo } from "react";

import {
  type ChakraProps,
  HStack,
  type StackProps,
  Text,
  type ThemingProps,
} from "@chakra-ui/react";

import PriceFormat from "@definitions/utils/price-format";

interface I_PriceProps extends ChakraProps, ThemingProps, StackProps {
  price: number;
  sale_price?: number;
}

const Price: React.FC<I_PriceProps> = ({
  price,
  sale_price,
  fontSize = "xl",
  ...rest
}) => {
  let salefontSize = "md";
  switch (fontSize) {
    case "xl":
    case "lg":
      salefontSize = "md";
      break;
    case "md":
      salefontSize = "sm";
      break;
    case "sm":
      salefontSize = "xs";
      break;
    case "xs":
      salefontSize = "xs";
      break;
    default:
      salefontSize = "md";
  }

  return (
    <HStack align="center" {...rest}>
      {!sale_price && price && (
        <Text
          lineHeight={1}
          fontFamily="mono"
          fontSize={fontSize}
          fontWeight="bold"
        >
          {PriceFormat(price)}
        </Text>
      )}
      {sale_price && (
        <Text
          lineHeight={1}
          fontFamily="mono"
          fontSize={fontSize}
          fontWeight="bold"
        >
          {PriceFormat(sale_price)}
        </Text>
      )}
      {sale_price && (
        <Text
          lineHeight={1}
          fontSize={salefontSize}
          fontFamily="mono"
          color="gray.500"
          textDecoration="line-through"
        >
          {PriceFormat(price)}
        </Text>
      )}
    </HStack>
  );
};

export default memo(Price);
