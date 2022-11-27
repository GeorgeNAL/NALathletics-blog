import React, { memo } from "react";

import {
  type ChakraProps,
  Heading,
  type ThemingProps,
  VisuallyHidden,
} from "@chakra-ui/react";

import Site from "@definitions/site";

const SiteName: React.FC<
  { visuallyhidden?: boolean } & ChakraProps & ThemingProps
> = ({ visuallyhidden = false, ...rest }) => {
  return (
    <>
      {visuallyhidden ? (
        <VisuallyHidden>{Site.name}</VisuallyHidden>
      ) : (
        <Heading fontFamily="body" fontSize="2xl" {...rest}>
          {Site.name}
        </Heading>
      )}
    </>
  );
};

export default memo(SiteName);
