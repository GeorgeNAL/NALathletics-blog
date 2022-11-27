import React, { useContext, useState } from "react";

import { NextSeo } from "next-seo";
import NextLink from "next/link";

import {
  AspectRatio,
  Avatar,
  Box,
  Button,
  Center,
  chakra,
  type ChakraProps,
  Circle,
  Container,
  Flex,
  Heading,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  LinkBox,
  LinkOverlay,
  SimpleGrid,
  Stack,
  Text,
  type ThemingProps,
  useColorModeValue,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

import { ThemeColorContext } from "@definitions/context/theme";
import { timeAgo } from "@definitions/utils/time-ago";

import Image from "@components/image";

import CTABlock from "@blocks/cta";

const Blog1Page: React.FC = () => {
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
        <VStack spacing={[10, 20, 32]}>
          <HeroBlock pt={28} pb={28} />
          <OverlayBlogPostsBlock />
          <NewsletterBlock />
          <FilteredBlogsBlock />
          <UpcomingEvents />

          <Box width="full" pos="relative">
            <Container pos="relative" zIndex={1} maxW="container.xl">
              <CTABlock
                title="Turn Your Social Into A Power Source"
                subtitle="Connect with all of your social networks in one place"
                maxW="container.xl"
                width="full"
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

const HeroBlock: React.FC<BlockProps> = (props) => {
  const heading = "clamp(2.5rem, 5vw, 10rem)";
  const bg = useColorModeValue("gray.100", "gray.900");
  return (
    <Box width="full" bg={bg} {...props}>
      <Container maxW="container.xl">
        <VStack textAlign="center">
          <Heading fontSize={heading} data-aos="fade-up" data-aos-delay={0}>
            New insights from
            <chakra.br display={["none", "block", "block"]} /> experts every
            week.
          </Heading>

          <Text
            maxW={600}
            fontSize="xl"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            Be sure to visit our blog every day for the latest updates and
            carefully selected resources.
          </Text>
        </VStack>
      </Container>
    </Box>
  );
};

const OverlayBlogPostsBlock = () => {
  const items = [
    {
      href: "#1",
      title: "Tityre, tu patulae recubans sub tegmine fagi  dolor.",
      subtitle: "Marketing",
      body: "Quo usque tandem abutere, Catilina, patientia nostra? Non equidem invideo, miror magis posuere velit aliquet.",
      avatar: "/images/avatar-m-1.jpg",
      author: "Edward Hickson",
      meta: {
        date: "2022-08-31T15:00:00+0300",
        info: "7 minutes read",
      },
      image: "https://source.unsplash.com/p74ndnYWRY4",
    },
    {
      href: "#2",
      title:
        "Design thinking is a human-centered approach to innovation that leverages the designer's toolkit to integrate the needs of people, the possibilities of technology and the requirements of business success.",
      subtitle: "Design",
      body: "Design thinking is a human-centered approach to innovation that leverages the designer's toolkit to integrate the needs of people, the possibilities of technology and the requirements of business success.",
      avatar: "/images/avatar-f-1.jpg",
      author: "Jaclyn Williams",
      meta: { date: "2022-08-20T12:30:00+0300", info: "3 minutes read" },
      image: "https://source.unsplash.com/V4EOZj7g1gw",
    },
    {
      href: "#3",
      title: "At nos hinc posthac, sitientis piros Afros.",
      subtitle: "Photography",
      body: "Vivamus sagittis lacus vel augue laoreet rutrum faucibus. Quisque placerat facilisis egestas cillum dolore.",
      avatar: "/images/avatar-m-2.jpg",
      author: "Donald Chandler",
      meta: { date: "2022-08-10T18:45:00+0300", info: "11 minutes read" },
      image: "https://source.unsplash.com/6GZpUJmhOIs",
    },
  ];
  return (
    <Container maxW="container.xl">
      <VStack spacing={20}>
        <Heading size="2xl" data-aos="fade-up" data-aos-delay={0}>
          The most popular content this week
        </Heading>
        <Stack direction={["column", "column", "row"]} w="full" spacing={10}>
          <OverlayBlogPostBlock
            flex={1}
            data-aos="fade-up"
            data-aos-delay={100}
            {...items[0]}
          />
          <Stack flex={1} spacing={10}>
            <OverlayBlogPostBlock
              data-aos="fade-up"
              data-aos-delay={150}
              {...items[1]}
            />
            <OverlayBlogPostBlock
              data-aos="fade-up"
              data-aos-delay={200}
              {...items[2]}
            />
          </Stack>
        </Stack>
      </VStack>
    </Container>
  );
};

interface IOverlayBlogPostBlockProps extends BlockProps {
  title: string;
  subtitle: string;
  body: string;
  avatar: string;
  image: string;
  author: string;
  meta: {
    date: string;
    info: string;
  };
  href: string;
}

const OverlayBlogPostBlock: React.FC<IOverlayBlogPostBlockProps> = ({
  title,
  subtitle,
  body,
  image,
  avatar,
  author,
  meta,
  href,
  bg,
  color,
  opacity,
  borderColor,
  ...rest
}) => {
  const textColor = color
    ? color
    : useColorModeValue("whiteAlpha.900", "whiteAlpha.800");
  const overlayBg = bg
    ? bg
    : useColorModeValue("blackAlpha.500", "blackAlpha.700");

  const defaultBorderColor = borderColor
    ? borderColor
    : useColorModeValue("gray.300", "gray.700");

  return (
    <LinkBox
      flex={1}
      pos="relative"
      as="article"
      borderWidth="1px"
      borderColor={defaultBorderColor}
      rounded="xl"
      overflow="hidden"
      // role="group"
      data-group
      {...rest}
    >
      <Box
        pos="absolute"
        width="full"
        height="full"
        sx={{ "& > div": { width: "full", height: "full" } }}
      >
        <Image
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          src={image}
          alt={title}
          transitionProperty="all"
          transitionDuration="1s"
          transitionTimingFunction="ease-in-out"
          _groupHover={{
            filter: "blur(30px)",
            transform: "scale(1) rotate(4deg)",
          }}
        />
      </Box>

      <Box
        width="full"
        height="full"
        _before={{
          content: "''",
          pos: "absolute",
          width: "full",
          height: "full",
          bg: overlayBg,
          opacity: opacity,
          zIndex: 1,
        }}
      >
        <Flex
          color={textColor}
          pos="relative"
          zIndex={1}
          p={5}
          direction="column"
          height="full"
          width="full"
        >
          <HStack mb={[10, 10, 20]}>
            <Avatar as={Box} src={avatar} name={author} />
            <Text fontWeight="bold" fontSize="lg">
              {author}
            </Text>
          </HStack>
          <VStack align="stretch" mt="auto">
            <Text color={textColor} variant="subtitle">
              {subtitle}
            </Text>
            <Heading as="h3" fontFamily="body" size="lg" noOfLines={2}>
              <NextLink href={href} passHref>
                <LinkOverlay href="#">{title}</LinkOverlay>
              </NextLink>
            </Heading>
            <Text noOfLines={2} fontSize="lg">
              {body}
            </Text>
            <Box as="time" dateTime={meta.date}>
              {timeAgo(meta.date)} - {meta.info}
            </Box>
          </VStack>
        </Flex>
      </Box>
    </LinkBox>
    // </Box>
  );
};

const NewsletterBlock: React.FC<BlockProps> = ({ bg }) => {
  const bgColor = bg ? bg : useColorModeValue("gray.100", "gray.900");
  return (
    <Box width="full" bg={bgColor} py={[10, 10, 20]}>
      <Container maxW="container.xl">
        <Stack
          spacing={[10, 10, 20]}
          align="center"
          direction={["column", "column", "row"]}
        >
          <VStack
            flex="1"
            align={["center", "center", "stretch"]}
            textAlign={["center", "center", "start"]}
          >
            <Text variant="subtitle" data-aos="fade-up" data-aos-delay={0}>
              Newsletter
            </Text>
            <Text
              fontWeight="bold"
              fontSize="5xl"
              lineHeight={1.1}
              data-aos="fade-up"
              data-aos-delay={100}
            >
              Enter email to subscribe to our newsletter.
            </Text>
          </VStack>
          <Flex flex={1}>
            <InputGroup size="lg" data-aos="fade-up" data-aos-delay={200}>
              <Input
                bg={useColorModeValue("white", "gray.700")}
                pr="12rem"
                h="4rem"
                rounded="full"
                type="email"
                placeholder="john.doe@domain.tld"
              />
              <InputRightElement top={2} right={1} width="12rem">
                <Button rounded="full" h="3rem" size="lg">
                  Subscribe Now
                </Button>
              </InputRightElement>
            </InputGroup>
          </Flex>
        </Stack>
      </Container>
    </Box>
  );
};

const FilteredBlogsBlock: React.FC<BlockProps> = () => {
  const [active, setActive] = useState("All");

  const items = [
    {
      cat: "Mobile",
      href: "#1",
      title: "You Should Memorize These Ways to Reset Your Cell Service",
      subtitle: "Android",
      body: "Quo usque tandem abutere, Catilina, patientia nostra? Non equidem invideo, miror magis posuere velit aliquet.",
      avatar: "/images/avatar-f-1.jpg",
      author: "Luis Vill",
      meta: {
        date: "2022-08-31T15:00:00+0300",
        info: "7 minutes read",
      },
      image: "https://source.unsplash.com/4V8uMZx8FYA",
    },
    {
      cat: "Entertainment",
      href: "#2",
      title: "What's on HBO Max this month?",
      subtitle: "Streaming",
      body: "Prima luce, cum quibus mons aliud  consensu ab eo. Curabitur est gravida et libero vitae dictum. Prima luce, cum quibus mons aliud  consensu ab eo. Curabitur est gravida et libero vitae dictum. Prima luce, cum quibus mons aliud  consensu ab eo. Curabitur est gravida et libero vitae dictum. Prima luce, cum quibus mons aliud  consensu ab eo. Curabitur est gravida et libero vitae dictum.",
      avatar: "/images/avatar-m-2.jpg",
      author: "Glenn Peters",
      meta: { date: "2022-08-20T12:30:00+0300", info: "3 minutes read" },
      image: "https://source.unsplash.com/EOQhsfFBhRk",
    },
    {
      cat: "Mobile",
      href: "#3",
      title: "3 Free Banking Apps for Entrepreneurs",
      subtitle: "Fintech",
      body: "Financial institutions and entrepreneurs have a historically complicated relationship. Entrepreneurs need ways to fund their companies and keep business moving, meaning they lean on banks for everything from business loans to checking accounts. ",
      avatar: "/images/avatar-m-1.jpg",
      author: "Austin Chandler",
      meta: { date: "2022-08-10T18:45:00+0300", info: "11 minutes read" },
      image: "https://source.unsplash.com/nGc5RT2HmF0",
    },
    {
      cat: "Product Reviews",
      href: "#3",
      title: "Extremely Light Stealth Electric Bike",
      subtitle: "Electric Bikes",
      body: "The sleek E-bike has been engineered to be extremely lightweight, yet sturdy. You can barely tell that this is an ebike the frame is so sleek and smooth, giving you a comfortable ride.",
      avatar: "/images/avatar-f-2.jpg",
      author: "Caroline Holt",
      meta: { date: "2022-08-11T11:25:00+0300", info: "6 minutes read" },
      image: "https://source.unsplash.com/qZ1KmFjfQq8",
    },
    {
      cat: "Entertainment",
      href: "#4",
      title: "Top 10 Dating Programs That Teach You Something About Love",
      subtitle: "TV Shows",
      body: "What’s wrong with enjoying a reality dating show, whether or not it’s the best thing ever? It's fun to watch, and sometimes having a basic idea of what's going on in someone else's life can be restful. TV trash or TV treasure, that’s all in the eye of the beholder.",
      avatar: "/images/avatar-m-3.jpg",
      author: "James Friedlander",
      meta: { date: "2022-08-13T11:25:00+0300", info: "9 minutes read" },
      image: "https://source.unsplash.com/aC5_EFhq7Fs",
    },
    {
      cat: "Business",
      href: "#4",
      title: "How to Respond to an Unexpected Meeting With Your Boss",
      subtitle: "Careers",
      body: "Nobody likes being asked into an impromptu meeting, especially if they're in the middle of work. Having a meeting at short notice can be troublesome especially if you're swamped with deadlines. The question is, do you just sit tight and hope it won't take too long or do you try and help things along which could end up making matters worse?",
      avatar: "/images/avatar-f-3.jpg",
      author: "Amy Hirschi",
      meta: { date: "2022-08-07T11:25:00+0300", info: "5 minutes read" },
      image: "https://source.unsplash.com/JaoVGh5aJ3E",
    },
  ];

  const Cats = items
    .map((item) => item.cat)
    .sort()
    .filter((v, i, a) => a.indexOf(v) === i);

  const ItemsFilter = (cat: string) => items.filter((item) => item.cat === cat);

  const Filtered = active === "All" ? items : ItemsFilter(active);

  return (
    <Box width="full">
      <Container maxW="container.xl">
        {/* Filter buttons */}
        <Center mb={10}>
          <Heading size="2xl" data-aos="fade-up" data-aos-delay={0}>
            All Blog Posts
          </Heading>
        </Center>
        <Center>
          <Wrap
            display="inline-flex"
            justify="center"
            bg={useColorModeValue("gray.50", "gray.700")}
            rounded="full"
            p={4}
            mb={[10, 10, 20]}
            data-aos="fade-in"
          >
            <WrapItem data-aos="fade-up">
              <Button
                rounded="full"
                onClick={() => setActive("All")}
                variant={"All" === active ? "solid" : "ghost"}
              >
                All
              </Button>
            </WrapItem>
            {Cats.map((item, idx) => (
              <WrapItem
                key={item + idx}
                data-aos="fade-up"
                data-aos-delay={100 * idx}
              >
                <Button
                  rounded="full"
                  onClick={() => setActive(item)}
                  variant={item === active ? "solid" : "ghost"}
                >
                  {item}
                </Button>
              </WrapItem>
            ))}
          </Wrap>
        </Center>

        <SimpleGrid
          spacingY={[10, 10, 20]}
          spacingX={[5, 5, 10]}
          columns={[1, 1, 2, 3]}
          alignItems="stretch"
        >
          {Filtered.map((item, idx) => (
            <LinkBox
              as="article"
              height="full"
              width="full"
              // role="group"
              data-group
              key={item.title + idx}
              data-aos="fade-up"
              data-aos-delay={100 * idx}
            >
              <Flex
                height="full"
                width="full"
                // spacing={10}
                direction="column"
                // sx={{
                //   "& > .chakra-skeleton": { width: "full", height: "full" },
                // }}
              >
                <AspectRatio
                  mb={10}
                  ratio={4 / 3}
                  pos="relative"
                  sx={{
                    "& > .chakra-skeleton": { width: "full", height: "full" },
                  }}
                >
                  <Image
                    layout="fill"
                    rounded="xl"
                    // width="400px"
                    // height="300px"
                    objectFit="cover"
                    objectPosition="center"
                    src={item.image}
                    alt={item.title}
                    transitionProperty="common"
                    transitionDuration="1s"
                    transitionTimingFunction="ease-in-out"
                    _groupHover={{
                      transform: "scale(1.2) rotate(3deg)",
                    }}
                  />
                </AspectRatio>

                <VStack align="stretch" mb={[10]}>
                  <Text variant="subtitle">{item.subtitle}</Text>
                  <Heading as="h3" size="lg" fontFamily="body">
                    <NextLink href={item.href} passHref>
                      <LinkOverlay href="#">{item.title}</LinkOverlay>
                    </NextLink>
                  </Heading>
                  <Text noOfLines={5} fontSize="lg">
                    {item.body}
                  </Text>
                </VStack>

                <Box mt="auto" mb={[5]}>
                  <Wrap shouldWrapChildren spacingY={0} align="center">
                    <Text as="time" dateTime={item.meta.date}>
                      {timeAgo(item.meta.date)}
                    </Text>
                    <Circle size={1} bg="brand.400" />
                    <Text>{item.meta.info}</Text>
                  </Wrap>
                </Box>

                <HStack
                  // mt="auto"
                  // height="auto"
                  // height="fit-content"
                  justify="start"
                  borderTopWidth="1px"
                  pt={4}
                >
                  <Avatar
                    as={Box}
                    size="md"
                    src={item.avatar}
                    name={item.author}
                  />
                  <Text fontWeight="bold" fontSize="md">
                    {item.author}
                  </Text>
                </HStack>
              </Flex>
            </LinkBox>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

const UpcomingEvents: React.FC<BlockProps> = ({ bg, ...rest }) => {
  const defaultBg = bg ? bg : useColorModeValue("gray.100", "gray.900");
  return (
    <Box bg={defaultBg} width="full" py={[10, 16, 20]} {...rest}>
      <Container maxW="container.xl">
        <VStack spacing={10}>
          <Stack
            width="full"
            direction={["column", "column", "row"]}
            spacing={[5, 10, 10, 20]}
            align="center"
          >
            <Flex
              pos="relative"
              flex="1"
              width="full"
              height="full"
              sx={{ "& > div": { width: "full", height: "full" } }}
              data-aos="fade-up"
              data-aos-delay={0}
            >
              <AspectRatio ratio={4 / 3}>
                <Image
                  rounded="xl"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  src="https://source.unsplash.com/PkS3hCZmYts"
                  alt="Upcoming Events"
                />
              </AspectRatio>
            </Flex>
            <Flex flex="1">
              <VStack align="start" spacing={[2, 4, 6]}>
                <HStack align="center" data-aos="fade-up" data-aos-delay={100}>
                  <Circle size={2} bg="brand.400" />
                  <Text variant="subtitle">22 September 2022, 21:00 EDT</Text>
                </HStack>
                <Heading
                  as="h3"
                  fontFamily="body"
                  size="3xl"
                  data-aos="fade-up"
                  data-aos-delay={150}
                >
                  Connecting apps, data, and the cloud with GraphQL
                </Heading>
                <Text fontSize="xl" data-aos="fade-up" data-aos-delay={200}>
                  GraphQL is a query language for your API, and a server-side
                  runtime for executing queries using a type system you define
                  for your data.
                </Text>
                <Link
                  fontSize="xl"
                  href="#"
                  variant="underline"
                  colorScheme="brand"
                  data-aos="fade-up"
                  data-aos-delay={250}
                >
                  Take Your Place In The Event
                </Link>
              </VStack>
            </Flex>
          </Stack>
        </VStack>
      </Container>
    </Box>
  );
};

export default Blog1Page;
