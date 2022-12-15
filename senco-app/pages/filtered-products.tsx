import {
  BsFillBookmarkCheckFill,
  BsPercent,
  FaHeart,
  FaRegBookmark,
  FaRegHeart,
  FaShippingFast,
  IoFilterSharp,
  MdPriceCheck,
} from "@react-icons";

import React, { memo, useContext, useEffect, useRef, useState } from "react";

import { IconType } from "react-icons-all";

import { NextSeo } from "next-seo";

import { ChevronRightIcon, SearchIcon } from "@chakra-ui/icons";
import {
  AspectRatio,
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  chakra,
  type ChakraProps,
  Checkbox,
  Circle,
  Container,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  Flex,
  HStack,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Select,
  SimpleGrid,
  Skeleton,
  SkeletonText,
  Stack,
  StackDivider,
  type StackProps,
  Tag,
  TagLabel,
  TagLeftIcon,
  Text,
  type ThemingProps,
  useColorModeValue,
  useDisclosure,
  VStack,
  Wrap,
} from "@chakra-ui/react";

import { ThemeColorContext } from "@definitions/context/theme";

import Image from "@components/image";
import Price from "@components/price";
import {
  ColorPicker,
  PricerangePicker,
  ProductPickerBox,
} from "@components/product-picker";
import Rating from "@components/rating";

const FilteredProductsPage: React.FC = () => {
  const theme = useContext(ThemeColorContext);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const themeColorScheme = theme.colorScheme; // global default primary theme color
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <NextSeo
        title="Filtered Products"
        description="Senco React E-Commerce Website Template"
      />
      <chakra.main pt={88}>
        <PageBreadcrumb />
        <Banner body="Seasonal sale! Save 30% on all sweaters. Free shipping for all orders over $100 🎉" />
        <Container maxW="container.xl">
          <VStack
            align="stretch"
            width="full"
            mt={[10, 10, 20]}
            mb={[10, 10, 32]}
            spacing={[5, 5, 10, 20]}
          >
            <Stack
              align="baseline"
              direction={["column-reverse", "column-reverse", "row"]}
              width="full"
              spacing={[10, 10, 5, 10]}
              divider={<StackDivider display={{ base: "none", md: "block" }} />}
            >
              <FilterBlock display={{ base: "none", md: "block" }} />
              <VStack align="stretch" flex="1" width="full" spacing={[10]}>
                <PageContentHeader onOpen={onOpen} />
                <PageContent />
              </VStack>
            </Stack>
          </VStack>
        </Container>
        <Drawer isOpen={isOpen} placement="bottom" onClose={onClose}>
          {/* <DrawerOverlay /> */}
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Filter by</DrawerHeader>
            <DrawerBody>
              <FilterBlock />
            </DrawerBody>

            <DrawerFooter>
              <Button variant="outline" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button>Apply</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </chakra.main>
    </>
  );
};

interface BlockProps extends ChakraProps, ThemingProps {
  //
}

const Banner = ({ body }: { body: string }) => {
  const bg = useColorModeValue("brand.400", "brand.800");
  const color = useColorModeValue("white", "whiteAlpha.800");
  return (
    <Box py={3} bg={bg} color={color}>
      <Container maxW="container.xl">
        <VStack>
          <Text dangerouslySetInnerHTML={{ __html: body }} />
        </VStack>
      </Container>
    </Box>
  );
};

const PageContentHeader = ({ onOpen }: { onOpen: () => void }) => {
  return (
    <Stack
      align={["stretch", "stretch", "center"]}
      direction={["column", "column", "row"]}
      justify="space-between"
    >
      <Text fontSize="2xl" as="h2" fontWeight="semibold">
        Filtered Products{" "}
        <Text as="span" color="gray.500" fontSize="sm">
          (300 items)
        </Text>
      </Text>
      <Stack
        direction={["column", "row", "row"]}
        align="stretch"
        justify="space-between"
      >
        <Button
          size="sm"
          alignItems="center"
          colorScheme="white"
          onClick={onOpen}
          flexShrink={0}
          display={["flex", "flex", "none"]}
          leftIcon={<Icon as={IoFilterSharp} />}
        >
          Filter
        </Button>
        <Flex align="center">
          <Text flexShrink={0} color="gray.500" fontSize="sm" mr={2}>
            Sort by
          </Text>
          <Select defaultValue="best-seller" aria-label="Sort by" size="sm">
            <option value="best-seller">Best Seller</option>
            <option value="best-match">Best Match</option>
            <option value="low-to-high">Price: Low to High</option>
            <option value="high-to-low">Price: High to Low</option>
          </Select>
        </Flex>
      </Stack>
    </Stack>
  );
};

