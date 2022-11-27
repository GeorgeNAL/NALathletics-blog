import type { ChakraProps, ThemingProps } from "@chakra-ui/react";

declare namespace IPricingBox {
  export interface IProps extends ChakraProps, ThemingProps {
    title: string;
    body: string;
    price: number;
    yearlyPrice: number;
    yearly?: boolean;
    currency?: string;
    image?: string;
    button?: string;
    period?: string;
    yearlyPeriod?: string;
    description?: string;
    isPromote?: boolean;
    circleBg?: string;
  }
}

export default IPricingBox;
