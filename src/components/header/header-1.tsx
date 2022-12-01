import React, { memo, useContext, useEffect, useRef } from "react";

import NextLink from "next/link";
import { useRouter } from "next/router";

import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Badge,
  Box,
  Button,
  type ChakraProps,
  Collapse,
  Container,
  Flex,
  HStack,
  IconButton,
  Link,
  type ThemingProps,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";

// import type { ChakraProps, ThemingProps } from "@chakra-ui/react";
import { CartActions, CartCtx } from "@definitions/context/cart";
import MAIN_NAV_ITEMS from "@definitions/navigation/main";

import Logo from "@components/logo";
import Navbar, { MobileNav } from "@components/navbar";
import SiteName from "@components/sitename";

const Header1: React.FC<ChakraProps & ThemingProps> = (props) => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const { state, dispatch } = useContext(CartCtx);

  const breakpoint = { base: "none", lg: "flex" };
  const breakpointReverse = { base: "flex", lg: "none" };
  const ref = useRef();
  const mobileMenuBG = useColorModeValue("white", "gray.900");

  const col = useColorModeValue("blackAlpha.700", "whiteAlpha.700");

  const handleRouteChange = () => onClose();
  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  const buttonHandler = (
    event: React.MouseEvent<HTMLButtonElement>,
    href: string,
  ) => {
    event.preventDefault();
    if (!href) return;
    if (event.button === 0) router.push(href);
    if (event.button === 1) router.push(href);
  };

  return (
    <Box py={4} {...props}>
      <Container maxW="container.xl">
        <Flex align="center" justify="space-between">
          <NextLink href="/" passHref>
            <Link _hover={{ color: col }}>
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

          <Navbar
            containerRef={ref}
            display={breakpoint}
            items={MAIN_NAV_ITEMS}
          />
        </Flex>

        {/* Mega Menu container */}
        <Box
          display={["none", "none", "none", "block"]}
          ref={ref}
          pos="relative"
          zIndex="sticky"
          width="full"
        />
      </Container>

      {/* Mobile Collapse */}
      <Collapse in={isOpen} animateOpacity>
        <Box display={breakpointReverse} mt={4} py={2} bg={mobileMenuBG}>
          <Container maxW="container.xl">
            <MobileNav items={MAIN_NAV_ITEMS} />
          </Container>
        </Box>
      </Collapse>
    </Box>
  );
};

export default memo(Header1);