const PageContent = () => {
  const items = [
    {
      title: "Nike Air Jordan 1 Retro High OG",
      variants: [
        {
          title: "Black/Red",
          bg: "red.400",
          bgGradient: "linear(to-l, red.500, red.900)",
        },
      ],
      images: ["https://source.unsplash.com/DYEoijk5rBU"],
      price: 249.9,
      sale_price: 189.99,
      rating: 4.35,
      rating_count: 173,
      tags: [
        { icon: FaShippingFast, label: "Free Shipping", colorScheme: "red" },
      ],
      metadata: [
        {
          key: "Model",
          value: "RKB001",
        },
        {
          key: "SKU",
          value: "6487406",
        },
      ],
    },
    {
      title: "Polaroid - Now Instant Film Camera Bundle-",
      variants: [
        {
          title: "Gray",
          bg: "gray.600",
        },
        {
          title: "White",
          bg: "white",
          shadow: "0px 0px 2px rgba(0, 0, 0, 0.5)",
        },
      ],
      images: [
        "https://source.unsplash.com/KsLPTsYaqIQ",
        "https://source.unsplash.com/beYOfeTV5Zo",
        "https://source.unsplash.com/XeHejTi3bbk",
        "https://source.unsplash.com/OIFgeLnjwrM",
      ],
      price: 149.9,
      rating: 4.7,
      rating_count: 294,
      tags: [
        { icon: MdPriceCheck, label: "Best Price", colorScheme: "indigo" },
      ],
      metadata: [
        {
          key: "Model",
          value: "W9027/A",
        },
        {
          key: "SKU",
          value: "6404348",
        },
      ],
    },
    {
      title:
        "Apple Watch Series 8 GPS 45mm Midnight Aluminum Case with Midnight Sport Band - Midnight",
      variants: [
        {
          title: "Midnight",
          bg: "gray.600",
        },
      ],
      images: [
        "https://source.unsplash.com/hbTKIbuMmBI",
        "https://source.unsplash.com/2wFoa040m8g",
        "https://source.unsplash.com/HM-Y497t5CU",
      ],
      price: 429,
      rating: 4.6,
      rating_count: 192,
      metadata: [
        {
          key: "Model",
          value: "A3534",
        },
        {
          key: "SKU",
          value: "9689313",
        },
        {
          key: "Size",
          value: "45mm",
        },
        {
          key: "Color",
          value: "Midnight",
        },
      ],
    },
    {
      title:
        "Sony - Hesh ANC - Over the Ear - Noise Canceling Wireless Headphones",
      variants: [
        {
          title: "True Black",
          bg: "gray.800",
        },
        {
          title: "Rose Gold",
          bg: "red.100",
        },
      ],
      images: ["https://source.unsplash.com/LSNJ-pltdu8"],
      price: 349.99,
      sale_price: 229.99,
      rating: 4.1,
      rating_count: 92,
      tags: [{ icon: BsPercent, label: "Save $120", colorScheme: "green" }],
      metadata: [
        {
          key: "Model",
          value: "A12344",
        },
        {
          key: "SKU",
          value: "0011871",
        },
        {
          key: "Color",
          value: "True Black",
        },
      ],
    },
    {
      title: "Apple - Pre-Owned iPhone XS 64GB (Unlocked)",
      variants: [
        {
          title: "Silver",
          bg: "gray.300",
        },
        {
          title: "Space Gray",
          bg: "blackAlpha.800",
        },
        {
          title: "White",
          bg: "white",
          shadow: "0px 0px 2px rgba(0, 0, 0, 0.5)",
        },
        {
          title: "Gold",
          bg: "yellow.100",
          bgGradient: "linear(to-l, yellow.100, amber.300)",
        },
      ],
      images: ["https://source.unsplash.com/sPBRRwT_fKA"],
      price: 449.99,
      sale_price: 429.99,
      rating: 4.7,
      rating_count: 792,
      // tags: [{ icon: BsPercent, label: "Save $20", colorScheme: "pink" }],
      metadata: [
        {
          key: "Model",
          value: "A987651",
        },
        {
          key: "SKU",
          value: "00987654",
        },
        {
          key: "Memory",
          value: "64GB",
        },
      ],
    },
    {
      title: "Ray-Ban - Clubmaster classic polarized",
      variants: [
        {
          title: "Silver",
          bg: "gray.300",
        },
        {
          title: "Space Gray",
          bg: "blackAlpha.800",
        },
      ],
      images: ["https://source.unsplash.com/lSl94SZHRgA"],
      price: 129.99,
      sale_price: 99.99,
      rating: 4.4,
      rating_count: 72,
      // tags: [{ icon: BsPercent, label: "Save $20", colorScheme: "pink" }],
      metadata: [
        {
          key: "Model",
          value: "A987651",
        },
        {
          key: "SKU",
          value: "00987654",
        },
        {
          key: "Lenses",
          value: "Polarized",
        },
        {
          key: "Frame",
          value: "55mm",
        },
      ],
    },
  ];

  return (
    <SimpleGrid columns={[1, 2, 2, 2, 3]} spacing={[5, 5, 5, 10]}>
      {items.map((item, idx) => (
        <ProductSkeleton key={item.title + idx} {...item} />
      ))}
    </SimpleGrid>
  );
};

