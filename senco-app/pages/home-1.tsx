import React, { memo, useContext, useRef } from "react";

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
  Link,
  SimpleGrid,
  Stack,
  Text,
  type TextProps,
  type ThemingProps,
  useColorModeValue,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

import { ThemeColorContext } from "@definitions/context/theme";
import { useCountdown } from "@definitions/hooks/useCountdown";

import ChakraCarousel from "@components/carousel/carousel";
import {
  FreeShippingIcon,
  PackageReturnIcon,
  SecurePaymentIcon,
} from "@components/icons";
import Image from "@components/image";
import ProductBox from "@components/product-box";
import ProductBoxAddToCart from "@components/product-box/product-box-add-to-cart";
import Showcase, { GridShowcase, TripleShowcase } from "@components/showcase";

const Home1Page: React.FC = () => {
  const theme = useContext(ThemeColorContext);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const themeColorScheme = theme.colorScheme; // global default primary theme color

  const showcaseItems = [
    {
      image: "https://source.unsplash.com/oa-3W-J2RBg",
      title: "Casual Overalls",
      body: "So Many Great Outerwear Styles Have Become Iconic Wardrobe Staples.",
      href: "#",
      link: "Explore All Styles",
    },
    {
      image: "https://source.unsplash.com/7zEE75qwr94",
      title: "Mini Shorts",
      href: "#",
      link: "View Products",
    },
    {
      image: "https://source.unsplash.com/OUMFYLDjbOg",
      title: "Jackets",
      href: "#",
      link: "View Products",
    },
  ];

  const productItems = [
    {
      title: "Print Dress",
      subtitle: "Dresses",
      price: 49.9,
      sale_price: 17.99,
      images: [
        "/images/home-1/product-1.png",
        "/images/home-1/product-1-0.jpg",
      ],
    },
    {
      title: "Printed Mini Dress",
      subtitle: "Dresses",
      price: 49.9,
      sale_price: 12.99,
      images: [
        "/images/home-1/product-2.png",
        "/images/home-1/product-2-0.jpg",
      ],
    },
    {
      title: "Pleated Wrap Top",
      subtitle: "T-Shirts",
      price: 49.9,
      sale_price: 17.99,
      images: [
        "/images/home-1/product-3.png",
        "/images/home-1/product-3-0.jpg",
      ],
    },
    {
      title: "Satin effect printed top",
      subtitle: "Tops",
      price: 39.9,
      sale_price: 15.99,
      images: [
        "/images/home-1/product-4.png",
        "/images/home-1/product-4-0.jpg",
      ],
    },
    {
      title: "Printed Cropped Blouse",
      subtitle: "Blouses",
      price: 69.9,
      sale_price: 19.99,
      images: [
        "/images/home-1/product-5.png",
        "/images/home-1/product-5-0.jpg",
      ],
    },
    {
      title: "Fitted Faux Leather Overshirt",
      subtitle: "Shirts",
      price: 59.9,
      sale_price: 39.99,
      images: [
        "/images/home-1/product-6.png",
        "/images/home-1/product-6-0.jpg",
      ],
    },
    {
      title: "Printed Shirt",
      subtitle: "Shirts",
      price: 49.9,
      sale_price: 19.99,
      images: [
        "/images/home-1/product-7.png",
        "/images/home-1/product-7-0.jpg",
      ],
    },
    {
      title: "Ruffled Pleated Blouse",
      subtitle: "Blouses",
      price: 35.9,
      sale_price: 12.99,
      images: [
        "/images/home-1/product-8.png",
        "/images/home-1/product-8-0.jpg",
      ],
    },
  ];

  const catItems = [
    {
      image: "https://source.unsplash.com/jvoZ-Aux9aw",
      title: "Sneakers",
      href: "#",
    },
    {
      image: "https://source.unsplash.com/D4jRahaUaIc",
      title: "Accessories",
      href: "#",
    },
    {
      image: "https://source.unsplash.com/27VASQtGgU4",
      title: "Denim",
      href: "#",
    },
    {
      image: "https://source.unsplash.com/jJqd2mc-M9Q",
      title: "Handbags",
      href: "#",
    },
  ];

  const slideItems = [
    {
      image: "/images/home-1/1.png",
      subtitle: "90's Collections",
      title: "Memorable 90's Fashion Trends",
      footer: {
        href: "#",
        body: "New design trends of iconic brands, new interpretations of the 90s",
        title: "Old School Fashion",
      },
      price: 59.9,
      body: "Regular-fit T-shirts in soft cotton jersey. Ribbed crew neck and straight-cut hem, nihil horum? Hi omnes lingua, institutis, legibus inter se differunt.",
    },
    {
      image: "/images/home-1/2.png",
      subtitle: "New Arivals",
      title: "The Original Blue Jeans",
      footer: {
        href: "#",
        body: "Our most advanced stretch technology engineered to deliver maximum flex and optimum comfort",
        title: "Levi Strauss & Co.",
      },
      body: "Cum sociis natoque penatibus et magnis dis parturient. Non equidem invideo, miror magis posuere velit aliquet. Nihil hic munitissimus habendi senatus locus, nihil horum?",
      price: 299.9,
    },
    {
      image: "/images/home-1/3.png",
      subtitle: "Fitness Addicts",
      title: "New Trends in Sportswear",
      footer: {
        href: "#",
        body: "The iconic brand that offers comfort and durability at the same time in sportswear.",
        title: "Onitsuka Tiger",
      },
      body: "Excepteur sint obcaecat cupiditat non proident culpa. Plura mihi bona sunt, inclinet, amari petere vellent. Integer legentibus erat a ante historiarum dapibus.",
      price: 119.9,
    },
    {
      image: "/images/home-1/4.png",
      subtitle: "Sneakers",
      title: "Vintage sneakers are on the rise",
      footer: {
        href: "#",
        body: "Vintage sneakers and colorways that give off a retro aesthetic have been trending.",
        title: "Air Jordan",
      },
      body: "Magna pars studiorum, prodita quaerimus. Curabitur est gravida et libero vitae dictum. Morbi fringilla convallis sapien, id pulvinar odio volutpat.",
      price: 179.9,
    },
  ];

  const accessoryItems = [
    {
      title: "Fabric Handbag",
      subtitle: "Bags",
      price: 49.9,
      sale_price: 25.99,
      images: [
        "/images/accessories/handbag-1.png",
        "/images/accessories/handbag-1-0.jpg",
      ],
    },
    {
      title: "Straw Hat",
      subtitle: "Hats",
      price: 14.99,
      images: [
        "/images/accessories/hat-1.png",
        "/images/accessories/hat-1-0.jpg",
      ],
    },
    {
      title: "Stone Metal Necklace",
      subtitle: "Necklaces",
      price: 35.9,
      sale_price: 12.99,
      images: [
        "/images/accessories/necklaces-1.png",
        "/images/accessories/necklaces-1-0.jpg",
      ],
    },
    {
      title: "Bead Bracelet",
      subtitle: "Bracelets",
      price: 17.9,
      sale_price: 7.99,
      images: [
        "/images/accessories/bracelet-1.png",
        "/images/accessories/bracelet-1-0.jpg",
      ],
    },
  ];

  const bannerItems = [
    {
      title: "Secure checkout",
      body: "Guaranteed safe checkout",
      icon: <SecurePaymentIcon width={"auto"} height={16} />,
    },
    {
      title: "30 Days return",
      body: "We offer you a full refund within 30 days of purchase.",
      icon: <PackageReturnIcon width={"auto"} height={16} />,
    },
    {
      title: "Free shipping",
      body: "Automatically receive free standard shipping on every order.",
      icon: <FreeShippingIcon width={"auto"} height={12} />,
    },
  ];

  return (
    <>
      <NextSeo
        title="Senco React E-Commerce"
        description="Senco React E-Commerce Website Template"
      />
      <chakra.main>
        <VStack align="stretch" mb={20} spacing={20}>
          <MainSlideshow
            bg={useColorModeValue("#EBE7DE", "gray.700")}
            items={slideItems}
          />

          <Box>
            <Container maxW="container.xl">
              <VStack align={["center", "center", "stretch"]} spacing={10}>
                <BlockTitle>Shop by Categories</BlockTitle>
                <GridShowcase w="full" items={catItems} />
              </VStack>
            </Container>
          </Box>

          <Showcase
            title="New Sessions"
            subtitle="Refresh your wardrobe"
            link="Discover now"
            href="#"
            // colorScheme="amber"
            color={useColorModeValue("blackAlpha.900", "whiteAlpha.700")}
            bg={useColorModeValue("#EBE7DE", "gray.700")}
            images={[
              "https://source.unsplash.com/68csPWTnafo",
              "https://source.unsplash.com/mNZ-GvOQUUY",
            ]}
          />

          <Box>
            <Container maxW="container.xl">
              <VStack align={["center", "center", "stretch"]} spacing={10}>
                <BlockTitle>Best Seller Products</BlockTitle>
                <Products items={productItems} />
              </VStack>
            </Container>
          </Box>

          <Box>
            <Container maxW="container.xl">
              <TripleShowcase items={showcaseItems} />
            </Container>
          </Box>

          <Box>
            <Container maxW="container.xl">
              <VStack align={["center", "center", "stretch"]} spacing={10}>
                <BlockTitle>Best Seller Accessories</BlockTitle>
                <ProductAccessory items={accessoryItems} />
              </VStack>
            </Container>
          </Box>

          <LimitedTimeOfferBlock
            bg={useColorModeValue("gray.100", "gray.700")}
          />

          <Banner items={bannerItems} />
        </VStack>
      </chakra.main>
    </>
  );
};

const BlockTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Stack w="full" align="center" direction={["column", "column", "row"]}>
      <Divider display={["none", "none", "initial"]} />
      <Text flexShrink={0} fontWeight="semibold" fontSize="xl">
        {children}
      </Text>
      <Divider />
    </Stack>
  );
};

const LimitedTimeOfferBlock: React.FC<ChakraProps & ThemingProps> = memo(
  (props) => {
    const now = useRef(new Date());
    const deadline = useRef(now.current.setDate(now.current.getDate() + 13));

    const [days, hours, minutes, seconds, isDone] = useCountdown(
      deadline.current,
    );

    return (
      <Box width="full" {...props}>
        <Container maxW="container.xl">
          <Stack
            width="full"
            align="center"
            direction={["column-reverse", "column-reverse", "row"]}
            pt={[20, 20, 0]}
            spacing={[20]}
          >
            <AspectRatio
              flex="1"
              width="full"
              rounded="md"
              ratio={3 / 4}
              maxHeight={400}
            >
              <Image
                transitionProperty="common"
                transitionDuration="1s"
                transitionTimingFunction="ease-in-out"
                src="/images/sports.png"
                alt="Limited time offer"
                layout="fill"
                objectFit="contain"
                objectPosition="bottom"
              />
            </AspectRatio>

            <VStack
              flex="1"
              pos="relative"
              zIndex="1"
              align={["center", "center", "start"]}
              spacing={3}
            >
              <Text color="pink.400" fontSize="sm" fontWeight="bold">
                Limited Time Only
              </Text>
              <Text lineHeight={1} fontSize="2xl" fontWeight={600}>
                60% Discount
              </Text>
              <Text
                textAlign={["center", "center", "start"]}
                lineHeight={1}
                fontSize="5xl"
                fontWeight={800}
              >
                Sportswear Products
              </Text>
              {!isDone && (
                <Wrap>
                  <WrapItem>
                    <CountdownValue value={days} title="Days" />
                  </WrapItem>
                  <WrapItem>
                    <CountdownValue value={hours} title="Hours" />
                  </WrapItem>
                  <WrapItem>
                    <CountdownValue value={minutes} title="minutes" />
                  </WrapItem>
                  <WrapItem>
                    <CountdownValue value={seconds} title="seconds" />
                  </WrapItem>
                </Wrap>
              )}
              {/* {!!isDone && <Text>DONE</Text>} */}
              <Button size="lg" rounded="full" colorScheme="white">
                Start shopping
              </Button>
            </VStack>
          </Stack>
        </Container>
      </Box>
    );
  },
);

