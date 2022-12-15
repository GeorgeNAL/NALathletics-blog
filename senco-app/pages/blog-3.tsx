import { FcLock } from "@react-icons";

import React, { useContext, useEffect, useRef, useState } from "react";

import { NextSeo } from "next-seo";
import NextLink from "next/link";

import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  AspectRatio,
  Avatar,
  Badge,
  Box,
  Button,
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
  useBreakpointValue,
  useColorModeValue,
  useToast,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

import { ThemeColorContext } from "@definitions/context/theme";
import { timeAgo } from "@definitions/utils/time-ago";

import CTATestimonal from "@components/call-to-actions/cta-1";
import Image from "@components/image";

import CTABlock from "@blocks/cta";

const Blog3Page: React.FC = () => {
  const theme = useContext(ThemeColorContext);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const themeColorScheme = theme.colorScheme; // global default primary theme color
  const toast = useToast();
  const toastIdRef = useRef<string | number>();

  const cookie = () =>
    (toastIdRef.current = toast({
      position: "bottom",
      duration: null,
      isClosable: true,
      containerStyle: {
        width: "full",
        maxWidth: "4xl",
      },
      render: () => <SimpleCookiePreference toastRef={toastIdRef} />,
    }));

  useEffect(() => {
    if (!toastIdRef.current) cookie();
    return () => toast.close(toastIdRef.current);
  });

  return (
    <>
      <NextSeo
        title="Senco React E-Commerce"
        description="Senco React E-Commerce Website Template"
      />
      <chakra.main>
        <VStack spacing={[10, 10, 20, 32]}>
          <HeroBlock title="Educational news for developers and designers" />
          <FeaturedPostBlock
            image="https://source.unsplash.com/m_HRfLhgABo"
            subtitle="Resources"
            title="Create your website quickly with premium website templates"
            body="You can easily create your website with pages of pre-made web templates for many industries and it's definitely worth the few dollars to ensure a professional look."
            href="#"
            avatar="/images/avatar-f-3.jpg"
            author="Margaret Dorman"
            date="Sep 18 2022 22:20"
          />
          <NewsletterBlock />
          <FilteredBlogsBlock
            items={[
              {
                cat: "Mobile",
                href: "#1",
                title:
                  "You Should Memorize These Ways to Reset Your Cell Service",
                subtitle: "Android",
                body: "Quo usque tandem abutere, Catilina, patientia nostra? Non equidem invideo, miror magis posuere velit aliquet.",
                avatar: "/images/avatar-f-1.jpg",
                author: "Luis Vill",
                date: "2022-08-31T15:00:00+0300",
                meta: "7 minutes read",
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
                date: "2022-08-20T12:30:00+0300",
                meta: "3 minutes read",
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
                date: "2022-08-10T18:45:00+0300",
                meta: "11 minutes read",
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
                date: "2022-08-11T11:25:00+0300",
                meta: "6 minutes read",
                image: "https://source.unsplash.com/qZ1KmFjfQq8",
              },
              {
                cat: "Entertainment",
                href: "#4",
                title:
                  "Top 10 Dating Programs That Teach You Something About Love",
                subtitle: "TV Shows",
                body: "What’s wrong with enjoying a reality dating show, whether or not it’s the best thing ever? It's fun to watch, and sometimes having a basic idea of what's going on in someone else's life can be restful. TV trash or TV treasure, that’s all in the eye of the beholder.",
                avatar: "/images/avatar-m-3.jpg",
                author: "James Friedlander",
                date: "2022-08-13T11:25:00+0300",
                meta: "9 minutes read",
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
                date: "2022-08-07T11:25:00+0300",
                meta: "5 minutes read",
                image: "https://source.unsplash.com/JaoVGh5aJ3E",
              },
            ]}
          />
          <ReadLatestCollectionBlock
            items={[
              {
                cat: "Startup",
                title:
                  "I freelanced for 3 startups before starting my own company",
                image: "https://source.unsplash.com/UcYBL5V0xWQ",
                href: "#",
                date: "Sep 19, 2022 13:45",
              },
              {
                cat: "Web Design",
                title:
                  "Landing page design best practices that increase conversion rate",
                image: "https://source.unsplash.com/hGV2TfOh0ns",
                href: "#",
                date: "Sep 10, 2022 16:25",
              },
              {
                cat: "Careers",
                title: "We are hiring many developer to develop apps",
                image: "https://source.unsplash.com/315vPGsAFUk",
                href: "#",
                date: "Sep 7, 2022 16:25",
              },
            ]}
          />
          <CTATestimonal
            testimonial={{
              name: "Lavonne Campbell",
              job: "Project Manager at Acme",
              avatar: "/images/avatar-f-2.jpg",
              body: "I've been very impressed with your work. I asked for a couple of minor changes and you took care of them within a day, and you always made sure I was happy with the changes before you made them.",
            }}
            cta={{
              title: "Join 5,216 other developers",
              body: "We are looking for passionate and talented developers like you who want to use our awesome web tools and themes!",
              action: [
                { text: "Create your first website", action: () => ({}) },
                {
                  text: "Talk to the counselor",
                  action: () => ({}),
                },
              ],
            }}
          />
          <BlogPostsBlock
            items={[
              {
                image: "https://source.unsplash.com/UcYBL5V0xWQ",
                subtitle: "Tutorial",
                title:
                  "Create Your Own Component Library With React And Webpack",
                href: "#",
              },
              {
                image: "https://source.unsplash.com/pHPzdEHN6Os",
                subtitle: "Freelance",
                title: "How To Become A Great Freelancer In 12 Months",
                href: "#",
              },
              {
                image: "https://source.unsplash.com/PNbDkQ2DDgM",
                subtitle: "Developer",
                title:
                  "5 Programming Languages That Every Developer Should Learn",
                href: "#",
              },
            ]}
          />
          <Box width="full" pos="relative">
            <Container pos="relative" zIndex={1} maxW="container.xl">
              <CTABlock
                title="Increase Conversions With Senco"
                subtitle="Begin dazzling your audience with amazing web pages right away"
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
  // items?: T_Item[];
}

type T_Item = {
  image: string;
  title: string;
  subtitle?: string;
  body?: string;
  href: string;
  author?: string;
  avatar?: string;
  date?: string;
  meta?: string;
};

const HeroBlock: React.FC<{ title: string } & BlockProps> = ({
  title,
  ...rest
}) => {
  const borderColor = useColorModeValue("blackAlpha.400", "whiteAlpha.500");
  return (
    <Box width="full" pt={[20, 28, 32, 36]} data-aos="fade-up" {...rest}>
      <Container
        borderBottomWidth="1px"
        borderColor={borderColor}
        maxW="container.xl"
        pb={10}
      >
        {title && (
          <Heading size={["2xl", "2xl", "3xl", "4xl"]} maxW="container.lg">
            {title}
          </Heading>
        )}
      </Container>
    </Box>
  );
};

interface IFeaturedPostProps extends T_Item, BlockProps {
  isReverse?: boolean;
}

const FeaturedPostBlock: React.FC<IFeaturedPostProps> = ({
  image,
  subtitle,
  title,
  body,
  href,
  avatar,
  author,
  date,
  isReverse = false,
  ...rest
}) => {
  const defaultRatio = useBreakpointValue({
    base: 2 / 1,
    md: 1,
    lg: 4 / 3,
  });
  return (
    <LinkBox width="full" data-aos="fade-up">
      <Flex align="center" {...rest}>
        <Container pos="relative" zIndex={2} maxW="container.xl">
          <Stack
            align="center"
            width="full"
            direction={
              isReverse
                ? ["column", "column", "row-reverse"]
                : ["column", "column", "row"]
            }
            spacing={[5, 5, 10, 14]}
          >
            <Box width="full" flex="5" pos="relative">
              <AspectRatio ratio={defaultRatio}>
                <Image
                  rounded="xl"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  src={image}
                  alt={title}
                />
              </AspectRatio>
            </Box>
            <Stack align="start" flex="3">
              {subtitle && <Text variant="subtitle">{subtitle}</Text>}
              {title && !href && <Heading noOfLines={3}>{title}</Heading>}
              {title && href && (
                <Heading noOfLines={3}>
                  <NextLink href={href} passHref>
                    <LinkOverlay>{title}</LinkOverlay>
                  </NextLink>
                </Heading>
              )}
              {body && <Text noOfLines={3}>{body}</Text>}
              {/* {href && (
                <NextLink href={href} passHref>
                  <LinkOverlay>
                    <Link as="span" variant="underline">
                      Read More
                    </Link>
                  </LinkOverlay>
                </NextLink>
              )} */}
              <Wrap shouldWrapChildren align="center">
                {avatar && <Avatar as={Box} size="sm" src={avatar} />}
                {author && <Text fontWeight="semibold">{author}</Text>}
                {date && <Text>{timeAgo(date)}</Text>}
              </Wrap>
            </Stack>
          </Stack>
        </Container>
      </Flex>
    </LinkBox>
  );
};

const BlogPostsBlock: React.FC<{ items: T_Item[] } & BlockProps> = ({
  items = [],
  ...rest
}) => {
  return (
    <Flex pos="relative" align="center" width="full" {...rest}>
      <Container maxW="container.xl">
        <SimpleGrid columns={[1, 1, 3, 3]} spacing={[10, 10, 14]}>
          {items.map((item, idx) => (
            <BlogPostBlock
              key={item.title + idx}
              data-aos="fade-up"
              data-aos-delay={100 * idx}
              {...item}
            />
          ))}
        </SimpleGrid>
      </Container>
    </Flex>
  );
};

const BlogPostBlock: React.FC<T_Item & BlockProps> = ({
  image,
  subtitle,
  title,
  href,
  color,
  ...rest
}) => {
  const textColor = color ? color : "white";
  const defaultRatio = useBreakpointValue({
    base: 1,
    sm: 4 / 2,
    md: 1 / 2,
    lg: 71 / 80,
  });
  return (
    <LinkBox
      as="article"
      pos="relative"
      rounded="xl"
      boxShadow="0 1px 2px rgba(0, 0, 0, 0.1)"
      transition="all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)"
      _after={{
        content: "''",
        position: "absolute",
        rounded: "xl",
        top: 0,
        left: 0,
        width: "full",
        height: "full",
        boxShadow: "0 15px 45px rgba(0, 0, 0, 0.65)",
        opacity: 0.25,
        transition: "all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)",
        bg: useColorModeValue("blackAlpha.700", "blackAlpha.700"),
      }}
      _hover={{
        // transform: "translateY(-5px)",
        transform: "scale(1.05, 1.05)",
        _after: {
          opacity: 1,
        },
      }}
      {...rest}
    >
      <AspectRatio pos="relative" ratio={defaultRatio} width="full">
        <Box width="full" pos="relative">
          {image && (
            <Box
              width="full"
              height="full"
              pos="absolute"
              sx={{ "& > div": { width: "full", height: "full" } }}
            >
              <Image
                rounded="xl"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                alt={title}
                src={image}
              />
            </Box>
          )}
          <Flex
            pos="relative"
            zIndex={2}
            p={6}
            align="start"
            direction="column"
            width="full"
            height="full"
          >
            {subtitle && (
              <Text fontSize="md" variant="subtitle" color={textColor}>
                {subtitle}
              </Text>
            )}
            <Heading
              as="h2"
              fontFamily="body"
              size="lg"
              pt={10}
              pb={3}
              color={textColor}
            >
              {title}
            </Heading>
            <NextLink href={href} passHref>
              <LinkOverlay>
                <Link as="span" color={textColor} variant="underline">
                  Read More
                </Link>
              </LinkOverlay>
            </NextLink>
          </Flex>
        </Box>
      </AspectRatio>
    </LinkBox>
  );
};

interface IFilteredBlog {
  cat: string;
  date: string;
}

type T_FilteredBlogItem = T_Item & IFilteredBlog;

interface IFilteredBlogsBlockProps extends BlockProps {
  items: T_FilteredBlogItem[];
}

const FilteredBlogsBlock: React.FC<IFilteredBlogsBlockProps> = ({
  items = [],
}) => {
  const [active, setActive] = useState("All");
  // const Cats = ["All", "Marketing", "Design", "Business", "Photography"];

  const Cats = items
    .map((item) => item.cat)
    .sort()
    .filter((v, i, a) => a.indexOf(v) === i);

  const ItemsFilter = (cat: string) => items.filter((item) => item.cat === cat);

  const Filtered = active === "All" ? items : ItemsFilter(active);

  return (
    <Box width="full">
      <Container maxW="container.xl">
        <Wrap
          display="inline-flex"
          justify="center"
          align="center"
          mb={[10, 10, 20]}
          fontSize={["md", "lg", "xl"]}
          spacingX={[5, 5, 6]}
          spacingY={0}
        >
          <WrapItem py={1}>
            <Link
              as="p"
              onClick={() => setActive("All")}
              color={"All" === active ? "brand.700" : "gray.400"}
              variant="underline"
              data-aos="fade-up"
            >
              All
            </Link>
          </WrapItem>
          {Cats.map((item, idx) => (
            <WrapItem py={1} key={item + idx}>
              <Link
                as="p"
                onClick={() => setActive(item)}
                // variant={item === active ? "solid" : "ghost"}
                color={item === active ? "brand.700" : "gray.500"}
                variant="underline"
                data-aos="fade-up"
                data-aos-delay={100 * idx}
              >
                {item}
              </Link>
            </WrapItem>
          ))}
        </Wrap>

        <SimpleGrid
          alignItems="stretch"
          spacingX={[5, 5, 10]}
          columns={[1, 1, 2, 3]}
          spacingY={[10, 10, 20]}
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
              <Flex height="full" width="full" direction="column">
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
                    <Text as="time" dateTime={item.date}>
                      {timeAgo(item.date)}
                    </Text>
                    <Circle size={1} bg="brand.400" />
                    <Text>{item.meta}</Text>
                  </Wrap>
                </Box>

                <HStack justify="start" borderTopWidth="1px" pt={4}>
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
        {/* <Stack
          align="center"
          direction={["column", "column", "row"]}
          spacing={5}
        >
          <Divider display={{ base: "none", md: "block" }} />
          <Button
            textTransform="uppercase"
            fontWeight="bold"
            fontSize="sm"
            variant="outline"
            size="jumbo"
            colorScheme="gray"
            width={["full", "full", "auto"]}
          >
            Load More Blog Posts
          </Button>
          <Divider display={{ base: "none", md: "block" }} />
        </Stack> */}
      </Container>
    </Box>
  );
};

const NewsletterBlock: React.FC<BlockProps> = ({ bg }) => {
  const bgColor = bg ? bg : useColorModeValue("gray.100", "gray.900");
  return (
    <Box pos="relative" width="full" bg={bgColor} py={[10, 10, 20]}>
      <Container pos="relative" zIndex={1} maxW="container.xl">
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
            <Text variant="subtitle" data-aos="fade-up">
              Newsletter
            </Text>
            <Text
              fontWeight="bold"
              fontSize="5xl"
              lineHeight={1.1}
              data-aos="fade-up"
              data-aos-delay={100}
            >
              {/* Enter email to subscribe to our newsletter. */}
              Subscribe to our weekly newsletter today!
            </Text>
            <Text maxW={500} data-aos="fade-up" data-aos-delay={150}>
              By identifying your interests, you can get rid of irrelevant news
              and spend time each week on only the content that interests you.
            </Text>
            <Text fontSize="xs" data-aos="fade-up" data-aos-delay={200}>
              (Unsubscribe at any time)
            </Text>
          </VStack>
          <Flex flex={1}>
            <InputGroup size="lg" data-aos="fade-up" data-aos-delay={250}>
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

      <Box
        pos="absolute"
        zIndex={0}
        width={["full", "80%", "50%"]}
        height="full"
        right={0}
        top={0}
        overflow="hidden"
      >
        <AspectRatio
          pos="relative"
          width="full"
          height="full"
          ratio={1}
          data-aos="fade-left"
          data-aos-delay={100}
          sx={{
            "& > .chakra-skeleton": { width: "full", height: "full" },
            _before: {
              position: "absolute",
              content: "''",
              // bg: "cyan.100",
              bgGradient: useColorModeValue(
                "linear(to-r, gray.100, transparent)",
                "linear(to-r, gray.900, transparent)",
              ),
              width: "full",
              height: "full",
              zIndex: 1,
            },
          }}
        >
          <Image
            layout="fill"
            // width="400px"
            // height="300px"
            objectFit="cover"
            objectPosition="center"
            src="https://source.unsplash.com/UcYBL5V0xWQ"
            alt="newsletter"
          />
        </AspectRatio>
      </Box>
    </Box>
  );
};

const ReadLatestCollectionBlock: React.FC<IFilteredBlogsBlockProps> = ({
  items = [],
}) => {
  return (
    <Box width="full">
      <Container maxW="container.xl">
        <VStack align="stretch" mb={[10, 10, 14]}>
          <Heading data-aos="fade-up">Read latest collection</Heading>
          <Text
            color={useColorModeValue("gray.600", "gray.400")}
            maxW={["full", "full", "420", "420"]}
            data-aos="fade-up"
            data-aos-delay={100}
          >
            Learn how to create a custom website that converts more visitors
            than any website with tutorial blog content.
          </Text>
        </VStack>
        <SimpleGrid columns={[1, 1, 3]} spacing={[10]}>
          {items.map((item, idx) => (
            <LinkBox
              key={item.title + idx}
              as="article"
              pos="relative"
              // role="group"
              data-group
              data-aos="fade-up"
              data-aos-delay={100 * idx}
            >
              <Box pos="absolute" zIndex={1} top={2} left={2}>
                <Badge>{item.cat}</Badge>
              </Box>
              <VStack align="start" spacing={5}>
                <AspectRatio
                  pos="relative"
                  width="full"
                  height="full"
                  rounded="xl"
                  ratio={4 / 3}
                  sx={{
                    "& > .chakra-skeleton": { width: "full", height: "full" },
                  }}
                >
                  <Image
                    rounded="xl"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    src={item.image}
                    alt={item.title}
                    transitionProperty="common"
                    transitionDuration="normal"
                    transitionTimingFunction="ease-in-out"
                    _groupHover={{
                      transform: "scale(1.1)",
                    }}
                  />
                </AspectRatio>
                <Box>
                  <Text mb={2}>{timeAgo(item.date)}</Text>
                  <Text
                    as="h3"
                    noOfLines={2}
                    lineHeight={1.2}
                    fontSize="2xl"
                    fontWeight="bold"
                  >
                    {item.title}
                  </Text>
                </Box>
                <NextLink href={item.href} passHref>
                  <LinkOverlay>
                    <Link as="p" colorScheme="black" variant="continue">
                      <Text
                        as="span"
                        display="inline-block"
                        mr={2}
                        transitionProperty="common"
                        transitionDuration="normal"
                        transitionTimingFunction="ease-in-out"
                        _groupHover={{
                          transform: "translateX(10px)",
                        }}
                      >
                        Continue Reading
                      </Text>
                      <ArrowForwardIcon
                        transitionProperty="common"
                        transitionDuration="normal"
                        transitionTimingFunction="ease-in-out"
                        _groupHover={{
                          transform: "translateX(15px) rotate(-36deg)",
                        }}
                      />
                    </Link>
                  </LinkOverlay>
                </NextLink>
              </VStack>
            </LinkBox>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

const SimpleCookiePreference: React.FC<{
  toastRef: React.MutableRefObject<string | number>;
}> = ({ toastRef }) => {
  const toast = useToast();
  return (
    <Stack bg="white" p="4" boxShadow="lg" m="4" borderRadius="sm">
      <Stack direction="row" alignItems="center">
        <Text fontWeight="semibold">Your Privacy</Text>
        <FcLock />
      </Stack>

      <Stack
        direction={["column", "column", "row"]}
        justifyContent="space-between"
        align="center"
        spacing={5}
      >
        <Text fontSize="sm" textAlign="left" maxW="4xl">
          We use cookies and similar technologies to help personalise content,
          tailor and measure ads, and provide a better experience. By clicking
          OK or turning an option on in Cookie Preferences, you agree to this,
          as outlined in our Cookie Policy. To change preferences or withdraw
          consent, please update your Cookie Preferences.
        </Text>
        <Stack direction={["column", "column", "row"]}>
          <Button variant="outline" colorScheme="green">
            Cookie Preferences
          </Button>
          <Button
            onClick={() => toast.close(toastRef.current)}
            colorScheme="green"
          >
            OK
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Blog3Page;
