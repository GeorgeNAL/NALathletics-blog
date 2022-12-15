import { BsBagFill, BsHeart, BsPlus } from "@react-icons";

import React, { useContext } from "react";

import { NextSeo } from "next-seo";

import {
  AspectRatio,
  Box,
  Button,
  chakra,
  type ChakraProps,
  Container,
  Divider,
  Flex,
  Heading,
  HStack,
  Icon,
  IconButton,
  Link,
  SimpleGrid,
  Stack,
  Text,
  type ThemingProps,
  useBreakpointValue,
  useColorModeValue,
  useToken,
  VStack,
  Wrap,
} from "@chakra-ui/react";

// import AllureLogo from "@definitions/brands/allure";
import CosmopolitanLogo from "@definitions/brands/cosmopolitan";
// import ElleLogo from "@definitions/brands/elle";
// import EsquireLogo from "@definitions/brands/esquire";
import MarieClaireLogo from "@definitions/brands/marieclaire";
import VogueLogo from "@definitions/brands/vogue";
import WomenshealthLogo from "@definitions/brands/womenshealth";
import { ThemeColorContext } from "@definitions/context/theme";
import PriceFormat from "@definitions/utils/price-format";

import ChakraCarousel from "@components/carousel/carousel";
import Image from "@components/image";

import CTA from "@blocks/cta";

const Home3Page: React.FC = () => {
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
        <VStack spacing={[10, 10, 10, 20]}>
          <HeroBlock />
          <OverlayTwoBlock />
          <ProductCarouselBlock />
          <InfoBlock />
          <GridProductBlock />
          <AsFeaturedInBlock />
          <ContentBlock
            image="https://source.unsplash.com/lE85uDPmIL4"
            title="Skin care"
            body="Paullum deliquit, ponderibus modulisque suis ratio utitur. Cum ceteris in veneratione tui montes, nascetur mus. Nihil hic munitissimus habendi senatus locus, nihil horum? Gallia est omnis divisa in partes tres, quarum."
            href="#"
            linkText="Book an Appointment"
          />
          <SingleProductBlock />
          <BlogBlock />
          <Box width="full" pos="relative">
            <Container pos="relative" zIndex={1} maxW="container.xl">
              <CTA
                data-aos="fade-up"
                title="Start your & 7-day free trial"
                subtitle="A simple everyday makeup routine, from the experts"
              />
            </Container>
            <Box
              zIndex={0}
              bg="gray.900"
              w="full"
              pos="absolute"
              h={52}
              bottom={0}
            />
          </Box>
        </VStack>
      </chakra.main>
    </>
  );
};

interface BlockProps extends ChakraProps, ThemingProps {
  // items?: any;
}

const HeroBlock: React.FC<BlockProps> = () => {
  const heading = "clamp(28px, 5vw, 10rem)";
  return (
    <Box width="full">
      {/* <Container maxW="container.xl"> */}
      <Stack
        spacing={0}
        direction={["column", "column", "row"]}
        width="full"
        // minHeight="100vh"
      >
        <Flex
          pos="relative"
          bg="pink.50"
          flex="1"
          // height="full"
          minHeight={[150, 250, 450, "unset"]}
          sx={{ "& > div": { width: "full" } }}
        >
          <Image
            layout="fill"
            objectFit="cover"
            objectPosition="50% 25%"
            src="https://source.unsplash.com/pItSSy1-7R8"
            alt="Senco home 3 hero"
          />
        </Flex>

        <Flex bg={useColorModeValue("gray.200", "gray.700")} flex="1">
          <Flex alignSelf="center" py={[10, 10, 0, 28]} px={[5, 5, 10, 20]}>
            <VStack
              width="full"
              align={["center", "center", "start"]}
              spacing={4}
            >
              <Flex justify={["center", "center", "start"]} flexWrap="wrap">
                <Heading
                  data-aos="fade-up"
                  fontSize={heading}
                  bgGradient="linear(to-l, purple.500, magenta.400)"
                  bgClip="text"
                >
                  BEAUTIFUL.
                </Heading>
                <Heading
                  data-aos="fade-up"
                  data-aos-delay={150}
                  fontSize={heading}
                  bgGradient="linear(to-l, purple.500, magenta.400)"
                  bgClip="text"
                >
                  GLAMOROUS.
                </Heading>
                <Heading
                  data-aos="fade-up"
                  data-aos-delay={250}
                  fontSize={heading}
                  bgGradient="linear(to-l, purple.500, magenta.400)"
                  bgClip="text"
                >
                  CONFIDENT.
                </Heading>
              </Flex>
              <Text
                fontSize="lg"
                textAlign={["center", "center", "start"]}
                data-aos="fade-up"
                data-aos-delay={350}
                maxW={450}
              >
                Ullamco laboris nisi ut aliquid ex ea commodi consequat. A
                communi observantia non est recedendum.
              </Text>
              <Button
                data-aos="fade-up"
                data-aos-delay={450}
                variant="outline"
                size="lg"
              >
                Shop now
              </Button>
            </VStack>
          </Flex>
        </Flex>
      </Stack>
      {/* </Container> */}
    </Box>
  );
};

