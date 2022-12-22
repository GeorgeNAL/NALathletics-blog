import React, { memo } from "react";
import Image from 'next/image'

import {
  chakra,
  type ChakraProps,
  type ThemingProps,
  useColorModeValue,
  useToken,
} from "@chakra-ui/react";

const Logo: React.FC<ChakraProps & ThemingProps> = (props) => {
  const light = useToken("colors", "blackAlpha.700");
  const dark = useToken("colors", "whiteAlpha.700");
  const color = useColorModeValue(light, dark);

  return (
    <Image src="/images/footer-logo.png" alt="logo" width="182px" height="59px" />
  );
};

export default memo(Logo);
