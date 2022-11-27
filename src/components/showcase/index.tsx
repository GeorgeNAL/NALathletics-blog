import { FaArrowRight } from "@react-icons";

import { memo } from "react";

import NextLink from "next/link";

import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  type ChakraProps,
  Flex,
  Heading,
  HStack,
  Icon,
  Link,
  LinkBox,
  LinkOverlay,
  SimpleGrid,
  type SimpleGridProps,
  Stack,
  Text,
  type ThemingProps,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";

import Image from "@components/image";

interface IShowcase extends ChakraProps, ThemingProps {
  title: string;
  subtitle: string;
  link: string;
  href: string;
  images: string[];
}

const Showcase: React.FC<IShowcase> = ({
  title,
  subtitle,
  link,
  href,
  images,
  bg,
  color,
  colorScheme = "brand",
}) => {
  const contentBg = bg ?? useColorModeValue(`${colorScheme}.50`, "gray.700");
  const contentColor = useColorModeValue(
    `${colorScheme}.500`,
    `${colorScheme}.300`,
  );

  const boxBg = useBreakpointValue(
    {
      base: contentBg,
      lg: "transparent",
    },
    "lg",
  );

  return (
    <Box px={{ base: 0, lg: 12 }} py={{ base: 0, lg: 12 }}>
      <Stack
        direction={{ base: "column-reverse", lg: "row" }}
        spacing={{ base: 0, lg: 20 }}
        w="full"
      >
        <Box
          width={{ lg: "sm" }}
          transform={{ base: "translateY(-50%)", lg: "none" }}
          bg={boxBg}
          rounded={["lg", "lg", "lg", "none"]}
          mx={{ base: 6, md: 8, lg: 0 }}
          px={{ base: 6, md: 8, lg: 0 }}
          py={{ base: 6, md: 8, lg: 12 }}
          zIndex="1"
        >
          <Stack
            color={color ? color : contentColor}
            spacing={{ base: 8, lg: 10 }}
          >
            <Stack spacing={{ base: 2, lg: 4 }}>
              <Heading size="2xl">{title}</Heading>
              <Heading as="h3" size={"xl"} fontWeight="normal">
                {subtitle}
              </Heading>
            </Stack>
            <HStack spacing="3">
              <NextLink href={href} passHref>
                <Link
                  // color={color ? color : contentColor}
                  fontWeight="bold"
                  fontSize="lg"
                  _hover={{ opacity: 0.65, transform: "scale(1.02)" }}
                >
                  {link}
                </Link>
              </NextLink>
              <Icon color={color} as={FaArrowRight} />
            </HStack>
          </Stack>
        </Box>
        <Flex
          rounded={["none", "none", "none", "lg"]}
          height={[450]}
          flex="1"
          overflow="hidden"
        >
          {images[0] && (
            <Flex flex={[1, 1, 3]}>
              <Image
                src={images[0]}
                alt="Lovely Image"
                maxH="450px"
                height="450px"
                width="768px"
                // layout="responsive"
                objectFit="cover"
                // objectPosition="center"
              />
            </Flex>
          )}
          {images[1] && (
            <Flex flex="1">
              <Image
                src={images[1]}
                alt="Lovely Image"
                maxH="450px"
                height="768px"
                width="768px"
                // layout="responsive"
                objectFit="cover"
                // objectPosition="center"
              />
            </Flex>
          )}
        </Flex>
      </Stack>
    </Box>
  );
};

interface I_ShowcaseItem {
  image: string;
  title: string;
  body?: string;
  href: string;
  link: string;
}

interface I_ShowcaseProps {
  items: I_ShowcaseItem[];
  // items: {
  //   image: string;
  //   title: string;
  //   body?: string;
  //   href: string;
  //   link: string;
  // }[];
}

export const TripleShowcase: React.FC<
  I_ShowcaseProps & ChakraProps & ThemingProps
> = memo(({ items = [] }) => {
  const overlayStyle = {
    _after: {
      content: '" "',
      pos: "absolute",
      rounded: "xl",
      width: "full",
      height: "full",
      transitionProperty: "common",
      transitionDuration: "normal",
      transitionTimingFunction: "ease-in-out",
      bg: useColorModeValue("rgba(0,0,0,0.1)", "rgba(0,0,0,0.4)"),
    },
    _hover: {
      _after: {
        bg: useColorModeValue("rgba(0,0,0,0.5)", "rgba(0,0,0,0.6)"),
      },
    },
  };

  return (
    <Box>
      <Stack direction={["column", "column", "row"]} spacing={[10, 10, 10]}>
        {items[0] && (
          <Flex flex="2" pos="relative" {...overlayStyle}>
            <Stack
              align="start"
              pos="absolute"
              padding={10}
              spacing={[4]}
              zIndex="1"
            >
              <Heading color="whiteAlpha.900">{items[0].title}</Heading>
              <Text color="whiteAlpha.900" maxW={300}>
                {items[0].body}
              </Text>
              <NextLink href={items[0].href} passHref>
                <Button
                  as="a"
                  size="sm"
                  p={5}
                  colorScheme="white"
                  variant="solid"
                >
                  {items[0].link}
                </Button>
              </NextLink>
            </Stack>
            <Image
              src={items[0].image}
              alt={items[0].title}
              rounded="xl"
              width={1600}
              height={1600}
              objectFit="cover"
              objectPosition="center"
            />
          </Flex>
        )}

        <Stack align="stretch" flex="1" spacing={[10, 10, 10]}>
          <Flex pos="relative" {...overlayStyle}>
            <Stack
              align="start"
              pos="absolute"
              padding={10}
              spacing={[5]}
              zIndex="1"
            >
              <Heading color="whiteAlpha.900">{items[1].title}</Heading>
              <NextLink href={items[1].href} passHref>
                <Button
                  as="a"
                  size="sm"
                  p={5}
                  colorScheme="white"
                  variant="solid"
                >
                  {items[1].link}
                </Button>
              </NextLink>
            </Stack>
            <Image
              src={items[1].image}
              alt={items[1].title}
              height={800}
              width={800}
              rounded="xl"
              objectFit="cover"
              objectPosition="center"
            />
          </Flex>
          <Flex pos="relative" {...overlayStyle}>
            <Stack
              align="start"
              pos="absolute"
              padding={10}
              spacing={[5]}
              zIndex="1"
            >
              <Heading color="whiteAlpha.900">{items[2].title}</Heading>
              <NextLink href={items[2].href} passHref>
                <Button
                  as="a"
                  size="sm"
                  p={5}
                  colorScheme="white"
                  variant="solid"
                >
                  {items[2].link}
                </Button>
              </NextLink>
            </Stack>
            <Image
              src={items[2].image}
              alt={items[2].title}
              height={800}
              width={800}
              rounded="xl"
              objectFit="cover"
              objectPosition="center"
            />
          </Flex>
        </Stack>
      </Stack>
    </Box>
  );
});