const CountdownValue: React.FC<{ value: number | boolean; title: string }> =
  memo(({ value, title }) => {
    const valueStyle = {
      fontFamily: "mono",
      fontWeight: 500,
      fontSize: "6xl",
      lineHeight: 1,
    };
    const titleStyle = {
      fontWeight: "bold",
      fontSize: "xs",
      textTransform: "uppercase",
    };
    const boxStyle = {
      borderWidth: "0",
      borderColor: "blackAlpha.100",
      px: 2,
      py: 2,
      minW: 20,
      rounded: "xl",
    };
    return (
      <Box {...boxStyle}>
        <VStack spacing={0}>
          <Text {...valueStyle}>{value}</Text>
          <Text {...(titleStyle as TextProps)}>{title}</Text>
        </VStack>
      </Box>
    );
  });

interface MainSlideshowProps extends ChakraProps, ThemingProps {
  items: {
    image: string;
    subtitle: string;
    title: string;
    footer: {
      href: string;
      body: string;
      title: string;
    };
    price: number;
    body: string;
  }[];
}

const MainSlideshow: React.FC<MainSlideshowProps> = ({
  items = [],
  ...rest
}) => {
  return (
    <Box pos="relative" overflow="hidden" w="full" {...rest}>
      <ChakraCarousel isSingle gap={32}>
        {items.map((item) => (
          <Stack
            key={item.title}
            spacing={0}
            w="full"
            direction={["column", "column", "row", "row"]}
            align="stretch"
            justify="center"
            px={[0, 0, 5, 10, 32]}
          >
            <Flex
              order={[1, 1, 0]}
              flex="1"
              align="center"
              justify={["center", "center", "start", "start"]}
            >
              <VStack spacing={4} align={["center", "center", "stretch"]}>
                <Text lineHeight={1}>{item.subtitle}</Text>
                <Heading
                  lineHeight={1}
                  size="xl"
                  textAlign={["center", "center", "start"]}
                  dangerouslySetInnerHTML={{ __html: item.title }}
                />
                <Box>
                  <Button p={6} size="md" variant="solid" colorScheme="white">
                    View Collections
                  </Button>
                </Box>
              </VStack>
            </Flex>
            <Flex
              order={[0, 0, 1]}
              width="full"
              height="full"
              pos="relative"
              flex="2"
              maxW={["full", "full", 600]}
              justify="center"
              minHeight={[300, 450, 450, 600]}
              sx={{ "& > *": { width: "full" } }}
            >
              <Image
                alt={item.title}
                src={item.image}
                layout="fill"
                objectFit="contain"
                objectPosition="top center"
              />
            </Flex>
            {item.footer && (
              <Flex
                order={2}
                flex="1"
                pb={[12, 12, 20]}
                pt={[5, 5, 0]}
                align={["center", "center", "end", "end"]}
                textAlign={["center", "center", "end", "end"]}
                justify={["center", "center", "end", "end"]}
                direction={["column"]}
              >
                {item.footer?.body && (
                  <>
                    <Text fontSize="sm">{item.footer.body}</Text>
                    <Box w={["full", 400, 130]} py={4}>
                      <Divider
                        borderColor={useColorModeValue(
                          "blackAlpha.400",
                          "whiteAlpha.400",
                        )}
                      />
                    </Box>
                  </>
                )}

                <Wrap
                  spacing={2}
                  overflow="visible"
                  justify={["center", "center", "end", "end"]}
                >
                  {item.footer?.title && (
                    <WrapItem>
                      <Text as="span">{item.footer.title}</Text>
                    </WrapItem>
                  )}
                  {item.footer?.href && (
                    <WrapItem>
                      <Link
                        href={item.footer.href}
                        variant="underline"
                        colorScheme="orange"
                      >
                        Shop Now
                      </Link>
                    </WrapItem>
                  )}
                </Wrap>
              </Flex>
            )}
          </Stack>
        ))}
      </ChakraCarousel>
    </Box>
  );
};

