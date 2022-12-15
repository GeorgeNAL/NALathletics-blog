import React, { useContext, useLayoutEffect, useState } from "react";

import {
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

import { NextSeo } from "next-seo";

import {
  AspectRatio,
  Avatar,
  Box,
  Button,
  chakra,
  type ChakraProps,
  Container,
  Flex,
  Heading,
  HStack,
  Link,
  Stack,
  Text,
  type ThemingProps,
  Tooltip,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";

import { ThemeColorContext } from "@definitions/context/theme";
import useBoundingRect from "@definitions/hooks/useBoundingRect";
import PriceFormat from "@definitions/utils/price-format";

import Image from "@components/image";
import MotionBox from "@components/motion/motion-box";

const Home2Page: React.FC = () => {
  const theme = useContext(ThemeColorContext);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const themeColorScheme = theme.colorScheme; // global default primary theme color

  return (
    <>
      <NextSeo
        title="Senco React E-Commerce"
        description="Senco React E-Commerce Website Template"
      />
      <chakra.main>
        <VStack mb={32} spacing={32}>
          <Hero />
          <Container maxW="container.xl">
            <Heading
              mx="auto"
              textAlign="center"
              data-aos="fade-up"
              maxW="container.lg"
            >
              SoundMax is a pair of premium wireless headphones that combine the
              best of sound quality, wireless convenience and amazing battery
              life. In a slim and sleek form, SoundMax offers all the features
              you need for the perfect personal listening experience.
            </Heading>
          </Container>

          <TechSpecsBlock />

          <Box width="full">
            <QualityBlock />
          </Box>

          <Box width="full">
            <ColorOptionsBlock />
          </Box>
        </VStack>
      </chakra.main>
    </>
  );
};

const Hero = () => {
  const bg = useColorModeValue("whiteAlpha.900", "blackAlpha.100");
  return (
    <Box bg={bg} w="full">
      <Container maxW="container.xl">
        <Stack pos="relative" overflow="hidden" align="center">
          <AspectRatio
            ratio={1}
            maxW="full"
            maxH={768}
            width="full"
            height="full"
            pos="relative"
            zIndex={1}
          >
            <Image
              layout="fill"
              objectFit="contain"
              objectPosition="top center"
              src="/images/home-2/product-0.png"
              alt="Senco product image"
            />
          </AspectRatio>
          <Parallax max={500} pos="absolute" left={0} top="10%" zIndex={0}>
            <Heading fontSize="clamp(16px, 12vw, 10rem)">Incredible</Heading>
          </Parallax>
          <Parallax max={500} pos="absolute" top="10%" right={0} zIndex={2}>
            <Heading fontSize="clamp(16px, 12vw, 10rem)">Sound</Heading>
          </Parallax>
        </Stack>
      </Container>
    </Box>
  );
};

interface ParallaxProps extends ChakraProps, ThemingProps {
  children: React.ReactNode;
  offset?: number;
  min?: number;
  max?: number;
}

const Parallax = ({
  children,
  // offset = 50,
  min = 50,
  max = 150,
  ...rest
}: ParallaxProps): JSX.Element => {
  const prefersReducedMotion = useReducedMotion();
  const [elementTop, setElementTop] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);
  const [ref, { top }] = useBoundingRect();

  const { scrollY } = useScroll();

  const initial = elementTop - clientHeight;
  // const final = elementTop + offset;
  const final = elementTop + max;

  // useTransform(x, input, output)
  const yRange = useTransform(scrollY, [initial, final], [min, max]);
  const y = useSpring(yRange, { stiffness: 400, damping: 90 });

  // useLayoutEffect(() => {
  //   const element = ref.current;
  //   const onResize = () => {
  //     if (element) {
  //       setElementTop(
  //         element.getBoundingClientRect().top + window.scrollY ||
  //           window.pageYOffset,
  //       );
  //     }
  //     setClientHeight(window.innerHeight);
  //   };
  //   onResize();
  //   window.addEventListener("resize", onResize);
  //   return () => window.removeEventListener("resize", onResize);
  // }, [ref]);

  useLayoutEffect(() => {
    if (window && top) {
      setElementTop(top + window.scrollY || window.pageYOffset);
    }
    setClientHeight(window.innerHeight);
  }, [top]);

  // Don't parallax if the user has "reduced motion" enabled
  if (prefersReducedMotion) {
    return <>{children}</>;
  }

  return (
    <MotionBox ref={ref} style={{ y }} {...rest}>
      {children}
    </MotionBox>
  );
};

const TechSpecsBlock = () => {
  return (
    <Box width="full">
      <VStack width="full" spacing={[5, 10, 20]}>
        <Stack
          overflow="hidden"
          width="full"
          direction={["column", "column", "row"]}
        >
          <AspectRatio
            data-aos="fade-right"
            ratio={4 / 3}
            maxW={768}
            minW={"50%"}
            // maxH={400}
            width="full"
            height="full"
            pos="relative"
            zIndex={1}
          >
            <Image
              src={"/images/home-2/product-0-silver.jpeg"}
              alt="Senco product image"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              borderEndRadius={["none", "none", "2xl", "2xl"]}
            />
          </AspectRatio>
          <Flex
            data-aos="fade-left"
            align={["start", "start", "center", "center"]}
            justify={["start", "start", "center", "center"]}
            width="full"
            p={[5, 5, 10, 20]}
          >
            <VStack align="start" width="full">
              <Text fontSize="lg" fontWeight="semibold">
                Audio Technology
              </Text>
              <Text>
                Prima luce, cum quibus mons aliud consensu ab eo. Quid securi
                etiam tamquam eu fugiat nulla pariatur. Cras mattis iudicium
                purus sit amet fermentum.
              </Text>
              <Link variant="underline">Read More</Link>
            </VStack>
          </Flex>
        </Stack>
        <Stack
          overflow="hidden"
          width="full"
          direction={["column-reverse", "column-reverse", "row"]}
        >
          <Flex
            data-aos="fade-right"
            align={["start", "start", "center", "center"]}
            justify={["start", "start", "center", "center"]}
            width="full"
            p={[5, 5, 10, 20]}
          >
            <VStack align="start" width="full">
              <Text fontSize="lg" fontWeight="semibold">
                Compatibility
              </Text>
              <Text>
                Prima luce, cum quibus mons aliud consensu ab eo. Quid securi
                etiam tamquam eu fugiat nulla pariatur. Cras mattis iudicium
                purus sit amet fermentum.
              </Text>
              <Link variant="underline">Read More</Link>
            </VStack>
          </Flex>
          <AspectRatio
            data-aos="fade-left"
            ratio={4 / 3}
            maxW={768}
            minW={"50%"}
            // maxH={400}
            width="full"
            height="full"
            pos="relative"
            zIndex={1}
            bg="#f6f6f8"
            borderStartRadius={["none", "none", "2xl", "2xl"]}
          >
            <Image
              src={"/images/home-2/product-0-silver-1.jpeg"}
              alt="Senco product image"
              layout="fill"
              objectFit="contain"
              objectPosition="center"
            />
          </AspectRatio>
        </Stack>
      </VStack>
    </Box>
  );
};

const QualityBlock = () => {
  return (
    <Box
      overflow={"hidden"}
      pos="relative"
      py={28}
      bg="black"
      color="whiteAlpha.900"
    >
      <Parallax max={-150} width="full" pos="absolute" top={"-25%"}>
        <AspectRatio
          ratio={0.8}
          maxW={768}
          minW={"50%"}
          // maxH={400}
          width="full"
          height="full"
          zIndex={0}
        >
          <Image
            src={"/images/home-2/audio-quality.jpg"}
            alt="Senco product image"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </AspectRatio>
      </Parallax>

      <Container pos="relative" zIndex={0} maxW="container.xl">
        <Stack
          direction={["column", "column", "row"]}
          align={["start", "start", "end", "end"]}
        >
          <Box flex="3">
            <Text fontWeight="bold" textTransform="uppercase">
              Audio quality
            </Text>
            <Heading lineHeight={1} fontSize="8vw">
              Enjoy high quality sound
            </Heading>
          </Box>
          <Flex flex="1">
            <Text color="whiteAlpha.700">Active Noise Cancellation</Text>
          </Flex>
        </Stack>
      </Container>
    </Box>
  );
};

const ColorOptionsBlock = () => {
  const [active, setActive] = useState(0);
  const items = [
    {
      images: [
        "/images/home-2/product-0-silver.jpeg",
        "/images/home-2/product-0-silver-1.jpeg",
      ],
      title: "Silver",
      colorScheme: "gray",
    },
    {
      images: [
        "/images/home-2/product-0-gray.jpeg",
        "/images/home-2/product-0-gray-1.jpeg",
      ],
      title: "Gray",
      colorScheme: "blueGray",
    },
    {
      images: [
        "/images/home-2/product-0-blue.jpeg",
        "/images/home-2/product-0-blue-1.jpeg",
      ],
      title: "Blue",
      colorScheme: "blue",
    },
    {
      images: [
        "/images/home-2/product-0-pink.jpeg",
        "/images/home-2/product-0-pink-1.jpeg",
      ],
      title: "Pink",
      colorScheme: "pink",
    },
    {
      images: [
        "/images/home-2/product-0-green.jpeg",
        "/images/home-2/product-0-green-1.jpeg",
      ],
      title: "Green",
      colorScheme: "green",
    },
  ];

  return (
    <Box>
      <Stack
        spacing={[5, 5, 10, 10]}
        mb={[10, 20, 32]}
        justify="center"
        direction={["column", "column", "row"]}
      >
        <Stack
          flex="1"
          spacing={[5, 5, 10, 10]}
          justify="center"
          // direction={["column", "column", "row"]}
          padding={[5, 10, 20]}
        >
          <Box>
            <Heading mb={2} size="3xl">
              {/* Colour options. */}
              Find a beat that suits your style.
            </Heading>
            {/* <Heading opacity={0.75} size="2xl"> */}
            {/* Fit your style in every emotion. */}
            {/* Keep showing your own colors. */}
            {/* Capture the movement of colors with music. */}
            {/* </Heading> */}
          </Box>
          <HStack>
            {items.map((item, idx) => (
              <Button onClick={() => setActive(idx)} variant="unstyled">
                <ColorBox
                  m={0}
                  p={0}
                  isActive={idx === active}
                  color={item.colorScheme}
                  label={item.title}
                />
              </Button>
            ))}
          </HStack>
          <Text opacity={0.5}>
            Quid securi etiam tamquam eu fugiat nulla pariatur.
          </Text>
        </Stack>
        <Flex flex="1">
          <Image
            key={items[active].images[0]}
            src={items[active].images[0]}
            height={600}
            width={728}
            objectFit="cover"
            alt={items[active].title}
          />
        </Flex>
      </Stack>
      <Container maxW="container.xl">
        <VStack>
          <Avatar size="2xl" src={items[active].images[0]} />
          <Text>{items[active].title}</Text>
          <Text fontFamily="mono" fontSize="5xl">
            {PriceFormat(399.9)}
          </Text>
          <Button colorScheme="gray" size="jumbo">
            Purchase {items[active].title} SoundMax
          </Button>
        </VStack>
      </Container>
    </Box>
  );
};

const ColorBox = ({
  label = "",
  color = "gray",
  isActive = false,
  ...rest
}) => {
  const activeStyle = isActive
    ? {
        outlineOffset: "2px",
        outline: "1px solid",
        outlineColor: "gray.400",
      }
    : null;

  return (
    <Tooltip
      rounded="full"
      hasArrow
      placement="top"
      label={label.toLocaleUpperCase()}
    >
      <Flex
        as="span"
        borderRadius="full"
        transform="rotate(45deg)"
        width={8}
        height={8}
        {...activeStyle}
        {...rest}
      >
        <Box
          as="span"
          borderStartRadius="full"
          width={4}
          height={8}
          bg={`${color}.100`}
        />
        <Box
          as="span"
          borderEndRadius="full"
          width={4}
          height={8}
          bg={`${color}.200`}
        />
      </Flex>
    </Tooltip>
  );
};

export default Home2Page;