export const SimpleGridShowcase: React.FC<
  I_ShowcaseProps & ChakraProps & ThemingProps & SimpleGridProps
> = memo(
  ({
    items = [],
    columns = [1, 1, 3],
    spacing = [5, 5, 10],
    // colorScheme = "brand",
  }) => {
    const linkHoverColor = "whiteAlpha.800";

    const overlayStyle = {
      _after: {
        content: '" "',
        pos: "absolute",
        rounded: "xl",
        width: "full",
        height: "full",
        bgGradient: "linear(transparent 45%, rgba(0,0,0, 1) 100%)",
        transitionProperty: "all",
        transitionDuration: "normal",
        transitionTimingFunction: "ease-in-out",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        backgroundPosition: "0 100px",
      },
      _hover: {
        _after: {
          backgroundPosition: "0 0",
        },
      },
    };

    return (
      <Box>
        <SimpleGrid columns={columns} spacing={spacing}>
          {items.map((item) => (
            <Flex
              key={item.title}
              pos="relative"
              height="full"
              {...overlayStyle}
            >
              <Stack
                align="start"
                pos="absolute"
                bottom={0}
                padding={6}
                spacing={[2]}
                zIndex="1"
              >
                <Heading fontSize="2xl" color="whiteAlpha.900">
                  {item.title}
                </Heading>
                {item.body && (
                  <Text color="whiteAlpha.900" maxW={300}>
                    {item.body}
                  </Text>
                )}
                <NextLink href={item.href} passHref>
                  <Link
                    fontWeight="semibold"
                    color="white"
                    variant="link"
                    _hover={{
                      color: linkHoverColor,
                    }}
                  >
                    {item.link} <ChevronRightIcon w={6} h={6} />
                  </Link>
                </NextLink>
              </Stack>
              <Image
                src={item.image}
                alt={item.title}
                rounded="xl"
                width={1600}
                height={1600}
                objectFit="cover"
                objectPosition="center"
              />
            </Flex>
          ))}
        </SimpleGrid>
      </Box>
    );
  },
);

export const GridShowcase: React.FC<
  { items: Omit<I_ShowcaseItem, "link">[] } & ChakraProps &
    ThemingProps &
    SimpleGridProps
> = memo(
  ({
    items = [],
    columns = [1, 1, 2, 4],
    spacing = [5, 5, 10],
    // colorScheme = "brand",
  }) => {
    const linkHoverColor = "whiteAlpha.800";

    const overlayStyle = {
      transitionProperty: "common",
      transitionDuration: "normal",
      transitionTimingFunction: "ease-in-out",
      _after: {
        content: '" "',
        pos: "absolute",
        rounded: "xl",
        width: "full",
        height: "full",
        transitionProperty: "common",
        transitionDuration: "normal",
        transitionTimingFunction: "ease-in-out",
        bg: useColorModeValue("rgba(0,0,0,0.1)", "rgba(0,0,0,0.4)"),
      },
      _groupHover: {
        _after: {
          bg: useColorModeValue("rgba(0,0,0,0.5)", "rgba(0,0,0,0.6)"),
        },
      },
    };

    return (
      <Box>
        <SimpleGrid columns={columns} spacing={spacing}>
          {items.map((item) => (
            <LinkBox role="group" key={item.title} as="article" rounded="xl">
              <Flex pos="relative" {...overlayStyle}>
                <Stack
                  align="center"
                  justify="end"
                  pos="absolute"
                  bottom={0}
                  padding={6}
                  spacing={[2]}
                  zIndex="1"
                  width="full"
                  height="full"
                >
                  <NextLink href={item.href} passHref>
                    <LinkOverlay>
                      <Text
                        fontSize="lg"
                        fontWeight="semibold"
                        color="white"
                        variant="link"
                        transform="translateY(0)"
                        transitionProperty="common"
                        transitionDuration="normal"
                        transitionTimingFunction="ease-in-out"
                        _hover={{
                          color: linkHoverColor,
                        }}
                        _groupHover={{
                          transform: "translateY(-10px)",
                        }}
                      >
                        {item.title}
                      </Text>
                    </LinkOverlay>
                  </NextLink>
                </Stack>
                <Image
                  src={item.image}
                  alt={item.title}
                  height={1600}
                  width={1600}
                  rounded="xl"
                  objectFit="cover"
                  objectPosition="center"
                />
              </Flex>
            </LinkBox>
          ))}
        </SimpleGrid>
      </Box>
    );
  },
);

export default memo(Showcase);