interface ITag extends ChakraProps, ThemingProps {
  label: string;
  icon: IconType;
}

interface IProductProps {
  variants?: IVariantItem[];
  tags?: ITag[];
  images: string[];
  title: string;
  price: number;
  sale_price?: number;
  rating?: number;
  rating_count?: number;
  metadata?: { key: string; value: string }[];
}

const ProductSkeleton: React.FC<IProductProps> = ({
  variants = [],
  tags = [],
  images = [],
  title,
  price,
  sale_price,
  rating,
  rating_count,
  metadata = [],
}) => {
  const [loaded, setLoaded] = useState(false);
  const [active, setActive] = useState(0);

  const bgColor = useColorModeValue("gray.50", "gray.700");
  const hoverColor = useColorModeValue("gray.600", "white");

  // dummy - Product skeleton pre-loader function for tests
  useEffect(() => {
    // Random timeout between 3s and 9s
    const random = () => Math.floor(Math.random() * (9 - 3 + 1)) + 3;

    const loadedTimeout = setTimeout(() => setLoaded(true), random() * 1000);
    return () => clearTimeout(loadedTimeout);
  }, []);
  // @end dummy

  const ImageClickHandler = () =>
    // e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    {
      const i = (active + 1) % images.length;
      setActive(i);
    };

  return (
    <Flex
      align="start"
      width="full"
      direction="column"
      transitionProperty="all"
      transitionDuration="normal"
      transitionTimingFunction="ease-in-out"
      outline="0px solid"
      outlineColor="transparent"
      rounded="xl"
      _hover={{
        bg: bgColor,
        color: hoverColor,
        outlineStyle: "solid",
        outlineWidth: [10, 10, 10, 20],
        outlineColor: bgColor,
      }}
      sx={{
        "& > *": {
          mb: 3,
        },
      }}
    >
      <Skeleton isLoaded={loaded} width="full" rounded="md">
        <Box pos="relative" width="full" maxW="container.xl">
          <VStack
            zIndex={2}
            pos="absolute"
            align="start"
            left={2}
            top={2}
            spacing={0.5}
          >
            {tags.map((tag, idx) => (
              <Tag
                key={tag.label + idx}
                rounded="md"
                fontSize="xs"
                variant="solid"
                colorScheme={tag.colorScheme}
              >
                <TagLeftIcon boxSize={4} as={tag.icon} />
                <TagLabel>{tag.label}</TagLabel>
              </Tag>
            ))}
          </VStack>

          <AspectRatio
            onClick={images.length > 1 ? () => ImageClickHandler() : null}
            ratio={1}
          >
            <Image
              key={`product-image-${images[active]}`}
              rounded="md"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              alt={title}
              src={images[active]}
            />
          </AspectRatio>

          {images.length > 1 && (
            <Stack
              direction="column-reverse"
              pos="absolute"
              spacing={0.5}
              bottom={2}
              left={2}
            >
              {Array(images.length)
                .fill(null)
                .map((_, idx) => (
                  <Circle
                    key={`${title}-image-${idx}`}
                    onClick={() => setActive(idx)}
                    size={2}
                    bg={idx == active ? "white" : "whiteAlpha.400"}
                    shadow="md"
                  />
                ))}
            </Stack>
          )}

          <VariantsBlock
            p={1}
            bg="whiteAlpha.800"
            color="gray.800"
            rounded="md"
            pos="absolute"
            bottom={2}
            right={2}
            items={variants}
          />
        </Box>
      </Skeleton>

      <Skeleton width="full" isLoaded={loaded}>
        <Stack
          width="full"
          direction={"row"}
          align="center"
          justify="space-between"
        >
          <Flex>
            <Rating fontSize="xs" value={rating} />
            <Text
              ml={2}
              color={useColorModeValue("blackAlpha.600", "whiteAlpha.700")}
              fontSize="xs"
            >
              {rating} {!!rating_count && `(${rating_count} Reviews)`}
            </Text>
          </Flex>
          <LikeButton />
        </Stack>
      </Skeleton>

      <SkeletonText noOfLines={2} isLoaded={loaded}>
        <Text noOfLines={2}>{title}</Text>
      </SkeletonText>

      <Wrap shouldWrapChildren fontSize="sm" fontFamily="body">
        {metadata.map((data, idx) => (
          <SkeletonText
            key={title + data.key + idx}
            noOfLines={1}
            isLoaded={loaded}
          >
            <Text>
              <Text as="span" fontWeight="semibold" mr={1}>
                {data.key}:
              </Text>
              {data.value}
            </Text>
          </SkeletonText>
        ))}
      </Wrap>
      <Wrap
        mt="auto"
        width="full"
        align="center"
        direction={["row"]}
        justify="space-between"
        shouldWrapChildren
      >
        <Skeleton isLoaded={loaded}>
          <Price fontSize="lg" price={price} sale_price={sale_price} />
        </Skeleton>
        {/* <Skeleton isLoaded={loaded}>
          <Button rounded="md" size="sm" variant="outline">
            Add to Cart
          </Button>
        </Skeleton> */}
      </Wrap>
    </Flex>
  );
};