const Banner = ({ items = [] }) => {
  return (
    <Box>
      <Container maxW="container.xl">
        <SimpleGrid
          columns={[1, 1, 2, 3]}
          spacingX={[10, 10, 16, 16]}
          spacingY={[5]}
        >
          {items.map((item) => (
            <HStack key={item.title} spacing={[5, 5, 5]} align="start">
              <Flex>{item.icon}</Flex>
              <Box flex="1">
                <Text as="h4" size="md" fontFamily="body" fontWeight="bold">
                  {item.title}
                </Text>
                <Text>{item.body}</Text>
              </Box>
            </HStack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

const Products = ({ items = [] }) => {
  return (
    <Box w="full">
      <SimpleGrid
        columns={[1, 1, 2, 4]}
        spacingX={[5, 5, 10]}
        spacingY={[5, 5, 10]}
      >
        {items.map((item) => (
          <ProductBox key={item.title} {...item} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

const ProductAccessory = ({ items = [] }) => {
  return (
    <Box w="full">
      <SimpleGrid
        columns={[1, 1, 2, 4]}
        spacingX={[5, 5, 10]}
        spacingY={[5, 5, 10]}
      >
        {items.map((item, idx) => (
          <ProductBoxAddToCart
            key={`ProductAccessory-${item.title}-${idx}`}
            {...item}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Home1Page;
