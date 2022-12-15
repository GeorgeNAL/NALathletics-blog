import {
  BsFacebook,
  BsTwitter,
  BsWhatsapp,
  FaTelegramPlane,
  HiArrowLongLeft,
  HiArrowLongRight,
} from "@react-icons";

import React, { useContext } from "react";

import { NextSeo } from "next-seo";
import NextLink from "next/link";

import {
  AspectRatio,
  Avatar,
  AvatarGroup,
  Box,
  Button,
  chakra,
  type ChakraProps,
  Circle,
  Container,
  Flex,
  Heading,
  HStack,
  Icon,
  Link,
  LinkBox,
  LinkOverlay,
  SimpleGrid,
  Stack,
  Tag,
  Text,
  type ThemingProps,
  Tooltip,
  useColorModeValue,
  VStack,
  Wrap,
} from "@chakra-ui/react";

import { ThemeColorContext } from "@definitions/context/theme";
import { timeAgo } from "@definitions/utils/time-ago";

import Image from "@components/image";

const BlogPostPage: React.FC = () => {
  const theme = useContext(ThemeColorContext);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const themeColorScheme = theme.colorScheme; // global default primary theme color

  return (
    <>
      <NextSeo
        title="Senco React E-Commerce"
        description="Increasing e-commerce revenues with artificial intelligence"
      />
      <chakra.main>
        <VStack mb={10} spacing={[10, 10, 20, 24]}>
          <HeroBlock
            title="Increasing e-commerce revenues with artificial intelligence"
            tags={["Business", "E-commerce", "AI"]}
            date="Sep 28, 2022 17:30"
            meta="2 minutes read"
            author={[
              {
                src: "/images/avatar-f-1.jpg",
                name: "Julia Smith",
                href: "#",
              },
              {
                src: "/images/avatar-m-1.jpg",
                name: "Robert Athey",
                href: "#",
              },
            ]}
          />
          <ImageBlock src="https://source.unsplash.com/376KN_ISplE" />
          <ContentsBlock
            items={[
              {
                type: "body",
                content:
                  "If you're an e-commerce business looking to increase your revenues, artificial intelligence is something you need to keep an eye on.",
              },
              {
                type: "body",
                content:
                  "Algorithms are used by companies all over the world to identify and predict trends, which is how they can make products that sell better. But AI isn't just for big companies—it's also for small businesses looking for ways to grow their revenue and profits.",
              },
              {
                type: "image",
                ratio: 21 / 9,
                content: "https://source.unsplash.com/XP9JF6jyRGc",
              },
              {
                type: "heading",
                content: "But what exactly does this AI mean ?",
              },
              {
                type: "body",
                content:
                  "Artificial intelligence is a hot topic. You may have heard that it's going to be the next big thing in business, and maybe you've even started to wonder how you can use it to boost your e-commerce revenues.",
              },
              {
                type: "body",
                content:
                  "But what does AI actually mean for your business? And how can you start incorporating it into your day-to-day operations?",
              },
              {
                type: "body",
                content:
                  "With the rise of artificial intelligence, it's becoming easier than ever to automate tasks that used to take people hours per day. And as more and more businesses start implementing AI at scale, we're seeing some incredible results—including increased revenues for leading retailers.",
              },
              {
                type: "quote",
                content:
                  "I believe that at the end of the century the use of words and general educated opinion will have altered so much that one will be able to speak of machines thinking without expecting to be contradicted.",
                name: "Alan Turing, Computing machinery and intelligence",
              },
              {
                type: "heading",
                content: "The world of e-commerce is changing.",
              },
              {
                type: "body",
                content:
                  "When it comes to e-commerce, there's a lot of talk about customer satisfaction and experience. But what about your bottom line?",
              },
              {
                type: "body",
                content:
                  "Your company's revenue is tied directly to the amount of money that you make on each sale. And if you want to make more money, you have to do more than just give your customers an amazing experience—you have to figure out how to increase the value they provide while they're shopping with you.",
              },
              {
                type: "body",
                content:
                  "Luckily, artificial intelligence can help with both of those goals. AI is already being used in everything from fraud detection at banks to product recommendations on Amazon. In this article, we'll show you how AI can help you increase your e-commerce revenues by improving customer satisfaction and retention rates as well as increasing conversion rates—and we'll also give some tips on what features are best suited for which types of products and business models.",
              },
            ]}
          />
          <ShareButtonsBlock content="Increasing e-commerce revenues with artificial intelligence" />
          <RelatedBlogPostsBlock
            title="Related Blog Posts"
            body="For further information, keep an eye on our blog page"
            items={[
              {
                href: "#",
                image: "https://source.unsplash.com/4UGmm3WRUoQ",
                tag: "Open Source",
                title:
                  "How to make an open source project's readme.md look great",
                date: "5 October 2022 20:25",
                meta: "4 minutes read",
              },
              {
                href: "#",
                image: "https://source.unsplash.com/95YRwf6CNw8",
                tag: "Web Design",
                title:
                  "6 tips for responsive web design with the Chakra UI framework",
                date: "3 October 2022 18:35",
                meta: "2 minutes read",
              },
              {
                href: "#",
                image: "https://source.unsplash.com/ICTKcvnXx_8",
                tag: "Programming",
                title:
                  "How to write maintainable JavaScript code in 2023 — Web or NodeJS",
                date: "1 October 2022 11:18",
                meta: "8 minutes read",
              },
            ]}
          />
          <PaginationBlock
            previous={{
              href: "#prev",
              title: "The best advice you could ever get about design system",
            }}
            next={{
              href: "#next",
              title: "The most common complaints about e-commerce",
            }}
          />
        </VStack>
      </chakra.main>
    </>
  );
};

