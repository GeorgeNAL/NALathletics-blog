import { BsCheckCircleFill, BsFillXCircleFill } from "@react-icons";

import React, { useContext, useState } from "react";

import { NextSeo } from "next-seo";

import {
  AspectRatio,
  Badge,
  Box,
  Button,
  chakra,
  type ChakraProps,
  Container,
  Flex,
  Heading,
  Icon,
  Link,
  SimpleGrid,
  Stack,
  StackDivider,
  Switch,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  type ThemingProps,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";

import Logo1 from "@definitions/brands/logo-1";
import { ThemeColorContext } from "@definitions/context/theme";
import Site from "@definitions/site";

import Image from "@components/image";
import PopularTag from "@components/popular-tag";
import PricingBox from "@components/pricing-box";

import FAQ from "@blocks/faq-block";

const PricingPage: React.FC = () => {
  const [yearly, setYearly] = useState(false);
  const theme = useContext(ThemeColorContext);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const themeColorScheme = theme.colorScheme; // global default primary theme color

  const plans = [
    {
      title: "Basic",
      body: "For Small Businesses who are just starting on their marketing.",
      price: 30,
      yearlyPrice: 250,
    },
    {
      isPromote: true,
      circleBg: "green.200",
      title: "Professional",
      body: "For Established Marketing Teams with bigger needs.",
      price: 80,
      yearlyPrice: 670,
      button: "Get Started",
      bg: "brand.500",
      color: "whiteAlpha.900",
    },
    {
      circleBg: "purple.200",
      title: "Enterprise",
      body: "For Agencies who need to manage multiple accounts.",
      price: 120,
      yearlyPrice: 1000,
      button: "Get Started",
    },
  ];

  return (
    <>
      <NextSeo
        title="Senco React E-Commerce"
        description="Senco React E-Commerce Website Template"
      />
      <chakra.main bg={useColorModeValue("gray.50", "gray.800")}>
        <VStack pb={32} spacing={32}>
          <Box
            pt={[28, 28, 32, 210]}
            pb={32}
            bg={useColorModeValue("gray.100", "gray.900")}
            width="full"
          >
            <Container maxW={650}>
              <VStack textAlign="center">
                <Text variant="subtitle" data-aos="fade-up">
                  Pricing
                </Text>
                <Heading
                  as="h1"
                  size="3xl"
                  data-aos="fade-up"
                  data-aos-delay="50"
                >
                  Get started for free. Add a plan later.
                </Heading>
                <Text
                  data-aos="fade-up"
                  data-aos-delay="100"
                  maxW={500}
                  fontSize="2xl"
                >
                  Get a 14-day trial period. Then choose a plan that will meet
                  your needs.
                </Text>

                {/* Billing period */}
                <Box pos="relative" data-aos="fade-up" data-aos-delay="150">
                  <Stack
                    direction={["column", "row", "row"]}
                    align="center"
                    mt={8}
                    spacing={4}
                  >
                    <Text fontFamily="mono">Monthly Billing</Text>
                    <Switch
                      size="lg"
                      isChecked={yearly}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setYearly(e.target.checked)
                      }
                    />
                    <Flex
                      align="center"
                      direction="column-reverse"
                      pos="relative"
                    >
                      <Text fontFamily="mono">Yearly Billing</Text>
                      <Box
                        position={["unset", "unset", "absolute"]}
                        right="-90px"
                        top="3px"
                      >
                        <PopularTag
                          px={2}
                          rounded="sm"
                          width="4px"
                          fontSize="xs"
                        >
                          Save 30%
                        </PopularTag>
                      </Box>
                    </Flex>
                  </Stack>
                </Box>
              </VStack>
            </Container>
          </Box>

          <Container maxW="container.xl">
            <SimpleGrid
              mt={-48}
              width="full"
              columns={[1, 1, 2, 3]}
              spacing={10}
            >
              {plans.map((plan, idx) => (
                <PricingBox
                  key={`plan-${plan.title}`}
                  yearly={yearly}
                  data-aos="fade-up"
                  data-aos-delay={50 * idx ?? 0}
                  {...plan}
                />
              ))}
            </SimpleGrid>
          </Container>

          {/* ComparisonTable */}
          <Container maxW="container.xl">
            <ComparisonTable data-aos="fade-up" data-aos-delay={100} />
          </Container>

          {/* Features */}
          <Container maxW="container.xl">
            <FeaturesBlock data-aos="fade-up" data-aos-delay={100} />
          </Container>

          {/* FAQ */}
          <Container maxW="container.xl">
            <FAQBlock />
          </Container>

          {/* Testimonial */}
          <Container maxW="container.xl">
            <Testimonial />
          </Container>

          {/* CTA */}
          <Container maxW="container.xl">
            <CTA />
          </Container>
        </VStack>
      </chakra.main>
    </>
  );
};

