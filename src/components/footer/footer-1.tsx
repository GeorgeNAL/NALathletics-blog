import React, { memo } from "react";

import NextLink from "next/link";
import { useRouter } from "next/router";

import {
  Box,
  Button,
  type ChakraProps,
  Container,
  DarkMode,
  Divider,
  HStack,
  Input,
  Link,
  List,
  ListIcon,
  ListItem,
  SimpleGrid,
  Stack,
  Text,
  type ThemingProps,
  useColorModeValue,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

import FooterNavItems from "@definitions/navigation/footer";
import Site from "@definitions/site";

import Logo from "@components/logo";
import {
  AmexCardIcon,
  ApplePayIcon,
  DinersClubIcon,
  DiscoverIcon,
  FacebookPayIcon,
  GooglePayIcon,
  MasterCardIcon,
  PaypalPayIcon,
  ShopPayIcon,
  VisaCardIcon,
} from "@components/payment-icons";
import PrefersColorSchemeSelect from "@components/prefers-color-scheme";
import SiteName from "@components/sitename";

const Footer1: React.FC<ChakraProps & ThemingProps> = ({
  // colorScheme,
  ...rest
}) => {
  const router = useRouter();
  // const inputBg = useColorModeValue("whiteAlpha.800", "whiteAlpha.600");
  const color = useColorModeValue("whiteAlpha.800", "whiteAlpha.600");
  const activeColor = useColorModeValue("white", "whiteAlpha.800");

  const isActive = (path: string) => router.pathname == path;

  const linkStyle = {
    transitionProperty: "common",
    transitionDuration: "normal",
    transitionTimingFunction: "ease-in-out",
    color: useColorModeValue("whiteAlpha.700", "whiteAlpha.600"),
    _hover: {
      color: "white",
    },
  };

  const activeLinkStyle = {
    color: activeColor,
    _after: {
      content: "''",
      pos: "absolute",
      borderColor: activeColor,
      borderBottomWidth: "1px",
      borderBottomStyle: "dotted",
      width: "full",
      height: "1px",
      left: 0,
      bottom: -1,
    },
  };

  return (
    <Box
      bg={useColorModeValue("gray.900", "gray.900")}
      color={useColorModeValue("gray.100", "gray.100")}
      pt={32}
      pb={10}
      {...rest}
    >
      <Container maxW={"container.xl"}>
        <VStack spacing={10}>
          <Stack
            align={["center", "center", "start", "start"]}
            direction={["column", "column", "row", "row"]}
            width="full"
            spacing={[8, 16, 20]}
          >
            <Stack direction="column" spacing={8} flex="1" align="stretch">
              <DarkMode>
                <NextLink href="/" passHref>
                  <Link
                    width="fit-content"
                    _hover={{ color: "whiteAlpha.700" }}
                  >
                    <HStack align="center">
                      <Logo />
                      <SiteName
                        fontSize="xl"
                        fontWeight="800"
                        textTransform="uppercase"
                      />
                    </HStack>
                  </Link>
                </NextLink>
              </DarkMode>
              <Text>{Site.slogan}</Text>
              <Divider borderColor="gray.600" />
              <VStack align="stretch" spacing={[4]}>
                <Stack
                  w="full"
                  spacing={4}
                  direction={["column", "column", "row"]}
                >
                  <Input
                    name="email"
                    type="email"
                    placeholder={"Enter your email"}
                    borderColor={"gray.600"}
                  />
                  <Button flex="1 0 auto">Subscribe</Button>
                </Stack>
                <Text color={color} fontSize="sm">
                  If you subscribe to our weekly newsletter, you will be
                  informed about the developments regularly.
                </Text>
              </VStack>
            </Stack>
            <SimpleGrid w="full" flex="2" columns={[1, 2, 2, 3]} spacing={[10]}>
              {FooterNavItems.map((item, idx) => (
                <VStack
                  key={`footer-nav-item-${item.title}-${idx}`}
                  align="stretch"
                  spacing={[2, 2, 4]}
                >
                  <Text fontWeight="semibold">{item.title}</Text>
                  {item.subitems && (
                    <List spacing={[2]}>
                      {item.subitems.map((subitem, sidx) => (
                        <ListItem
                          key={`footer-nav-subitem-${item.title}-${subitem.title}-${sidx}`}
                          {...linkStyle}
                        >
                          {subitem.icon && <ListIcon as={subitem.icon} />}
                          <NextLink href={subitem.href} passHref>
                            <Link
                              pos="relative"
                              {...linkStyle}
                              {...(isActive(subitem.href)
                                ? activeLinkStyle
                                : null)}
                            >
                              {subitem.title}
                            </Link>
                          </NextLink>
                        </ListItem>
                      ))}
                    </List>
                  )}
                  {item.children}
                </VStack>
              ))}
            </SimpleGrid>
          </Stack>

          <Divider borderColor="gray.600" />

          <Stack
            direction={["column", "column", "row"]}
            justify="space-between"
            width="full"
          >
            <Stack align="center" direction={["column", "column", "row"]}>
              <PrefersColorSchemeSelect />
              <Text
                fontSize="sm"
                textAlign={["center", "center", "start", "start"]}
              >
                © All rights reserved. Senco LLC. Powered by Themebiotic.
              </Text>
            </Stack>
            <FooterIcons />
          </Stack>
        </VStack>
      </Container>
    </Box>
  );
};

const FooterIcons = () => {
  const items = [
    { title: "VisaCard", icon: <VisaCardIcon /> },
    { title: "MasterCard", icon: <MasterCardIcon /> },
    { title: "AmexCard", icon: <AmexCardIcon /> },
    { title: "ApplePay", icon: <ApplePayIcon /> },
    { title: "PaypalPay", icon: <PaypalPayIcon /> },
    { title: "DinersClub", icon: <DinersClubIcon /> },
    { title: "Discover", icon: <DiscoverIcon /> },
    { title: "FacebookPay", icon: <FacebookPayIcon /> },
    { title: "GooglePay", icon: <GooglePayIcon /> },
    { title: "ShopPay", icon: <ShopPayIcon /> },
  ];
  return (
    <Wrap justify="center">
      {items.map((item, idx) => (
        <WrapItem key={`payment-icons-${item.title}-${idx}`}>
          {item.icon}
        </WrapItem>
      ))}
    </Wrap>
  );
};

export default memo(Footer1);
