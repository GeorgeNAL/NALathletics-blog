import { memo, useState } from "react";

import Image, { ImageLoaderProps, ImageProps } from "next/image";

import { chakra, type ChakraProps, Skeleton } from "@chakra-ui/react";

export const customLoader = ({
  src,
  width,
  quality = 75,
}: ImageLoaderProps) => {
  return `${src}?w=${width}&q=${quality}&img`;
};

// const normalizeSrc = (src: string) => {
//   return src.startsWith("/") ? src.slice(1) : src;
// };

// const cloudflareLoader = ({ src, width, quality = 75 }: ImageLoaderProps) => {
//   const params = [`width=${width}`];
//   if (quality) {
//     params.push(`quality=${quality}`);
//   }
//   const paramsString = params.join(",");
//   return `/cdn-cgi/image/${paramsString}/${normalizeSrc(src)}`;
// };

const CustomImage = chakra(Image, {
  shouldForwardProp: (props) =>
    [
      "loader",
      "width",
      "height",
      "alt",
      "src",
      "layout",
      "placeholder",
      "blurDataURL",
      "onLoadingComplete",
      "quality",
      "sizes",
    ].includes(props),
});

// const NewImage = (props: any) => (
//   <CustomImage loader={cloudflareLoader} {...props} />
// );

const NextImage: React.FC<ChakraProps & ImageProps> = (props) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const {
    loader,
    width,
    height,
    alt,
    src,
    layout,
    placeholder,
    blurDataURL,
    // onLoadingComplete,
    quality,
    priority,
    sizes,
    rounded,
    roundedTop,
    roundedTopLeft,
    roundedTopRight,
    roundedTopStart,
    roundedTopEnd,
    roundedBottom,
    roundedBottomLeft,
    roundedBottomRight,
    roundedBottomStart,
    roundedBottomEnd,
    roundedLeft,
    roundedRight,
    roundedStart,
    roundedEnd,
    ...rest
  } = props;

  const { display = "flex" } = props;

  return (
    <Skeleton
      position="relative"
      isLoaded={isLoaded}
      display={display}
      // height={hasFull ? "full" : null}
      // width={hasFull ? "full" : null}
      // sx={hasFullHeight ? childFullHeight : undefined}
      rounded={rounded}
      roundedTop={roundedTop}
      roundedTopLeft={roundedTopLeft}
      roundedTopRight={roundedTopRight}
      roundedTopStart={roundedTopStart}
      roundedTopEnd={roundedTopEnd}
      roundedBottom={roundedBottom}
      roundedBottomLeft={roundedBottomLeft}
      roundedBottomRight={roundedBottomRight}
      roundedBottomStart={roundedBottomStart}
      roundedBottomEnd={roundedBottomEnd}
      roundedLeft={roundedLeft}
      roundedRight={roundedRight}
      roundedStart={roundedStart}
      roundedEnd={roundedEnd}
    >
      <CustomImage
        loader={loader}
        width={width}
        height={height}
        alt={alt}
        src={src}
        layout={layout}
        placeholder={placeholder}
        blurDataURL={blurDataURL}
        quality={quality}
        priority={priority}
        sizes={sizes}
        rounded={rounded}
        roundedTop={roundedTop}
        roundedTopLeft={roundedTopLeft}
        roundedTopRight={roundedTopRight}
        roundedTopStart={roundedTopStart}
        roundedTopEnd={roundedTopEnd}
        roundedBottom={roundedBottom}
        roundedBottomLeft={roundedBottomLeft}
        roundedBottomRight={roundedBottomRight}
        roundedBottomStart={roundedBottomStart}
        roundedBottomEnd={roundedBottomEnd}
        roundedLeft={roundedLeft}
        roundedRight={roundedRight}
        roundedStart={roundedStart}
        roundedEnd={roundedEnd}
        // onLoadingComplete={onLoadingComplete}
        onLoadingComplete={() => setIsLoaded(true)}
        {...rest}
      />
    </Skeleton>
  );
};

// export default memo(NewImage);
export default memo(NextImage);
