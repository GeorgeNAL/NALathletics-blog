import { FaRegCheckCircle } from "@react-icons";

import React, { useContext, useState } from "react";

import { NextSeo } from "next-seo";
import NextLink from "next/link";

import {
  AspectRatio,
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
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

import { ThemeColorContext } from "@definitions/context/theme";
import Site from "@definitions/site";
import { timeAgo } from "@definitions/utils/time-ago";

import Image from "@components/image";

import CTABlock from "@blocks/cta";

const Blog2Page: React.FC = () => {
  const theme = useContext(ThemeColorContext);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const themeColorScheme = theme.colorScheme; // global default primary theme color

  const mouseDownHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (event.button === 0) window.open(Site.purchase, "_blank");
    if (event.button === 1) window.open(Site.purchase, "_blank");
  };

  return (
    <>
      <NextSeo
        title="Senco React E-Commerce"
        description="Senco React E-Commerce Website Template"
      />
      <chakra.main>
        <VStack mb={0} spacing={20}>
          <HeroBlock
            items={[
              {
                image: "https://source.unsplash.com/m_HRfLhgABo",
                subtitle: "Developer Resources",
                title: "How AI Is Changing Software Development",
                href: "#",
              },
              {
                image: "https://source.unsplash.com/04X1Yp9hNH8",
                subtitle: "Artificial Intelligence",
                title: "What artificial intelligence can do for your business",
                href: "#",
              },
              {
                image: "https://source.unsplash.com/CPs2X8JYmS8",
                subtitle: "Business",
                title: "How chatbots are making customer service cheaper",
                href: "#",
              },
              {
                image: "https://source.unsplash.com/CGpifH3FjOA",
                subtitle: "Artificial Intelligence",
                title: "Why you should really watch the new AI revolution",
                href: "#",
              },
            ]}
          />
          <FeaturedPostBlock
            image="https://source.unsplash.com/CZ9AjMGKIFI"
            subtitle="Frontend"
            title="Micro Frontends on Monorepo With Remote State Management"
            body="Micro frontends are independent mini services that run on different hosts, are combined into a system, and communicate over a network"
            href="#"
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
          <NewsletterBlock />
          <FeaturedPostBlock
            isReverse
            href="#"
            image="https://source.unsplash.com/hGV2TfOh0ns"
            subtitle="Productivity"
            title="How to easily grow your product management knowledge every day"
            body="Did you ever wonder how many things product managers have to know? It’s a lot. It’s a never-ending story of continuous learning and expanding basic knowledge from various fields."
          />
          <RelatedPostsBlock
            items={[
              {
                href: "#",
                image: "https://source.unsplash.com/MgtHZ4zlC1U",
                subtitle: "Algorithms",
                title:
                  "Algorithms won't replace business, they will make it better",
                meta: "8 min read",
                // date: "Sep 12, 2022 21:43",
                date: new Date(new Date().getTime() - 13 * 60000).toString(),
              },
              {
                href: "#",
                image: "https://source.unsplash.com/K21Dn4OVxNw",
                subtitle: "Machine learning",
                title:
                  "How artificial intelligence will help you save time and money",
                meta: "9 min read",
                date: "Aug 18, 2022 19:34",
              },
              {
                href: "#",
                image: "https://source.unsplash.com/cDK_VY_A9x8",
                subtitle: "Business",
                title:
                  "Harnessing the power of the internet of things to grow your business",
                meta: "7 min read",
                date: "Aug 10, 2022 18:25",
              },
            ]}
          />

          <CallToActionBlock
            title="Build any type of website with built-in components"
            items={[
              "Light & Dark Mode",
              "Production Ready",
              "Developer Friendly",
            ]}
            actionText="Buy Senco"
            action={mouseDownHandler}
          />

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
  // items?: T_Item[];
}

type T_Item = {
  image: string;
  title: string;
  subtitle?: string;
  body?: string;
  href: string;
};

const HeroBlock: React.FC<{ items: T_Item[] } & BlockProps> = ({
  items = [],
  bg,
  bgGradient,
  // opacity,
  ...rest
}) => {
  const [active, setActive] = useState(0);
  const heading = "clamp(2.5rem, 5vw, 10rem)";
  // const bg = useColorModeValue("gray.100", "cyan.900");
  // const defaultOpacity = opacity ? opacity : useColorModeValue(0.8, 0.9);
  // const overlayBg = bg ? bg : useColorModeValue("white", "brand.900");

  const defaultBgGradient = bgGradient
    ? bgGradient
    : useColorModeValue(
        "linear(white 5%, whiteAlpha.800 25%, transparent)",
        "linear(black 5%, blackAlpha.800 45%, transparent)",
      );

  const circleStyle = {
    size: 4,
    bg: useColorModeValue("blackAlpha.400", "whiteAlpha.400"),
    outlineOffset: "3px",
    cursor: "pointer",
    transitionProperty: "common",
    transitionDuration: "normal",
    transitionTimingFunction: "ease-in-out",
  };

  const circleStyleActive = {
    bg: "brand.400",
    outline: "1px solid",
    outlineColor: "white",
  };

  const circleStyleHover = {
    bg: "brand.200",
    outline: "1px solid",
    outlineColor: useColorModeValue("gray.400", "whiteAlpha.400"),
  };

  return (
    <Flex
      pos="relative"
      pt={[28]}
      pb={[20]}
      align="center"
      height="full"
      minHeight={650}
      width="full"
      bg={bg}
      {...rest}
    >
      <Box
        pos="absolute"
        top={["unset", "unset", "50%"]}
        bottom={[4, 4, "unset"]}
        right={["50%", "50%", 4]}
        transform={["translateX(50%)", "translateX(50%)", "translateY(-50%)"]}
        width={["auto", "auto", 4]}
        zIndex={9}
      >
        <Stack direction={["row", "row", "column"]} spacing={3}>
          {items.map((item, idx) => (
            <Circle
              key={idx}
              {...circleStyle}
              {...(idx == active ? circleStyleActive : undefined)}
              _hover={idx == active ? undefined : circleStyleHover}
              onClick={() => setActive(idx)}
            />
          ))}
        </Stack>
      </Box>
      <Box width="full" key={items[active].title}>
        <Box
          pos="absolute"
          top={0}
          left={0}
          width="full"
          height="full"
          sx={{ "& > div": { width: "full", height: "full" } }}
          _before={{
            content: "''",
            pos: "absolute",
            width: "full",
            height: "full",
            bgGradient: defaultBgGradient,
            zIndex: 1,
          }}
        >
          <Image
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            alt={items[active].title}
            src={items[active].image}
          />
        </Box>
        <Container pos="relative" zIndex={2} maxW="container.lg">
          <VStack spacing={6}>
            <Text
              lineHeight={1}
              variant="subtitle"
              data-aos="fade-up"
              data-aos-delay={0}
            >
              {items[active].subtitle}
            </Text>
            <Heading
              textAlign="center"
              fontSize={heading}
              data-aos="fade-up"
              data-aos-delay={100}
            >
              {items[active].title}
            </Heading>
            <Button size="jumbo" data-aos="fade-up" data-aos-delay={150}>
              Read more
            </Button>
          </VStack>
        </Container>
      </Box>
    </Flex>
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
  isReverse = false,
  ...rest
}) => {
  const defaultRatio = useBreakpointValue({ base: 2 / 1, md: 1, lg: 21 / 11 });
  return (
    <Flex align="center" width="full" {...rest}>
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
          <Box
            width="full"
            flex="5"
            pos="relative"
            data-aos="fade-up"
            data-aos-delay={0}
          >
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
            {subtitle && (
              <Text variant="subtitle" data-aos="fade-up" data-aos-delay={100}>
                {subtitle}
              </Text>
            )}
            {title && (
              <Heading noOfLines={2} data-aos="fade-up" data-aos-delay={150}>
                {title}
              </Heading>
            )}
            {body && (
              <Text noOfLines={3} data-aos="fade-up" data-aos-delay={200}>
                {body}
              </Text>
            )}
            {href && (
              <NextLink href={href} passHref>
                <Link
                  variant="underline"
                  data-aos="fade-up"
                  data-aos-delay={250}
                >
                  Read More
                </Link>
              </NextLink>
            )}
          </Stack>
        </Stack>
      </Container>
    </Flex>
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
              {...item}
              data-aos="fade-up"
              data-aos-delay={100 * idx}
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
              as="h4"
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

const NewsletterBlock: React.FC<BlockProps> = ({ bg, ...rest }) => {
  const defaultBg = bg ? bg : useColorModeValue("gray.100", "gray.900");
  return (
    <Box width="full" data-aos="fade-up" data-aos-delay={50} {...rest}>
      <Container maxW="container.xl">
        <Box rounded="xl" p={12} bg={defaultBg}>
          <Stack
            align="center"
            justify="space-between"
            direction={["column", "column", "row"]}
          >
            <VStack
              textAlign={["center", "center", "start"]}
              align={["center", "center", "start"]}
            >
              <Heading as="h3">Join Our Newsletter</Heading>
              <Text size="lg">
                Enter your email and we'll keep you posted with news and
                updates!
              </Text>
            </VStack>

            <Flex>
              <InputGroup size="lg">
                <Input
                  bg={useColorModeValue("white", "gray.700")}
                  pr="12rem"
                  // h="4rem"
                  rounded="full"
                  type="email"
                  placeholder="john.doe@domain.tld"
                />
                <InputRightElement top={0} right={0} width="7.5rem">
                  <Button rounded="full" h="2.5rem" size="md">
                    Subscribe
                  </Button>
                </InputRightElement>
              </InputGroup>
            </Flex>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

interface IPostMeta {
  meta: string;
  date: string;
}

type T_PostItem = T_Item & IPostMeta;

interface IRelatedPostsProps extends BlockProps {
  items: T_PostItem[];
}

const RelatedPostsBlock: React.FC<IRelatedPostsProps> = ({
  items = [],
  bg,
  color,
  ...rest
}) => {
  const defaultBg = bg ? bg : useColorModeValue("gray.200", "gray.900");
  const defaultColor = color
    ? color
    : useColorModeValue("gray.700", "whiteAlpha.800");
  return (
    <Box py={[10, 10, 20]} width="full" bg={defaultBg} {...rest}>
      <Container maxW="container.xl">
        <Stack direction={["column", "column", "row"]} spacing={[10, 10, 14]}>
          {items.map((item, idx) => (
            <Flex
              key={item.title + idx}
              flex="1"
              data-aos="fade-up"
              data-aos-delay={100 * idx}
            >
              <Flex width="full" direction="column">
                <Box width="full" pos="relative">
                  <AspectRatio mb={8} ratio={4 / 3}>
                    <Image
                      rounded="xl"
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                      alt={item.title}
                      src={item.image}
                    />
                  </AspectRatio>
                </Box>

                <VStack color={defaultColor} mb={6} align="stretch" spacing={2}>
                  <Text noOfLines={3} lineHeight={1} variant="subtitle">
                    {item.subtitle}
                  </Text>
                  <Wrap
                    shouldWrapChildren
                    fontFamily="mono"
                    fontSize="sm"
                    align="center"
                  >
                    <Text>{timeAgo(item.date)}</Text>
                    <Circle size={1} bg="gray.500" />
                    <Text>{item.meta}</Text>
                  </Wrap>
                  <Heading fontFamily="body" as="h3" size="lg" lineHeight={1.2}>
                    <NextLink href={item.href} passHref>
                      <Link _hover={{ color: "brand.400" }}>{item.title}</Link>
                    </NextLink>
                  </Heading>
                </VStack>
              </Flex>
            </Flex>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

interface ICallToActionBlock extends BlockProps {
  title: string;
  items: string[];
  actionText: string;
  action: (e?: React.MouseEvent<HTMLButtonElement>) => void;
}

const CallToActionBlock: React.FC<ICallToActionBlock> = ({
  title,
  items = [],
  actionText,
  action,
}) => {
  const defaultColor = useColorModeValue("gray.600", "whiteAlpha.600");
  return (
    <Box py={10} width="full">
      <Container maxW="container.xl">
        <VStack spacing={[10]} textAlign={["center"]}>
          {title && (
            <Heading
              as="h3"
              size="3xl"
              maxW="container.md"
              data-aos="fade-up"
              data-aos-delay={0}
            >
              {title}
            </Heading>
          )}
          <Wrap justify="center" spacingX={10}>
            {items.map((item, idx) => (
              <WrapItem key={item + idx}>
                <HStack
                  data-aos="fade-up"
                  data-aos-delay={100 * idx}
                  color={defaultColor}
                  fontSize="xl"
                  align="center"
                >
                  <Icon as={FaRegCheckCircle} />
                  <Text fontWeight="semibold">{item}</Text>
                </HStack>
              </WrapItem>
            ))}
          </Wrap>
          {actionText && (
            <Button
              size="jumbo"
              onClick={action}
              variant="outline"
              data-aos="fade-up"
              data-aos-delay={100 * items.length}
            >
              {actionText}
            </Button>
          )}
        </VStack>
      </Container>
    </Box>
  );
};

export default Blog2Page;