interface IVariantItem extends BlockProps {
  title: string;
}

const VariantsBlock: React.FC<
  { variant?: string; items: IVariantItem[] } & BlockProps
> = ({ variant, items, ...rest }) => {
  return (
    <>
      {items && (
        <Box {...rest}>
          <HStack spacing={-1}>
            {items.map(({ title, ...rest }, idx) => (
              <Circle
                key={title + idx}
                title={title}
                outline="1px solid white"
                size={3}
                {...rest}
              />
            ))}
            <Box>
              <Text pl={2} fontSize="xs">
                {items.length} {variant}
              </Text>
            </Box>
          </HStack>
        </Box>
      )}
    </>
  );
};

const LikeButton = () => {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [message, setMessage] = useState<string | boolean>(false);

  const prevLikedRef = useRef<boolean>();
  const prevSavedRef = useRef<boolean>();

  useEffect(() => {
    if (liked) setMessage("Liked");
    if (!liked && prevLikedRef.current) setMessage("");
    prevLikedRef.current = liked;
    const likedTimeout = setTimeout(() => setMessage(false), 3000);
    return () => clearTimeout(likedTimeout);
  }, [liked]);

  useEffect(() => {
    if (saved) setMessage("Bookmarked");
    if (!saved && prevSavedRef.current) setMessage("Removed");
    prevSavedRef.current = saved;
    const savedTimeout = setTimeout(() => setMessage(false), 3000);
    return () => clearTimeout(savedTimeout);
  }, [saved]);

  const color = useColorModeValue("blackAlpha.600", "whiteAlpha.600");

  const btnStyle = {
    display: "inline-flex",
    variant: "unstyled",
    minWidth: "auto",
    height: "auto",
    width: "auto",
    _hover: {
      transform: "scale(1.2)",
    },
    _active: {
      transform: "scale(0.9)",
    },
  };

  const messageStyle = {
    right: "100%",
    top: "50%",
    transform: "translateY(-50%)",
    fontSize: "xs",
    lineHeight: 1,
    bg: "white",
    color: "gray.800",
    rounded: "md",
    py: 1,
    px: 2,
    shadow: "md",
  };

  return (
    <Stack pos="relative" direction="row" spacing={1}>
      {message && (
        <Text pos="absolute" {...messageStyle}>
          {message}
        </Text>
      )}
      <IconButton
        aria-label="Like product"
        icon={
          liked ? (
            <Icon color="red.400" as={FaHeart} />
          ) : (
            <Icon color={color} as={FaRegHeart} />
          )
        }
        {...btnStyle}
        onClick={() => setLiked(!liked)}
      />
      <IconButton
        aria-label="Save product"
        icon={
          saved ? (
            <Icon color="green.400" as={BsFillBookmarkCheckFill} />
          ) : (
            <Icon color={color} as={FaRegBookmark} />
          )
        }
        {...btnStyle}
        onClick={() => setSaved(!saved)}
      />
    </Stack>
  );
};

