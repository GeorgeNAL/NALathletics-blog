import { ImgHTMLAttributes } from "react";

import type { AspectRatioProps, ImageProps } from "@chakra-ui/react";

declare namespace IImageLazyload {
  export interface IProps extends ImageProps, AspectRatioProps {
    // ratio?: number;
    image?: imageObject;
    onLoadfallback?(e: boolean): void;
  }
  type NativeImageProps = ImgHTMLAttributes<HTMLImageElement>;
}

export { IImageLazyload };