interface HeroProps {
  title: string;
  tags: string[];
  author: { src: string; name: string; href: string }[];
  meta: string;
  date: string;
}

const HeroBlock: React.FC<HeroProps> = ({
  title,
  tags,
  author,
  meta,
  date,
}) => {
  const linkHover = {
    _hover: {
      textDecoration: "underline",
    },
  };
  return (
    <Box width="full" pt={[20, 24, 28, 32]}>
      <Container maxW="container.xl">
        <VStack spacing={[4]} align="start">
          {tags && (
            <Wrap shouldWrapChildren>
              {tags.map((tag, idx) => (
                <Tag
                  key={tag + idx}
                  colorScheme="gray"
                  rounded="full"
                  size="lg"
                >
                  {tag}
                </Tag>
              ))}
            </Wrap>
          )}
          <Heading as="h1" size="4xl">
            {title}
          </Heading>
          <Stack
            spacing={[4, 4, 5, 6]}
            align="center"
            direction={["column", "row", "row"]}
          >
            <AvatarGroup>
              {author.map((item, idx) => {
                return (
                  <Avatar
                    key={item.name + idx}
                    as={Box}
                    size="lg"
                    src={item.src}
                    name={item.name}
                  />
                );
              })}
            </AvatarGroup>
            <Box>
              <Stack
                align="center"
                direction={["row"]}
                divider={
                  <Text px={1}>
                    <Circle as="span" size={1} bg="currentColor" />
                  </Text>
                }
                spacing={[2, 4, 6]}
              >
                {author.map((item, idx) => {
                  return (
                    <Link
                      key={"link" + item.name + idx}
                      href={item.href}
                      {...linkHover}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </Stack>
              <Text>
                {timeAgo(date)} - {meta}
              </Text>
            </Box>
          </Stack>
        </VStack>
      </Container>
    </Box>
  );
};

const ImageBlock: React.FC<
  {
    src: string;
    alt?: string;
    ratio?: number;
  } & ChakraProps &
    ThemingProps
> = ({ src, alt = "", ratio = 4 / 3, rounded }) => {
  return (
    <Box pos="relative" width="full" maxW="container.xl">
      <AspectRatio ratio={ratio}>
        <Image
          rounded={rounded ?? ["none", "none", "none", "none", "xl"]}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt={alt}
          src={src}
        />
      </AspectRatio>
    </Box>
  );
};

const ShareButtonsBlock: React.FC<{
  content: string;
}> = ({ content }) => {
  const items = [
    {
      name: "Whatsapp",
      href: (text: string) =>
        `whatsapp://send?text=${encodeURIComponent(text)}`,
      icon: BsWhatsapp,
    },
    {
      name: "Telegram",
      href: (text: string, url: string) =>
        `https://t.me/share/url?url=${encodeURIComponent(
          url,
        )}&text=${encodeURIComponent(text)}`,
      icon: FaTelegramPlane,
    },
    {
      name: "Twitter",
      href: (text: string, url: string) =>
        `https://twitter.com/intent/tweet?text=${encodeURIComponent(
          text,
        )}&url=${encodeURIComponent(url)}`,
      icon: BsTwitter,
    },
    {
      name: "Facebook",
      href: (text: string, url: string) =>
        `https://twitter.com/intent/tweet?text=${encodeURIComponent(
          text,
        )}&url=${encodeURIComponent(url)}`,
      icon: BsFacebook,
    },
  ];

  const onClickHandler = (href: string) => {
    return window.open(href);
  };

  const bgColor = useColorModeValue("gray.100", "gray.700");
  const iconColor = useColorModeValue("gray.500", "gray.400");

  return (
    <Box>
      <Container maxW="container.xl">
        <HStack align="center" justify="center">
          {items.map((item, idx) => (
            <Tooltip
              key={"share-button-" + item.name + idx}
              px={4}
              rounded="full"
              hasArrow
              label={item.name}
              placement="top"
            >
              <Button
                variant="unstyled"
                onClick={() =>
                  onClickHandler(item.href(content, location?.href))
                }
                _hover={{
                  transform: "scale(1.1)",
                }}
              >
                <Circle as="span" bg={bgColor} size={12}>
                  <Icon color={iconColor} as={item.icon} width={6} height={6} />
                </Circle>
              </Button>
            </Tooltip>
          ))}
        </HStack>
      </Container>
    </Box>
  );
};

interface RelatedBlogPostsProps extends ChakraProps, ThemingProps {
  title: string;
  body?: string;
  items: {
    href: string;
    image: string;
    tag: string;
    title: string;
    date: string;
    meta?: string;
  }[];
}

const RelatedBlogPostsBlock: React.FC<RelatedBlogPostsProps> = ({
  title,
  body,
  items = [],
}) => {
  const hoverBgColor = useColorModeValue("white", "gray.700");
  return (
    <>
      {!!items.length && (
        <Box width="full">
          <Container maxW="container.xl">
            <VStack>
              <Flex align="center" direction="column">
                {title && <Heading>{title}</Heading>}
                {body && <Text fontSize="lg">{body}</Text>}
              </Flex>
              <SimpleGrid columns={[1, 1, 2, 3]} spacing={[0]}>
                {items.map((item, idx) => (
                  <LinkBox
                    key={item.title + idx}
                    p={10}
                    rounded="xl"
                    transitionProperty="common"
                    transitionDuration="normal"
                    transitionTimingFunction="ease-in-out"
                    _hover={{
                      bg: hoverBgColor,
                      shadow: "2xl",
                    }}
                  >
                    <VStack align="start" spacing={[4]}>
                      <ImageBlock
                        rounded="xl"
                        src={item.image}
                        alt={item.title}
                      />
                      {item.tag && <Text variant="subtitle">{item.tag}</Text>}
                      <Heading as="h4" fontFamily="body" fontSize="2xl">
                        <LinkOverlay href={item.href}>{item.title}</LinkOverlay>
                      </Heading>
                      <Box>
                        <Stack
                          width="full"
                          justify="stretch"
                          align="center"
                          direction="row"
                          divider={
                            <Text px={[2]}>
                              <Circle as="span" size={1} bg="currentColor" />
                            </Text>
                          }
                          spacing={[2, 4, 6, 10]}
                        >
                          {item.date && <Text>{timeAgo(item.date)}</Text>}
                          {item.meta && <Text>{item.meta}</Text>}
                        </Stack>
                      </Box>
                    </VStack>
                  </LinkBox>
                ))}
              </SimpleGrid>
            </VStack>
          </Container>
        </Box>
      )}
    </>
  );
};

interface IPaginationProps {
  previous: {
    href: string;
    title: string;
  };
  next: {
    href: string;
    title: string;
  };
}

const PaginationBlock: React.FC<IPaginationProps> = ({ previous, next }) => {
  const linkStyle = {
    rounded: "md",
    maxW: ["full", "full", 500],
    width: "full",
    padding: 5,
    _hover: {
      bg: useColorModeValue("gray.100", "gray.700"),
    },
  };
  const muteColor = useColorModeValue("gray.600", "whiteAlpha.600");
  return (
    <>
      {(!!previous || !!next) && (
        <Box borderTopWidth="1px" width="full" pt={10}>
          <Container maxW="full">
            <Stack
              width="full"
              direction={["column", "column", "row"]}
              align={["start"]}
              justify={["center", "center", "space-between"]}
            >
              {previous && (
                <NextLink href={previous?.href} passHref>
                  <Link {...linkStyle}>
                    <Wrap
                      align="center"
                      shouldWrapChildren
                      justify={["center", "center", "start"]}
                    >
                      <Icon as={HiArrowLongLeft} />
                      <Text fontWeight="semibold">PREVIOUS POST</Text>
                    </Wrap>
                    <Text
                      display="block"
                      as="span"
                      textAlign={["center", "center", "start"]}
                      color={muteColor}
                    >
                      {previous?.title}
                    </Text>
                  </Link>
                </NextLink>
              )}

              {next && (
                <NextLink href={next?.href} passHref>
                  <Link {...linkStyle}>
                    <Wrap
                      shouldWrapChildren
                      align="center"
                      justify={["center", "center", "end"]}
                    >
                      <Text fontWeight="semibold">NEXT POST</Text>
                      <Icon as={HiArrowLongRight} />
                    </Wrap>
                    <Text
                      display="block"
                      as="span"
                      textAlign={["center", "center", "end"]}
                      color={muteColor}
                    >
                      {next?.title}
                    </Text>
                  </Link>
                </NextLink>
              )}
            </Stack>
          </Container>
        </Box>
      )}
    </>
  );
};

interface IContent {
  type: "heading" | "body" | "quote" | "image";
  content: string;
  name?: string;
  ratio?: number;
}

interface IContentsProps {
  items: IContent[];
}

const ContentsBlock: React.FC<IContentsProps> = ({ items = [] }) => {
  return (
    <VStack spacing={4} width="full" align="start">
      <>
        {items.map((item, idx) => (
          <Box width="full" key={`ContentsBlock` + idx}>
            {
              {
                heading: <ContentHeading content={item.content} />,
                body: <ContentText content={item.content} />,
                image: (
                  <ContentImage content={item.content} ratio={item.ratio} />
                ),
                quote: <ContentQuote content={item.content} name={item.name} />,
              }[item.type]
            }
          </Box>
        ))}
      </>
    </VStack>
  );
};

const ContentHeading: React.FC<{ content?: string }> = ({
  content,
  ...rest
}) => {
  return (
    <Box width="full" {...rest}>
      <Container maxW="container.md">
        <Heading as="h3" size="xl">
          {content}
        </Heading>
      </Container>
    </Box>
  );
};

const ContentText: React.FC<{ content?: string }> = ({ content, ...rest }) => {
  return (
    <Box width="full" {...rest}>
      <Container maxW="container.md">
        <Text fontSize="lg">{content}</Text>
      </Container>
    </Box>
  );
};

const ContentImage: React.FC<{ content?: string; ratio?: number }> = ({
  content,
  ratio = 1,
  ...rest
}) => {
  return (
    <Box width="full" {...rest}>
      <Container py={[5, 5, 6, 10]} maxW="container.xl">
        <Box pos="relative">
          <AspectRatio ratio={ratio}>
            <Image
              rounded="xl"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              src={content}
              alt="content image"
            />
          </AspectRatio>
        </Box>
      </Container>
    </Box>
  );
};

const ContentQuote: React.FC<{ content?: string; name?: string }> = ({
  content,
  name,
  ...rest
}) => {
  return (
    <Box width="full" {...rest}>
      <Container py={[5, 5, 6, 10]} maxW="container.md">
        <Box pl={10} borderLeftWidth="8px">
          <Text mb={4} fontSize="2xl">
            {content}
          </Text>
          {name && (
            <Text pos="relative" fontSize="lg">
              — {name}
            </Text>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default BlogPostPage;