const CTA: React.FC<ChakraProps & ThemingProps> = (props) => {
  const mouseDownHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (event.button === 0) window.open(Site.purchase, "_blank");
    if (event.button === 1) window.open(Site.purchase, "_blank");
  };
  return (
    <Box {...props}>
      <VStack spacing={10}>
        <VStack textAlign="center">
          <Heading data-aos="fade-up" data-aos-delay="50" size="xl">
            Start your business journey with Senco template
          </Heading>
          <Text data-aos="fade-up" data-aos-delay="100" fontSize="xl">
            Try Senco for free, and explore all the tools and services you need
            to start, run, and grow your business.
          </Text>
        </VStack>
        <Button
          onClick={mouseDownHandler}
          data-aos="fade-up"
          data-aos-delay="150"
          size="jumbo"
        >
          Start free trial
        </Button>
      </VStack>
    </Box>
  );
};

const Testimonial: React.FC<ChakraProps & ThemingProps> = (props) => {
  return (
    <Box {...props}>
      <Stack
        rounded="md"
        overflow="hidden"
        direction={["column", "column", "column", "row"]}
        spacing={[0]}
      >
        <Flex flex="1" data-aos="fade" data-aos-delay="50">
          <Flex
            flex="1"
            pos="relative"
            width="full"
            align="stretch"
            minH={290}
            sx={{ "& > div": { width: "full", height: "full" } }}
          >
            <Image
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              src="https://source.unsplash.com/IyaNci0CyRk"
              alt="testimonial image"
            />
          </Flex>
        </Flex>
        <Flex
          flex="1"
          bg={useColorModeValue("amber.100", "gray.700")}
          align="center"
          justify="center"
          data-aos="fade"
          data-aos-delay="100"
        >
          <VStack p={[10]} spacing={[2, 4, 6, 10]}>
            <Flex direction="column" align="center" justify="center">
              <Text fontSize="sm" variant="subtitle">
                Stories
              </Text>
              <Heading lineHeight={1.2} size="xl" textAlign="center">
                “Senco offers empowering features designed for teams and offers
                products with a wide range of creative sophistication demands.”
              </Heading>
            </Flex>
            <Logo1 />
            <Button size="lg" colorScheme="white" variant="solid">
              Read ACME's Story
            </Button>
          </VStack>
        </Flex>
      </Stack>
    </Box>
  );
};

const ComparisonTable: React.FC<ChakraProps & ThemingProps> = (props) => {
  const titles = [
    { title: "Basic", body: "$30 /month" },
    { title: "Professional", body: "$80 /month" },
    { title: "Enterprise", body: "$120 /month" },
  ];

  const features = [
    {
      title: "Online Store",
      data: [true, true, true],
    },
    {
      title: "Unlimited products",
      data: [undefined, true, true],
    },
    {
      title: "Staff accounts",
      data: ["1", "5", "10"],
    },
    {
      title: "Inventory locations",
      data: ["up to 2", "up to 6", "up to 8"],
    },
    {
      title: "E-Commerce automations",
      data: ["-", "-", true],
    },
    {
      title: "Shipping discount",
      data: ["up to 65%", "up to 75%", "up to 75%"],
    },
    {
      title: "Shipping labels",
      data: [true, true, true],
    },
    {
      title: "Fraud analysis",
      data: [true, true, true],
    },
    {
      title: "Currency conversion",
      data: [true, true, true],
    },
    {
      title: "Local payment methods",
      data: [true, true, true],
    },
    {
      title: "Custom pricing by market",
      data: [undefined, true, true],
    },
    {
      title: "Duties and import taxes",
      data: [undefined, undefined, true],
    },
    {
      title: "Reports",
      data: ["Basic", "Standard", "Advanced"],
    },
    {
      title: "24/7 support",
      data: [false, true, true],
    },
    {
      title: "Third-party integrations",
      data: [false, false, true],
    },
    {
      title: "Shopping version",
      data: [
        { children: <Badge colorScheme="orange">v1.2.x</Badge> },
        { children: <Badge colorScheme="green">v2.4.0</Badge> },
        { children: <Badge colorScheme="brand">@Next</Badge> },
      ],
    },
  ];

  return (
    <Box {...props}>
      <VStack mb={10} textAlign="center">
        <Text variant="subtitle" data-aos="fade-up">
          Comparison
        </Text>
        <Heading size="xl" data-aos="fade-up" data-aos-delay="50">
          {/* See which is the best price plan for you */}
          See which one is the best price plan for you
        </Heading>
      </VStack>

      <Box>
        <VStack divider={<StackDivider />} spacing={10} align="stretch">
          <SimpleGrid
            fontSize="2xl"
            fontWeight={500}
            columns={[1, 1, 4]}
            spacing={4}
          >
            <Text textAlign={["center", "center", "start"]}>Features</Text>
            {titles.map((item) => (
              <Box textAlign="center" key={item.title}>
                <Text>{item.title}</Text>
                <Text fontWeight="normal" fontSize="md">
                  {item.body}
                </Text>
              </Box>
            ))}
          </SimpleGrid>

          {features.map((feature) => (
            <SimpleGrid
              key={feature.title}
              fontSize="xl"
              columns={[1, 1, 4]}
              spacing={4}
            >
              <Text fontWeight={400} textAlign={["center", "center", "start"]}>
                {feature.title}
              </Text>
              {feature.data.map((d, idx) => (
                <Flex
                  key={`${feature.title}-submap-${idx}`}
                  fontFamily="mono"
                  fontSize="md"
                  align="center"
                  justify={["space-between", "space-between", "center"]}
                >
                  <Text display={["block", "block", "none"]}>
                    {titles[idx].title}
                  </Text>
                  {ComparisonTableValue(d)}
                </Flex>
              ))}
            </SimpleGrid>
          ))}
        </VStack>
      </Box>
    </Box>
  );
};

