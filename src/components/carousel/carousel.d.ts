import type { ChakraProps, ThemingProps } from "@chakra-ui/react";

declare namespace ICarousel {
  export interface IProps extends ChakraProps, ThemingProps {
    // author?: string;
    // authorHref?: string;
    // avatar?: imageObject;
    // body: string;
    // href: string;
    // meta: string;
    // tag?: string;
    // tagHref?: string;
    // title: string;
    // image?: imageObject;
    // subtitle?: string;
    duration?: number;
    items: {
      title: string;
      body: string;
      image: string;
      href?: string;
    }[];
  }
  // export interface IWithImage {
  //   body: string;
  //   footer?: React.ReactNode;
  //   href: string;
  //   image: imageObject;
  //   title: string;
  //   subtitle?: string;
  // }
  // export interface ISlideshow extends ChakraProps, ThemingProps {
  //   duration?: number;
  //   items: {
  //     title: string;
  //     image: imageObject;
  //     href?: string;
  //   }[];
  // }
}

export default ICarousel;
