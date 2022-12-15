import {
  FaFacebookF,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
  FiAward,
  FiHeadphones,
  FiTv,
} from "@react-icons";

import React, { useContext } from "react";

import { NextSeo } from "next-seo";
import NextLink from "next/link";

import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  AspectRatio,
  Avatar,
  Box,
  Button,
  chakra,
  type ChakraProps,
  Circle,
  Container,
  Divider,
  Flex,
  Heading,
  Icon,
  Link,
  SimpleGrid,
  Stack,
  StackDivider,
  type StackProps,
  Text,
  type ThemingProps,
  useColorModeValue,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

import { ThemeColorContext } from "@definitions/context/theme";
import Site from "@definitions/site";

import Image from "@components/image";

const AboutPage: React.FC = () => {
  const theme = useContext(ThemeColorContext);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const themeColorScheme = theme.colorScheme; // global default primary theme color

  const gray = useColorModeValue("gray.600", "gray.400");
  const lightGray = useColorModeValue("gray.50", "gray.900");

  return (
    <>
      <NextSeo
        title="About Senco React E-Commerce"
        description="About Senco React E-Commerce Website Template"
      />
      <chakra.main>
        <VStack align="stretch" mb={32} spacing={32}>
          <Header bodyColor={gray} />
          <Feature bodyColor={gray} />
          <Stats bodyColor={gray} />
          <Mission bodyColor={gray} />
          <VStack>
            <Divider maxW="30rem" />
          </VStack>
          <ContentBox
            bodyColor={gray}
            subtitle="Our Community"
            title="We have a creative community"
            body="Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Cum ceteris in veneratione tui montes, nascetur mus. Cras mattis iudicium purus sit amet fermentum. At nos hinc posthac, sitientis piros Afros. Magna pars studiorum, prodita quaerimus."
            image="/images/team-3.jpg"
          />
          <ContentBox
            bodyColor={gray}
            direction={["column", "column", "row-reverse"]}
            subtitle="Open Source Community"
            title="We grow with open collaboration"
            body="Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Cum ceteris in veneratione tui montes, nascetur mus. Cras mattis iudicium purus sit amet fermentum. At nos hinc posthac, sitientis piros Afros. Magna pars studiorum, prodita quaerimus."
            image="/images/team-6.jpg"
          />
          <Team bodyColor={gray} />
          <LearnMoreAboutUs bg={lightGray} bodyColor={gray} />
          <CTA bodyColor={gray} />
        </VStack>
      </chakra.main>
    </>
  );
};

interface I_BlockProps extends ChakraProps, ThemingProps {
  bodyColor?: string;
}

const Header: React.FC<I_BlockProps> = ({ bodyColor }) => {
  const bg = useColorModeValue("brand.50", "gray.700");
  return (
    <Flex w="full" bg={bg}>
      <Container maxW="container.xl" pt={[20, 24, 28, 44]} pb={[5, 5, 10, 32]}>
        <SimpleGrid
          w="full"
          flex="1"
          columns={[1, 1, 1, 2]}
          spacing={[5, 5, 10]}
        >
          <VStack
            align={["center", "center", "center", "stretch"]}
            textAlign={["center", "center", "center", "start"]}
            w="full"
            spacing={[2, 2, 4]}
          >
            <Text variant="subtitle" data-aos="fade-up">
              About us
            </Text>
            <Heading size="2xl" data-aos="fade-up" data-aos-delay={100}>
              We develop digital products for startups & enterprises
            </Heading>
            <Text
              color={bodyColor}
              fontSize="xl"
              data-aos="fade-up"
              data-aos-delay={150}
            >
              We’ve worked on over 50+ projects with clients in 12 industries,
              from early-stage startups to Fortune 500 companies.
            </Text>
          </VStack>

          <Flex
            direction={["column", "row", "row", "row"]}
            pos="relative"
            w="full"
            h="full"
            flex="1"
          >
            <AspectRatio
              pos={["unset", "unset", "unset", "absolute"]}
              mb={[5, 0, 0, 0]}
              left={0}
              maxW={["full", "full", "full", "86%"]}
              w="full"
              // h="full"
              flex="1"
              ratio={4 / 3}
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <Image
                flex="1"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                src="/images/office-1.jpg"
                rounded="md"
                roundedRight={["md", "none", "none", "md"]}
                alt="office"
              />
            </AspectRatio>
            <AspectRatio
              pos={["unset", "unset", "unset", "absolute"]}
              right={0}
              top="80%"
              maxW={["full", "full", "full", "60%"]}
              w="full"
              // h="full"
              flex="1"
              ratio={4 / 3}
              data-aos="fade-up"
              data-aos-delay={250}
            >
              <Image
                flex="1"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                src="/images/shopping-2.jpg"
                rounded="md"
                roundedLeft={["md", "none", "none", "md"]}
                alt="shopping"
              />
            </AspectRatio>
          </Flex>
        </SimpleGrid>
      </Container>
    </Flex>
  );
};

