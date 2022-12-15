import { memo } from "react";

import {
  chakra,
  type ChakraProps,
  Flex,
  Text,
  useColorModeValue,
  useToken,
} from "@chakra-ui/react";

const PopularTag: React.FC<
  { children: string | React.ReactElement } & ChakraProps
> = memo(
  ({
    px = 4,
    fontSize = "md",
    fontWeight = 600,
    textTransform = "uppercase",
    width = "8px",
    rounded = "md",
    children,
  }) => {
    const [lightColor, darkColor] = useToken("color", [
      "amber.400",
      "amber.500",
    ]);
    const bg = useColorModeValue(lightColor, darkColor);
    return (
      <Flex pos="relative">
        <Flex align="center" px={px} borderStartRadius={rounded} bg={bg}>
          <Text
            fontSize={fontSize}
            color="black"
            textTransform={textTransform}
            fontWeight={fontWeight}
          >
            {children}
          </Text>
        </Flex>

        <chakra.svg
          width={width}
          height="auto"
          viewBox="0 0 8 32"
          xmlns="http://www.w3.org/2000/svg"
          fill={bg}
          preserveAspectRatio="xMidYMid slice"
        >
          <path d="M7.23865412e-14,0 L5.764,0 C7.251,0 8.218,1.56463 7.553,2.89443 L1,16 L7.553,29.1056 C8.218,30.4354 7.251,32 5.764,32 L7.23865412e-14,32 L7.23865412e-14,0 Z" />
        </chakra.svg>
      </Flex>
    );
  },
);

export default memo(PopularTag);