const FAQBlock: React.FC<ChakraProps & ThemingProps> = (props) => {
  const ShippingDelivery = [
    {
      title: "Where can I view my deliveries?",
      body: "Eiusmod sit esse laboris labore reprehenderit mollit non consequat ex fugiat minim cillum nostrud.",
    },
    {
      title: "How do I track my deliveries?",
      body: "Laboris officia eu adipisicing consequat quis do Lorem fugiat do nisi nisi aute duis.",
    },
    {
      title: "How does automatic tracking work?",
      body: "Aliqua enim ullamco ipsum cillum in dolore aute commodo.",
    },
    {
      title: "How do I edit my shipping address or credit card info?",
      body: "Nostrud tempor excepteur consectetur duis consequat officia irure ipsum in adipisicing.",
    },
    {
      title: "Can I cancel my order, return an item, or request a refund?",
      body: "Ullamco eu eiusmod enim amet anim et esse duis sunt labore duis ipsum velit quis.",
    },
  ];

  const OnlineStore = [
    {
      title: "How do I get started with Senco?",
      body: "Adipisicing laborum sint ut aliqua est exercitation.",
    },
    {
      title: "What does a Senco subscription include?",
      body: "Laboris culpa aliquip proident aliquip ex.",
    },
    {
      title: "What payment methods are accepted?",
      body: "Do minim veniam veniam voluptate in irure laboris aliquip ea.",
    },
    {
      title: "What happens if I am unable to pay my bill by the due date?",
      body: "Ullamco incididunt cillum aliquip cupidatat aliqua sit velit quis culpa.",
    },
  ];

  const PrivacySecurity = [
    {
      title: "Manage ssh access",
      body: "Amet exercitation sint eiusmod pariatur pariatur.",
    },
    {
      title: "Two-factor authentication",
      body: "Et adipisicing elit aute excepteur aliqua ea adipisicing exercitation eiusmod pariatur incididunt ad.",
    },
    {
      title: "Changing your password",
      body: "Nisi sit ea aliquip adipisicing occaecat irure ullamco laboris minim amet laboris aliquip elit.",
    },
    {
      title: "Resetting your Two-Factor authentication",
      body: "Aliqua magna reprehenderit ipsum laboris minim sint.",
    },
  ];

  const style = {
    justifyContent: "start",
    _hover: { color: "brand.300" },
    _selected: { fontWeight: 700, color: "brand.400" },
  };

  return (
    <Box {...props}>
      <VStack mb={[10]} textAlign="center">
        <Text variant="subtitle" data-aos="fade-up">
          FAQ
        </Text>
        <Heading maxW={900} size="xl" data-aos="fade-up" data-aos-delay="50">
          Got questions? We have got answers
        </Heading>
        <Text data-aos="fade-up" data-aos-delay="100" maxW={800} fontSize="2xl">
          Be able to see what is important and make changes instantly with
          powerful data analytics.
        </Text>
      </VStack>

      <Tabs
        id="faq-tabs"
        isLazy={true}
        alignItems="baseline"
        variant="unstyled"
        display={["flex"]}
        flexDirection={["column", "column", "row"]}
        data-aos="fade-up"
        data-aos-delay="150"
        // orientation={["horizontal", "horizontal", "vertical"]}
      >
        <TabList
          flexDirection={["row", "row", "column", "column"]}
          flex="1"
          mr={[0, 0, 16, 32]}
        >
          <Tab {...style}>Online Store</Tab>
          <Tab {...style}>Shipping & Delivery</Tab>
          <Tab {...style}>Privacy and Security</Tab>
        </TabList>

        <TabPanels p={0} flex="3">
          <TabPanel data-aos="fade-up">
            <FAQ items={OnlineStore} />
          </TabPanel>
          <TabPanel>
            <FAQ items={ShippingDelivery} />
          </TabPanel>
          <TabPanel>
            <FAQ items={PrivacySecurity} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

const FeaturesBlock: React.FC<ChakraProps & ThemingProps> = (props) => {
  return (
    <Box {...props}>
      <VStack mb={[10, 20, 32]} textAlign="center">
        <Text variant="subtitle" data-aos="fade-up">
          Platform
        </Text>
        <Heading maxW={900} size="xl" data-aos="fade-up" data-aos-delay="50">
          Bring your business online & Increase your income
        </Heading>
        <Text data-aos="fade-up" data-aos-delay="100" maxW={800} fontSize="2xl">
          With our comprehensive, yet simple ecommerce and point of sale
          solutions, you can create a custom store, process payments, track
          sales, and more.
        </Text>
      </VStack>

      {/* Features */}
      <VStack
        align={["start", "stretch", "stretch"]}
        spacing={[10, 10, 20, 32]}
      >
        <Stack
          align="center"
          spacing={[10, 10, 20, 32]}
          direction={["column", "column", "row"]}
        >
          <Flex data-aos="fade-up" data-aos-delay="50" width="full" flex="1">
            <AspectRatio pos="relative" flex="1" ratio={4 / 3}>
              <Image
                rounded="md"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                src="https://source.unsplash.com/Ox6SW103KtM"
                alt="sell everywhere"
              />
            </AspectRatio>
          </Flex>
          <VStack
            flex="1"
            align="start"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <Heading as="h3" size="lg">
              Sell everywhere
            </Heading>
            <Text fontSize="lg">
              With one comprehensive platform, Senco tools and accessories
              empower you to sell products and services to anyone, anywhere.
            </Text>
            <Link fontWeight={600}>Explore sales tools</Link>
          </VStack>
        </Stack>

        <Stack
          spacing={[10, 10, 20, 32]}
          align="center"
          direction={["column", "column", "row-reverse"]}
        >
          <Flex data-aos="fade-up" data-aos-delay="50" width="full" flex="1">
            <AspectRatio pos="relative" flex="1" ratio={4 / 3}>
              <Image
                rounded="md"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                src="https://source.unsplash.com/U33fHryBYBU"
                alt="grow your audience"
              />
            </AspectRatio>
          </Flex>
          <VStack
            flex="1"
            align="start"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <Heading as="h3" size="lg">
              Grow your audience
            </Heading>
            <Text fontSize="lg">
              With AI marketing tools, you can stay ahead of the competition
              with access to marketing tools that help you grow your audience,
              convert leads, and deliver the right products directly to your
              customers.
            </Text>
            {/* <Button variant="ghost">Discover marketing tools</Button> */}
            <Link fontWeight={600}>Explore marketing tools</Link>
          </VStack>
        </Stack>

        <Stack
          align="center"
          spacing={[10, 10, 20, 32]}
          direction={["column", "column", "row"]}
        >
          <Flex data-aos="fade-up" data-aos-delay="50" width="full" flex="1">
            <AspectRatio pos="relative" flex="1" ratio={4 / 3}>
              <Image
                rounded="md"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                src="https://source.unsplash.com/yTwXpLO5HAA"
                alt="manage everything"
              />
            </AspectRatio>
          </Flex>
          <VStack
            flex="1"
            align="start"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <Heading as="h3" size="lg">
              Manage everything
            </Heading>
            <Text fontSize="lg">
              Use one platform to sell products to anyone, anywhere—in person
              with Point of Sale and online through your website, social media,
              and online marketplaces.
            </Text>
            <Link fontWeight={600}>Explore management tools</Link>
          </VStack>
        </Stack>
      </VStack>
    </Box>
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ComparisonTableValue = (value: any) => {
  // const disColor =
  const color = useColorModeValue("brand.400", "brand.200");
  const colorDisabled = useColorModeValue("gray.300", "gray.600");
  const colorError = useColorModeValue("red.400", "red.300");
  const Disabled = () => <Icon color={colorDisabled} as={BsCheckCircleFill} />;
  const Checked = () => <Icon color={color} as={BsCheckCircleFill} />;
  const UnChecked = () => <Icon color={colorError} as={BsFillXCircleFill} />;

  let item;

  switch (typeof value) {
    case "undefined":
      item = <Disabled />;
      break;
    case "boolean":
      item = value ? <Checked /> : <UnChecked />;
      break;
    case "string":
      item = <Text>{value}</Text>;
      break;
    case "number":
      item = <Text>{value}</Text>;
      break;
    case "object":
      item = value?.children ?? undefined;
      break;
    default:
      item = value;
  }

  return <>{item}</>;
};

export default PricingPage;