const Feature: React.FC<I_BlockProps> = ({ bodyColor }) => {
  return (
    <Box>
      <Container maxW="container.lg">
        <SimpleGrid
          alignItems={"center"}
          columns={[1, 1, 2]}
          spacing={[10, 10, 10, 20]}
        >
          <Box>
            <AspectRatio
              // bg="lime.100"
              ratio={1}
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <Image
                flex="1"
                layout="fill"
                objectFit="cover"
                src="/images/shopping.jpg"
                rounded="md"
                alt="shopping"
              />
            </AspectRatio>
          </Box>
          <Box data-aos="fade-up" data-aos-delay={200}>
            <VStack align="stretch" spacing={[2, 2, 4]}>
              <Text variant="subtitle" fontSize="sm">
                Built with Senco
              </Text>
              <Heading>
                Get started now easily in the e-commerce with Senco template
              </Heading>
              <Text color={bodyColor} fontSize="lg">
                Pellentesque habitant morbi tristique senectus et netus. At nos
                hinc posthac, sitientis piros Afros. Cum sociis natoque
                penatibus et magnis dis parturient. Fabio vel iudice vincam,
                sunt in culpa qui officia. Phasellus laoreet lorem vel dolor
                tempus vehicula.
              </Text>
            </VStack>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

const Stats: React.FC<I_BlockProps> = ({ bodyColor }) => {
  return (
    <Box>
      <Container maxW="container.xl">
        <Stack
          width="full"
          divider={<StackDivider />}
          direction={["column", "column", "row", "row"]}
          spacing={[5, 5, 10]}
        >
          <Flex flex="1">
            <StatsContent
              bodyColor={bodyColor}
              title="50+"
              body="Completed projects"
            />
          </Flex>
          <Flex flex="1">
            <StatsContent
              bodyColor={bodyColor}
              title={12}
              body="Industries served"
            />
          </Flex>
          <Flex flex="1">
            <StatsContent
              bodyColor={bodyColor}
              title={"500+"}
              body="Happy Customers"
            />
          </Flex>
          <Flex flex="1">
            <StatsContent
              bodyColor={bodyColor}
              title={"750"}
              body="Worldwide Employees"
            />
          </Flex>
        </Stack>
      </Container>
    </Box>
  );
};

const StatsContent: React.FC<
  {
    title: string | number;
    body: string;
  } & I_BlockProps
> = ({ bodyColor, title, body }) => {
  return (
    <Stack w="full" textAlign="center" align="center" justify="center">
      <Text lineHeight={1} fontSize="6xl" fontWeight="bold">
        {title}
      </Text>
      <Text color={bodyColor} fontSize="lg">
        {body}
      </Text>
    </Stack>
  );
};

const Mission: React.FC<I_BlockProps> = ({ bodyColor }) => {
  return (
    <Box>
      <Container maxW="container.lg">
        <Stack spacing={[10, 10, 20]}>
          <VStack textAlign="center">
            <Text variant="subtitle">Our Mission</Text>
            <Heading>Making commerce easier for everyone</Heading>
            <Text color={bodyColor} fontSize={["xl", "xl", "2xl"]}>
              Inmensae subtilitatis, obscuris et malesuada fames. Excepteur sint
              obcaecat cupiditat non proident culpa. Contra legem facit qui id
              facit quod lex prohibet petierunt uti sibi concilium totius
              Galliae in diem certam indicere.
            </Text>
          </VStack>
        </Stack>
      </Container>
    </Box>
  );
};

interface I_ContentBoxProps extends I_BlockProps, StackProps {
  subtitle: string;
  title: string;
  body: string;
  image: string;
}

const ContentBox: React.FC<I_ContentBoxProps> = ({
  subtitle,
  title,
  body,
  image,
  direction,
  bodyColor,
}) => {
  return (
    <Box>
      <Container maxW="65rem">
        <Stack
          direction={direction ?? ["column", "column", "row"]}
          spacing={[10, 10, 10, 20]}
        >
          <VStack align={["center", "center", "stretch"]} flex="1">
            <Text variant="subtitle" fontSize="sm">
              {subtitle}
            </Text>
            <Heading as="h3" size="lg">
              {title}
            </Heading>
            <Text color={bodyColor} fontSize="xl">
              {body}
            </Text>
          </VStack>
          <AspectRatio ratio={4 / 3} flex="1">
            <Image
              rounded="md"
              // boxShadow="0 0.375rem 1.5rem 0 rgb(140 152 164 / 13%)"
              shadow="2xl"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              src={image}
              alt={title}
            />
          </AspectRatio>
        </Stack>
      </Container>
    </Box>
  );
};

const Team: React.FC<I_BlockProps> = ({ bodyColor }) => {
  const items = [
    {
      image: "/images/avatar-f-1.jpg",
      name: "Jennifer Blaine",
      occupation: "Founder & CEO",
      body: "Lorem ipsum dolor sit amet consectetur adipisici elit sed eiusmod tempor.",
      links: [
        {
          icon: FaFacebookF,
          title: "Facebook",
          href: "https://facebook.com/Themebiotic",
        },
        {
          icon: FaTwitter,
          title: "Twitter",
          href: "https://twitter.com/themebiotic",
        },
        {
          icon: FaGithub,
          title: "Github",
          href: "https://www.github.com/themebiotic",
        },
      ],
    },
    {
      image: "/images/avatar-m-1.jpg",
      name: "Patrick Benson",
      occupation: "Co-Founder & COO",
      body: "Salutantibus vitae elit libero, a pharetra augue elit sed eiusmod tempor.",
      links: [
        {
          icon: FaFacebookF,
          title: "Facebook",
          href: "https://www.facebook.com/Themebiotic",
        },
        {
          icon: FaInstagram,
          title: "Twitter",
          href: "https://instagram.com/themebiotic",
        },
        {
          icon: FaGoogle,
          title: "FaGoogle",
          href: "https://www.google.com/search?q=themebiotic",
        },
      ],
    },
    {
      image: "/images/avatar-f-2.jpg",
      name: "Melissa Taylor",
      occupation: "Product Designer",
      body: "Pellentesque habitant morbi tristique senectus et netus nihil hic habendi.",
      links: [
        {
          icon: FaFacebookF,
          title: "Facebook",
          href: "https://www.facebook.com/Themebiotic",
        },
        {
          icon: FaTwitter,
          title: "Twitter",
          href: "https://twitter.com/themebiotic",
        },
        {
          icon: FaGithub,
          title: "Github",
          href: "https://www.github.com/themebiotic",
        },
      ],
    },
    {
      image: "/images/avatar-m-2.jpg",
      name: "Joshua Smith",
      occupation: "Developer",
      body: "Quam temere in vitiis legem sancimus haerentia inmensae subtilitatis obscuris.",
      links: [
        {
          icon: FaFacebookF,
          title: "Facebook",
          href: "https://www.facebook.com/Themebiotic",
        },
        {
          icon: FaTwitter,
          title: "Twitter",
          href: "https://twitter.com/themebiotic",
        },
        {
          icon: FaGithub,
          title: "Github",
          href: "https://www.github.com/themebiotic",
        },
      ],
    },
  ];
  return (
    <Box>
      <Container maxW="container.xl">
        <VStack align="stretch" width="full" spacing={[10, 10, 20]}>
          <VStack>
            <Text variant="subtitle">Our Team</Text>
            <Heading as="h3" size="xl">
              Meet our amazing team
            </Heading>
          </VStack>
          <SimpleGrid
            width="full"
            columns={[1, 1, 2, 4]}
            spacing={[10, 10, 5, 10]}
          >
            {items.map((item) => (
              <Flex
                key={item.name}
                p={8}
                // shadow="2xl"
                boxShadow="0 0.375rem 1.5rem 0 rgb(140 152 164 / 13%)"
                // borderWidth="1px"
                rounded="lg"
              >
                <VStack
                  width="full"
                  spacing={[1]}
                  align={["center", "center", "stretch"]}
                  textAlign={["center", "center", "start"]}
                >
                  <Flex>
                    <Avatar
                      as={Box}
                      size="lg"
                      src={item.image}
                      name={item.name}
                      mb={4}
                    />
                  </Flex>
                  <Text
                    color={bodyColor}
                    fontSize="sm"
                    textTransform="uppercase"
                    fontWeight="semibold"
                  >
                    {item.occupation}
                  </Text>
                  <Text fontSize="xl" fontWeight="semibold">
                    {item.name}
                  </Text>
                  <Text color={bodyColor}>{item.body}</Text>
                  <Box>
                    <Wrap mt={4}>
                      {item.links?.map((link) => (
                        <WrapItem key={link.href}>
                          <Link
                            isExternal
                            // role="group"
                            data-group
                            href={link.href}
                            title={link.title}
                          >
                            <Circle
                              size={8}
                              borderWidth="1px"
                              color="brand.400"
                              transitionProperty="common"
                              transitionDuration="normal"
                              transitionTimingFunction="ease-in-out"
                              _groupHover={{
                                color: "white",
                                bg: "brand.400",
                              }}
                            >
                              <Icon as={link.icon} w={4} h={4} />
                            </Circle>
                          </Link>
                        </WrapItem>
                      ))}
                    </Wrap>
                  </Box>
                </VStack>
              </Flex>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
};

const LearnMoreAboutUs: React.FC<I_BlockProps> = ({ bodyColor, bg }) => {
  const items = [
    {
      title: "24/7 premium support",
      body: "Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt",
      icon: FiHeadphones,
      link: "Contact support",
      href: "#",
    },
    {
      title: "Career opportunities",
      body: "Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt",
      icon: FiAward,
      link: "Explore careers",
      href: "#",
    },
    {
      title: "Press and media",
      body: "Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt",
      icon: FiTv,
      link: "View press",
      href: "#",
    },
  ];
  return (
    <Box py={[10, 10, 20]} bg={bg}>
      <Container maxW="container.xl">
        <VStack spacing={[10, 10, 14]}>
          <Heading as="h3" size="lg">
            Learn more about Senco
          </Heading>
          <Stack spacing={[10, 10, 20]} direction={["column", "column", "row"]}>
            {items.map((item) => (
              <VStack key={item.title} align="start" flex="1">
                <Box>
                  <Icon as={item.icon} w={8} h={8} mb={2} />
                </Box>
                <Text fontSize="lg" fontWeight="semibold">
                  {item.title}
                </Text>
                <Text color={bodyColor}>{item.body}</Text>
                <NextLink href={item.href} passHref>
                  <Button
                    as="a"
                    variant="link"
                    rightIcon={<ArrowForwardIcon />}
                  >
                    {item.link}
                  </Button>
                </NextLink>
              </VStack>
            ))}
          </Stack>
        </VStack>
      </Container>
    </Box>
  );
};

const CTA: React.FC<I_BlockProps> = ({ bodyColor }) => {
  const mouseDownHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (event.button === 0) window.open(Site.purchase, "_blank");
    if (event.button === 1) window.open(Site.purchase, "_blank");
  };
  return (
    <Box>
      <Container maxW="46rem">
        <VStack textAlign="center" spacing={[10, 10, 10]}>
          <Text color={bodyColor} fontSize="2xl" fontWeight={400}>
            Try Senco for free, and explore all the tools and services for you
            need to start, run, and grow your business.
          </Text>
          <Button onClick={mouseDownHandler} size="jumbo">
            Start free trail
          </Button>
        </VStack>
      </Container>
    </Box>
  );
};

export default AboutPage;
