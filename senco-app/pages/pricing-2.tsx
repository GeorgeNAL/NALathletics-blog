import { FiCheck } from "@react-icons";

import React, { useContext, useState } from "react";

import { NextSeo } from "next-seo";

import {
  Box,
  Button,
  chakra,
  type ChakraProps,
  Container,
  Flex,
  Heading,
  Icon,
  SimpleGrid,
  Stack,
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
import PriceFormat from "@definitions/utils/price-format";

import Image from "@components/image";
import PopularTag from "@components/popular-tag";

import FAQ from "@blocks/faq-block";

const Pricing2Page: React.FC = () => {
  const [yearly, setYearly] = useState(false);
  const theme = useContext(ThemeColorContext);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const themeColorScheme = theme.colorScheme; // global default primary theme color

  const plans = [
    {
      title: "Free",
      body: "The quickest and easiest way to try Senco",
      price: 0,
      yearlyPrice: 0,
      isFree: true,
      button: "Sign Up Free",
      features: [
        "Access to all 10,000 linked channels, as well as the most recent messages (Messenger, WhatsApp, Telegram, Instagram)",
        "5 Free integrations with other apps like Google Drive, Dropbox, Zoom etc",
        "1 paid channel add-ons (Twitter DMs, WhatsApp for Business and SMS)",
        "Unlimited team inboxes",
        "10GB file storage",
      ],
    },
    {
      title: "Pro",
      body: "More authority for small teams seeking improved collaboration",
      price: 10,
      yearlyPrice: 84,
      button: "Get Started",
      note: "All the benefits of Free, and:",
      features: [
        "The full context of your organization’s message history at your fingertips",
        "Project Overview",
        "Unlimited Dashboards",
        "Reporting across unlimited projects",
        "Private teams & projects",
      ],
    },
    {
      title: "Business",
      body: "Boost output and maintain team communication",
      price: 30,
      yearlyPrice: 252,
      button: "Get Started",
      note: "All of Pro's awesomeness, and:",
      features: [
        "Customizable AI Chatbots",
        "Integrated knowledge base",
        "Customizable Rules Engines & Load Balancer",
        "Google Authentication for sign ups",
        "Full transaction and operation reports",
      ],
    },
    {
      colorScheme: "deepPurple",
      title: "Enterprise",
      body: "All the adaptability to meet regulatory requirements and all the power to match your growth for the most demanding enterprises.",
      // price: undefined,
      // yearlyPrice: undefined,
      button: "Contact Sales",
      note: "All the goodness of Business, and:",
      features: [
        "Large scale collaboration and alignment with support for up to 250,000 users",
        "Advanced identity management through SAML-based SSO and real-time Active Directory sync with OneLogin, Okta and Ping Identity",
        "99.99% guaranteed uptime and 24/7 support with a four-hour response time",
      ],
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
            pb={64}
            bg={useColorModeValue("gray.100", "gray.900")}
            width="full"
          >
            <Container maxW="container.xl">
              <Stack
                spacing={10}
                align="end"
                direction={["column", "column", "column", "row"]}
              >
                <VStack
                  flex="1"
                  align={{ base: "center", lg: "start" }}
                  textAlign={{ base: "center", lg: "start" }}
                >
                  <Text variant="subtitle" data-aos="fade-up">
                    Pricing
                  </Text>
                  <Heading
                    as="h1"
                    size="3xl"
                    data-aos="fade-up"
                    data-aos-delay="50"
                  >
                    Pick a plan that is appropriate for your company
                  </Heading>
                </VStack>

                <Stack spacing={6} align={{ base: "center", lg: "start" }}>
                  <Text
                    data-aos="fade-up"
                    data-aos-delay="100"
                    maxW={["full", "full", "full", 500]}
                    textAlign={{ base: "center", lg: "start" }}
                    fontSize="2xl"
                  >
                    Get a 14-day trial period. Then select a package that will
                    match your requirements
                  </Text>

                  {/* Billing period */}
                  <Box pos="relative" data-aos="fade-up" data-aos-delay="150">
                    <Stack
                      align="center"
                      spacing={4}
                      direction={["column", "row", "row"]}
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
                </Stack>
              </Stack>
            </Container>
          </Box>

          <Container maxW="container.xl">
            <SimpleGrid
              p={10}
              mt={-64}
              shadow="lg"
              rounded="md"
              width="full"
              spacing={10}
              columns={[1, 1, 2, 2, 4]}
              bg={useColorModeValue("white", "gray.900")}
            >
              {plans.map((plan, idx) => (
                <PlanBlock
                  key={plan.title + idx}
                  index={idx}
                  data-aos="fade-up"
                  data-aos-delay={50 * idx}
                  {...plan}
                />
              ))}
            </SimpleGrid>
          </Container>

          <SubscriptionHelpBlock />

          {/* FAQ */}
          <Box
            width="full"
            py={[10, 10, 20]}
            bg={useColorModeValue("white", "gray.900")}
          >
            <Container maxW="container.xl">
              <FAQBlock />
            </Container>
          </Box>

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

interface IPlanProps extends ChakraProps, ThemingProps {
  body: string;
  button: string;
  features: string[];
  index: number;
  isFree?: boolean;
  isYearly?: boolean;
  note?: string;
  price?: number;
  title: string;
  yearlyPrice?: number;
}

const PlanBlock: React.FC<IPlanProps> = ({
  body,
  button,
  features,
  index,
  isFree,
  isYearly,
  note,
  price,
  title,
  yearlyPrice,
  colorScheme,
  ...rest
}) => {
  return (
    <Flex
      pos="relative"
      direction="column"
      _after={{
        content: "''",
        pos: "absolute",
        left: -5,
        display: {
          base: "none",
          md: index % 2 ? "block" : "none",
          xl: index ? "block" : "none",
        },
        width: "1px",
        height: "100%",
        bg: useColorModeValue("gray.100", "gray.700"),
      }}
      {...rest}
    >
      <VStack align="start" spacing={6}>
        <Text fontSize="2xl" fontWeight="bold">
          {title}
        </Text>
        <Text fontSize="md">{body}</Text>
        <Text minH={2} fontFamily="mono" fontSize="4xl" fontWeight="bold">
          {price != undefined &&
            PriceFormat(isYearly ? yearlyPrice : price, 0, isYearly ? 0 : 2)}
        </Text>

        <Button
          mb={10}
          size="jumbo"
          rounded="md"
          width="full"
          colorScheme={colorScheme}
          variant={isFree ? "outline" : "solid"}
        >
          {button}
        </Button>
        <Text fontWeight="semibold">{note}</Text>
        {features && (
          <Stack spacing={3}>
            {features.map((feature, idx) => (
              <Flex key={feature + idx} align="start">
                <Icon as={FiCheck} mr={4} mt={0.5} />
                <Text fontSize="sm">{feature}</Text>
              </Flex>
            ))}
          </Stack>
        )}
      </VStack>
    </Flex>
  );
};

const SubscriptionHelpBlock = () => {
  const heading = "clamp(2.5rem, 5vw, 3rem)";
  return (
    <Container maxW="container.xl">
      <VStack textAlign="center" spacing={10}>
        <Heading data-aos="fade-up" data-aos-delay="0" fontSize={heading}>
          <Text as="span">
            Uncertain if our subscription is the best choice for you?
          </Text>{" "}
          <Text as="span" fontWeight={400}>
            Have a project you'd like to talk about?
          </Text>
        </Heading>
        <Button data-aos="fade-up" data-aos-delay="100" size="jumbo">
          Let's chat
        </Button>
      </VStack>
    </Container>
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
            Utilize The Senco Template to Launch Your Business
          </Heading>
          <Text
            data-aos="fade-up"
            data-aos-delay="100"
            fontSize="xl"
            maxW={800}
          >
            Discover all the resources and services you require to launch,
            manage, and expand your business by giving Senco a free trial.
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
        rounded="xl"
        shadow="2xl"
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
              src="https://source.unsplash.com/nYgy58eb9aw"
              alt="testimonial image"
            />
          </Flex>
        </Flex>
        <Flex
          flex="1"
          bg={useColorModeValue("gray.100", "gray.700")}
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
                “ The most popular loyalty program in the world, utilized by
                millions of the top businesses, helped Senco build its brand. ”
              </Heading>
            </Flex>
            <Logo1 />
            <Button size="lg" colorScheme="white" variant="solid">
              Read Acme Story
            </Button>
          </VStack>
        </Flex>
      </Stack>
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
        <Heading size="xl" data-aos="fade-up" data-aos-delay="50">
          Have inquiries? We have solutions.
        </Heading>
        <Text
          data-aos="fade-up"
          data-aos-delay="100"
          // maxW={1700}
          fontSize="2xl"
        >
          Utilize robust data analytics to quickly identify what is important
          and make adjustments.
        </Text>
      </VStack>

      <Tabs
        id="pricing-2-faq-tabs"
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

export default Pricing2Page;