const PageBreadcrumb = memo(() => {
  const bg = useColorModeValue("gray.100", "gray.700");
  return (
    <Box bg={bg} py={5}>
      <Container maxW="container.xl">
        <Breadcrumb
          spacing="8px"
          separator={<ChevronRightIcon color="gray.500" />}
        >
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Home</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="#">Store</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <Text>Filtered Products</Text>
          </BreadcrumbItem>
        </Breadcrumb>
      </Container>
    </Box>
  );
});

const FilterBlock: React.FC<ChakraProps & ThemingProps & StackProps> = (
  props,
) => {
  const inputBg = useColorModeValue("white", "gray.900");
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

  const brands = [
    {
      title: "Adidas",
      sum: 21,
    },
    {
      title: "Nike",
      sum: 12,
    },
    {
      title: "Reebok",
      sum: 5,
    },
    {
      title: "Puma",
      sum: 8,
    },
    {
      title: "New Balance",
      sum: 11,
    },
    {
      title: "Fila",
      sum: 13,
    },
    {
      title: "Converse",
      sum: 29,
    },
    {
      title: "Under Armour",
      sum: 18,
    },
  ];

  return (
    <VStack
      align="stretch"
      spacing={[4]}
      maxW={["full", "full", 200, 290]}
      {...props}
    >
      <VStack align="stretch">
        <Box>
          <Text fontWeight="bold" mb={4}>
            Gender
          </Text>
        </Box>
        <Checkbox>Men</Checkbox>
        <Checkbox>Women</Checkbox>
        <Checkbox>Unisex</Checkbox>
      </VStack>
      <ProductPickerBox
        name="size"
        suffix="mm"
        options={[
          { title: "32", value: "32" },
          { title: "34", value: "34" },
          { title: "36", value: "36" },
        ]}
      />
      <ColorPicker circleSize={8} options={colorOptions} />
      <VStack align="stretch">
        <Box>
          <Text fontWeight="bold" mb={4}>
            Brand
          </Text>
        </Box>
        <Box>
          <InputGroup mb={2}>
            <Input bg={inputBg} placeholder="Search..." />
            <InputRightElement children={<SearchIcon color="gray.500" />} />
          </InputGroup>
        </Box>
        <VStack align="stretch" spacing={2}>
          {brands.map((item) => (
            <Checkbox key={`brand-${item.title}-checkbox`}>
              {item.title}
              {item.sum && (
                <Text
                  as="span"
                  color="gray.500"
                  fontWeight="semibold"
                  fontSize="xs"
                  pl={1}
                >
                  ({item.sum})
                </Text>
              )}
            </Checkbox>
          ))}
        </VStack>
      </VStack>
      <Box>
        <Text mb={4} fontWeight="bold">
          Price range
        </Text>
        <PricerangePicker />
      </Box>
    </VStack>
  );
};

export default FilteredProductsPage;
