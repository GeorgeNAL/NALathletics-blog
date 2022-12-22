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
  Flex,
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
      {/* Need to get the  */}
      <Flex justifyContent='center'>
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
                      <NextLink href="/blog" passHref>
                        <Link
                          width="fit-content"
                          _hover={{ color: "whiteAlpha.700" }}
                        >
                          <HStack align="center">
                            <Logo />
                          </HStack>
                        </Link>
                      </NextLink>
                    </DarkMode>
                    <Text>{Site.slogan}</Text>
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
                    {/* <PrefersColorSchemeSelect /> */}
                    <Text
                      fontSize="sm"
                      textAlign={["center", "center", "start", "start"]}
                    >
                      {/* Copyright © 2021 <link href="/blog">NALAthletics.</link> All Rights Reserved */}
                      Copyright © 2021 <Link href="https://nalathletics.com/blog" >NALAthletics.</Link> All Rights Reserved
                    </Text>
                  </Stack>
                </Stack>
            </VStack>
          </Container>
      </Flex>
    </Box>
  );
};

export default memo(Footer1);