const OverlayTwoBlock: React.FC<BlockProps> = () => {
  const items = [
    {
      title: "Seasonal Essentials",
      body: "Women's Glamorous Eyelash Extensions",
      href: "#",
      link: "SHOP NOW",
      image: "https://source.unsplash.com/9pszsLaXh7A",
      colorScheme: "amber",
      color: "white",
    },
    {
      title: "Start Fresh",
      body: "New Makeup Removers",
      href: "#",
      link: "SHOP NOW",
      image: "https://source.unsplash.com/y_CSTKJ0bEs",
      colorScheme: "pink",
      color: "white",
    },
  ];
  return (
    <Box width="full">
      <Container maxW="container.xl">
        <SimpleGrid columns={[1, 1, 2]} spacing={[10, 10, 10, 20]}>
          {items.map((item, idx) => (
            <Box
              data-aos="fade-up"
              data-aos-delay={100 * idx}
              key={item.body + idx}
              pos="relative"
            >
              <Box
                pos="absolute"
                width="full"
                height="full"
                sx={{ "& > *": { width: "full", height: "full" } }}
                zIndex={0}
              >
                <Image
                  layout="fill"
                  objectFit="cover"
                  src={item.image}
                  alt={item.title}
                />
              </Box>
              <AspectRatio ratio={1}>
                <VStack
                  // color="whiteAlpha.800"
                  color={item.color}
                  // textShadow="1px 2px 10px rgb(0 0 0 / 30%)"
                  textAlign="center"
                  p={6}
                  spacing={6}
                >
                  <Text fontSize="sm" textTransform="uppercase">
                    {item.title}
                  </Text>
                  <Text fontSize="2xl" fontWeight="semibold">
                    {item.body}
                  </Text>
                  <Link
                    href={item.href}
                    fontWeight="bold"
                    colorScheme={item.colorScheme}
                    variant="underline"
                  >
                    {item.link}
                  </Link>
                </VStack>
              </AspectRatio>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

const ProductCarouselBlock: React.FC<BlockProps> = () => {
  const items = [
    {
      image: "https://source.unsplash.com/E1rH__X9SA0",
      title: "Crayon Lipstick",
      price: 27.0,
    },
    {
      image: "https://source.unsplash.com/PdzMmdHqN2c",
      title: "Skincare Collagen Face Moisturizer",
      price: 39.9,
    },
    {
      image: "https://source.unsplash.com/8gnFtRwmQzs",
      title: "Loose Finishing Powder",
      price: 17.0,
    },
    {
      image: "https://source.unsplash.com/ip5MQahc8mE",
      title: "Neutral Nail Polish",
      price: 9.99,
    },
    {
      image: "https://source.unsplash.com/LtGwgq7r_mc",
      title: "Biodermic Peeling Shampoo",
      price: 19.0,
    },
  ];

  const gap = useBreakpointValue({ base: 10, md: 50, lg: 100 });

  return (
    <Box overflow="hidden" width="full">
      <Container pos="relative" maxW="container.xl">
        {/* <SimpleGrid columns={[1, 1, 3]} spacing={[10, 10, 20]}> */}

        <Heading
          mx="auto"
          fontWeight={900}
          mb={[10, 10, 20]}
          textAlign="center"
          textTransform="uppercase"
          maxW={["full", "80%", "78%"]}
          fontSize="clamp(1.8rem, 5vw, 4rem)"
          data-aos="fade-up"
          // bgGradient="linear(to-l, purple.500, magenta.400)"
          // bgClip="text"
        >
          New products
          <br /> that offer a bolder look
        </Heading>

        <ChakraCarousel gap={gap} navigation="buttons">
          {items.map((item, idx) => (
            <Box
              pos="relative"
              width="full"
              data-name={item.title + idx}
              key={item.title + idx}
              zIndex={1}
              data-aos="fade-up"
              data-aos-delay={100 * idx}
            >
              <VStack align="stretch" width="full">
                <Box pos="relative" zIndex={-1}>
                  <AspectRatio ratio={3 / 4}>
                    <Image
                      layout="fill"
                      objectFit="cover"
                      src={item.image}
                      alt={item.title}
                    />
                  </AspectRatio>
                </Box>
                <Stack
                  justify="space-between"
                  width="full"
                  direction={["column", "row", "row", "row"]}
                  align={["stretch", "center", "center"]}
                >
                  <VStack alignItems={["center", "start", "start"]}>
                    <Text>{item.title}</Text>
                    <Text fontFamily="mono">{PriceFormat(item.price)}</Text>
                  </VStack>
                  <Button
                    // leftIcon={<BsCartPlus />}
                    colorScheme="gray"
                    size="md"
                  >
                    <Text display={["none", "none", "unset"]}>Add</Text>
                    <Text display={["unset", "unset", "none"]}>
                      Add to cart
                    </Text>
                  </Button>
                </Stack>
              </VStack>
            </Box>
          ))}
        </ChakraCarousel>
        {/* </SimpleGrid> */}
      </Container>
    </Box>
  );
};

const AsFeaturedInBlock: React.FC<BlockProps> = () => {
  const fillColor = useColorModeValue("gray.600", "whiteAlpha.600");
  const bg = useColorModeValue("gray.50", "gray.700");
  return (
    <Box width="full" bg={bg}>
      <Container maxW="container.xl" my={[10, 10, 20]}>
        <Heading
          data-aos="fade-up"
          textAlign="center"
          size="lg"
          mb={[10, 10, 14]}
        >
          As Featured In
        </Heading>
        <Wrap
          width="full"
          align="center"
          justify="center"
          spacing={[10, 10, 16, 20]}
          shouldWrapChildren
        >
          {/* <AllureLogo color={fillColor} height={10} width="auto" /> */}
          {/* <ElleLogo color={fillColor} height={14} width="auto" /> */}
          {/* <EsquireLogo color={fillColor} height={10} width="auto" /> */}
          <Text data-aos="fade-up">
            <VogueLogo color={fillColor} height={8} width="auto" />
          </Text>
          <Text data-aos="fade-up" data-aos-delay={100}>
            <WomenshealthLogo color={fillColor} height={9} width="auto" />
          </Text>
          <Text data-aos="fade-up" data-aos-delay={200}>
            <MarieClaireLogo color={fillColor} height={8} width="auto" />
          </Text>
          <Text data-aos="fade-up" data-aos-delay={300}>
            <CosmopolitanLogo color={fillColor} height={7} width="auto" />
          </Text>
        </Wrap>
      </Container>
    </Box>
  );
};

const InfoBlock: React.FC<BlockProps> = () => {
  const heading = "clamp(18px, 3.9vw, 3.5rem)";
  const fillColor = useColorModeValue("lightGreen.100", "gray.700");
  const fill2Color = useColorModeValue("gray.100", "gray.900");
  const borderColor = useColorModeValue("white", "gray.800");
  return (
    <Box pos="relative" width="full">
      <BgSvg
        display={["none", "none", "block"]}
        width="61%"
        height="53px"
        pos="absolute"
        bottom="6%"
        left="0"
        zIndex={10}
      />
      <BgSvg
        display={["none", "none", "block"]}
        width="47%"
        height="51px"
        pos="absolute"
        top="5%"
        right="0"
        zIndex={10}
      />
      <Stack
        align="stretch"
        direction={["column", "column", "row"]}
        width="full"
        spacing={0}
        data-aos="fade-up"

        // py={20}
        // height={"calc(100% + 40px)"}
      >
        <Flex my={[0, 0, 10, 20]} alignSelf="center" flex="1" width="full">
          <AspectRatio
            flex="1"
            zIndex={1}
            ratio={6 / 5}
            pos="relative"
            borderColor={borderColor}
            borderWidth={[0, "14px", "14px"]}
            transform={["none", "none", "translateX(12%)"]}
          >
            <Image
              // src="https://source.unsplash.com/7fGYiTnnXM0"
              src="https://source.unsplash.com/AO21yM7oGDA"
              alt="make up"
              layout="fill"
              objectFit="cover"
            />
          </AspectRatio>
        </Flex>
        <Flex pos="relative" flex="1" bg={fillColor} width="full">
          <Box
            maxW={["full", "80%", "80%", "80%"]}
            height="auto"
            pos={["unset", "unset", "absolute"]}
            top="50%"
            transform={["none", "translateY(-25%)", "translateY(-50%)"]}
            zIndex={1}
            borderWidth={[0, "14px", "14px"]}
            borderColor={borderColor}
            bg={fill2Color}
            p={[6, 10, 10]}
            mx="auto"
          >
            <Text
              textAlign={["center", "center", "start"]}
              maxW={["unset", "full", "full", 450]}
              fontWeight={700}
              lineHeight={1.35}
              fontSize={heading}
              textTransform="uppercase"
            >
              <Text
                display={["inline", "inline", "block"]}
                as="span"
                color="gray.500"
              >
                Emphasize your beauty
              </Text>{" "}
              <Text
                display={["inline", "inline", "block"]}
                as="span"
                color={useColorModeValue("gray.900", "whiteAlpha.800")}
              >
                with natural makeup
              </Text>
            </Text>
          </Box>
        </Flex>
      </Stack>
    </Box>
  );
};

const GridProductBlock: React.FC<BlockProps> = () => {
  const items = [
    {
      image: "https://source.unsplash.com/8jg7vumdUlU",
      title: "Product 1",
    },
    {
      image: "https://source.unsplash.com/M8Vl5jWSV9s",
      title: "Product 2",
    },
    {
      image: "https://source.unsplash.com/NwAPSDTmxmk",
      title: "Product 3",
    },
    {
      image: "https://source.unsplash.com/BObSinOvQQw",
      title: "Product 4",
    },
  ];
  return (
    <Box width="full">
      <Container maxW="container.xl">
        <Stack
          width="full"
          align="stretch"
          direction={["column", "column", "row"]}
          // spacing={[10, 10, 14, 28]}
          spacing={[10, 10, 0]}
        >
          <SimpleGrid
            data-aos="fade-up"
            flex="1"
            width="full"
            columns={[2, 2, 2]}
            spacing={1}
          >
            {items.map((item, idx) => (
              <AspectRatio key={item.image + idx} ratio={1} pos="relative">
                <Image
                  src={item.image}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                />
              </AspectRatio>
            ))}
          </SimpleGrid>
          <Flex alignSelf="center" flex="1">
            <Box ml={[0, 0, 14, 28]}>
              <VStack
                spacing={4}
                maxWidth={["full", "full", 450]}
                align="stretch"
              >
                <Box>
                  <Text data-aos="fade-up" data-aos-delay={100} fontSize="sm">
                    from $99
                  </Text>
                  <Heading data-aos="fade-up" data-aos-delay={200} as="h3">
                    Neauthy Skincare
                  </Heading>
                </Box>
                <Text fontSize="lg" data-aos="fade-up" data-aos-delay={300}>
                  Integer legentibus erat a ante historiarum dapibus. Ambitioni
                  dedisse scripsisse iudicaretur. Magna pars studiorum, prodita
                  quaerimus.
                </Text>
                <HStack data-aos="fade-up" data-aos-delay={400}>
                  <Button
                    variant="outline"
                    leftIcon={<Icon height={5} width={5} as={BsBagFill} />}
                  >
                    <Text as="span" fontSize="sm">
                      Purchase
                    </Text>
                  </Button>
                  <IconButton
                    colorScheme="gray"
                    variant="outline"
                    aria-label="Add to Whishlist"
                    _hover={{
                      color: "red.400",
                      bg: "gray.100",
                    }}
                    icon={
                      <Icon h={4} w={4} as={BsHeart} color="currentcolor" />
                    }
                  />
                </HStack>
              </VStack>
            </Box>
          </Flex>
        </Stack>
      </Container>
    </Box>
  );
};

const SingleProductBlock: React.FC<BlockProps> = () => {
  return (
    <Box width="full">
      <Container maxW="container.xl">
        <Stack
          direction={["column-reverse", "column-reverse", "row"]}
          spacing={[10, 10, 0]}
          width="full"
        >
          <Flex alignSelf="center" width="full">
            <Box mr={[0, 0, 14, 28]}>
              <VStack
                spacing={4}
                maxWidth={["full", "full", 450]}
                align="stretch"
              >
                <Box>
                  <Text data-aos="fade-up" data-aos-delay={100} fontSize="sm">
                    Wellness
                  </Text>
                  <Heading as="h3" data-aos="fade-up" data-aos-delay={200}>
                    Face roller and cleaner
                  </Heading>
                </Box>
                <Text fontSize="lg" data-aos="fade-up" data-aos-delay={300}>
                  Integer legentibus erat a ante historiarum dapibus. Ambitioni
                  dedisse scripsisse iudicaretur. Magna pars studiorum, prodita
                  quaerimus.
                </Text>
                <Box>
                  <Divider
                    my={4}
                    maxW={120}
                    data-aos="fade-up"
                    data-aos-delay={400}
                  />
                </Box>
                <HStack spacing={4} data-aos="fade-up" data-aos-delay={500}>
                  <Text fontSize="xl" fontWeight={700} fontFamily="mono">
                    {PriceFormat(39.9)}
                  </Text>
                  <Button
                    // variant="outline"
                    colorScheme="deepBlue"
                    leftIcon={<Icon height={5} width={5} as={BsPlus} />}
                    pr={6}
                  >
                    <Text as="span" fontSize="sm">
                      Add to cart
                    </Text>
                  </Button>
                </HStack>
              </VStack>
            </Box>
          </Flex>
          <Box width="full">
            <AspectRatio ratio={1} pos="relative">
              <Image
                alt="senco react template"
                src="https://source.unsplash.com/oFgXybl7z3E"
                layout="fill"
                objectFit="cover"
              />
            </AspectRatio>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

interface IContentBlockProps extends BlockProps {
  title: string;
  body: string;
  image: string;
  href: string;
  linkText: string;
}

const ContentBlock: React.FC<IContentBlockProps> = ({
  title,
  body,
  image,
  href,
  linkText,
}) => {
  // const heading = "clamp(18px, 3.5vw, 3.5rem)";
  const fillColor = useColorModeValue("lightBlue.100", "gray.700");
  const fill2Color = useColorModeValue("gray.100", "gray.900");
  const borderColor = useColorModeValue("white", "gray.800");
  const svgDisplay = ["none", "none", "block"];
  return (
    <Box pos="relative" width="full">
      <BrushSvg
        display={svgDisplay}
        color="blue.400"
        pos="absolute"
        top="13%"
        left="32%"
        zIndex={5}
      />
      <BrushSvg
        display={svgDisplay}
        color="amber.400"
        pos="absolute"
        bottom={16}
        left="1%"
        zIndex={2}
      />
      <BrushSvg
        display={svgDisplay}
        color="lightGreen.400"
        pos="absolute"
        bottom={16}
        right="1%"
        zIndex={4}
      />
      <Stack
        align="stretch"
        direction={["column-reverse", "column-reverse", "row"]}
        width="full"
        spacing={0}
        data-aos="fade-up"
      >
        <Flex pos="relative" flex="1" bg={fillColor} width="full">
          <Box
            maxW={["full", "80%", "80%", "80%"]}
            height="auto"
            pos={["unset", "unset", "absolute"]}
            top="50%"
            right={0}
            transform={["none", "translateY(-25%)", "translateY(-50%)"]}
            zIndex={2}
            borderWidth={[0, "14px", "14px"]}
            borderColor={borderColor}
            bg={fill2Color}
            p={[6, 10, 10]}
            mx="auto"
          >
            <VStack spacing={4} width="full" align="start">
              <Heading textTransform="uppercase">{title}</Heading>
              <Text
                fontSize="lg"
                maxW={["unset", "full", "full", 450]}
                fontWeight={500}
                noOfLines={5}
              >
                {body}
              </Text>
              <Link
                href={href}
                display="flex"
                alignItems="center"
                _hover={{
                  color: "brand.400",
                }}
              >
                <Text as="span" pr="2">
                  {linkText}
                </Text>
                <LongArrowSvg display="inline" height="18px" width="auto" />
              </Link>
            </VStack>
          </Box>
        </Flex>
        <Flex alignSelf="center" flex="1" width="full">
          <AspectRatio
            flex="1"
            zIndex={1}
            ratio={4 / 3}
            pos="relative"
            my={[0, 0, 20, 20]}
            borderColor={borderColor}
            borderWidth={[0, "14px", "14px"]}
            transform={["none", "none", "translateX(-12%)"]}
          >
            <Image
              // src="https://source.unsplash.com/7fGYiTnnXM0"
              // src="https://source.unsplash.com/lE85uDPmIL4"
              src={image}
              layout="fill"
              objectFit="cover"
              alt={title}
              // width={400}
              // height={300}
            />
          </AspectRatio>
        </Flex>
      </Stack>
    </Box>
  );
};

const BlogBlock: React.FC<BlockProps> = () => {
  const items = [
    {
      image: "https://source.unsplash.com/7fGYiTnnXM0",
      subtitle: "Makeup",
      title: "Vivamus sagittis lacus",
      body: "Nihilne te nocturnum praesidium palati, nihil urbis vigiliae nihil hic munitissimus habendi senatus locus, nihil horum.",
    },
    {
      image: "https://source.unsplash.com/lE85uDPmIL4",
      subtitle: "Skincare",
      title: "Paullum deliquit ponderibus",
      body: "Paullum deliquit, ponderibus modulisque suis ratio utitur nec dubitamus multa iter quae et nos invenerat cum ceteris.",
    },
  ];

  return (
    <Box width="full">
      <Container maxW={930}>
        <VStack mb={10}>
          <Text>Makeup & Cosmetics</Text>
          <Heading>A makeup, skincare and lifestyles</Heading>
        </VStack>
        <SimpleGrid columns={[1, 1, 2]} spacing={[10, 10, 20]}>
          {items.map((item, idx) => (
            <VStack key={item.image + idx} textAlign="center" spacing={4}>
              <AspectRatio
                w="full"
                flex="1"
                zIndex={1}
                ratio={3 / 4}
                pos="relative"
                maxH={550}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                />
              </AspectRatio>
              <Flex direction="column" justify="center" align="center">
                <Text>{item.subtitle}</Text>
                <Heading as="h3" fontSize="2xl">
                  {item.title}
                </Heading>
              </Flex>
              <Text>{item.body}</Text>
            </VStack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

const BgSvg: React.FC<BlockProps> = ({ color, ...rest }) => {
  const activeColor = color
    ? useToken("colors", color as string)
    : "currentColor";
  return (
    <chakra.svg
      preserveAspectRatio="xMidYMid slice"
      viewBox="9.274 85.243 183.282 31.168"
      // height="200"
      // width="200"
      xmlns="http://www.w3.org/2000/svg"
      role="presentation"
      aria-hidden="true"
      {...rest}
    >
      <g fill={activeColor}>
        <path d="M180.1 109.884h.011v-.011h-.009z" />
        <path d="M123.748 109.372c.524-.433.95-.976 1.436-1.425 1-.925 1.75-2.068 2.8-2.946.621-.522 1.081-1.223 1.734-1.736a6.922 6.922 0 0 0 1.368-1.288 27.756 27.756 0 0 1 1.954-2.1c1.036-1.148 2.163-2.211 3.191-3.373.639-.721 1.361-1.392 2.009-2.112a29.256 29.256 0 0 1 2.532-2.607c.556-.486 1.028-1.054 1.537-1.581.809-.84 1.677-1.633 2.495-2.471.8-.814 1.553-1.664 2.343-2.484h-.593c-.905.942-1.828 1.867-2.74 2.8a24.5 24.5 0 0 1-2.728 2.73 17.293 17.293 0 0 0-1.741 1.65c-.585.582-1.144 1.189-1.709 1.784-.983 1.034-1.939 2.092-2.94 3.105a32.5 32.5 0 0 0-2.382 2.371c-1 1.246-2.2 2.279-3.292 3.42-.981 1.022-1.938 2.071-2.937 3.077a21.075 21.075 0 0 0-1.8 1.988c-.266.344-.713.534-.83.992a1.764 1.764 0 0 1-.206.268 17.122 17.122 0 0 0-2.3 2.36 13.115 13.115 0 0 1-1.166 1.145 7.893 7.893 0 0 0-1.134 1.294c.126-.034.245.172.389-.036.63-.921 1.586-1.537 2.289-2.392.355-.126.41-.518.666-.747a8.365 8.365 0 0 0 1.755-1.686z" />
        <path d="M20.619 109.7a2.191 2.191 0 0 0 .745-.884 5.066 5.066 0 0 0 1.143-.978c.364-.573.955-.9 1.315-1.446a21.653 21.653 0 0 1 2.043-2.238 7.679 7.679 0 0 1 1.233-1.29 15.72 15.72 0 0 0 1.565-1.368c.591-.533 1.092-1.17 1.67-1.736.758-.745 1.486-1.53 2.213-2.309.439-.472 1.031-.843 1.264-1.505a.731.731 0 0 1 .342-.371c.8-.392 1.2-1.189 1.78-1.79.829-.861 1.594-1.782 2.506-2.568 1.39-1.2 2.572-2.607 3.874-3.9.678-.674 1.333-1.375 1.99-2.074h-.673q-1.967 2.028-3.918 4.067c-.561.584-1.2 1.072-1.786 1.626a32.637 32.637 0 0 0-2.53 2.6c-.678.8-1.461 1.5-2.139 2.3-1.15 1.363-2.619 2.426-3.753 3.817-.694.85-1.546 1.549-2.309 2.334q-1.6 1.647-3.164 3.334c-.937 1.01-1.855 2.041-2.781 3.062-.162.108-.2.3-.35.445a20.247 20.247 0 0 0-2.188 2.272c-.408.262-.575.759-1.01 1-.6.337-.827 1.05-1.393 1.43a.114.114 0 0 0-.124.112c-.011 0-.02.012-.032.037s0 .043.039.064l.11.238c.126-.114.119-.281.16-.428.046.046.051.19.115.19.027 0 .066-.03.126-.108.33-.435.74-.8 1.1-1.207s.933-.6 1.082-1.18a.537.537 0 0 0 .407-.275 5.443 5.443 0 0 1 1.328-1.273z" />
        <path d="M12.072 100.871c.866-.827 1.606-1.764 2.486-2.584.584-.543 1.106-1.228 1.679-1.792.914-.905 1.748-1.883 2.689-2.758 1.46-1.354 2.722-2.9 4.1-4.332 1.354-1.409 2.751-2.774 4.137-4.156h-.907a65.18 65.18 0 0 0-1.1 1.072c-.2.2-.257.55-.472.7a10.62 10.62 0 0 0-2.211 2.14 59.566 59.566 0 0 1-4.311 4.547c-.387.382-.7.87-1.086 1.2-1.18 1.008-2.053 2.3-3.216 3.315-.624.545-1.073 1.294-1.7 1.864-1 .919-1.809 2.028-2.886 2.871v.8c.936-.967 1.826-1.966 2.798-2.887z" />
        <path d="M9.74 97.286c.229-.438.8-.5 1.008-.933.282-.584.889-.866 1.242-1.386a18.305 18.305 0 0 1 2.052-2.233 12.665 12.665 0 0 1 1.416-1.421 13 13 0 0 0 1.583-1.5c.687-.737 1.4-1.445 2.1-2.174a25.115 25.115 0 0 1 1.814-1.9 3.482 3.482 0 0 0 .465-.493h-.763c-.976 1-2.078 1.89-2.978 2.978-.724.876-1.594 1.615-2.4 2.422-1.049 1.049-2.05 2.146-3.07 3.228-.543.575-1.093 1.143-1.613 1.738a5.878 5.878 0 0 1-1.319 1.352v.806a2.468 2.468 0 0 0 .463-.484z" />
        <path d="M10.986 107.975a167.668 167.668 0 0 1 4.325-4.626c2.227-2.288 4.5-4.535 6.708-6.845 1.448-1.514 2.981-2.941 4.392-4.494 1.292-1.428 2.648-2.8 3.979-4.186l2.463-2.575h-.7c-.33.376-.662.749-1.013 1.1-.95.953-1.842 1.966-2.866 2.845-1.069.919-1.846 2.106-2.888 3.068-1.192 1.1-2.172 2.435-3.421 3.473-1.283 1.065-2.132 2.563-3.573 3.452-.028.019-.037.064-.058.1a23.341 23.341 0 0 1-1.851 2c-.831.939-1.759 1.805-2.593 2.737a43.585 43.585 0 0 0-3.141 3.237 9.759 9.759 0 0 1-1.467 1.439v1.036a33.247 33.247 0 0 0 1.704-1.761z" />
        <path d="M95.064 91.173a.7.7 0 0 0-.3.388.083.083 0 0 0 .133.009.654.654 0 0 0 .653-.481c.877-1 1.867-1.9 2.811-2.827 1.021-1.008 2.093-1.98 3.088-3.013h-.729c-.68.717-1.292 1.492-2.036 2.156a25.918 25.918 0 0 0-2.2 2.328c-.336.384-.891.572-1.028 1.134a1.813 1.813 0 0 1-.392.306z" />
        <path d="M75.566 93.35c-.561.536-.978 1.2-1.544 1.72-1.022.944-1.97 1.961-2.953 2.944-1.551 1.551-2.967 3.228-4.49 4.8-.1.1-.339.236-.149.465a12.72 12.72 0 0 0-2.5 2.428 22.891 22.891 0 0 0-2.367 2.5c.131-.029.264.211.39.01.584-.944 1.592-1.489 2.231-2.381a10.417 10.417 0 0 1 1.3-1.269 9.551 9.551 0 0 0 1.3-1.28c.446-.445.884-.91 1.322-1.354s.856-.894 1.248-1.37c.777-.937 1.748-1.682 2.509-2.644.5-.632 1.266-1.04 1.83-1.629.935-.978 1.851-1.97 2.815-2.921 1.153-1.129 2.172-2.387 3.318-3.53.751-.747 1.411-1.583 2.137-2.357.607-.651 1.251-1.269 1.879-1.9a1.021 1.021 0 0 0 .49-.332h-.72a.716.716 0 0 0-.034.2c-.183-.175-.3-.042-.426.084-.845.859-1.759 1.664-2.518 2.594-.673.824-1.48 1.509-2.167 2.318a39.739 39.739 0 0 1-2.901 2.904z" />
        <path d="M38.3 85.334l.067-.085h-.392a.58.58 0 0 0-.014.2c.126.002.232.029.339-.115z" />
        <path d="M116.1 92.818a292.392 292.392 0 0 0-4.3 4.607c-.085.092-.348.227-.151.454a7.837 7.837 0 0 0-1.375 1.168c-.417.433-.8.9-1.189 1.356-.366.11-.435.509-.708.731-.394.323-.9.575-1.085 1.111a.359.359 0 0 0-.023.055c-.12.232-.481.239-.52.539-.236.094-.11.3-.142.455l-.227.117c-.186.042-.257.2-.344.342.181.126.229-.083.339-.138.195-.02.167-.2.236-.316.254-.073.257-.261.2-.472.38.2.433-.165.6-.341.316-.183.472-.527.735-.774a5.737 5.737 0 0 0 1.269-1.277.738.738 0 0 0 .4-.336 2.047 2.047 0 0 1 .312-.426 13.063 13.063 0 0 0 1.885-1.787 13.305 13.305 0 0 0 1.833-1.867c.816-.972 1.743-1.838 2.575-2.8a8.715 8.715 0 0 1 1.15-1.171 10.5 10.5 0 0 0 1.844-1.7 19.161 19.161 0 0 1 1.817-1.894c1.063-1.022 2.009-2.149 3.033-3.208h-.733c-1.081 1.249-2.4 2.273-3.5 3.528-1.231 1.419-2.631 2.686-3.931 4.044z" />
        <path d="M10.045 85.249h-.763v.788a4.444 4.444 0 0 0 .763-.788z" />
        <path d="M54.33 91.991a19.026 19.026 0 0 0-1.588 1.574c-.7.658-1.283 1.418-2.021 2.044a3.316 3.316 0 0 0-.946 1.253c.1-.06.211.128.33-.048a5.789 5.789 0 0 1 1.182-1.288c.967-.776 1.62-1.867 2.621-2.609a1.917 1.917 0 0 0 .806-.923 3.753 3.753 0 0 0 1.231-1.031c.352-.532.884-.864 1.25-1.37a17.03 17.03 0 0 1 1.929-2.083 23.216 23.216 0 0 1 1.643-1.663c.243-.2.495-.392.733-.6h-1.022a11.71 11.71 0 0 0-1.049 1.079c-.566.685-1.191 1.318-1.8 1.95-1.037 1.079-1.974 2.245-3.014 3.319a1.6 1.6 0 0 1-.285.396z" />
        <path d="M16.717 107.72c.416-.547 1.055-1.014 1.535-1.565.735-.843 1.591-1.564 2.332-2.4a.491.491 0 0 0 .1-.452c.166.016.261-.1.373-.2 1.059-.893 1.981-1.933 2.944-2.918 1.261-1.29 2.536-2.573 3.751-3.909a6.189 6.189 0 0 0 1.466-1.715 4.2 4.2 0 0 0 1.171-1.032 5.425 5.425 0 0 1 .813-.976c.981-.8 1.795-1.779 2.727-2.635A12.719 12.719 0 0 0 36 87.571c.32-.082.425-.358.555-.613-.348-.019-.444.323-.676.47-.5.411-.844.968-1.313 1.417-1.436 1.376-2.829 2.8-4.221 4.215a6.041 6.041 0 0 0-1.288 1.485 2.584 2.584 0 0 0-.571.449 19.91 19.91 0 0 0-1.755 1.919c-1.512 1.656-3.278 3.058-4.759 4.748-.459.523-1.137.87-1.3 1.628a.82.82 0 0 0-.61.322c-.49.457-.808 1.164-1.325 1.465a7.5 7.5 0 0 0-1.891 1.779c-1 1.192-2.189 2.191-3.205 3.354-1.208 1.383-2.584 2.611-3.726 4.055a1.262 1.262 0 0 1-.63.536v.69a57.878 57.878 0 0 0 4.638-4.747c.927-1.005 1.953-1.916 2.794-3.023z" />
        <path d="M10.045 90.917c1.037-1.191 2.279-2.188 3.283-3.409.242-.3.554-.529.808-.8.458-.495.937-.974 1.411-1.455H15.1c-.669.756-1.409 1.446-2.112 2.17-.683.7-1.457 1.315-2.126 2.027a12.545 12.545 0 0 1-1.578 1.54v.575a6.427 6.427 0 0 0 .761-.648z" />
        <path d="M14.792 115.406h-.007l-.005.006z" />
        <path d="M188.494 100.989c-.1.037-.1.128-.12.21a17.429 17.429 0 0 0-2.1 2.132c-1.823 1.878-3.722 3.683-5.573 5.534-.272.272-.635.532-.591 1.006.519-.092.776-.561 1.077-.881 1.1-1.177 2.35-2.215 3.367-3.473.218-.269.49-.478.725-.724 1.132-1.181 2.332-2.3 3.37-3.568l.109-.116a4.3 4.3 0 0 0 1.189-1.22c.548-.852 1.541-1.258 2.057-2.138.11-.186.249-.444.552-.438v-.46c-1.345 1.389-2.786 2.681-4.062 4.136z" />
        <path d="M94.194 92.533c-.166.079-.394.051-.473.278-.289.117-.458.381-.691.566-.605.645-1.2 1.3-1.82 1.933a31.805 31.805 0 0 0-2.424 2.475 3.279 3.279 0 0 0-1.027 1.03 8.751 8.751 0 0 0-1.381 1.333c-.119.133-.186.233-.078.391a4.7 4.7 0 0 0 1.581-1.567l1.144-1.072c.574-.619 1.213-1.176 1.8-1.775a16.3 16.3 0 0 0 2.208-2.5 2.025 2.025 0 0 0 .7-.671.706.706 0 0 0 .461-.421z" />
        <path d="M94.738 91.916c-.3 0-.421.223-.547.441.375.091.458-.178.547-.441z" />
        <path d="M139.754 86.734c.234 0 .305-.161.341-.358.147-.258.548-.3.578-.662a2.4 2.4 0 0 0 .556-.465h-.483a.989.989 0 0 0-.1.3c-.337.181-.727.327-.564.841-.117.11-.387.068-.346.336-.22-.027-.272.149-.346.3.171-.043.403-.006.364-.292z" />
        <path d="M133.884 92.491l-.479.442c-.624.633-1.238 1.273-1.876 1.891-.175.17.037.214.045.319a9.455 9.455 0 0 0 1.968-2.07c.278-.05.335-.367.568-.471.7-.6 1.313-1.29 1.98-1.923 1.028-.977 1.934-2.083 2.891-3.134a.654.654 0 0 0 .419-.353c-.306-.078-.444.125-.574.342-.978.557-1.486 1.592-2.329 2.287a.472.472 0 0 0-.21.231 38.394 38.394 0 0 0-2.403 2.439z" />
        <path d="M118.1 114.905c-.118.095-.264.181-.1.357a.357.357 0 0 0 .251-.208.7.7 0 0 0 .31-.479.168.168 0 0 1-.074 0c-.057.195-.287.186-.387.33z" />
        <path d="M166.646 93.862l-.016.01h.015z" />
        <path d="M61.56 108.213h-.005v.005c-.075-.078-.121-.045-.155.04a.056.056 0 0 0-.043.029c-.015.019 0 .038.045.056v.357a.309.309 0 0 0 .158-.487z" />
        <path d="M61.265 108.825c-.3.013-.47.149-.441.471l.036-.008a.74.74 0 0 0 .405-.463z" />
        <path d="M47.815 98.767c-.811.844-1.617 1.693-2.433 2.531-.909.933-1.828 1.857-2.743 2.786a17.365 17.365 0 0 0-1.494 1.466c-.155.187-.171.288.006.43a6.293 6.293 0 0 0 1.59-1.769 33.417 33.417 0 0 0 2.9-2.743 13.564 13.564 0 0 0 2.175-2.45 2.3 2.3 0 0 0 .7-.664.672.672 0 0 0 .452-.448c-.174.073-.377.1-.464.3-.304.104-.469.365-.689.561z" />
        <path d="M49.081 97.7c.228.049.338-.071.394-.272-.325-.191-.332.079-.394.272z" />
        <path d="M15.479 114.669c-.114.137-.332.191-.335.417.2-.027.389-.065.456-.294.111-.229.437-.278.475-.568-.352-.057-.422.264-.596.445z" />
        <path d="M14.79 115.4c.2 0 .244-.086.118-.251-.065.074-.215.108-.118.251z" />
        <path d="M14.792 115.406l-.002-.004h-.005l.007.004z" />
        <path d="M37.686 85.928c-.513.053-.637.53-.914.839a1.762 1.762 0 0 0 .914-.839z" />
        <path d="M13.605 116.405h.41c.27-.318.507-.668.765-1-.267.016-.423.212-.6.375a7.058 7.058 0 0 0-.575.625z" />
        <path d="M26.635 109.519c.236-.183.234-.523.481-.685a13.367 13.367 0 0 0 2.147-2.126c1.876-1.945 3.78-3.865 5.6-5.869 1.609-1.773 3.336-3.441 5.033-5.127 1.54-1.528 3.047-3.086 4.571-4.63 1.427-1.446 2.71-3.038 4.149-4.474.453-.454.9-.905 1.356-1.359H49.1c-1.274 1.334-2.559 2.653-3.83 3.984-1.627 1.7-3.313 3.345-4.875 5.109-1.352 1.528-2.877 2.9-4.277 4.389-1.015 1.084-2.085 2.11-3.015 3.276a28.811 28.811 0 0 1-3.159 3.139c-.605.556-1.109 1.2-1.663 1.786q-2.172 2.3-4.337 4.614a328.154 328.154 0 0 1-4.652 4.859h.631a24.119 24.119 0 0 0 2.353-2.536.276.276 0 0 0 .335-.234 7.461 7.461 0 0 1 1.258-1.3 27.644 27.644 0 0 1 2.766-2.816z" />
        <path d="M33.341 108.463c1.328-1.5 2.849-2.813 4.178-4.323 1.134-1.288 2.371-2.511 3.606-3.721.728-.714 1.331-1.583 2.075-2.254 1.412-1.276 2.612-2.74 3.977-4.052 1.215-1.169 2.328-2.445 3.476-3.679 1.122-1.2 2.291-2.369 3.376-3.609a8.061 8.061 0 0 1 1.185-1.255c.1-.108.192-.215.293-.321h-.552a6.763 6.763 0 0 0-.919 1.146c-.311.036-.485.27-.682.472a19.6 19.6 0 0 1-1.964 1.977 5.506 5.506 0 0 0-1.29 1.347 25.779 25.779 0 0 1-2.7 2.909 30.47 30.47 0 0 1-2.1 2.181c-.868.818-1.617 1.757-2.447 2.619-.969 1-1.926 2.027-2.966 2.953-.928.827-1.544 1.922-2.562 2.685-.8.6-1.3 1.56-2.13 2.192-.321.25-.433.722-.788.967a11.559 11.559 0 0 0-1.533 1.365c-.71.708-1.351 1.5-2.068 2.183-.793.754-1.6 1.487-2.335 2.3q-.916 1.022-1.876 2c-.614.625-1.244 1.238-1.864 1.858h.934a14.342 14.342 0 0 0 1.2-1.31c.9-1.1 2.032-1.964 2.962-3.036 1.097-1.257 2.402-2.341 3.514-3.594z" />
        <path d="M37.428 109.867c1.294-1.2 2.5-2.493 3.673-3.813-.376-.212-.555.134-.741.31-.986.933-1.786 2.043-2.8 2.958a1.9 1.9 0 0 0-.541.652c-.733.653-1.516 1.257-2.187 1.968-1.19 1.26-2.348 2.55-3.592 3.759-.225.22-.4.477-.623.7h.583c.315-.33.632-.657.958-.975.3-.3.459-.67.764-.962a51.567 51.567 0 0 0 4.191-4.289c.108-.1.208-.208.315-.308z" />
        <path d="M44.79 108.44a16.019 16.019 0 0 1 1.865-2.018 10.708 10.708 0 0 0 1.595-1.785c.95-1.068 2.052-1.982 3.06-2.99.839-.838 1.652-1.7 2.488-2.545 1.168-1.175 2.259-2.428 3.436-3.592a33.361 33.361 0 0 1 2.749-2.765c.255-.2.271-.557.525-.728a14.767 14.767 0 0 0 2.186-2.172c1.475-1.531 2.968-3.042 4.421-4.6h-.7c-.29.33-.584.655-.886.976a4.217 4.217 0 0 1-1.372 1.194.408.408 0 0 0-.243.3 10.06 10.06 0 0 1-1.614 1.777c-1.1 1.052-2.11 2.19-3.15 3.285-1.565 1.652-3.145 3.288-4.719 4.93-.674.7-1.4 1.368-2.009 2.108a19.892 19.892 0 0 1-2.282 2.263c-1.029.9-1.934 1.918-2.884 2.884-.763.777-1.549 1.544-2.252 2.39-1.091 1.308-2.493 2.313-3.567 3.649-.839 1.042-1.872 1.9-2.806 2.857-.821.838-1.624 1.694-2.428 2.547h.708c.469-.5.952-.98 1.4-1.491a12.6 12.6 0 0 1 1.657-1.556c.861-.678 1.489-1.553 2.272-2.286.885-.827 1.682-1.772 2.55-2.632z" />
        <path d="M52.955 105.9c.905-.87 1.739-1.807 2.621-2.694a22.239 22.239 0 0 0 1.869-1.931 38.8 38.8 0 0 1 3.107-3.322c1.679-1.693 3.3-3.438 5.028-5.088 1.074-1.026 2.046-2.158 3.1-3.2a89.05 89.05 0 0 0 2.767-2.866c.479-.52.962-1.034 1.448-1.547h-.775c-.485.555-.964 1.118-1.505 1.631-.939.889-1.75 1.977-2.712 2.816-1.514 1.322-2.7 2.971-4.318 4.169-.014.009-.016.035-.028.048a27.3 27.3 0 0 1-1.862 2c-1.625 1.709-3.29 3.384-4.926 5.084-1.525 1.583-3.1 3.124-4.559 4.778-1.046 1.187-2.229 2.257-3.372 3.354-.231.222-.243.55-.5.745a12.837 12.837 0 0 0-2.293 2.24 56.324 56.324 0 0 1-4.062 4.284h.82c1.236-1.192 2.374-2.476 3.538-3.734 1.608-1.736 3.344-3.34 4.946-5.079a39.016 39.016 0 0 1 1.668-1.688z" />
        <path d="M59.168 105.377c1.134-1.146 2.224-2.337 3.315-3.517 1.127-1.218 2.334-2.364 3.4-3.642a10.65 10.65 0 0 1 1.146-1.2c.964-1.134 2.16-2.036 3.092-3.2a8.972 8.972 0 0 1 .772-.836c1.267-1.23 2.509-2.486 3.656-3.83.786-.55 1.215-1.451 1.939-2.03.7-.566 1.273-1.256 1.912-1.879h-.449a11.286 11.286 0 0 0-.82.885c-.474.581-1.113 1.028-1.622 1.587-.407.445-.973.772-1.143 1.409a6.354 6.354 0 0 0-2.025 1.888 31.839 31.839 0 0 1-2.229 2.352 37.414 37.414 0 0 0-4.334 4.539.918.918 0 0 0-.66.472c-.678 1.044-1.794 1.654-2.564 2.632-.357.453-.9.857-1.248 1.358-.52.747-1.356 1.141-1.906 1.84-.142.1-.037.236-.064.353-.252-.046-.39.126-.525.284-.912 1.07-1.961 2.013-2.877 3.072a52.089 52.089 0 0 1-4 4.126c-1.008.934-1.8 2.057-2.82 2.992-.468.428-.9.9-1.334 1.367h.8c.281-.293.557-.59.823-.9a40.582 40.582 0 0 1 2.907-2.978c.811-.765 1.519-1.64 2.291-2.447a404.24 404.24 0 0 1 4.567-4.697z" />
        <path d="M60.86 109.288l-.035.008c-.37.036-.505.4-.785.562l-4.617 4.725a3.393 3.393 0 0 0-1.032 1.027c-.3.261-.613.516-.9.8h.53c.166-.215.321-.443.482-.663l1.151-1.053c.55-.535 1.081-1.088 1.64-1.616 1.016-.958 1.9-2.055 2.841-3.094.238-.241.587-.358.725-.696z" />
        <path d="M67.568 108.435c.651-.708 1.416-1.319 2.053-2.05a6.252 6.252 0 0 1 1.338-1.466c.882-.493 1.313-1.373 1.995-2.021.891-.845 1.705-1.814 2.58-2.687 1.551-1.544 3.015-3.166 4.517-4.754 1.661-1.757 3.377-3.466 5.093-5.172 1.551-1.542 3.1-3.091 4.6-4.676.115-.119.227-.238.339-.36h-.953c-1.193 1.221-2.4 2.431-3.535 3.712-1.406 1.589-2.921 3.088-4.451 4.561-1.555 1.493-2.843 3.227-4.375 4.735-.3.3-.743.486-.963.825-.446.694-1.34.994-1.578 1.848a20.468 20.468 0 0 0-3.189 3.217q-2.433 2.511-4.843 5.056c-.682.717-1.436 1.374-2.05 2.139a20.8 20.8 0 0 1-2.243 2.211c-.991.912-1.923 1.885-2.851 2.852h.707c.054-.058.107-.119.163-.176.866-.9 1.743-1.794 2.684-2.63 1.212-1.079 2.271-2.337 3.425-3.487.534-.531 1.029-1.12 1.537-1.677z" />
        <path d="M75.252 106.5c2.6-2.729 5.255-5.414 7.876-8.126 1.5-1.549 2.971-3.118 4.46-4.673 1.622-1.693 3.237-3.389 4.878-5.061a155.69 155.69 0 0 0 3.214-3.393h-.708c-.735.862-1.6 1.59-2.337 2.436a31.138 31.138 0 0 1-2.13 2.229c-.855.8-1.592 1.72-2.406 2.563-.909.937-1.816 1.876-2.781 2.754-1.017.927-1.686 2.181-2.847 2.964-.429.289-.573.849-1.044 1.1v.007c.085.236-.138.3-.254.385A3.7 3.7 0 0 0 80 100.9a1.188 1.188 0 0 1-.394.41 9.186 9.186 0 0 0-1.441 1.292c-.715.733-1.386 1.526-2.119 2.222-.793.754-1.606 1.487-2.339 2.3a49.533 49.533 0 0 1-1.876 2.01c-1.134 1.124-2.291 2.235-3.361 3.411-1.2 1.323-2.5 2.551-3.72 3.855h.924c.785-.805 1.573-1.608 2.381-2.392 1.215-1.177 2.305-2.478 3.46-3.715 1.215-1.293 2.511-2.506 3.737-3.793z" />
        <path d="M82.766 110.4a22.323 22.323 0 0 1 1.684-1.7 10.076 10.076 0 0 0 1.358-1.274c.706-.861 1.535-1.6 2.3-2.4.552-.582 1.1-1.166 1.682-1.718.531-.5.884-1.235 1.427-1.666A17.16 17.16 0 0 0 92.99 99.8c.843-.9 1.654-1.824 2.578-2.641.538-.477 1-1.031 1.493-1.54.976-1 2.009-1.954 2.967-2.98a84.686 84.686 0 0 1 2.513-2.61c.884-.868 1.723-1.78 2.582-2.666.538-.555 1.072-1.157 1.606-1.716l.378-.4h-.72c-1.244 1.327-2.494 2.646-3.738 3.975-1.929 2.062-3.927 4.062-5.874 6.1-.582.61-1.253 1.116-1.856 1.7-.836.8-1.647 1.643-2.421 2.5-.738.815-1.542 1.567-2.257 2.407-1.125 1.331-2.554 2.371-3.654 3.735-.831 1.03-1.851 1.883-2.772 2.824-1.154 1.18-2.249 2.412-3.418 3.574-.465.463-.87.978-1.294 1.471-.291.339-.763.547-.873 1.037-.622.6-1.253 1.2-1.84 1.833h.465q.229-.21.463-.412a8.251 8.251 0 0 0 1.217-1.212c.284-.252.584-.49.848-.763a19.3 19.3 0 0 0 1.528-1.647 24.525 24.525 0 0 1 1.855-1.969z" />
        <path d="M77.767 109.4a41.309 41.309 0 0 0 3.667-3.6c1.345-1.408 2.726-2.781 4.055-4.2.3-.319.726-.558.768-1.066a1.652 1.652 0 0 0-.688.458c-.608.57-1.13 1.215-1.687 1.831-1.606 1.776-3.463 3.3-5.08 5.072a6.3 6.3 0 0 0-1.176 1.5.873.873 0 0 0-.641.364 6.134 6.134 0 0 1-1.235 1.329 7.49 7.49 0 0 0-1.883 1.828c-.844 1.129-1.94 1.989-2.858 3.03l-.406.459h.778c1.006-1.059 2.018-2.113 3.007-3.186 1.066-1.155 2.142-2.3 3.242-3.424.107-.109.223-.215.137-.395z" />
        <path d="M99.13 105.441c1.356-1.42 2.721-2.831 4.075-4.254.63-.66 1.189-1.393 1.87-1.993 1.031-.91 1.812-2.046 2.836-2.96.834-.744 1.429-1.716 2.332-2.421a2.651 2.651 0 0 0 .96-1.217 128.849 128.849 0 0 0 4.075-4.091c.862-.914 1.771-1.783 2.612-2.713.169-.188.35-.366.536-.543h-.612c-.107.124-.208.25-.3.376a20.322 20.322 0 0 1-2.071 2.252 38.317 38.317 0 0 0-4.486 4.708.354.354 0 0 0-.131-.026c-.208 0-.3.218-.416.346-.424.461-.745 1.089-1.26 1.38a6.936 6.936 0 0 0-1.854 1.768c-.983 1.191-2.139 2.19-3.175 3.313-.582.627-1.141 1.276-1.741 1.887-.816.837-1.567 1.735-2.378 2.575-.946.981-1.9 1.959-2.9 2.88s-1.789 2.018-2.774 2.957a38.99 38.99 0 0 0-2.577 2.713c-.715.829-1.615 1.5-2.4 2.284-.456.453-.788 1.031-1.276 1.427-.127.1-.248.21-.372.316h.88c.213-.222.426-.447.635-.673 1.854-2 3.842-3.867 5.7-5.865 1.382-1.491 2.803-2.953 4.212-4.426z" />
        <path d="M91.92 106.843c1.778-1.876 3.661-3.658 5.483-5.493 1.356-1.366 2.7-2.74 4.025-4.138 1.583-1.665 3.079-3.418 4.716-5.026 1.556-1.528 3.07-3.1 4.582-4.662.738-.765 1.485-1.519 2.234-2.275h-.846c-1.085 1.091-2.086 2.261-3.28 3.244a31.64 31.64 0 0 0-2.657 2.8c-1.375 1.45-2.825 2.831-4.179 4.293-1.505 1.624-3.122 3.138-4.582 4.809-.964 1.1-2.048 2.107-3.118 3.115-.313.3-.439.71-.765.969a14.3 14.3 0 0 0-2.2 2.167 55.644 55.644 0 0 1-4.164 4.4c-.4.394-.736.927-1.116 1.239-1.221 1.006-2.069 2.348-3.271 3.361a6.692 6.692 0 0 0-.745.76h.753c.251-.263.5-.525.757-.783.524-.536 1.051-1.132 1.576-1.668.854-.873 1.67-1.789 2.561-2.632 1.494-1.412 2.821-2.989 4.236-4.48z" />
        <path d="M117.812 103.76c1.773-1.842 3.656-3.586 5.379-5.473 1.544-1.7 3.257-3.214 4.769-4.944.9-1.036 1.92-2.005 2.912-2.978 1.482-1.45 2.877-2.987 4.309-4.49l.6-.626h-.774c-.575.623-1.136 1.258-1.725 1.87-.969 1-1.943 2.011-2.965 2.964-.978.912-1.7 2.048-2.765 2.893-.669.532-1.095 1.352-1.83 1.856-.147.1-.222.305-.339.454a2.934 2.934 0 0 1-.522.6 11.106 11.106 0 0 0-1.528 1.377c-.692.7-1.325 1.478-2.037 2.137-.8.749-1.592 1.5-2.344 2.3-.639.68-1.253 1.388-1.915 2.048-1.1 1.1-2.215 2.2-3.271 3.337-1.5 1.616-3.093 3.132-4.566 4.77-.932 1.033-1.947 1.993-2.95 2.96-.335.323-.509.783-.843 1.051-.216.173-.426.352-.632.534h.773c1.077-1.1 2.168-2.182 3.254-3.269 1.534-1.535 3.046-3.093 4.577-4.632s2.93-3.182 4.433-4.739z" />
        <path d="M107.015 108.914a30.781 30.781 0 0 0 2.366-2.314c1.107-1.2 2.33-2.284 3.386-3.541.681-.811 1.593-1.446 2.264-2.287.611-.765 1.468-1.3 2.02-2.08a13.728 13.728 0 0 1 1.5-1.6c.841-.859 1.65-1.761 2.529-2.591 1.5-1.411 2.832-2.987 4.241-4.49 1.521-1.624 3.109-3.191 4.685-4.765h-.8c-.475.465-.96.919-1.444 1.375-.339.321-.488.774-.84 1.051a14.1 14.1 0 0 0-2.168 2.124 56.033 56.033 0 0 1-4.29 4.52c-.378.369-.692.873-1.052 1.175a45.618 45.618 0 0 0-3.2 3.317 208.21 208.21 0 0 0-3.514 3.7c-.866.937-1.741 1.874-2.671 2.749a33.634 33.634 0 0 1-2.444 2.451 16.83 16.83 0 0 0-1.386 1.31 53.744 53.744 0 0 0-1.941 2c-.944 1.017-1.913 2.009-2.847 3.033-.751.822-1.628 1.52-2.379 2.348h.914a16.156 16.156 0 0 1 1.746-1.791c.566-.472.834-1.178 1.423-1.6a10.459 10.459 0 0 0 1.734-1.817 23.2 23.2 0 0 1 2.168-2.277z" />
        <path d="M99.726 110.35l1.02-.954c.52-.259.651-.9 1.116-1.184a15.718 15.718 0 0 0 2.1-2.05l1.518-1.711a.923.923 0 0 0 .564-.529c-.335.067-.536.334-.787.526a4.909 4.909 0 0 0-1.432 1.6c-.075.013-.186 0-.22.043-.891 1.168-2.147 1.988-3.02 3.173a2.778 2.778 0 0 0-.968.944 8.332 8.332 0 0 0-1.744 1.837 14.287 14.287 0 0 0-2.17 2.234c-.674.746-1.4 1.441-2.13 2.131h.479c.726-.745 1.461-1.483 2.162-2.251a11.126 11.126 0 0 0 1.886-2.115 5.3 5.3 0 0 0 1.626-1.689z" />
        <path d="M120.355 106.9c.808-.894 1.7-1.714 2.552-2.564.1-.1.185-.19.088-.336a60.111 60.111 0 0 0 4.682-4.708c.075-.083.144-.173.226-.248 1.291-1.187 2.462-2.49 3.658-3.769-.153-.187-.289-.11-.428.021a11.8 11.8 0 0 0-.9.855 46.22 46.22 0 0 1-3.345 3.524 29.027 29.027 0 0 0-3.854 4.054c-.084.117-.528-.039-.27.33-.29-.11-.4.137-.536.292a6.051 6.051 0 0 1-1.184 1.306 7.156 7.156 0 0 0-1.893 1.785c-1.014 1.24-2.212 2.28-3.288 3.444-.567.614-1.111 1.249-1.691 1.852-.714.741-1.4 1.5-2.087 2.273-.426.481-.875.943-1.333 1.4h.669c.752-.784 1.51-1.564 2.262-2.348 1.3-1.358 2.59-2.732 3.891-4.092.953-1.004 1.855-2.049 2.781-3.071zm2.407-2.841z" />
        <path d="M117.315 115.778a2.136 2.136 0 0 0-.821.627h.332a1.362 1.362 0 0 0 .486-.569.928.928 0 0 0 .574-.457.5.5 0 0 0-.571.399z" />
        <path d="M130.37 108.534c.892-.917 1.746-1.876 2.683-2.754 1.459-1.361 2.726-2.909 4.1-4.353 1.789-1.878 3.663-3.676 5.491-5.518a319.443 319.443 0 0 0 4.231-4.323c1.43-1.5 2.807-3.052 4.243-4.545.582-.6 1.175-1.2 1.768-1.792h-.882c-.513.566-1.024 1.137-1.564 1.677-1.116 1.114-2.257 2.211-3.311 3.375-1.452 1.6-3.069 3.044-4.483 4.687a39.98 39.98 0 0 1-3.159 3.152c-.307.286-.392.7-.712.942a12.3 12.3 0 0 0-2.175 2.118 56.51 56.51 0 0 1-4.2 4.437c-.408.4-.747.928-1.141 1.27-1.237 1.067-2.208 2.371-3.377 3.493-.776.749-1.475 1.6-2.236 2.383-1.172 1.207-2.352 2.41-3.517 3.626h.685c.677-.682 1.355-1.364 2-2.078.447-.494.928-.953 1.388-1.427.866-.893 1.728-1.805 2.6-2.7.512-.541 1.044-1.132 1.568-1.67z" />
        <path d="M135.681 109.031c1.289-1.542 2.863-2.8 4.178-4.328.935-1.088 2-2.1 3.026-3.113.88-.866 1.65-1.844 2.543-2.7 1.861-1.776 3.51-3.75 5.352-5.542a8.549 8.549 0 0 0 1.088-1.182A3.865 3.865 0 0 1 153.032 91c.043-.025.062-.1.1-.137a24.926 24.926 0 0 1 2.025-2.165c.454-.392.736-.921 1.215-1.269.119-.087-.062-.149-.051-.234a15.4 15.4 0 0 0 2.131-1.943h-.626l-.192.209c-.493.536-1.164.937-1.32 1.727-.117 0-.144-.229-.385 0a17.289 17.289 0 0 1-2.052 2.1 1.679 1.679 0 0 0-.781.887c-.09.275-.557.341-.786.655a5.491 5.491 0 0 1-1.185 1.429 11.443 11.443 0 0 0-1.841 1.792c-.974 1.056-2.012 2.055-2.956 3.136a56.679 56.679 0 0 1-3.915 4.034c-1.111 1.045-2.029 2.264-3.147 3.313-1.095 1.028-2.023 2.254-3.171 3.235-1.281 1.092-2.266 2.465-3.587 3.532a39.6 39.6 0 0 0-2.963 3.15c-.638.645-1.268 1.3-1.9 1.954h.864l.046-.05c1.5-1.62 3.12-3.111 4.607-4.738.812-.889 1.747-1.661 2.519-2.586z" />
        <path d="M139.72 110.479c1.2-1.063 2.222-2.3 3.358-3.421.114-.114.279-.217.229-.428a6.387 6.387 0 0 0 1.679-1.652c.671-.785 1.443-1.484 2.183-2.2a20.636 20.636 0 0 0 2.708-2.914 3.257 3.257 0 0 0 .917-.932c.236-.087.467-.181.526-.47a.745.745 0 0 0 .511-.453.448.448 0 0 0 .213-.47c.3.014.406-.192.479-.43a21.922 21.922 0 0 0 2.048-1.984c.4-.158.513-.585.8-.862a9.4 9.4 0 0 0 1.748-1.693c.319-.02.259-.446.467-.494.717-.163.876-.9 1.361-1.3.733-.612 1.267-1.466 1.968-2.149.5-.488.932-1.049 1.439-1.53.662-.632 1.443-1.152 2.034-1.84h-.93c-.357.351-.713.7-1.061 1.056-.96.985-1.862 2.028-2.861 2.979s-1.727 2.112-2.79 2.985c-.147.121.176.075.13.206a12.31 12.31 0 0 0-2.529 2.5c-.378.126-.469.534-.76.77-.408.328-.958.577-1.086 1.18-.181.137-.362.277-.543.415-.252.178-.094.437-.129.657-.4-.128-.455.218-.607.435-.121.184-.426.206-.43.491a2.14 2.14 0 0 0-1.022.81q-.684.729-1.37 1.457c-.126-.011-.181.049-.169.172a7.434 7.434 0 0 1-.669.692c-.967.777-1.719 1.769-2.63 2.6a10.932 10.932 0 0 0-1.842 1.981c-.227.078-.342.289-.513.431a18.7 18.7 0 0 0-1.76 1.931c-1.432 1.576-3.134 2.88-4.515 4.506a3.153 3.153 0 0 1-.568.552 3.54 3.54 0 0 0-1 1.21 3.329 3.329 0 0 0-.987.827c-.082.1-.159.2-.236.309h.591a4.652 4.652 0 0 1 .735-.788c.1-.078.012-.172-.039-.25a3.028 3.028 0 0 0 1.187-1c1.054-1.144 2.261-2.133 3.246-3.338a4.61 4.61 0 0 1 .489-.554z" />
        <path d="M148.679 107.359c.612-.575 1.068-1.311 1.659-1.911 1.335-1.359 2.74-2.651 4.061-4.023.713-.742 1.464-1.441 2.17-2.19.987-1.049 1.943-2.135 2.98-3.134.88-.847 1.663-1.782 2.561-2.618.722-.674 1.366-1.462 2.062-2.181 1.121-1.153 2.222-2.319 3.372-3.446.85-.831 1.634-1.732 2.44-2.607h-.733a48.348 48.348 0 0 1-3.67 3.728c-.609.563-1.09 1.234-1.681 1.816-1.478 1.455-2.825 3.04-4.257 4.541-1.832 1.917-3.7 3.8-5.514 5.738-.664.711-1.48 1.279-2.153 1.98-.9.941-1.787 1.906-2.7 2.833-1.331 1.354-2.554 2.816-3.988 4.071-.885.772-1.563 1.753-2.4 2.566-1 .967-2 1.929-2.939 2.946q-.436.471-.878.937h.8c.207-.22.406-.446.6-.671.63-.74 1.42-1.285 2.071-1.989.747-.806 1.464-1.644 2.27-2.391 1.365-1.26 2.518-2.719 3.867-3.995z" />
        <path d="M154.053 107.714c1.636-1.634 3.272-3.272 4.857-4.949 1.361-1.436 2.71-2.886 4.069-4.325 1.661-1.766 3.464-3.4 5.092-5.191 1.647-1.81 3.471-3.441 5.093-5.278.832-.942 1.739-1.833 2.641-2.722h-.763l-.5.516c-.39.4-.646.992-1.1 1.262-1.061.632-1.514 1.837-2.536 2.492-.316.2-.447.688-.756.915-1.072.79-1.9 1.825-2.884 2.7-.245.22-.2.673-.617.733-.009.046-.006.11-.034.128a12.352 12.352 0 0 0-2.5 2.392q-.886 1.01-1.851 1.949a94.21 94.21 0 0 0-3.065 3.132c-1.567 1.677-3.23 3.258-4.758 4.971-.926 1.038-1.947 1.993-2.955 2.958-.348.334-.532.8-.88 1.1a24.067 24.067 0 0 0-2.428 2.415c-.862.959-1.73 1.912-2.589 2.877a6.426 6.426 0 0 1-.8.616h.908c1.1-1.135 2.14-2.34 3.229-3.489 1.674-1.768 3.405-3.482 5.127-5.202z" />
        <path d="M163.21 109.84c.264-.039.351-.264.472-.452l.262-.563c.417.259.348-.266.556-.344a10.541 10.541 0 0 0 .885-.909c.323-.33.827-.525.948-1.043a.814.814 0 0 0 .479-.337 4.912 4.912 0 0 1 .35-.465 10.177 10.177 0 0 0 1.59-1.5c.076-.076.149-.151.222-.227a6.305 6.305 0 0 0 1.061-.955c.323-.348.63-.715.965-1.049.593-.6 1.072-1.311 1.688-1.9.192-.181.4-.339.579-.541a14.2 14.2 0 0 1 1.583-1.642 8.007 8.007 0 0 0 1.432-1.311 17.913 17.913 0 0 1 1.964-2.094c1.351-1.335 2.586-2.776 3.924-4.121.607-.607 1.161-1.269 1.727-1.92 1.008-1.161 2.229-2.1 3.278-3.221h-.783a1.449 1.449 0 0 0-.16.172 12.065 12.065 0 0 1-1.483 1.439c-.664.6-1.228 1.3-1.86 1.933-1.015 1.022-1.952 2.124-2.983 3.136a30.182 30.182 0 0 0-2.389 2.383c-.992 1.228-2.16 2.275-3.253 3.393-1.145 1.175-2.266 2.373-3.386 3.569-.371.4-.733.822-1.077 1.244a7.425 7.425 0 0 1-1.056 1.132c-.162.1-.243.288-.371.423a22.366 22.366 0 0 0-2.2 2.316c-.385.124-.5.53-.767.777-.36.335-.848.568-1.045 1.068-.11.281-.453.318-.6.563-.16.179-.018.4-.085.591a.453.453 0 0 0-.524.364c-.152.2-.459.266-.511.557-.188 0-.291.144-.429.238a15.851 15.851 0 0 0-1.7 1.769c-1.155 1.095-2.266 2.238-3.375 3.384-.234.242-.481.473-.728.7h.382c.452-.493 1.047-.85 1.444-1.372.705-.93 1.709-1.535 2.43-2.438.626-.783 1.311-1.518 1.97-2.274a.83.83 0 0 0 .574-.473z" />
        <path d="M161.138 106.326c.852-.942 1.805-1.791 2.6-2.78a4.542 4.542 0 0 1 1.116-1.118c.045-.028.068-.092.108-.132.793-.79 1.443-1.707 2.311-2.443a2.122 2.122 0 0 0 .953-1.27h.052l.016-.05a33 33 0 0 0 3.359-3.277c1.227-1.242 2.467-2.48 3.634-3.782a6.7 6.7 0 0 0 1.512-1.748c.972-.554 1.452-1.593 2.265-2.3a2.5 2.5 0 0 0 .893-.785 2.89 2.89 0 0 1 .726-.787 3.756 3.756 0 0 0 .568-.6h-.334l-2.045 2.073a34.67 34.67 0 0 0-2.1 2.083c-.129.138-.066.213.007.308-.338-.01-.537.238-.74.445-.568.579-1.1 1.195-1.639 1.8-1.561 1.74-3.389 3.217-4.959 4.951-.412.456-1 .769-1.178 1.417a.548.548 0 0 0-.548.374 2.553 2.553 0 0 0-.254.22 7.89 7.89 0 0 1-1.267 1.378 8.447 8.447 0 0 0-1.866 1.78c-.958 1.212-2.123 2.2-3.16 3.314-.582.627-1.134 1.279-1.737 1.888-.861.869-1.651 1.807-2.5 2.689-.964 1-1.919 2.024-2.952 2.954-.938.846-1.569 1.957-2.593 2.738a5.263 5.263 0 0 0-.763.745h.867c.2-.208.4-.415.6-.629 1.412-1.548 2.878-3.047 4.331-4.556 1.57-1.639 3.197-3.221 4.717-4.9z" />
        <path d="M191.628 91.723c-1 1.183-2.129 2.23-3.195 3.343-.156.163-.245.408-.423.528a14.844 14.844 0 0 0-2.7 2.874c-.162 0-.341-.029-.362.213-.848.782-1.528 1.727-2.411 2.479-.211.181-.306.506-.526.668a24.626 24.626 0 0 0-1.947 1.774 23.69 23.69 0 0 1-1.675 1.832 18.61 18.61 0 0 0-2.249 2.14c-.76.778-1.47 1.605-2.227 2.386-1.073 1.107-2.234 2.135-3.24 3.3-.957 1.105-2.02 2.106-3.042 3.147h.968q.868-.883 1.736-1.769c1.492-1.521 2.828-3.2 4.36-4.68 1.719-1.659 3.377-3.379 5.033-5.094 1.893-1.959 3.839-3.867 5.7-5.855 2.35-2.506 4.748-4.966 7.125-7.446v-.806a5.1 5.1 0 0 0-.925.966z" />
        <path d="M177.3 112.365a5.2 5.2 0 0 0-1.3 1.352 21.686 21.686 0 0 1-2.506 2.688h.756c.8-.848 1.59-1.7 2.411-2.526.041-.041.07-.092.11-.133.79-.816 1.468-1.728 2.34-2.481.393-.34.963-.709.984-1.381a1.641 1.641 0 0 0-.886.542 13.873 13.873 0 0 1-1.909 1.939z" />
        <path d="M192.042 85.249s-2.829 2.817-4.147 4.32c-1.016 1.16-2.155 2.214-3.281 3.272-.277.261-.322.645-.632.865a11.059 11.059 0 0 0-2.173 2.109 48.9 48.9 0 0 1-4.467 4.657c-.584.555-1.057 1.2-1.634 1.766-1.46 1.433-2.786 3-4.2 4.483-1.843 1.934-3.748 3.809-5.546 5.788a5.119 5.119 0 0 1-.789.815 16.459 16.459 0 0 0-2.25 2.092c-.307.314-.6.667-.9.989h.612a18.567 18.567 0 0 1 1.806-1.786 18.513 18.513 0 0 0 1.606-1.625c.71-.763 1.51-1.443 2.237-2.192 1.051-1.083 2.042-2.226 3.114-3.288a27 27 0 0 1 2.761-2.786c.253-.187.222-.591.525-.719.591-.252.828-.853 1.27-1.253.742-.671 1.412-1.422 2.11-2.14.68-.7 1.366-1.393 2.037-2.1.86-.909 1.7-1.838 2.563-2.746.659-.693 1.338-1.367 2.006-2.05.954-.975 1.9-1.957 2.861-2.926.842-.851 1.725-1.663 2.541-2.538a32.877 32.877 0 0 1 2.479-2.446v-.559z" />
        <path d="M188.924 106.224c-1.2 1.345-2.543 2.555-3.786 3.86-1.328 1.394-2.619 2.823-3.912 4.249a88.62 88.62 0 0 1-1.953 2.072h.563a18.772 18.772 0 0 0 1.982-1.926 17.713 17.713 0 0 0 1.388-1.47c.525-.688 1.188-1.253 1.752-1.893.891-1.011 1.91-1.875 2.845-2.831 1.08-1.1 2.14-2.225 3.216-3.331a10.332 10.332 0 0 1 1.534-1.429v-.92c-1.202 1.214-2.489 2.336-3.629 3.619z" />
        <path d="M188.266 112.962c-1.125 1.121-2.2 2.286-3.285 3.443h.706c.084-.084.167-.171.252-.254.6-.591 1.21-1.2 1.772-1.84 1.536-1.753 3.3-3.284 4.842-5.033v-.69c-1.013 1-2.03 2-3.036 3.016-.435.437-.828.937-1.251 1.358z" />
        <path d="M190.65 116.405h.824c.36-.343.721-.684 1.079-1.03v-1.035a23 23 0 0 0-1.903 2.065z" />
      </g>
    </chakra.svg>
  );
};

const LongArrowSvg: React.FC<BlockProps> = ({ color, ...rest }) => {
  const activeColor = color
    ? useToken("colors", color as string)
    : "currentColor";
  return (
    <chakra.svg
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
      width="193px"
      height="112px"
      viewBox="0 0 193 112"
      version="1.1"
      role="presentation"
      aria-hidden="true"
      {...rest}
    >
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g
          id="arrowlong"
          transform="translate(-0.304549, 0.179584)"
          fill={activeColor}
        >
          <path
            d="M151.124,1.421 L98.09,-39.569 C96.9102408,-40.4844787 95.2580157,-40.4766365 94.087,-39.55 L42.109,1.44 C41.4315105,1.97405839 40.9939829,2.75542438 40.892708,3.61213536 C40.791433,4.46884634 41.0347105,5.33069279 41.569,6.008 C42.681,7.419 44.802,7.663 46.213,6.548 L93,-30.289 L93,149.13 C93,150.928 94.202,152.383 96,152.383 C97.798,152.383 99,150.928 99,149.13 L99,-30.37 L146.969,6.567 C147.56,7.024 148.348,7.247 149.046,7.247 C150.018,7.247 151.022,6.812 151.664,5.983 C152.764,4.563 152.547,2.52 151.124,1.421 Z"
            id="Path"
            transform="translate(96.615790, 56.066335) rotate(90.000000) translate(-96.615790, -56.066335) "
          />
        </g>
      </g>
    </chakra.svg>
  );
};

const BrushSvg: React.FC<BlockProps> = ({ color, ...rest }) => {
  const activeColor = color ? useToken("colors", color as string) : "#000000";
  return (
    <chakra.svg
      width="219px"
      height="52px"
      viewBox="0 0 219 52"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g fill={activeColor} fillRule="nonzero">
          <path d="M42.4204073,51.6644969 C41.3323956,51.5901808 39.4992561,51.480452 38.3467642,51.4206586 C34.2436744,51.2077833 31.7067653,51.0527421 31.3635966,50.99389 C31.1720965,50.9610488 30.4132264,50.892999 29.67722,50.8426731 C28.9412135,50.7923472 28.1564139,50.71257 27.9332222,50.6653948 C27.7100306,50.6182196 27.1870871,50.5550122 26.771125,50.5249333 C25.3991535,50.4257274 24.1385414,50.2344881 23.1400174,49.97408 C22.7530116,49.8731539 22.3841324,49.8211057 22.3202917,49.8584184 C22.2564488,49.8957333 22.2398683,49.8716268 22.2834449,49.8048496 C22.337078,49.7226633 21.9496583,49.6683463 21.0843082,49.6367273 C20.3812065,49.6110388 19.7283632,49.5578979 19.6335449,49.5186412 C19.5387267,49.4793845 19.4315503,49.2635011 19.395378,49.0389028 C19.320583,48.5744989 19.1980897,48.503011 18.0858172,48.2746322 C17.6712545,48.1895124 17.0201281,48.0100444 16.6388688,47.8758142 C16.2576117,47.741584 15.8079741,47.6016513 15.6396726,47.5648498 C15.1591472,47.4597769 15.1676597,47.2017691 15.6678382,46.7110471 C16.193817,46.1950184 16.6084826,45.9801289 17.4523991,45.786237 C17.9995925,45.660522 18.7483688,45.1392977 18.7549739,44.8795171 C18.7571858,44.7922559 18.2556801,44.6226788 17.5414532,44.4691845 C17.3501633,44.4280759 16.723013,44.3533408 16.1477854,44.3031048 C15.5725556,44.2528711 14.8075799,44.1272878 14.447833,44.0240316 C14.0480156,43.9092739 13.2441038,43.822265 12.379805,43.8002078 C10.8448785,43.7610344 10.1885158,43.5787777 10.0916389,43.1648358 C10.0588218,43.0246157 9.77234787,42.8027403 9.36329091,42.6007235 C8.99245164,42.4175804 8.71705914,42.2247965 8.75131074,42.1723116 C8.78556015,42.1198245 8.74471884,42.0990047 8.66057028,42.1260469 C8.28259818,42.24749 7.7198295,41.9796746 7.52056797,41.5835355 C7.30339224,41.1517797 7.40566962,40.7536419 7.73162046,40.7619619 C7.82547291,40.7643534 7.90367562,40.7269376 7.90540791,40.6788079 C7.90715991,40.6306783 8.26236696,40.5851816 8.69480655,40.5777041 C9.12724395,40.5702442 9.49981332,40.5140425 9.52274043,40.4528515 C9.54566754,40.3916604 9.66180543,40.3440815 9.78082536,40.3471203 C9.89984529,40.3501482 10.0309584,40.30095 10.0721873,40.2377711 C10.1134185,40.1745922 10.1995709,40.1242378 10.2636415,40.1258724 C10.3277122,40.1274083 10.3534468,40.1697411 10.320829,40.2197247 C10.2882089,40.2697084 10.4151654,40.3124756 10.6029492,40.3147662 C10.8045934,40.3172236 10.9459711,40.2562805 10.9482684,40.1659014 C10.9504584,40.081736 11.0037536,40.04667 11.0668168,40.0879782 C11.1298778,40.1292842 11.1827444,40.1130808 11.1842972,40.051971 C11.1888743,39.8719215 10.8856453,39.7984238 10.3493888,39.8496054 C10.0734619,39.8759367 9.61332978,39.8317455 9.32687121,39.7512991 C9.04041264,39.6708987 8.72779452,39.5878326 8.63216379,39.56671 C8.53653087,39.5455809 8.36677302,39.4864699 8.25491877,39.4353409 C8.14306452,39.384212 7.94684709,39.3669752 7.8188832,39.3970343 C7.52129505,39.4669424 7.42378311,39.3055362 7.65388641,39.1239224 C7.75130199,39.0470348 7.8306435,39.0299669 7.83020112,39.0859931 C7.82976312,39.1420192 7.86924444,39.1363256 7.91794785,39.0733332 C8.06774385,38.8796057 8.53844055,38.6682159 8.5351884,38.7961359 C8.5334364,38.8608704 8.58771117,38.915251 8.65556175,38.9169821 C8.72341233,38.9187374 8.75437893,38.8779711 8.72437374,38.8264407 C8.64697695,38.6935203 9.58231719,38.6964297 9.81658368,38.8298415 C9.94170933,38.9010991 10.0596781,38.8944685 10.1470634,38.8112576 C10.3039835,38.6618552 10.7735436,38.6123279 10.6804379,38.755001 C10.571941,38.9212584 10.9466237,38.8660835 11.0970235,38.6936542 C11.2041123,38.5708815 11.3147598,38.5587153 11.5280746,38.6462618 C11.8967961,38.7975884 12.0220926,38.7973141 11.8028889,38.645823 C11.6741235,38.5567384 11.7331834,38.5318969 12.0385439,38.546696 C12.2626575,38.5575568 12.8406949,38.5170297 13.3230709,38.4566351 C13.8054425,38.3962383 14.340477,38.3433497 14.5120284,38.3391019 C15.0221057,38.3264859 14.8853862,37.9330346 14.2047386,37.4548079 C13.8158669,37.1815841 13.6319704,36.9782224 13.6763901,36.8705342 C13.7197806,36.7653428 13.7914965,36.7448039 13.8738581,36.8139858 C13.9449914,36.8737332 14.1091122,36.8829571 14.2385653,36.8344786 C14.3680228,36.7860024 14.6694062,36.7476365 14.9083067,36.7492184 C15.2445243,36.7514564 15.3901571,36.6833737 15.5528194,36.4479585 C15.8170429,36.0655588 15.8551313,35.8489624 15.7092598,35.5583306 C15.645925,35.4321484 15.6414793,35.3599386 15.6993829,35.3978635 C15.7572821,35.4357884 15.8789191,35.274437 15.9696902,35.0393026 C16.0604592,34.8041705 16.1938477,34.5746903 16.2661046,34.5293428 C16.3383614,34.4840019 16.1878383,34.4399401 15.9316083,34.4314336 C15.5875046,34.4200243 15.5121598,34.3875627 15.6433474,34.3072918 C15.7780433,34.2248773 15.72911,34.1958429 15.4408271,34.1871257 C15.2317544,34.1808506 14.9708794,34.1257789 14.8611035,34.0648402 C14.7513254,34.0039036 14.1799478,33.7475392 13.5913721,33.4951462 C12.4110038,32.9889799 11.724465,32.8629578 9.21495345,32.6918076 C7.29181809,32.5606491 7.0757724,32.5313053 6.77437365,32.3603394 C6.46755684,32.1862996 4.88165301,31.9047207 3.87439317,31.8454451 C3.3464214,31.8143767 2.87704746,31.707814 2.54088465,31.5427041 C2.25556707,31.4025652 1.76122713,31.2458522 1.44235218,31.1944511 C0.808217967,31.0922305 -0.00353619297,30.7809678 1.16070337e-05,30.6413927 C0.00132560703,30.5929603 0.306193317,30.4619269 0.677676447,30.3502103 C1.2485328,30.1785357 1.73187237,30.1554429 3.79963533,30.2010646 C5.45137713,30.2375063 6.39156384,30.2103895 6.69371814,30.1175948 C7.13005593,29.9835927 7.54801743,30.0145382 8.61330351,30.2597193 C8.88789447,30.322918 9.6688857,30.3984035 10.3488347,30.4274643 C11.0287853,30.4565251 11.6849005,30.5371316 11.8068725,30.60659 C11.9372849,30.6808601 12.2044517,30.700811 12.4554651,30.6550312 C12.6902222,30.6122157 12.9283168,30.5895419 12.9845648,30.6046417 C13.1923673,30.6604331 16.7394687,30.7145043 17.1346848,30.667904 C17.8046956,30.5889057 18.6455001,30.5406049 19.8041591,30.5145522 C20.4050578,30.5010366 20.9549033,30.4345776 21.0260389,30.3668481 C21.1524588,30.2464868 20.9390674,30.1797227 20.5556641,30.2196881 C20.4753108,30.2280695 20.4111044,30.1744744 20.4129834,30.1006037 C20.4149544,30.0267308 20.3408689,29.9931392 20.2485539,30.0259541 C20.1562388,30.0587668 20.0179644,30.0058123 19.941275,29.9082937 C19.8293068,29.7658992 19.7821999,29.7603131 19.7021248,29.879935 C19.6208517,30.0013451 19.6027995,30.0004522 19.604534,29.875108 C19.605848,29.7779009 19.5253567,29.7448996 19.3856982,29.7854157 C19.2385631,29.8280996 19.1401883,29.7801938 19.0912571,29.6420186 C19.0508407,29.5278928 19.0746131,29.417135 19.1440755,29.3958896 C19.3236906,29.3409561 19.6239812,29.040056 19.6272421,28.9117411 C19.6317973,28.7327909 19.1762225,28.3108844 19.0549666,28.3817514 C18.9930071,28.4179671 18.9740374,28.3706932 19.0128135,28.2766741 C19.066405,28.1467465 19.0201062,28.1206017 18.8197387,28.1676672 C18.6104163,28.216839 18.5721439,28.190839 18.6338012,28.0413554 C18.7486754,27.762857 18.5040305,27.6662314 18.3041207,27.911147 C18.1945638,28.0453706 18.1544189,28.0593053 18.1943864,27.9492365 C18.2648212,27.7552765 17.7279536,27.4287669 17.5294082,27.5448103 C17.4609992,27.5847932 17.4466241,27.557931 17.4959669,27.4823181 C17.5435666,27.4093821 17.5269971,27.3482854 17.4591465,27.3465543 C17.3912937,27.344799 17.3337755,27.4221846 17.3313271,27.5184702 C17.3250418,27.7655602 17.0945399,27.7316878 17.090898,27.4831365 C17.0883576,27.3095421 17.0728743,27.3135529 16.9882439,27.5097136 C16.9334304,27.6367779 16.9038764,27.7696368 16.9225702,27.8049529 C16.9412728,27.840269 16.8551532,27.8742204 16.7312146,27.880399 C16.4586866,27.8939804 16.4451064,27.8013678 16.6942736,27.6284118 C16.8390502,27.527918 16.7363545,27.5042371 16.2216979,27.519451 C15.8332642,27.5309261 15.5929051,27.4948179 15.63441,27.4312243 C15.673403,27.3714704 15.6002307,27.3480923 15.4699717,27.3786933 C15.333504,27.4107512 15.2367367,27.3763895 15.2387624,27.2966167 C15.2407334,27.2211509 15.1799565,27.1958179 15.103819,27.2403163 C15.0065633,27.2971608 14.9936379,27.2554555 15.0603628,27.1001181 C15.1125987,26.9785105 15.1691379,26.8077662 15.1860031,26.7206893 C15.2384733,26.4497627 15.5370295,26.3779215 15.8988875,26.5491507 C16.0889357,26.63908 16.1787958,26.7152523 16.0985739,26.7184206 C15.8123125,26.7297421 15.9525798,26.9577522 16.2504767,26.9653548 C16.4696213,26.9709497 16.5371127,26.9249418 16.4929031,26.8001023 C16.4592078,26.7049532 16.4851505,26.59583 16.5505418,26.5576068 C16.6265085,26.5132049 16.616533,26.4193657 16.5229149,26.2977274 C16.3990485,26.1367885 16.4047754,26.1188079 16.5599215,26.1814778 C16.6608696,26.2222528 16.8186766,26.2048866 16.9106062,26.1428859 C17.0426194,26.0538496 17.0342449,26.0429779 16.8707657,26.0911689 C16.6962731,26.1426073 16.6772354,26.1026002 16.7494857,25.8363251 C16.7966233,25.6626012 16.878284,25.4934081 16.9309535,25.4603387 C17.1023823,25.3527075 16.9225001,24.8913051 16.7350821,24.9579244 C16.6135283,25.0011305 16.5744478,24.9538873 16.6048603,24.8005377 C16.6366526,24.6402483 16.5855883,24.5867431 16.4146807,24.6012527 C16.2861803,24.6121573 16.2476385,24.5935514 16.3290342,24.5598962 C16.4104299,24.526241 16.4507391,24.4535639 16.418614,24.3983934 C16.3864889,24.343223 16.4674729,24.2268197 16.598575,24.1397208 C16.7296772,24.0526197 16.8032108,23.9457959 16.7619841,23.902331 C16.7207529,23.858866 16.7875173,23.8250638 16.9103434,23.827214 C17.0936661,23.8304174 17.1034138,23.810868 16.9647671,23.7179833 C16.8539356,23.6437396 16.7657618,23.6509801 16.708294,23.7390466 C16.6601272,23.8128581 16.5882579,23.839027 16.5485839,23.797201 C16.4758496,23.7205197 16.7045469,23.2313445 16.8618875,23.1270636 C16.9904974,23.0418231 17.1512609,22.5105455 17.0263543,22.5835517 C16.9673272,22.6180495 16.8603413,22.5465505 16.7886057,22.4246665 C16.6725335,22.2274549 16.6929596,22.2063082 16.9741491,22.2325824 C17.1732989,22.2511884 17.2807294,22.2078945 17.2647117,22.1154771 C17.2507395,22.0348311 17.278443,21.9760711 17.3263142,21.9848979 C17.5656352,22.0290408 17.7056989,21.9635713 17.7097131,21.8056756 C17.7121659,21.7093922 17.7696797,21.6320285 17.8375325,21.6337619 C17.9053831,21.6355171 17.9324887,21.5881181 17.8977662,21.5284871 C17.8630416,21.468856 17.9011607,21.3951477 17.9824754,21.3646915 C18.0716654,21.3312864 18.0495376,21.3035992 17.9266918,21.2949018 C17.8146974,21.2869811 17.7240905,21.2401855 17.7253432,21.1909303 C17.7266572,21.1416751 17.5441688,21.1053343 17.3199501,21.1101701 C17.0957313,21.1149971 16.9425386,21.0725941 16.9795255,21.0159185 C17.0165102,20.9592429 16.9357409,20.9100381 16.8000375,20.9065737 C16.6643363,20.903107 16.5870403,20.8485838 16.628267,20.7854049 C16.6694982,20.722226 16.6421078,20.6689732 16.5674004,20.6670687 C16.4893225,20.665094 16.4648405,20.5829472 16.5098187,20.473903 C16.5752428,20.3152876 16.558382,20.3076324 16.4069106,20.4271841 C16.2583147,20.544465 16.2265597,20.5385782 16.2302258,20.3944219 C16.2326786,20.2977634 16.3402339,20.1938862 16.4692271,20.1635858 C16.610401,20.1304221 16.7062595,20.0103372 16.7100329,19.8619222 C16.7153108,19.6542732 16.6654642,19.624789 16.3942217,19.6751237 C16.1299238,19.7241705 16.1085976,19.7129016 16.2753485,19.612309 C16.4641506,19.4984115 16.4613496,19.468857 16.2357884,19.1951791 C16.1022707,19.0331826 15.9151154,18.8986474 15.8198833,18.8962186 C15.4693388,18.8872667 15.7860237,18.7724322 16.2573774,18.7375703 C16.5412014,18.7165728 16.7146428,18.7463028 16.6737818,18.808909 C16.6352663,18.8679301 16.6561742,18.9175605 16.7202427,18.9191951 C16.7843133,18.920731 16.8646097,18.8794535 16.8986773,18.8272473 C16.9327471,18.7750432 17.1332745,18.7465441 17.3442919,18.7639192 C17.5553116,18.7812964 17.790038,18.7493284 17.8659061,18.6928854 C17.9506547,18.6298316 18.0318293,18.6383139 18.0764133,18.7148834 C18.1255438,18.799255 18.2200751,18.8036871 18.369109,18.7285965 C18.490181,18.6676007 18.7110074,18.6252635 18.8598376,18.6345138 C19.2733447,18.6602154 20.7039512,18.5688819 20.8040233,18.5103939 C20.8819785,18.4648314 22.1576776,18.3349301 22.5481174,18.3327975 C22.7526064,18.3317004 22.7443019,17.7827494 22.5373426,17.620709 C22.4431945,17.5469919 22.3582137,17.3407691 22.3485011,17.1624332 C22.3375292,16.9610199 22.2760712,16.8576562 22.1862615,16.8895824 C22.1016048,16.9196722 22.0684351,16.8761107 22.1062323,16.7844788 C22.1484051,16.6822407 22.0502428,16.5982179 21.823096,16.5421237 C21.4411446,16.4478019 21.1742909,16.1861563 21.285786,16.0153045 C21.3259594,15.9537448 21.2546639,15.9301627 21.1223463,15.9612464 C20.9551574,16.0005207 20.8891091,15.9589646 20.8927248,15.8167764 C20.8955061,15.7069949 20.7936536,15.5870307 20.6663686,15.5501875 C20.4079092,15.4753777 20.3698207,15.3317019 20.5764363,15.2109413 C20.6620981,15.1608743 20.6800758,15.1816194 20.6246404,15.2665659 C20.5760202,15.3410707 20.5796424,15.3956115 20.6326996,15.387772 C20.8822873,15.3508651 21.019274,15.4245384 21.0149794,15.5933716 C21.0088693,15.8339759 21.2909282,15.7477546 21.347255,15.4918049 C21.3710559,15.3836515 21.347036,15.3016451 21.2936043,15.3095657 C20.9709932,15.357522 20.7902788,15.2617082 20.7957713,15.0456251 C20.799122,14.9134574 20.8534778,14.8391171 20.9165389,14.8804231 C20.9796021,14.9217291 21.0339448,14.8473889 21.0373064,14.7152211 C21.0406571,14.5830511 21.1164399,14.4767781 21.205689,14.4790555 C21.2949424,14.4813374 21.401256,14.4024883 21.441944,14.3038419 C21.482632,14.2051976 21.4673173,14.152897 21.4079092,14.1876186 C21.3485011,14.2223401 21.278927,14.1838667 21.2532974,14.1021477 C21.2276678,14.0204199 21.2181413,14.04581 21.2321201,14.158571 C21.2461142,14.2713342 21.2100361,14.3623803 21.1519639,14.3608992 C21.0938895,14.3593634 21.0479674,14.2956469 21.0499121,14.2191894 C21.0518831,14.1427296 20.9767004,14.1798954 20.8828983,14.3017772 C20.757707,14.4644407 20.747484,14.54639 20.8444529,14.609909 C20.9202838,14.6595789 20.8740047,14.6860616 20.735796,14.6720765 C20.5220542,14.6504427 20.3790888,14.3411743 20.5852642,14.346438 C20.6306497,14.347535 20.7032395,14.1917873 20.7465774,14.0001992 C20.8091654,13.7235175 20.8858855,13.6533986 21.1195169,13.6593622 C21.2812922,13.6634871 21.4149917,13.6143504 21.4166232,13.55016 C21.4181562,13.4859696 21.5244325,13.4361264 21.6525738,13.4393978 C21.8993102,13.4456949 21.9614711,13.6173519 21.7597174,13.735269 C21.5443287,13.8611573 21.7427887,13.9980797 22.1089961,13.9762506 C22.5857876,13.9478327 22.7025846,13.8195705 22.274963,13.7939939 C21.9418772,13.7740716 21.9410099,13.7722724 22.2288307,13.6980704 L22.5221724,13.6224532 L22.2636977,13.4729235 C21.9658862,13.3006368 21.9265625,13.0960354 22.1925621,13.1028218 C22.2924502,13.1053669 22.3404419,13.1591507 22.2992107,13.2223296 C22.2579818,13.2855107 22.2797635,13.3386187 22.3476141,13.3403499 C22.4154647,13.3421051 22.4736508,13.2384606 22.4769161,13.1100798 C22.4805296,12.9686793 22.5605106,12.8786447 22.6798524,12.8816901 C22.8512418,12.8860783 22.848005,12.8643349 22.6549587,12.7145639 C22.4777505,12.5770776 22.4205674,12.5723976 22.3709967,12.6913219 C22.3332981,12.7817646 22.2240543,12.8073872 22.0927791,12.7565764 C21.8896501,12.6779576 21.8888201,12.6613154 22.0789821,12.4802567 C22.1902801,12.374293 22.3562274,12.2895067 22.4477562,12.2918412 C22.5981107,12.2956808 22.6690207,12.1557306 22.6376117,11.9171362 C22.6312388,11.8688003 22.7077684,11.8313384 22.8076543,11.8338879 C22.9075402,11.8364331 22.9603498,11.788863 22.9250076,11.7281678 C22.8413627,11.5845205 23.0659341,11.4541036 23.2214832,11.5559907 C23.3036717,11.609825 23.2972244,11.6857406 23.2011162,11.7959345 C23.1000324,11.9118221 23.0972664,11.9580648 23.1912612,11.960463 C23.3278691,11.9639516 23.3684629,11.8236305 23.3384117,11.4517998 C23.314924,11.1611703 23.5387398,11.0390317 24.0737831,11.0504959 C24.3311124,11.056003 24.5000447,11.006704 24.4848176,10.9305295 C24.4682831,10.847856 24.7111366,10.8059159 25.1580323,10.8142623 C25.5425197,10.821437 25.9240703,10.7774322 26.0059193,10.7164562 C26.0877684,10.6554846 26.3065209,10.6400579 26.4920336,10.6821779 C26.732154,10.7366989 26.8745631,10.7024732 26.9863319,10.5633524 C27.0726836,10.455877 27.0957071,10.4064353 27.0374969,10.453481 C26.9792889,10.5005289 26.7893349,10.3117448 26.615381,10.0339617 C26.4414249,9.75618076 26.2976667,9.57642532 26.2959125,9.63451173 C26.2941605,9.69259595 26.1903042,9.64236658 26.0651172,9.52293114 C25.9399324,9.40348034 25.8405612,9.24827679 25.8442973,9.1780373 C25.8480203,9.10779781 25.9021856,9.14360321 25.9646334,9.25760169 C26.0270813,9.37160017 26.1646899,9.46708051 26.2704253,9.46977924 C26.4125125,9.47339949 26.4294434,9.43965215 26.335315,9.34041772 C26.2652679,9.26657333 26.2393208,9.13012051 26.2776501,9.03719409 C26.3346405,8.89902549 26.364569,8.89706177 26.4418804,9.0264211 C26.5114699,9.1428638 26.5374783,9.12299848 26.5404304,8.95113958 C26.5454674,8.65920236 26.2808453,8.27659426 26.1511798,8.38829333 C26.0979891,8.43410819 26.0943997,8.40606549 26.1432082,8.32597671 C26.1920102,8.24588574 26.2799672,8.21181586 26.3386723,8.25026954 C26.3973752,8.28872101 26.4467422,8.26766869 26.4483738,8.20347173 C26.4499068,8.13928135 26.4019983,8.05444236 26.3416901,8.01494211 C26.1943644,7.91843932 26.3405951,7.58071797 26.6088504,7.39749586 C26.7284156,7.31586245 26.7939777,7.19366245 26.7545402,7.12593519 C26.7078669,7.0457762 26.7786674,7.03457316 26.9573999,7.09383781 C27.1816821,7.16820439 27.2060065,7.15614565 27.0902365,7.02798869 C26.9180237,6.83734835 26.9127874,6.48444827 27.0814108,6.43287612 C27.1972202,6.39745907 27.2289599,6.19640557 27.1928511,5.72701013 C27.183456,5.60493519 27.0791047,5.51901232 26.934453,5.51425333 C26.7950004,5.50964574 26.7458897,5.47116574 26.8189765,5.42372068 C27.0024898,5.30458802 27.1210958,4.95518312 27.0040512,4.87851494 C26.9491304,4.8425384 26.8790066,4.87847544 26.8482196,4.9583865 C26.8174348,5.03829097 26.7624154,5.07510565 26.7259563,5.04019983 C26.6894972,5.00529181 26.7079545,4.90274869 26.7669575,4.81231916 C26.8574614,4.67363274 26.9109521,4.68292911 27.1088099,4.87172422 C27.3378817,5.09030194 27.343718,5.09034143 27.3582202,4.87347949 C27.3664546,4.75039966 27.3976096,4.71709114 27.4281163,4.79877063 C27.4583908,4.87983139 27.5368257,4.94752354 27.6024096,4.94919983 C27.6679957,4.95095511 27.6937129,4.8733281 27.6595577,4.77688017 C27.6254024,4.68043224 27.6346836,4.61032439 27.6801875,4.6210908 C27.7256913,4.6318638 27.913037,4.58307376 28.0965152,4.51269165 C28.2799934,4.44231173 28.4773759,4.41568641 28.5351459,4.45352793 C28.5929181,4.49137384 28.6416763,4.46362076 28.6435006,4.39184979 C28.6452526,4.32008321 28.6948495,4.29282599 28.7535546,4.33127747 C28.8122576,4.36973114 28.8924269,4.35194582 28.9317046,4.29175308 C28.9709844,4.23156473 29.0938127,4.18507629 29.2046618,4.18844641 C29.5263772,4.19823207 29.7269264,4.13903325 30.2640108,3.87576624 C30.5413655,3.73981586 30.8409422,3.63043595 30.9297357,3.63270025 C31.0185271,3.63496017 31.1140856,3.5734027 31.1420803,3.49588979 C31.1965215,3.34517755 32.2848552,3.29935831 32.2810774,3.44794008 C32.2799824,3.49529519 32.4240669,3.49753536 32.6015095,3.45289873 C32.9511933,3.36496169 33.6917878,3.40211646 34.2278035,3.53448388 C34.5058831,3.60315679 34.5915537,3.5689092 34.7235078,3.33632219 C34.8112457,3.18167595 34.8532018,3.00390835 34.8167383,2.94128895 C34.7227281,2.77983662 33.9367065,2.64953603 32.6527796,2.58256574 C32.0445246,2.55083916 31.432643,2.45873772 31.2930436,2.37789637 C31.1534442,2.29705502 30.9976126,2.23678329 30.9467498,2.24396017 C30.8958849,2.25113485 30.6639617,2.24593485 30.4313662,2.23237536 C30.1130344,2.21385722 29.994862,2.14964928 29.9534688,1.97278127 C29.9087993,1.78191274 29.9565786,1.73859257 30.2080169,1.74199342 C30.50368,1.74598667 30.5077337,1.73832928 30.2984288,1.57109333 C30.102461,1.41451629 30.1920583,1.40176641 31.1460749,1.45045992 C31.7328022,1.48040709 32.2122698,1.5370827 32.2115624,1.57640523 C32.2109054,1.61572996 32.3548629,1.63474177 32.5315806,1.61865688 C33.3227115,1.54664895 34.5289854,1.47768861 34.9747928,1.47898751 C35.2427152,1.47986515 35.4373799,1.43825637 35.4073835,1.38674346 C35.3773892,1.33523055 35.4478744,1.28772624 35.564021,1.28118127 C36.0232728,1.25529755 36.1335524,1.23666751 36.336872,1.150613 C36.4530493,1.10144118 36.6534891,0.866649114 36.7822983,0.628855527 C37.0200513,0.189936034 37.4010784,-0.0589837975 37.4731469,0.177537215 C37.5007037,0.267975527 37.5654817,0.265116624 37.6884875,0.168036793 C37.800011,0.0800141772 37.892083,0.0719837975 37.9399849,0.146095865 C38.0197206,0.269467511 39.8992968,0.318465992 40.0232968,0.200434768 C40.0630913,0.162544979 40.1562189,0.184571477 40.2302474,0.249384979 C40.3731077,0.374459241 41.0765729,0.372908017 41.2919244,0.2470373 C41.3624687,0.205808101 41.599845,0.226741941 41.8194275,0.293556456 C42.0390122,0.360375359 43.1854072,0.46634346 44.3669757,0.529041857 C45.548542,0.591742447 47.1960943,0.686430717 48.0282002,0.739459747 C52.5129566,1.02527544 53.882576,1.09024034 56.6728726,1.14950059 C58.8648852,1.19605266 59.7301607,1.25156759 59.7277715,1.3454989 C59.7253625,1.44028152 59.7675462,1.44252388 59.8802174,1.35359511 C60.0375491,1.22941823 60.73965,1.21437772 62.7598768,1.29191038 C63.3683464,1.31526211 63.9187153,1.33131629 63.9829239,1.32758414 C64.0471282,1.32385418 64.67757,1.28541586 65.3838976,1.2421681 C66.0902273,1.19892253 66.7547697,1.19291949 66.8606562,1.22882802 C66.9665449,1.26474093 67.0818243,1.25022042 67.1168336,1.19657705 C67.1518452,1.14292928 67.6163705,1.09859325 68.1491099,1.0980557 C68.6818514,1.09761688 69.4188456,1.0516989 69.7868773,0.996230042 C70.154909,0.94076557 71.1266448,0.889004726 71.9462895,0.881204726 C72.7659386,0.873371814 73.8040118,0.85644 74.2531238,0.843540928 C74.7022337,0.830639662 75.1664633,0.873240169 75.2847452,0.938202869 C75.403025,1.00316557 75.4719289,1.00845114 75.4378591,0.949941266 C75.4027731,0.8896827 75.8648741,0.860389367 76.5037562,0.882371983 C77.1240671,0.903720506 77.8165955,0.863107848 78.0427086,0.792128945 C78.353117,0.694691477 78.4739831,0.696681519 78.5361266,0.80026903 C78.5924117,0.894079662 78.6200233,0.896833249 78.6234791,0.808957637 C78.6265451,0.729869367 78.9534398,0.678694346 79.4737597,0.675815696 C80.6298498,0.669430886 84.1486936,0.747121519 84.8619591,0.794785992 C85.1819728,0.816178397 85.9164244,0.813018903 86.4940741,0.787808776 C87.8876762,0.726946835 90.0504151,0.746636624 90.0485339,0.820171646 C90.0462125,0.910967595 90.6061101,0.883870549 91.5416255,0.747913586 C92.0109294,0.679712405 92.535857,0.664871561 92.7081334,0.714942954 C93.1115949,0.832199662 93.8939045,0.881211308 93.8961252,0.789368776 C93.8970012,0.750436793 94.0419901,0.722407257 94.21818,0.727078481 C97.4767861,0.813488439 103.627506,0.751432911 103.83516,0.630064473 C103.885236,0.600799662 103.925016,0.623372489 103.923572,0.680238987 C103.922039,0.737101097 104.078145,0.764590886 104.270293,0.741329114 C104.462433,0.718065148 104.711031,0.740232068 104.822723,0.790669873 C105.079803,0.906664979 105.544803,0.953932321 105.489186,0.858416878 C105.46611,0.818780591 106.348741,0.820355949 107.450596,0.861927426 C108.552448,0.903492321 109.453727,0.946494346 109.453449,0.957491139 C109.453449,0.968483544 109.780335,0.996227848 110.180492,1.01913857 C110.580627,1.04204928 110.90886,1.02694954 110.909887,0.985551392 C110.910982,0.944168608 111.094443,0.956519156 111.317731,1.0129973 C111.541041,1.06947764 111.747433,1.07935764 111.776411,1.03495797 C111.80538,0.990553924 112.30398,0.969334852 112.884382,0.987804726 C113.513569,1.00781485 113.941581,0.974267173 113.944414,0.904716624 C113.947305,0.835927426 113.982954,0.841061603 114.031513,0.917222954 C114.133591,1.07732371 115.013879,1.09157654 115.134874,0.93510481 C115.193912,0.858752574 115.223009,0.859496371 115.222185,0.937342785 C115.222185,1.00156388 115.417693,1.05297367 115.658175,1.05160236 C115.89867,1.05028591 116.215663,1.09774414 116.362612,1.1571843 C116.522393,1.22182886 116.717033,1.22129789 116.846913,1.15586785 C117.056236,1.05041755 117.545309,1.01798447 120.061435,0.942696371 C120.703024,0.923498059 121.7534,0.873920338 122.39557,0.83252 C123.037737,0.791119662 124.480688,0.773874093 125.602133,0.794195781 C126.723579,0.814535021 127.851804,0.797048101 128.10931,0.755395443 C128.366817,0.71372962 129.783441,0.700672574 131.257359,0.726380759 C134.718982,0.786753418 137.324066,0.758774346 138.361717,0.650076793 C138.816207,0.602469367 139.792895,0.500090802 140.53216,0.422569114 C141.271401,0.34504962 142.506848,0.237192405 143.277572,0.182886414 C144.048297,0.128578228 144.915454,0.0638678481 145.20458,0.0390811814 C146.151807,-0.04212 147.115547,0.00424995781 147.894603,0.168512911 C148.385868,0.27209384 149.879761,0.360079156 152.061367,0.413911224 C153.931881,0.460072743 155.49848,0.520614346 155.542698,0.548457384 C155.586914,0.57630481 157.561806,0.682854346 159.931338,0.7852373 C162.300867,0.887622447 164.658326,1.00680996 165.17012,1.0501016 C168.043663,1.2931654 170.225224,1.39323139 175.008546,1.50139359 C175.68134,1.51659865 176.414861,1.55022751 176.638589,1.57610684 C177.122474,1.63207814 179.362325,1.79069789 181.467421,1.91807376 C186.017071,2.19336219 187.714578,2.28203207 190.780418,2.40454582 C192.637768,2.4787654 194.340173,2.57260675 194.563535,2.61308118 C194.786898,2.65355561 195.388539,2.71660945 195.900493,2.75320034 C196.847946,2.82091443 197.929644,2.97667527 198.069097,3.06546802 C198.111484,3.09246414 198.503407,3.15106177 198.940027,3.19568304 C199.376658,3.2403065 200.047153,3.33478194 200.430018,3.40562481 C200.812884,3.47647207 201.282867,3.56002751 201.474396,3.5913065 C201.665935,3.62258329 202.247943,3.76971916 202.767746,3.9182746 C203.287552,4.06682785 203.822058,4.1911627 203.955534,4.19457013 C204.08903,4.19797097 204.197118,4.24452962 204.195749,4.29801941 C204.194435,4.35151139 204.258797,4.39754127 204.338859,4.40031021 C205.125483,4.42749722 207.005388,4.65507072 207.300256,4.75879865 C207.505697,4.83106987 207.780623,5.04892793 207.911211,5.24292743 C208.16907,5.62603139 208.867133,6.01855899 209.510927,6.1425011 C210.316431,6.29756203 211.710782,6.46324236 212.00306,6.43862464 C212.167288,6.42480186 212.300221,6.47012523 212.298469,6.53936203 C212.296279,6.60859882 212.331581,6.63065603 212.375995,6.58838245 C212.420408,6.54610447 212.563393,6.61715578 212.693742,6.74626717 C212.824112,6.87538295 213.280246,7.17501705 213.707383,7.41212388 C214.32965,7.75754869 214.648032,7.85674363 215.30939,7.91123831 C216.182872,7.98321772 216.337245,8.08718262 216.239374,8.53753333 C216.177024,8.8245492 215.707488,9.04909705 215.196934,9.03606633 C215.050094,9.03231443 214.896203,9.0809443 214.854987,9.1441254 C214.813771,9.2073043 214.602217,9.25445975 214.384925,9.24891308 C213.771441,9.23324726 212.80703,9.44646262 212.806527,9.59785722 C212.806527,9.84682312 213.686688,10.1734994 214.553884,10.245797 C215.023661,10.2849615 216.114894,10.3660815 216.978871,10.4260658 C218.723863,10.547217 218.906553,10.5836434 218.99297,10.8276221 C219.120362,11.1873414 217.489645,12.3581181 216.16084,12.8609603 C215.732104,13.0232047 215.514484,13.1891396 215.364841,13.4678815 C215.108042,13.9462508 215.219534,14.1797396 215.910786,14.6113374 C216.179017,14.7788015 216.396419,14.996133 216.393922,15.0942989 C216.391513,15.1924626 216.466017,15.3535639 216.559683,15.4523003 C216.825264,15.732295 216.752797,16.0132442 216.358225,16.2333776 C216.159373,16.3443197 215.766465,16.6421634 215.485094,16.8952454 C215.056774,17.280504 214.880369,17.3600157 214.401153,17.3837668 C213.979513,17.4046545 213.775799,17.4787841 213.627492,17.6652579 C213.516766,17.8044775 213.450343,17.9598851 213.479864,18.0106081 C213.509429,18.0613333 213.479886,18.1014633 213.414296,18.0997892 C213.348705,18.0980339 213.230664,18.2133467 213.151977,18.3558596 C213.073334,18.4983747 213.049442,18.5790954 213.098936,18.5352442 C213.222101,18.4260925 213.535271,18.773198 213.44224,18.9157614 C213.398944,18.9821195 213.456475,19.0076851 213.578984,18.9766145 C213.695251,18.9471435 213.578984,19.022199 213.318505,19.1434204 C213.05899,19.2646331 212.679638,19.3609252 212.475552,19.3574015 C212.271444,19.353869 211.968698,19.3987799 211.802762,19.4571867 C211.580893,19.5352832 211.50109,19.5255195 211.501133,19.4202952 C211.501155,19.3415953 211.446624,19.3657939 211.379873,19.474068 C211.150646,19.8459668 211.361039,20.2593097 211.937469,20.5708248 C212.236295,20.732242 212.559144,20.991055 212.654935,21.1459646 C212.750704,21.3008741 213.033893,21.4948429 213.284231,21.5770095 C214.217237,21.8832127 214.347674,22.4918694 213.526051,22.7054182 C213.015387,22.8381455 212.763887,23.2092653 212.907332,23.6183671 C212.98199,23.8312336 212.977894,23.9278922 212.894192,23.9257595 C212.679003,23.9202743 212.46596,24.2058662 212.471019,24.493097 C212.476056,24.7771509 212.466858,24.7817453 211.479715,24.9839749 C211.318597,25.016985 211.026013,25.1775816 210.829526,25.3408528 C210.633017,25.5041241 210.326198,25.7092125 210.14767,25.7966076 C209.969119,25.8840005 209.821141,26.0310881 209.818797,26.1234682 C209.813322,26.3401941 209.390192,26.5538636 208.886405,26.5943534 C208.335598,26.6386192 208.108079,26.7763381 208.077047,27.084279 C208.051183,27.3409637 208.498578,27.9010476 208.734266,27.9070616 C208.878302,27.9107477 209.522731,28.5984246 209.51903,28.744503 C209.513993,28.9442181 209.0906,29.0706285 208.276096,29.1156513 C207.831944,29.140201 207.205002,29.2094422 206.882918,29.269523 C206.349566,29.3690076 204.446169,29.6438177 204.012319,29.6839762 C203.830862,29.700761 203.741092,30.1153283 203.917928,30.1198415 C203.970518,30.121158 203.958627,30.2190759 203.891514,30.3373836 C203.824393,30.4556869 203.805134,30.5900817 203.84873,30.6360348 C203.994781,30.7900162 203.90424,32.271437 203.73874,32.4357219 C203.652338,32.5214824 203.340133,32.6017818 203.044943,32.6141652 C202.568555,32.6341534 202.249763,32.8094241 202.354121,32.9939781 C202.374313,33.0296759 202.315987,33.124735 202.224495,33.2052253 C202.133025,33.2857112 202.059154,33.3127293 202.060352,33.2652667 C202.061447,33.2178019 201.999315,33.2391679 201.922045,33.3127446 C201.819485,33.4103862 201.740781,33.4108469 201.630694,33.3144999 C201.520541,33.2180717 201.384501,33.2191732 201.126576,33.3185809 C200.531993,33.5477364 200.716518,33.9039715 201.515375,34.0691779 C202.40888,34.2539578 202.607585,34.3379762 202.467202,34.4716338 C202.429102,34.5079131 201.599821,34.5341457 200.624341,34.5299286 C198.549819,34.5209548 198.310255,34.6101381 198.11939,35.4623786 C198.057656,35.7380115 197.877998,36.1574277 197.720099,36.3944095 C197.459256,36.7859234 197.252886,37.2968815 197.233669,37.5987053 C197.229595,37.6628343 197.049551,37.7277004 196.833597,37.742855 C196.564265,37.7617681 196.420846,37.8402003 196.376875,37.9926503 C196.341629,38.1148832 196.267064,38.1849406 196.211171,38.14833 C196.155276,38.1117193 196.108182,38.1351654 196.106524,38.2004419 C196.104991,38.2657139 195.862878,38.4522732 195.568778,38.6150179 C194.734386,39.0767274 194.610042,39.4675217 195.218089,39.7170712 C195.5025,39.8337904 195.514048,39.9218678 195.309154,40.4108192 C195.158911,40.7693208 195.536612,41.0107742 196.784997,41.3542857 C197.993496,41.6868246 198.330101,41.9058236 197.97612,42.1292327 C197.756308,42.2679718 196.177861,42.0914812 193.695408,41.6506068 C192.570765,41.4508697 192.095638,41.5298439 191.834528,41.9599212 C191.574251,42.3886052 191.305794,42.510577 190.53106,42.5521485 C189.888989,42.5866024 189.284696,42.8895473 189.277296,43.1807035 C189.272697,43.3592719 189.785788,43.5409713 190.380252,43.5713332 C190.827203,43.5941605 191.351798,43.9151343 191.090174,44.0056977 C191.008167,44.0340849 190.8614,44.1331701 190.764017,44.2258837 C190.666643,44.3185995 190.587757,44.3630979 190.588729,44.3247693 C190.592365,44.1836035 189.874809,44.6082329 189.729391,44.8333337 C189.548223,45.1137738 188.935397,45.4910327 188.694007,45.4707176 C188.093991,45.4202206 187.295517,45.4788797 187.293101,45.5736184 C187.288393,45.754585 187.889727,46.2882717 188.015438,46.2148025 C188.07872,46.1778145 188.093872,46.2036565 188.049144,46.2722351 C188.00438,46.3408093 188.021062,46.4318159 188.086164,46.4744712 C188.151275,46.5171266 188.17169,46.6024066 188.131492,46.6639904 C188.091317,46.725572 188.12155,46.8563224 188.198861,46.9545519 C188.418437,47.2337787 188.194788,47.3396832 187.303762,47.3784814 C186.855443,47.3980088 186.251408,47.4598537 185.961489,47.5159259 C185.671549,47.5720003 184.697566,47.7124684 183.797068,47.8280773 C182.896547,47.9436819 181.865418,48.1309894 181.505652,48.2443143 C181.13794,48.3601426 180.535519,48.4422916 180.129747,48.4319355 C179.732757,48.4217988 179.025862,48.5105521 178.55884,48.6291516 C177.757064,48.8327678 177.48251,48.8355499 173.6341,48.6790343 C171.392492,48.5878697 169.113482,48.478775 168.569606,48.4366068 C167.152234,48.3267134 165.410115,48.1559252 165.170978,48.1034272 C165.058292,48.0786888 163.695713,47.9901659 162.142973,47.906707 C159.922797,47.7873725 158.982989,47.7853232 157.742579,47.8971188 C156.875081,47.9753031 155.280991,48.0485858 154.200127,48.0599732 C153.119286,48.0713605 152.043255,48.0991202 151.808943,48.1216645 C151.000268,48.1994714 148.226784,48.3136278 146.599275,48.3360932 C145.701385,48.3484898 144.074336,48.3854361 142.983615,48.4181961 C141.892881,48.4509561 139.689108,48.4764537 138.086355,48.4748564 C136.483603,48.4733205 135.01456,48.4852344 134.821801,48.5014356 C134.629052,48.51765 133.311898,48.5350425 131.894771,48.540078 C130.477655,48.5451244 129.165795,48.5638488 128.979538,48.5817043 C128.621247,48.6160528 127.73867,48.6542322 124.615354,48.7705016 C122.163857,48.8617627 120.32291,48.9831487 118.80287,49.153757 C118.141904,49.2279436 117.400821,49.283531 117.156041,49.2772844 C116.911269,49.2710312 116.557757,49.3113696 116.370475,49.3669131 C116.18319,49.4224543 115.698556,49.4867764 115.293514,49.5098538 C114.88846,49.5329269 114.04639,49.6429256 113.422229,49.7542911 C112.798048,49.8656589 111.972136,49.9767612 111.586842,50.0011902 C111.201549,50.025617 110.491853,50.0866019 110.009753,50.1367149 C109.527633,50.1868258 108.817979,50.246176 108.432741,50.2686084 C108.0475,50.291043 107.161822,50.3757745 106.464572,50.4569055 C105.767325,50.5380365 104.768479,50.6246417 104.244911,50.6493625 C103.721343,50.6740812 102.991521,50.7260483 102.623091,50.7648464 C102.254652,50.8036424 101.309796,50.8295129 100.523418,50.822336 C99.7370369,50.8151614 98.6992551,50.8472192 98.2172383,50.8935826 C97.2656855,50.985107 95.2408115,51.0435401 93.667787,51.0248727 C93.1230004,51.0184002 92.440246,51.0513598 92.1505528,51.0981028 C91.8608618,51.1448414 89.8670245,51.1661877 87.7198018,51.1455347 C85.5725812,51.1248883 83.702595,51.128333 83.564279,51.1531921 C83.4259607,51.1780555 82.2974143,51.2080049 81.0563961,51.2197455 C79.8153778,51.2314839 78.5374734,51.2509499 78.2166077,51.2629932 C77.8957421,51.2750388 76.7150299,51.2935679 75.5928038,51.3041698 C74.4705777,51.3147673 73.1059405,51.3463271 72.5602779,51.3742908 C72.0146175,51.4022567 71.5161035,51.4097495 71.4524708,51.390944 C71.388836,51.3721406 70.5752225,51.3941693 69.6444375,51.4398678 C68.7136524,51.4855818 67.4271566,51.5385186 66.7855567,51.5575063 C66.1439546,51.5764852 65.4349881,51.6088437 65.2100729,51.629398 C64.9851599,51.6499566 64.0928006,51.6824468 63.2270542,51.7016078 C62.3613078,51.7207622 61.6261401,51.7520895 61.593347,51.7712132 C61.560554,51.7903457 60.8775981,51.8231539 60.0756661,51.8441382 C59.2737341,51.8651138 58.5122295,51.900691 58.3834356,51.923176 C58.1475551,51.9643592 49.8920675,51.9052064 46.3209506,51.8367419 C45.2636208,51.8164685 43.5083402,51.7390829 42.4203285,51.6647668 L42.4204073,51.6644969 Z M18.7792281,36.6131188 C18.8373091,36.6107492 18.7907694,36.4991708 18.6758229,36.3652083 C18.4969021,36.1566927 18.3496859,36.1235224 17.6529834,36.1347298 C17.2053693,36.1419264 16.8192285,36.2034466 16.7948888,36.2714305 C16.7311576,36.4494395 17.5339875,36.6686732 18.1484753,36.6410584 C18.4373078,36.6280694 18.7211449,36.615506 18.7792281,36.6131188 Z M21.6899221,30.3087003 C21.6905791,30.2803921 21.6388097,30.255895 21.574739,30.2542604 C21.5106684,30.2527246 21.4568338,30.3069055 21.4551037,30.3748851 C21.4533517,30.4428624 21.5052087,30.4673595 21.5702867,30.4293249 C21.635367,30.3912881 21.6892016,30.3370062 21.6899221,30.3087003 Z M15.8373902,26.6751816 C15.8380472,26.6499539 15.7579983,26.5959595 15.6595359,26.5551954 C15.5568818,26.5126937 15.5096238,26.5310648 15.5487525,26.5982633 C15.6143452,26.710908 15.8349877,26.7697053 15.8373902,26.6751816 Z M17.2278321,22.988307 C17.1156932,22.8709647 17.1019728,22.8840284 17.1609605,23.0519752 C17.2017777,23.1681941 17.2652702,23.234629 17.302049,23.1996113 C17.3388301,23.1645936 17.3054216,23.069506 17.2278321,22.988307 Z M18.1953741,21.6115818 C18.083233,21.4942395 18.0695104,21.5073031 18.1285003,21.67525 C18.1693197,21.7914667 18.23281,21.8579038 18.269591,21.8228861 C18.3063699,21.7878684 18.2729636,21.6927808 18.1953741,21.6115818 Z M17.3242447,20.9197821 C17.2862788,20.8545846 17.2321004,20.8006473 17.2038472,20.7999254 C17.1755918,20.7992672 17.1511405,20.8511333 17.1495089,20.9153237 C17.1479759,20.9795141 17.2020558,21.0334493 17.2699086,21.0351826 C17.3377592,21.0369379 17.3622105,20.984984 17.3242447,20.9197821 Z M22.0889926,15.4727207 C22.0057573,15.4368604 21.9051772,15.4384402 21.8654834,15.4762312 C21.8257875,15.5140267 21.8938899,15.5433661 22.016819,15.5414309 C22.1526669,15.5392368 22.1809748,15.512346 22.0889926,15.4727185 L22.0889926,15.4727207 Z M22.0749109,15.1665394 C21.9004292,15.0145985 21.6242505,14.5527134 21.6276626,14.4185512 C21.6287576,14.3777257 21.7077596,14.4128027 21.8033487,14.4964854 C22.0297838,14.6947305 22.1672413,14.5618694 21.9808898,14.3248788 C21.8170647,14.1165387 21.51486,14.2705268 21.5073418,14.5661742 C21.5049985,14.6583875 21.4621927,14.7070547 21.4122235,14.6743232 C21.3622521,14.6415917 21.3111638,14.7160154 21.2986939,14.8397095 C21.2835172,14.9903779 21.3505334,15.0665107 21.501766,15.0703701 C21.6259259,15.0735516 21.7261753,15.1286518 21.7245416,15.1928422 C21.7230086,15.2570326 21.8395648,15.310891 21.9837763,15.3125278 C22.2087659,15.3150949 22.2216979,15.2943607 22.0749109,15.1665394 Z M21.3823125,14.8990378 C21.3829695,14.8707318 21.4368676,14.81645 21.5019456,14.7784132 C21.5670236,14.7403764 21.6188566,14.7648756 21.6171287,14.832853 C21.6153767,14.9008304 21.561564,14.9551122 21.4974933,14.9534776 C21.4334249,14.9519418 21.381592,14.9273438 21.3823125,14.8990378 Z M23.5042429,12.523013 C23.5150177,12.3787668 23.4968188,12.3260778 23.463787,12.405923 C23.4307596,12.4857705 23.3571384,12.5205776 23.3001853,12.4832714 C23.2432321,12.4459652 23.22578,12.4977524 23.2614026,12.5983384 C23.355739,12.864721 23.4816311,12.8256705 23.5042429,12.523013 Z M22.9074153,12.4124241 C23.0379612,12.2123821 22.8962682,12.165694 22.7315846,12.3544913 C22.6368803,12.463066 22.6263398,12.5298037 22.7035855,12.5317762 C22.7717186,12.5335315 22.8634423,12.4798047 22.9074153,12.4124241 Z M26.7904562,8.50271089 C26.7911132,8.47748321 26.7137602,8.42460557 26.6185937,8.38520405 C26.5234295,8.34580253 26.4442719,8.36442599 26.4426907,8.42661097 C26.4411577,8.48878717 26.5184472,8.54166481 26.6145532,8.54412 C26.7106591,8.54657738 26.7898145,8.52792759 26.7904562,8.50271089 Z M7.12818129,39.1184657 C7.12971429,39.0580645 7.18421901,38.9775237 7.24929924,38.9394891 C7.31437728,38.9014501 7.36554225,38.9522149 7.36299747,39.052283 C7.36045707,39.1523556 7.30595016,39.2328942 7.24187952,39.2312596 C7.17780888,39.2297237 7.1266461,39.178869 7.12818129,39.1184657 Z M12.1213565,29.6429752 C12.190773,29.5768825 12.3157475,29.5475278 12.3990748,29.5777382 C12.4855798,29.6091006 12.4314299,29.6606552 12.2728607,29.6979065 C12.077804,29.7437257 12.0327097,29.7273754 12.1213565,29.6429752 Z M13.7787091,29.7049451 C13.6591001,29.6231033 13.6512467,29.5835043 13.7528781,29.5746906 C14.0090468,29.5524842 14.0714442,29.5355678 14.2142717,29.4496032 C14.2911582,29.4033254 14.3904353,29.4279256 14.4348857,29.5042603 C14.4853608,29.5909445 14.4660056,29.6105026 14.3833331,29.5563502 C14.3048939,29.5049733 14.2490751,29.5437781 14.2463333,29.6515936 C14.2411211,29.8568795 14.0351056,29.8803826 13.7787091,29.7049451 Z M13.1855651,29.426936 C13.2759727,29.3408552 13.3611243,29.3366118 13.435004,29.4144955 C13.5088836,29.4923814 13.4620264,29.5369983 13.2977369,29.5451867 C13.10987,29.5545554 13.0821818,29.5253521 13.1855651,29.4269316 L13.1855651,29.426936 Z M16.1606407,27.715107 C16.1631811,27.6150344 16.2168624,27.5669509 16.2799256,27.6082591 C16.3429867,27.6495651 16.393326,27.7327826 16.3917887,27.7931838 C16.3902557,27.853585 16.3365766,27.9016663 16.2725081,27.9000317 C16.2084353,27.8984959 16.1580981,27.8151796 16.1606407,27.715107 Z M16.3398134,25.767797 C16.5390158,25.4068555 16.5591704,25.3967276 16.5314756,25.6714829 C16.5179852,25.8051865 16.4375049,25.9392741 16.352603,25.9694516 C16.2293673,26.0132567 16.2267875,25.9725892 16.3398134,25.767797 Z M17.1421724,21.5037882 C17.0447153,21.4399511 17.1009566,21.3864284 17.3162796,21.3380903 C17.7065792,21.250467 17.7812188,21.3056068 17.4984395,21.4726606 C17.3816708,21.5416429 17.2213497,21.5556522 17.1421724,21.5037882 Z M19.6966476,13.6691127 C19.7363435,13.6313173 19.8369215,13.6297376 19.920159,13.6656022 C20.012139,13.7052297 19.9838332,13.7321797 19.8479853,13.7343146 C19.7250563,13.7362893 19.6569538,13.7069104 19.6966476,13.6691171 L19.6966476,13.6691127 Z M20.0579932,13.2111924 C20.0976869,13.1733992 20.1982671,13.1718194 20.2815024,13.2076819 C20.3734824,13.2473094 20.3451767,13.2742616 20.2093288,13.2763965 C20.0863997,13.2783711 20.0182973,13.24899 20.0579932,13.2111946 L20.0579932,13.2111924 Z M22.1705044,11.7688024 C22.1685334,11.6456435 22.1978597,11.5774138 22.2355825,11.6171818 C22.2733052,11.6569519 22.2748842,11.75772 22.2390865,11.8411109 C22.1995329,11.9332628 22.1726309,11.9049041 22.1705,11.7688024 L22.1705044,11.7688024 Z M26.4034437,5.38554127 C26.3001809,5.3148827 26.2869795,5.26864439 26.3703682,5.26969975 C26.4466984,5.27079679 26.540218,5.3248 26.5781816,5.38999966 C26.6638807,5.53717722 26.6235541,5.53615038 26.4034437,5.38554565 L26.4034437,5.38554127 Z" />
        </g>
      </g>
    </chakra.svg>
  );
};

export default Home3Page;
