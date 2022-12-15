import {
  AiOutlineDislike,
  AiOutlineHeart,
  AiOutlineLike,
  BiSave,
  BsPlusCircleDotted,
  MdVerified,
} from "@react-icons";

import React, { useContext } from "react";

import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import ReactMarkdown from "react-markdown";
import { Components } from "react-markdown/lib/ast-to-react";

import { NextSeo } from "next-seo";

import { ChatIcon, EditIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Badge,
  Box,
  Button,
  chakra,
  Container,
  Divider,
  Flex,
  Heading,
  HStack,
  Icon,
  ListItem,
  Progress,
  Select,
  SimpleGrid,
  Stack,
  StackDivider,
  Text,
  Tooltip,
  type TooltipProps,
  useBreakpointValue,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";

import { ThemeColorContext } from "@definitions/context/theme";

import Image from "@components/image";
import { GalleryVertical } from "@components/image-gallerie";
import Price from "@components/price";
import { ColorPicker, QuantityPicker } from "@components/product-picker";
import Rating from "@components/rating";

interface I_ProductProps extends ProductDetailsProps {
  images: {
    title: string;
    image: string;
  }[];
}

interface ProductDetailsProps {
  title: string;
  body: string;
  colorOptions: {
    title: string;
    value: string;
    color: string;
  }[];
  price: number;
  sale_price?: number;
  maxQuantity?: number;
}

const ProductOverviewPage: React.FC = () => {
  const theme = useContext(ThemeColorContext);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const themeColorScheme = theme.colorScheme; // global default primary theme color

  // Product Details
  const price = 459.9;
  const sale_price = 299.9;
  const images = [
    {
      title: "Product 2-0",
      image: "/images/product-2-0.jpg",
    },
    {
      title: "Product 2-1",
      image: "/images/product-2-1.jpg",
    },
    {
      title: "Product 2-2",
      image: "/images/product-2-2.jpg",
    },
    {
      title: "Product 2-3",
      image: "/images/product-2-3.jpg",
    },
  ];
  const colorOptions = [
    {
      title: "Black",
      value: "black",
      color: "black",
    },
    {
      title: "Light Gray",
      value: "gray",
      color: "#778899",
    },
    {
      title: "Fire Brick Red",
      value: "red",
      color: "red.400",
    },
    {
      title: "Rosy Brown",
      value: "brown",
      color: "brown.400",
    },
    {
      title: "Amber",
      value: "amber",
      color: "amber.400",
    },
  ];

  return (
    <>
      <NextSeo
        title="Senco Product Overview"
        description="Senco React E-Commerce Product Overview"
      />
      <chakra.main pt={[28, 28, 32, 210]}>
        <VStack mb={32} spacing={32}>
          <Content
            title="Stylish and High-strength Tumbled Leather Drawstring Backpack"
            body={`Designed with simplicity and functionality in mind, the 12" Leather Drawstring Backpack is a great addition to any leather collection. When the leather drawstring is completely extended, the top can be opened up really wide so it's easy to dig through and find what you need.`}
            colorOptions={colorOptions}
            images={images}
            price={price}
            sale_price={sale_price}
          />
        </VStack>
      </chakra.main>
    </>
  );
};

const Content: React.FC<I_ProductProps> = ({
  title,
  body,
  colorOptions,
  images = [],
  price,
  sale_price,
}) => {
  return (
    <Box w="full">
      <Container maxW="container.xl">
        <VStack align="stretch" spacing={[10, 10, 28]}>
          <Stack direction={["column", "column", "row", "row"]} spacing={[10]}>
            <Flex flex="1">
              <GalleryVertical items={images} />
            </Flex>
            <ProductDetails
              title={title}
              body={body}
              price={price}
              sale_price={sale_price}
              colorOptions={colorOptions}
            />
          </Stack>
          <ProductOverview />
          <RelatedProducts />
          <Stack
            spacing={[5, 5, 5, 10]}
            align={["center", "center", "start"]}
            direction={["column", "column", "row"]}
            divider={<StackDivider />}
          >
            <RatingBreakdown />
            <Comments />
          </Stack>
        </VStack>
      </Container>
    </Box>
  );
};

const RelatedProducts = () => {
  const items = [
    {
      image: "/images/product-1.png",
      title: "Basic Medium Weight T-Shirt",
      price: 59.9,
      rating: 4,
    },
    {
      image: "/images/product-2.png",
      title: "Fire brick red Backpack",
      price: 459.9,
      sale_price: 299.9,
      rating: 5,
    },
    {
      image: "/images/product-3.png",
      title: "Oversized Sweatshirt",
      price: 119.9,
      // sale_price: 99.99,
      rating: 4,
    },
    {
      image: "/images/product-4.png",
      title: "Retro High-Top Sneakers",
      badge: "New",
      price: 149.9,
      // sale_price: 99.99,
      rating: 4,
    },
  ];
  return (
    <SimpleGrid spacing={[5, 5, 10, 10]} columns={[1, 1, 2, 4]}>
      {items.map((item, idx) => (
        <Box
          p={5}
          rounded="xl"
          pos="relative"
          borderWidth={"1px"}
          key={`related-products-${item.title}-${idx}`}
        >
          {(item.badge || item.sale_price) && (
            <HStack
              align="start"
              top={7}
              left={7}
              pos="absolute"
              zIndex="sticky"
            >
              {item.badge && (
                <Badge px={4} colorScheme="green" rounded="xl">
                  {item.badge}
                </Badge>
              )}
              {item.sale_price && (
                <Badge px={4} colorScheme="red" rounded="xl">
                  Sale
                </Badge>
              )}
            </HStack>
          )}
          <VStack spacing={[5]}>
            <Image
              overflow="hidden"
              flex="1"
              w="full"
              pos="relative"
              bg={useColorModeValue("gray.50", "gray.900")}
              rounded="xl"
              src={item.image}
              // layout="responsive"
              width={400}
              objectFit="cover"
              objectPosition="top"
              height={400}
              alt={item.title}
            />
            <Text>{item.title}</Text>
            <Price price={item.price} sale_price={item.sale_price} />
            <Rating value={item.rating} />
            <Button
              px={4}
              py={2}
              size="sm"
              variant="outline"
              colorScheme="gray"
              rounded="full"
            >
              View Product
            </Button>
          </VStack>
        </Box>
      ))}
    </SimpleGrid>
  );
};

const ProductDetails: React.FC<ProductDetailsProps> = ({
  title,
  body,
  colorOptions = [],
  price,
  sale_price,
  maxQuantity = 8,
}) => {
  const color = useColorModeValue("gray.600", "whiteAlpha.700");
  return (
    <VStack align="start" flex="1" spacing={[6]}>
      <Box>
        <Heading as="h2" mb="2">
          {title}
        </Heading>
        <Text fontSize="lg" color={color}>
          {body}
        </Text>
      </Box>
      <Box>
        <Text fontSize="lg" color="gray.500">
          Total price:
        </Text>
        <Price price={price} sale_price={sale_price} />
      </Box>
      <Stack w="full" direction={["column", "row", "row"]}>
        <QuantityPicker maxQuantity={maxQuantity} />
        <ColorPicker
          p={2}
          circleSize={5}
          rounded="lg"
          width="full"
          maxW="320px"
          borderWidth="1px"
          options={colorOptions}
        />
        {/* <ProductPickerBox
          name="size"
          suffix="mm"
          options={[
            { title: "32", value: "32" },
            { title: "34", value: "34" },
            { title: "36", value: "36" },
          ]}
          p={2}
          rounded="lg"
          borderWidth="1px"
          w="full"
          maxW="320px"
        /> */}
      </Stack>
      <Stack
        width="full"
        align="center"
        justify="space-between"
        direction={["column", "row", "row"]}
      >
        <Stack direction={["column", "row", "row"]}>
          <Button
            colorScheme="gray"
            // size="lg"
            variant="ghost"
            leftIcon={<Icon as={BiSave} />}
          >
            Save later
          </Button>
          <Button
            colorScheme="gray"
            // size="lg"
            variant="ghost"
            leftIcon={<Icon as={AiOutlineHeart} />}
          >
            Whislist
          </Button>
        </Stack>
        <Button
          width={["full", 290, 290]}
          leftIcon={<Icon as={BsPlusCircleDotted} />}
          size="lg"
        >
          Add to cart
        </Button>
      </Stack>
      <HStack width="full" justify="center">
        <Text fontWeight={500}>Need Help?</Text>{" "}
        <Button leftIcon={<ChatIcon />} variant="ghost">
          Live Chat
        </Button>
      </HStack>
    </VStack>
  );
};

const ProductOverview = () => {
  const items = [
    {
      title: "Design",
      body: "As popular off field as they are on, New Era caps are standard issue amongst those with a passion for street culture, blending progressive styles with carefully crafted design. Known for their innovative use of colour, bold designs are added season upon season, referencing everything.",
    },
    {
      title: "Materials",
      body: "We only use real full-grain leather. It’s the toughest leather we can find. It doesn’t have any of the top layers shaved off, which is what most other companies do to get rid of scarring/marking or brands that a hide may have.",
    },
    {
      title: "What It Fits",
      body: `- 13” Macbook Air\n- Small Leather Portfolio\n- Leather 7-Ring Binder\n- Large Leather Moleskine Cover`,
    },
    {
      title: "Product Specs",
      body: `- 10-Year Warranty\n- 13”H  x 10”W x 6.5”D\n- Inside Pocket: 11”H x 9”W\n- Weight: 2.45 lbs.`,
    },
  ];

  return (
    <Box>
      <VStack align="stretch">
        <Heading as="h3" fontSize="2xl" mb={4}>
          Product Overview
        </Heading>
        <SimpleGrid columns={[1, 1, 2, 2]} spacing={[10]}>
          {items.map((item, idx) => (
            <Box key={`product-overview${item.title}-${idx}`}>
              <Text fontSize="lg" fontWeight={500} mb={2}>
                {item.title}
              </Text>
              <ContentMDX>{item.body}</ContentMDX>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Box>
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ContentMDX = (props: any) => {
  const textStyle = {
    color: useColorModeValue("gray.600", "gray.400"),
  };

  interface Defaults extends Components {
    heading?: Components["h1"];
  }

  const CustomMarkdownTheme: Defaults = {
    p: (props) => {
      const { children } = props;
      return <Text {...textStyle}>{children}</Text>;
    },
    li: (props) => {
      const { children } = props;
      return <ListItem {...textStyle}>{children}</ListItem>;
    },
  };
  const { children } = props;
  return (
    <ReactMarkdown
      components={ChakraUIRenderer(CustomMarkdownTheme)}
      children={children}
    />
  );
};

const RatingBreakdown = () => {
  const ratings = [
    {
      rate: 5,
      count: 165,
    },
    {
      rate: 4,
      count: 100,
    },
    {
      rate: 3,
      count: 35,
    },
    {
      rate: 2,
      count: 10,
    },
    {
      rate: 1,
      count: 5,
    },
  ];

  const buttonSizes = useBreakpointValue({
    base: "md",
    sm: "sm",
    md: "xs",
  });

  const total = ratings
    .map((i) => i.count)
    .reduce((total, count) => total + count);

  const calcRating =
    ratings
      .map((i) => i.rate * i.count)
      .reduce((total, value) => total + value) / total;

  return (
    <VStack
      spacing={[5]}
      align="stretch"
      w="full"
      minW={["full", 320, 320]}
      maxW={360}
    >
      <Box p={4} bg="brand.400" rounded="xl" color="white">
        <HStack align="center" justify="center" spacing={[5]}>
          <Text fontSize="6xl" fontWeight={600}>
            {calcRating.toFixed(1)}
          </Text>
          <Flex align="center" direction="column">
            <Rating value={calcRating} />
            <Text>{total} reviews</Text>
          </Flex>
        </HStack>
      </Box>
      <Text fontSize="xl" fontWeight={600}>
        Rating breakdown
      </Text>
      <VStack w="full" align="stretch">
        {ratings.map((rating) => (
          <HStack key={`rating-breakdown-${rating.rate}`} align="center">
            <Text pr={4}>{rating.rate} stars</Text>
            <Progress
              size="sm"
              rounded="xl"
              flex="2"
              w="full"
              value={(rating.count * 100) / 287}
            />
            <Text minW={10} align="end">
              {rating.count}
            </Text>
          </HStack>
        ))}
      </VStack>

      <Divider />

      <Stack w="full" direction={["column", "column", "row"]}>
        <Stack
          w="full"
          justify="space-between"
          align="center"
          direction={["column", "row", "row"]}
        >
          <Text fontWeight={500} fontSize="md">
            Recommend the product
          </Text>
          <Stack align="center" direction={["row"]}>
            <Button
              minW={18}
              w="full"
              leftIcon={<AiOutlineLike />}
              size={buttonSizes}
              variant="outline"
              // colorScheme="green"
            >
              Yes
            </Button>
            <Button
              minW={18}
              w="full"
              leftIcon={<AiOutlineDislike />}
              size={buttonSizes}
              variant="outline"
              colorScheme="gray"
            >
              No
            </Button>
          </Stack>
        </Stack>
      </Stack>
      <Divider />
      <Button size="jumbo" leftIcon={<EditIcon />} variant="ghost">
        Write a review
      </Button>
    </VStack>
  );
};

const Comments = () => {
  const items = [
    {
      rating: 5,
      name: "Tina Harris",
      image: "/images/avatar-f-1.jpg?width=32&height=32",
      meta: { date: "June 4, 2022" },
      body: "I loved this bag. The leather feels amazing, I have several other bags from senco but the tumbled leather really differentiates this bag. It looks fantastic and is super functional. Perfect size to throw all of my essentials in and head out.",
      verified: true,
      feedback: [54, 17], // [yes,no] feedback for comments
    },
    {
      rating: 5,
      name: "Sophia",
      meta: { date: "May 13, 2022" },
      body: "Tumbled leather really makes this bag stand out. It looks great and you realize it's a super functional bag as you use it.",
      verified: false,
      feedback: [21, 7], // [yes,no] feedback for comments
    },
    {
      rating: 3,
      name: "Julia Almeida",
      meta: { date: "April 21, 2022" },
      body: "I loved the product quality and the softness of the leather. Ideal for daily use, but the pockets could have been a little bigger.",
      verified: true,
      feedback: [1, 0], // [yes,no] feedback for comments
    },
    {
      rating: 4,
      name: "James Booker",
      image: "/images/avatar-m-1.jpg?width=32&height=32",
      meta: { date: "April 10, 2022" },
      body: "I bought this product as a gift for my wife and she absolutely loved it. Actually, I wanted to buy the khaki color, but because it was out of stock, I chose fire brick red, I hope the stocks will be renewed as soon as possible.",
      verified: true,
      feedback: [4, 1], // [yes,no] feedback for comments
    },
  ];

  // Colors
  const bodyColor = useColorModeValue("gray.600", "whiteAlpha.600");
  const feedbackButtonColor = useColorModeValue("gray.600", "whiteAlpha.600");
  const toolTipStyles = {
    isOpen: useBreakpointValue({ base: false, sm: true }),
    bg: useColorModeValue("gray.100", "gray.700"),
    color: useColorModeValue("gray.500", "whiteAlpha.600"),
    hasArrow: true,
    placement: useBreakpointValue({ base: "bottom", sm: "right" }),
    boxShadow: "none",
  };
  return (
    <VStack align="stretch" spacing={[5]} divider={<StackDivider />}>
      <VStack align="stretch" spacing={[10]}>
        <Flex align="center" justify="space-between">
          <Text width="full" fontSize="xl" fontWeight={600}>
            Reviews
          </Text>
          <Flex>
            <Select
              variant="unstyled"
              placeholder="Reviews to show"
              defaultValue={"recent"}
            >
              <option value="recent">Most recent</option>
              <option value="helpfull">Helpfull</option>
              <option value="highest">Highest rating</option>
              <option value="lowest">Lowest rating</option>
            </Select>
          </Flex>
        </Flex>
      </VStack>
      {items.map((item, idx) => (
        <VStack
          key={`product-review-${idx}`}
          align={["center", "stretch", "stretch"]}
          spacing={5}
        >
          <Stack
            align="center"
            justify={["center", "space-between", "space-between"]}
            direction={["column-reverse", "row", "row"]}
          >
            <Stack align="center" direction={["column", "row", "row"]}>
              <Avatar as={Box} size="sm" name={item.name} src={item.image} />
              <Text fontWeight={700}>{item.name}</Text>
              {item.verified && (
                <Tooltip
                  label="Verified Purchase"
                  {...(toolTipStyles as TooltipProps)}
                >
                  <Flex align="center">
                    <Icon w={5} h={5} as={MdVerified} color="brand.400" />
                  </Flex>
                </Tooltip>
              )}
            </Stack>
            <Text color={bodyColor}>{item.meta?.date}</Text>
          </Stack>
          <Text color={bodyColor}>{item.body}</Text>
          <Rating value={item.rating} />
          <Stack align="center" direction={["column", "row", "row", "row"]}>
            <Text color={bodyColor} fontSize="xs">
              Was this helpful ?
            </Text>
            <Button
              color={feedbackButtonColor}
              colorScheme="gray"
              leftIcon={<AiOutlineLike />}
              size="xs"
              variant="outline"
            >
              Yes{" "}
              {!!item.feedback[0] && (
                <Text as="span" ml={1}>
                  ({item.feedback[0]})
                </Text>
              )}
            </Button>
            <Button
              color={feedbackButtonColor}
              colorScheme="gray"
              leftIcon={<AiOutlineDislike />}
              size="xs"
              variant="outline"
            >
              No{" "}
              {!!item.feedback[1] && (
                <Text as="span" ml={1}>
                  ({item.feedback[1]})
                </Text>
              )}
            </Button>
          </Stack>
        </VStack>
      ))}
    </VStack>
  );
};

export default ProductOverviewPage;
