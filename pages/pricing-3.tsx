import {
  FiCheck,
  FiEdit3,
  FiFolderPlus,
  FiGlobe,
  FiHash,
  FiLoader,
  FiMail,
  FiPaperclip,
  FiStar,
  FiUsers,
} from "@react-icons";

import React, { useContext } from "react";

import { IconType } from "react-icons-all";

import { NextSeo } from "next-seo";

import {
  Box,
  Button,
  chakra,
  type ChakraProps,
  Container,
  Grid,
  Heading,
  Icon,
  Link,
  SimpleGrid,
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

import { ThemeColorContext } from "@definitions/context/theme";
import Site from "@definitions/site";

import FAQ from "@blocks/faq-block";

const Pricing3Page: React.FC = () => {
  const theme = useContext(ThemeColorContext);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const themeColorScheme = theme.colorScheme; // global default primary theme color

  return (
    <>
      <NextSeo
        title="Senco React E-Commerce"
        description="Senco React E-Commerce Website Template"
      />
      <chakra.main bg={useColorModeValue("gray.50", "gray.800")}>
        <VStack pb={[10, 20, 24, 32]} spacing={[10, 20, 24, 32]}>
          <HeroBlock
            items={[
              "Unlimited variants",
              "Unlimited themes",
              "Light and dark UI",
              "Pre-built pages",
              "Accessible components",
              "Themeable",
              "Composable",
              "Developer Experience",
              "Rapid development",
              "Active Community",
              "Response piping",
              "Schedule a close date",
              "Close on submission limit",
              "Individual closing message",
              "Integration with CodeCanyon",
              "Integration with Themeforest",
              "Integration with Envato",
              "Integration with Google",
              "Custom Integration",
              "Webhooks",
            ]}
          />
          <IntroBlock />
          <FeaturesBlock
            items={[
              {
                icon: FiEdit3,
                title: "No Senco branding",
                body: "Remove all Senco branding and have your website seamlessly represent your brand.",
              },
              {
                icon: FiUsers,
                title: "Collaboration",
                body: "Invite team members to collaborate on design in shared workspaces and share page results.",
              },
              {
                icon: FiFolderPlus,
                title: "Workspaces",
                body: "Group related pages in workspaces and manage team members' access rights.",
              },
              {
                icon: FiGlobe,
                title: "Custom domains",
                body: "Host template on your own (sub)domain to create branded form URLs and get access to website.",
              },
              {
                icon: FiHash,
                title: "Custom CSS",
                body: "Inject custom CSS to fully customize the design of your forms.",
              },
              {
                icon: FiMail,
                title: "Email notifications",
                body: "Send fully customized and dynamic emails to yourself or respondents after form submission.",
              },
              {
                icon: FiLoader,
                title: "Partial submissions",
                body: "Capture unfinished form responses before respondents submit your form.",
              },
              {
                icon: FiEdit3,
                title: "No commission",
                body: "Remove 5% Tally commission on your incoming payments and only pay the Stripe transaction fee.",
              },
              {
                icon: FiPaperclip,
                title: "Unlimited uploads",
                body: "Remove the 10 MB per file size limit when using the File Upload block.",
              },
            ]}
          />
          <CTABlock />
        </VStack>
      </chakra.main>
    </>
  );
};

const HeroBlock = ({ items = [] }) => {
  const heading = "clamp(1.8rem, 5vw, 4.125rem)";

  return (
    <Box width="full">
      <Container width="full" maxW="container.xl" pt={[28, 28, 32, 210]}>
        <Heading
          as="h1"
          mb={[10, 10, 20, 28]}
          fontFamily="body"
          fontSize={heading}
          data-aos="fade-up"
        >
          All Users of Senco Have{" "}
          <Text as="span" fontWeight={800} color="brand.400">
            Unlimited Access
          </Text>{" "}
          to 99.9% of Its Features for Free
        </Heading>
        {items && (
          <Grid
            gap={3}
            data-aos="fade-up"
            data-aos-delay={100}
            gridAutoFlow={["row", "column", "column", "column"]}
            templateRows={["auto", "repeat(11, auto)", "repeat(7, auto)"]}
          >
            {items.map((item, idx) => (
              <Text
                key={item + idx}
                display="flex"
                alignItems="center"
                fontSize={["md", "md", "lg", "xl"]}
              >
                <Icon as={FiCheck} mr={2} width={5} height={5} /> {item}
              </Text>
            ))}
            <Text
              display="flex"
              alignItems="center"
              // fontWeight="semibold"
              fontSize={["md", "md", "lg", "xl"]}
            >
              <Icon as={FiStar} mr={2} width={5} height={5} />
              And many, many more
            </Text>
          </Grid>
        )}
      </Container>
    </Box>
  );
};

const IntroBlock = () => {
  const linkStyles = {
    fontFamily: "mono",
    fontWeight: 700,
    color: "brand.400",
  };
  return (
    <Box>
      <Container maxW="container.xl">
        <VStack textAlign="center" spacing={[2, 3, 4]}>
          <Box width="full" data-aos="fade-up">
            <Draw width="full" maxW={600} height="full" />
          </Box>
          <Heading size="xl" data-aos="fade-up" data-aos-delay={100}>
            Add some flavor with Premium
          </Heading>
          <Text
            fontSize="xl"
            maxW={700}
            data-aos="fade-up"
            data-aos-delay={150}
          >
            Senco Premium delivers empowering features designed for teams and
            creative sophisticated demands.
          </Text>
          <Text fontSize="xl" data-aos="fade-up" data-aos-delay={200}>
            Upgrade for <Link {...linkStyles}>$19/month</Link> or{" "}
            <Link {...linkStyles}>$190/year</Link>
          </Text>
          <Button
            size="lg"
            rounded="md"
            data-aos="fade-up"
            data-aos-delay={250}
          >
            Sign up and upgrade
          </Button>
        </VStack>
      </Container>
    </Box>
  );
};

const FeaturesBlock: React.FC<{
  items: { icon: IconType; title: string; body: string }[];
}> = ({ items = [] }) => {
  return (
    <Box
      width="full"
      bg={useColorModeValue("white", "gray.900")}
      overflow="hidden"
      py={[5, 5, 10]}
      pb={[10, 10, 20]}
    >
      <Container maxW="container.lg">
        <SimpleGrid columns={[1, 2, 3, 3]} mb={[10, 10, 20]}>
          {items.map((item, idx) => (
            <Box
              key={item.title + idx}
              data-aos="fade-up"
              data-aos-delay={100 * idx}
            >
              <Box
                rounded="md"
                p={[5, 5, 10]}
                cursor="default"
                transitionProperty="all"
                transitionDuration="slow"
                transitionTimingFunction="ease-in-out"
                _hover={{
                  bg: useColorModeValue("white", "gray.700"),
                  shadow: "2xl",
                }}
              >
                <Text
                  display="flex"
                  alignItems="center"
                  fontWeight="bold"
                  fontSize="xl"
                >
                  <Icon as={item.icon} mr={2} />
                  {item.title}
                </Text>
                <Text>{item.body}</Text>
              </Box>
            </Box>
          ))}
        </SimpleGrid>

        <FAQBlock />
      </Container>
    </Box>
  );
};

const CTABlock: React.FC<ChakraProps & ThemingProps> = (props) => {
  const mouseDownHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (event.button === 0) window.open(Site.purchase, "_blank");
    if (event.button === 1) window.open(Site.purchase, "_blank");
  };

  return (
    <Box {...props}>
      <Container maxW="container.xl">
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
            variant="outline"
            data-aos="fade-up"
            data-aos-delay="150"
            size="jumbo"
          >
            Start Free Trial
          </Button>
        </VStack>
      </Container>
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
        id="pricing-3-faq-tabs"
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

const Draw: React.FC<ChakraProps & ThemingProps> = (props) => {
  return (
    <chakra.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 360.24 318.28"
      // width="406px"
      // height="306px"
      {...props}
    >
      <defs>
        <linearGradient
          id="linear-gradient"
          x1="413.51"
          y1="199.53"
          x2="214.87"
          y2="328.16"
          gradientTransform="matrix(1, 0, 0, -1, 0, 352)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.01"></stop>
          <stop offset="0.08" stopOpacity="0.69"></stop>
          <stop offset="0.21" stopOpacity="0.32"></stop>
          <stop offset="1" stopOpacity="0"></stop>
        </linearGradient>
        <linearGradient
          id="linear-gradient-2"
          x1="246.7"
          y1="142.44"
          x2="243.18"
          y2="26.77"
          gradientTransform="matrix(1, 0, 0, -1, 0, 352)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.01"></stop>
          <stop offset="0.84" stopOpacity="0"></stop>
        </linearGradient>
        <linearGradient
          id="linear-gradient-3"
          x1="44.16"
          y1="281.5"
          x2="395.5"
          y2="8.91"
          xlinkHref="#linear-gradient"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-4"
          x1="55.5"
          y1="219.12"
          x2="426.06"
          y2="93.42"
          gradientTransform="matrix(1, 0, 0, -1, 0, 352)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.01"></stop>
          <stop offset="0.13" stopOpacity="0.69"></stop>
          <stop offset="0.25" stopOpacity="0.32"></stop>
          <stop offset="1" stopOpacity="0"></stop>
        </linearGradient>
        <linearGradient
          id="linear-gradient-5"
          x1="234.32"
          y1="137.88"
          x2="353.54"
          y2="86.64"
          xlinkHref="#linear-gradient-2"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-6"
          x1="273.29"
          y1="95.7"
          x2="300.01"
          y2="95.7"
          xlinkHref="#linear-gradient-4"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-7"
          x1="235.88"
          y1="136.2"
          x2="391.44"
          y2="34.59"
          xlinkHref="#linear-gradient-4"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-8"
          x1="239.56"
          y1="187.71"
          x2="274.92"
          y2="178.27"
          xlinkHref="#linear-gradient-4"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-9"
          x1="244.08"
          y1="109.42"
          x2="306.36"
          y2="114.16"
          xlinkHref="#linear-gradient-4"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-10"
          x1="222.72"
          y1="317.49"
          x2="218.94"
          y2="142.49"
          gradientTransform="matrix(1, 0, 0, -1, -23.59, 335.01)"
          xlinkHref="#linear-gradient-2"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-11"
          x1="222.72"
          y1="306.7"
          x2="218.94"
          y2="131.7"
          gradientTransform="matrix(1, 0, 0, -1, -23.59, 335.01)"
          xlinkHref="#linear-gradient-2"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-12"
          x1="222.72"
          y1="295.91"
          x2="218.94"
          y2="120.9"
          gradientTransform="matrix(1, 0, 0, -1, -23.59, 335.01)"
          xlinkHref="#linear-gradient-2"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-13"
          x1="222.72"
          y1="285.11"
          x2="218.94"
          y2="110.11"
          gradientTransform="matrix(1, 0, 0, -1, -23.59, 335.01)"
          xlinkHref="#linear-gradient-2"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-14"
          x1="222.72"
          y1="274.32"
          x2="218.94"
          y2="99.32"
          gradientTransform="matrix(1, 0, 0, -1, -23.59, 335.01)"
          xlinkHref="#linear-gradient-2"
        ></linearGradient>
      </defs>
      <path
        d="M346.57,67.71V99.58a11.12,11.12,0,0,1-10.94,11.3H311.29l-11,15.93V110.88h-20.7a11.14,11.14,0,0,1-10.95-11.3V67.71a11.14,11.14,0,0,1,10.95-11.3h56a11.12,11.12,0,0,1,11,11.26Z"
        transform="translate(-23.59 -16.99)"
        fill="url(#linear-gradient)"
      />
      <path
        d="M340.45,300.33a4.05,4.05,0,0,1,1.17.84,2.47,2.47,0,0,1,.39,3.05,3.42,3.42,0,0,1-2.34,1l-31,4.82c-5.42.84-10.88,1.68-16.35,1.41a40.45,40.45,0,0,1-7.67-1.13c-4.67-1.15-9.12-3.13-13.84-4s-9.42-.3-14.14-.6c-5.64-.35-11-2.66-16.49-4-7.65-1.8-15.68-.41-23.07-2.45a106.63,106.63,0,0,0-23.69-3.59c-8.12-.37-16.25-.13-24.37-.12-4.07,0-8.14,0-12.21-.23-2.92-.14-8.56-1.88-11.23-1,11.84-3.92,24.47-4.26,36.89-4.51q16.41-.31,32.81-.48c13.55-.13,27.22-.17,40.47,2.74l-18.37,4.25a124.26,124.26,0,0,0,28.89,3.17l12.31-.21c4.57-.07,9.14,0,13.71,0,1.93,0,4.06-.33,6-.19s4.05,1.17,6,1.88a6.81,6.81,0,0,0,3.5.63,9.85,9.85,0,0,0,3-1.51c3.84-2.29,8.51-2.38,12.94-2.26a61.68,61.68,0,0,1,15,1.85A9.32,9.32,0,0,1,340.45,300.33Z"
        transform="translate(-23.59 -16.99)"
        fill="url(#linear-gradient-2)"
      />
      <rect
        x="125.44"
        y="61.77"
        width="99.27"
        height="198.14"
        rx="14.5"
        fill="#688afc"
      ></rect>
      <rect
        x="127.4"
        y="64.26"
        width="95.35"
        height="192.82"
        rx="14.02"
        fill="#473f47"
      ></rect>
      <path
        d="M243.75,97.11V256.24a13.39,13.39,0,0,1-13.31,13.47H167a13.14,13.14,0,0,1-6.62-1.78,13.5,13.5,0,0,1-6.71-11.69V97.11A13.41,13.41,0,0,1,167,83.64h10.73v2a6.5,6.5,0,0,0,4,5.93,6.63,6.63,0,0,0,2.45.47h29.48a6.49,6.49,0,0,0,6.45-6.5v-1.9h10.38a13.21,13.21,0,0,1,9.2,3.74A13.49,13.49,0,0,1,243.75,97.11Z"
        transform="translate(-23.59 -16.99)"
        fill="#fff"
      />
      <path
        d="M243.75,97.11v47.34H153.63V97.11A13.41,13.41,0,0,1,167,83.64h10.75v2a6.5,6.5,0,0,0,4,5.93,6.63,6.63,0,0,0,2.45.47h29.48a6.49,6.49,0,0,0,6.45-6.5v-1.9h10.38a13.21,13.21,0,0,1,9.2,3.74A13.49,13.49,0,0,1,243.75,97.11Z"
        transform="translate(-23.59 -16.99)"
        fill="#688afc"
      />
      <path
        d="M149,209.58h32.56a8.26,8.26,0,0,0,8.12-8.39V129.84a8.25,8.25,0,0,0-8.12-8.38H149Z"
        transform="translate(-23.59 -16.99)"
        fill="url(#linear-gradient-3)"
      />
      <rect
        x="76.49"
        y="104.47"
        width="83.95"
        height="82.62"
        rx="7.39"
        fill="#fff"
      ></rect>
      <g id="vXPR49">
        <path
          d="M132.38,181.83h-9a1.29,1.29,0,0,1-1.31-1.27,1.63,1.63,0,0,1,0-.31l1.8-11.78q.85-5.57,1.7-11.12.66-4.38,1.33-8.76c.41-2.67.81-5.34,1.22-8a2.16,2.16,0,0,1,1.58-1.92,2.76,2.76,0,0,1,.57-.06h15.16a20.66,20.66,0,0,1,6,.84,11,11,0,0,1,2.21.93,8.65,8.65,0,0,1,4.41,6.37,12,12,0,0,1,0,3.59,2.45,2.45,0,0,0-.05.66.32.32,0,0,0-.07.19,25.43,25.43,0,0,1-.82,3.53,15.71,15.71,0,0,1-4.31,7,13.75,13.75,0,0,1-3.67,2.35,16.94,16.94,0,0,1-3.87,1.17,18.49,18.49,0,0,1-3.14.33h-5.47a2.11,2.11,0,0,0-2.15,1.82c-.16.9-.29,1.81-.42,2.72-.18,1.16-.34,2.33-.52,3.5s-.41,2.63-.62,4Z"
          transform="translate(-23.59 -16.99)"
          fill="#688afc"
        />
        <path
          d="M132.38,181.83h-9a1.29,1.29,0,0,1-1.31-1.27,1.63,1.63,0,0,1,0-.31l1.8-11.78q.85-5.57,1.7-11.12.66-4.38,1.33-8.76c.41-2.67.81-5.34,1.22-8a2.16,2.16,0,0,1,1.58-1.92,2.76,2.76,0,0,1,.57-.06h15.16a20.66,20.66,0,0,1,6,.84,11,11,0,0,1,2.21.93,8.65,8.65,0,0,1,4.41,6.37,12,12,0,0,1,0,3.59,2.45,2.45,0,0,0-.05.66.32.32,0,0,0-.07.19,25.43,25.43,0,0,1-.82,3.53,15.71,15.71,0,0,1-4.31,7,13.75,13.75,0,0,1-3.67,2.35,16.94,16.94,0,0,1-3.87,1.17,18.49,18.49,0,0,1-3.14.33h-5.47a2.11,2.11,0,0,0-2.15,1.82c-.16.9-.29,1.81-.42,2.72-.18,1.16-.34,2.33-.52,3.5s-.41,2.63-.62,4Z"
          transform="translate(-23.59 -16.99)"
          fill="url(#linear-gradient-4)"
        />
        <path
          d="M132.38,181.83l.66-4.24c.21-1.32.42-2.63.62-4,.18-1.17.34-2.34.52-3.5.13-.91.26-1.82.42-2.72a2.11,2.11,0,0,1,2.15-1.82h5.47a18.49,18.49,0,0,0,3.14-.33,16.94,16.94,0,0,0,3.87-1.17,13.75,13.75,0,0,0,3.67-2.35,15.71,15.71,0,0,0,4.31-7,25.43,25.43,0,0,0,.82-3.53.32.32,0,0,1,.07-.19,6.32,6.32,0,0,1,2.43,2.1,7.77,7.77,0,0,1,1.39,3.79,17.89,17.89,0,0,1-1,7.81,13.4,13.4,0,0,1-3.1,5.15,12.33,12.33,0,0,1-5.88,3.28,20.83,20.83,0,0,1-5.15.59h-1a1.78,1.78,0,0,0-1.78,1.52c-.21,1.16-.39,2.34-.57,3.51-.29,1.87-.57,3.75-.85,5.62l-.21,1.23a2.22,2.22,0,0,1-.33.85,1.08,1.08,0,0,1-.95.51h-8.4c-.21,0-.44.08-.6-.15a1.19,1.19,0,0,1-.24-.86c.11-.73.23-1.46.34-2.19S132.28,182.46,132.38,181.83Z"
          transform="translate(-23.59 -16.99)"
          fill="#688afc"
        />
      </g>
      <path
        d="M303.34,287.31s3.06,2.88,2.46,4.93-3.35,3.41-3.73,5.91-1.86,3.86-3.2,3.86h-6.4s-1-1.76,1.4-2.29,3.28-3.47,3.13-6.2a50,50,0,0,1,.23-6.36l5.07-1.22Z"
        transform="translate(-23.59 -16.99)"
        fill="#fcbdba"
      />
      <path
        d="M277.46,288.53s1.1,12.2-.24,12.89H260s0-2.05,2.76-2.5,7.61-2.12,8.43-5.84S277.46,288.53,277.46,288.53Z"
        transform="translate(-23.59 -16.99)"
        fill="#fcbdba"
      />
      <path
        d="M289.7,201c-3.53-8.19-5.69-10.53-5.28-13.08.31-1.89-.94-35.24-.94-35.24-.42-.14-1.26-.26-1.72-.36a4.39,4.39,0,0,1-3.15-2.83,23.46,23.46,0,0,1-1.07-7.53l-.45.09-7.61,1.56s.17,2.47.17,4.8v.06a4.48,4.48,0,0,1-3.16,4.37l-1.8.53a74.33,74.33,0,0,0-3.33,16.71c-.53,8.46,5.09,12.14,0,29.06C256.09,216.4,291.66,205.51,289.7,201Z"
        transform="translate(-23.59 -16.99)"
        fill="#fcbdba"
      />
      <path
        d="M284.42,187.91s7.55,10.47,8.26,17.54,1.1,31.92,2.6,38.82,7,20.17,7,41.67a4.18,4.18,0,0,1-2.34,1.89,18,18,0,0,1-2.06.59,3.21,3.21,0,0,1-3.63-1.77c-3.72-7.75-15.6-32.74-16.21-37.92-.43-3.67-4.18-28-12.36-42.22-2-3.42,1.21-17,1.21-17Z"
        transform="translate(-23.59 -16.99)"
        fill="#688afc"
      />
      <path
        d="M302.29,286a4.15,4.15,0,0,1-2.28,1.86H300a18.75,18.75,0,0,1-2.07.59,3.2,3.2,0,0,1-3.62-1.77c-3.73-7.75-15.6-32.74-16.21-37.93A175.34,175.34,0,0,0,273.3,226c-1.9-6.79-4.4-13.86-7.6-19.41-2-3.43,1.21-17,1.21-17L284.42,188s7.55,10.46,8.26,17.54,1.1,31.93,2.6,38.82S302.29,264.43,302.29,286Z"
        transform="translate(-23.59 -16.99)"
        fill="url(#linear-gradient-5)"
      />
      <path
        d="M300,287.81H300a18.75,18.75,0,0,1-2.07.59,3.2,3.2,0,0,1-3.62-1.77c-3.73-7.75-15.6-32.74-16.21-37.93a175.34,175.34,0,0,0-4.76-22.79,3.71,3.71,0,0,1,5.08-1.27l.06,0c3.45,1.88,4.65,8.7,5.25,12.21.93,5.6.57,11.54,2.85,16.72,1.22,2.78,3.17,5.23,4.08,8.14A45.24,45.24,0,0,1,291.7,269a28.24,28.24,0,0,0,5.72,13.54C298.67,284.11,300.17,285.82,300,287.81Z"
        transform="translate(-23.59 -16.99)"
        fill="url(#linear-gradient-6)"
      />
      <path
        d="M269.48,143.6s.17,2.47.17,4.8c4.27-.12,6.52-4.13,7.44-6.36Z"
        transform="translate(-23.59 -16.99)"
        fill="#fcbdba"
      />
      <path
        d="M268.13,145.72a.87.87,0,0,0,.21.17,1.31,1.31,0,0,0,.7.16,8.23,8.23,0,0,0,2.82-.56,13.4,13.4,0,0,0,3.89-1.81,6.2,6.2,0,0,0,2.34-3.68,22.31,22.31,0,0,0,.14-4c0-1.85.25-4.15-.82-5.77-1-1.47-2.79-1.83-4.39-1.92-2.24-.14-5.06-.11-6.82,1.57a4.6,4.6,0,0,0-1.12,1.79,11.46,11.46,0,0,0-.26,4,32.21,32.21,0,0,1-.18,3.26,2,2,0,0,0,0,.6,1.82,1.82,0,0,0,.55.76c1.32,1.44,1.55,3.63,2.72,5.2A1.2,1.2,0,0,0,268.13,145.72Z"
        transform="translate(-23.59 -16.99)"
        fill="#fcbdba"
      />
      <path
        d="M268.43,128.13s2.76,7.6,7,8.73,6.08-.05,6.08-.05a12.43,12.43,0,0,1-3.93-7.32S270.51,124.51,268.43,128.13Z"
        transform="translate(-23.59 -16.99)"
        fill="#473f47"
      />
      <path
        d="M270.25,141.79a2.52,2.52,0,0,1-2.09.87,1.86,1.86,0,0,1-1.55-1.06A6.54,6.54,0,0,1,270.25,141.79Z"
        transform="translate(-23.59 -16.99)"
        fill="#fcbdba"
      />
      <path
        d="M265,187.06l-2.17-.67s-.06-.16-.16-.46A7.86,7.86,0,0,0,265,187.06Z"
        transform="translate(-23.59 -16.99)"
        fill="#fcbdba"
      />
      <path
        d="M263.43,188.39s-4.95,15.91-5.27,21.33,9.47,77,9.86,79.47,3.21,3.85,3.21,3.85a4.18,4.18,0,0,0,3.16.25,7.74,7.74,0,0,0,3.39-1.65s3.85-51,1.47-69.26a297.45,297.45,0,0,1-2.42-34Z"
        transform="translate(-23.59 -16.99)"
        fill="#688afc"
      />
      <path
        d="M277.78,291.65a7.87,7.87,0,0,1-3.4,1.64,4.36,4.36,0,0,1-2.81-.09,1.58,1.58,0,0,1-.35-.16s-2.83-1.5-3.2-3.85-10.17-74.05-9.85-79.47,5.26-21.33,5.26-21.33h13.41a295.18,295.18,0,0,0,2.41,34C281.63,240.62,277.78,291.65,277.78,291.65Z"
        transform="translate(-23.59 -16.99)"
        fill="url(#linear-gradient-7)"
      />
      <path
        d="M290.67,175.62c-.16,3-3.07,6.93-3.48,7.92-1,2.46-2.2,2.85-2.2,2.85a10.39,10.39,0,0,1,.5,3.08s-10.65,2.78-18.88,1.49a18.66,18.66,0,0,1-3.67-.94,5.52,5.52,0,0,1-.3-4.09c-.78-2.39-4.19-13.49-2.56-20.05.39-1.59.85-3.16,1.37-4.73.46-1.37.69-2.74,1.14-4.11a3.28,3.28,0,0,0,.28-2,1.09,1.09,0,0,0-.92-.75.64.64,0,0,0-.57.26c1.05-2.59,3.87-3.81,6.43-4.8a4.1,4.1,0,0,1,1.46-.34,4.22,4.22,0,0,1,1.92.76c.57.33,1.15.63,1.75.92a19.16,19.16,0,0,0,5.23,1.58,14.69,14.69,0,0,0,2.81.17c.59,0,1.82-.42,2.34-.17,1.1.54,2.13,4,2.66,5.09q2.36,4.81,4.69,9.62A68.65,68.65,0,0,1,290.67,175.62Z"
        transform="translate(-23.59 -16.99)"
        fill="#fff"
      />
      <path
        d="M269.08,160.29a14.33,14.33,0,0,1-1.38,5.17,8.4,8.4,0,0,1-.78,1.16c-.63.82-1.38,1.56-1.95,2.43-1.67,2.56-1.48,5.92-1.23,9,.27,3.42.59,6.91,1.92,10a8.9,8.9,0,0,1,.95,2.87,18.66,18.66,0,0,1-3.67-.94,5.52,5.52,0,0,1-.3-4.09c-.78-2.39-4.19-13.49-2.56-20.05.39-1.59.85-3.16,1.37-4.73.46-1.37.69-2.74,1.14-4.11a3.28,3.28,0,0,0,.28-2,1.09,1.09,0,0,0-.92-.75,6.75,6.75,0,0,1,1-1.32,3.49,3.49,0,0,1,3-1.21,3.34,3.34,0,0,1,1.88,1C269.55,154.72,269.42,157.7,269.08,160.29Z"
        transform="translate(-23.59 -16.99)"
        fill="url(#linear-gradient-8)"
      />
      <path
        d="M270,142s-.17.76-2,.64c0,0-1.55-.09-1.5-.93A4.82,4.82,0,0,1,270,142Z"
        transform="translate(-23.59 -16.99)"
        fill="#fcbdba"
      />
      <path
        d="M246,157.58a52.34,52.34,0,0,1-11.17-2.12c-1.71-.49-3.42-1.13-5.14-1.44a5.42,5.42,0,0,1-3.81-2.36c-.8-1.22-1.25-2.89-2.6-3.38l.11,1.86a.9.9,0,0,1-.11.62c-.27.35-.81.14-1.17-.1l-4.73-3.12a2.51,2.51,0,0,0,1,2.18,4.49,4.49,0,0,1,1.57,1.91,22.72,22.72,0,0,0-4.18-1.95,2.14,2.14,0,0,0,1,1.93,6.48,6.48,0,0,1,1.72,1.45,20.42,20.42,0,0,0-3.72-.74c-.29.64.51,1.19,1.16,1.41l2.78.94a28.69,28.69,0,0,0-3.34.13c.61.82,1.84.57,2.82.8a9.4,9.4,0,0,1,2.73,1.65,13.23,13.23,0,0,0,4,1.4,10,10,0,0,1,2.62,1.64,55.92,55.92,0,0,0,8.33,4c1.41.59,2.83,1.18,4.29,1.64,4.58,1.44,9.46,1.52,14.25,1.26a22.44,22.44,0,0,0,10.46-2.86c2.81-1.58,3.88-5.88,3.41-9a3.73,3.73,0,0,0-.74-1.92,2.89,2.89,0,0,0-1.62-.86c-2.28-.47-4.48.91-6.54,2A24.57,24.57,0,0,1,246,157.58Z"
        transform="translate(-23.59 -16.99)"
        fill="#fcbdba"
      />
      <path
        d="M275.25,147.19h-.1"
        transform="translate(-23.59 -16.99)"
        fill="none"
      />
      <path
        d="M264.49,134.51l1.36-2.53a4.2,4.2,0,0,0,2.41,3.85,5.47,5.47,0,0,1,1.4.67,3.14,3.14,0,0,1,.76,1.26,18.15,18.15,0,0,1,1.15,7.48c-.25,4.41-3.27,12.69,1.08,15.95A10.84,10.84,0,0,0,278,162.9a38.84,38.84,0,0,0-.25,5.39A10,10,0,0,0,279,173.6c1.73,2.63,5.46,3.21,8.29,2a6.75,6.75,0,0,1,2.55-.85c1.39,0,2.49,1.16,3.77,1.7a5.92,5.92,0,0,0,5.7-1,9.52,9.52,0,0,0,2.09-12.23c-1-1.52-2.4-2.71-3.34-4.26-2.62-4.33.23-9.8-1.22-14.52a9.11,9.11,0,0,0-3.87-5.06c-2.11-1.31-4.86-1.81-6.24-3.91-1.84-2.79-.22-6.73-1.37-9.88-.86-2.34-3.11-3.83-5.39-4.67a17.38,17.38,0,0,0-15.64,2C260.62,125.45,260.37,131.88,264.49,134.51Z"
        transform="translate(-23.59 -16.99)"
        fill="#473f47"
      />
      <rect
        x="179.02"
        y="110.34"
        width="30.35"
        height="4.75"
        rx="2.34"
        fill="#fff"
      ></rect>
      <path
        d="M272.86,289.89a6.06,6.06,0,0,1-1.29,3.31,1.58,1.58,0,0,1-.35-.16s-2.83-1.5-3.2-3.85-10.17-74.05-9.85-79.47,5.26-21.33,5.26-21.33l-.49,1.63c.4.16,2,.61,2.87.8,4.09.88-1.54,3.59-2.7,6.69a33.76,33.76,0,0,0-1.54,11.29,43.9,43.9,0,0,0,.71,9.78c.7,3.28,2,6.4,2.72,9.68,1.42,6.78,0,13.92,1.23,20.75.32,1.8.81,3.55,1.13,5.35a61.48,61.48,0,0,1,.55,10.85c0,5.11.16,10.34,2,15.08C271.11,283.45,273.07,286.5,272.86,289.89Z"
        transform="translate(-23.59 -16.99)"
        fill="url(#linear-gradient-9)"
      />
      <path
        d="M273.12,299.65a13.13,13.13,0,0,1-2.79-.4,5,5,0,0,1-1.07-.35c-.81-.43-1.41-1.33-2.32-1.45a2.81,2.81,0,0,0-1.15.15l-1.9.5a12.36,12.36,0,0,0-2.64.93,4.22,4.22,0,0,0-2,2c-.15.34-.39,1.94-.14,2.2a1,1,0,0,0,.7.24,118.34,118.34,0,0,0,16.84-.31,1.83,1.83,0,0,0,.89-.22c.43-.27.74-2,.82-2.47.21-1.29-.07-2.6-1.5-1.81A7.55,7.55,0,0,1,273.12,299.65Z"
        transform="translate(-23.59 -16.99)"
        fill="#688afc"
      />
      <path
        d="M303,292.18a7.77,7.77,0,0,1-3.09,4.24,2.63,2.63,0,0,1-2.41.51,6.59,6.59,0,0,0-.71-.34,1.7,1.7,0,0,0-1.56.58c-.41.42-.72.93-1.16,1.31a10.47,10.47,0,0,1-2.66,1.26c-.89.42-1.76,1.29-1.59,2.28.21,1.28,1.82,1.62,3.08,1.62a47.68,47.68,0,0,0,8-.71,2.13,2.13,0,0,0,1.15-.47,2.72,2.72,0,0,0,.52-1.4,8.15,8.15,0,0,1,1.58-3.64c1.3-1.64,3.44-2.92,3.49-5,0-1.35-1.31-3.57-2.64-4S303.3,291,303,292.18Z"
        transform="translate(-23.59 -16.99)"
        fill="#688afc"
      />
      <rect
        x="176.8"
        y="152.06"
        width="38.76"
        height="3.97"
        rx="1.95"
        fill="url(#linear-gradient-10)"
      ></rect>
      <rect
        x="176.8"
        y="162.86"
        width="38.76"
        height="3.97"
        rx="1.95"
        fill="url(#linear-gradient-11)"
      ></rect>
      <rect
        x="176.8"
        y="173.65"
        width="38.76"
        height="3.97"
        rx="1.95"
        fill="url(#linear-gradient-12)"
      ></rect>
      <rect
        x="176.8"
        y="184.44"
        width="38.76"
        height="3.97"
        rx="1.95"
        fill="url(#linear-gradient-13)"
      ></rect>
      <rect
        x="176.8"
        y="195.23"
        width="38.76"
        height="3.97"
        rx="1.95"
        fill="url(#linear-gradient-14)"
      ></rect>
      <path
        d="M343,67.71V99.58a11.12,11.12,0,0,1-10.94,11.3H307.74l-11,15.93V110.88H276a11.13,11.13,0,0,1-11-11.26V67.71a11.13,11.13,0,0,1,11-11.3h56a11.12,11.12,0,0,1,11,11.24Z"
        transform="translate(-23.59 -16.99)"
        fill="#fff"
      />
      <path
        d="M300.74,104.3l.2-5.11a13.87,13.87,0,0,1-7.37-2.56l1.29-3.32a12.85,12.85,0,0,0,6.9,2.45c3.48.13,5.88-1.82,6-4.69s-1.73-4.55-5.27-6.23c-4.9-2.21-7.88-4.65-7.71-9,.16-4.17,3.15-7.22,7.67-7.79l.19-5.12,3,.12-.19,4.87a13,13,0,0,1,6.26,2l-1.32,3.33a11.53,11.53,0,0,0-6.08-2c-3.75-.15-5.25,2.11-5.32,4.11-.1,2.61,1.65,4,5.79,6,5,2.31,7.37,5,7.2,9.51-.15,4-3,7.59-8,8.24l-.21,5.23Z"
        transform="translate(-23.59 -16.99)"
        fill="#688afc"
      />
    </chakra.svg>
  );
};

export default Pricing3Page;
