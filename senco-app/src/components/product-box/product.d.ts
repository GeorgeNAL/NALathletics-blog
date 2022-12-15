import type { ChakraProps, ThemingProps } from "@chakra-ui/react";

declare namespace IProduct {
  export interface IProps extends ChakraProps, ThemingProps {
    title: string;
    subtitle?: string;
    images: string[];
    body?: string;
    colorOptions?: {
      title: string;
      value: string;
      color: string;
    }[];
    price: number;
    sale_price?: number;
  }
}

export { IProduct };
