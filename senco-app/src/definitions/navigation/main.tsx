import {
  BiGridAlt,
  BsCart,
  HiOutlineSupport,
  IoBagCheckOutline,
  MdInfoOutline,
  TbListDetails,
} from "@react-icons";

import { memo } from "react";

import NextLink from "next/link";

import {
  Box,
  Icon,
  Link,
  StackDivider,
  Text,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";

import Site from "@definitions/site";

// import Logo from "@definitions/brands/envato";

const PagesSubChildren: React.FC = memo(() => {
  const div = useBreakpointValue({
    base: undefined,
    lg: <StackDivider />,
  });

  const links = [
    { title: "Invoice", href: "/invoice" },
    { title: "404 Error", href: "/404" },
    // { title: "500 Error", href: "/500" },
    { title: "Help & Support", href: "/help" },
    { title: "Terms of Services", href: "/terms" },
  ];

  return (
    <VStack align="stretch" spacing={[5, 5, 5, 10]} divider={div}>
      <Box>
        <Text mb={[5, 5, 5, 6]} fontWeight={700} minW={220}>
          More Pages
        </Text>
        <VStack align="stretch" spacing={[5, 5, 5, 3]}>
          {links.map((link, idx) => (
            <NextLink key={link.title + idx} href={link.href} passHref>
              <Link>{link.title}</Link>
            </NextLink>
          ))}
        </VStack>
      </Box>
      <Link
        href={Site.market_profile_link}
        target="_blank"
        color="brand.400"
        fontWeight={700}
        minW={220}
      >
        More Templates
      </Link>
      {/* <Logo /> */}
    </VStack>
  );
});

// TODO : Will need to have these point at the NextJS pages when we migrate these items back to NextJS
export const main = [
  {
    title: "Map",
    href: "https://nalathletics.com/map"
  },
  {
    title: "Blog",
    href: "https://nalathletics.com/blog"
  },
  {
    title: "Salaries Explorer",
    href: "https://nalathletics.com/coaches-salaries-explorer.html"
  },
  {
    title: "2022 Diamond League Earnings",
    href: "https://nalathletics.com/diamond-league-earnings-table.html",
  },
  {
    title: "FAQ",
    href: "https://nalathletics.com/faq",
  },
];

// Add Tag to any navigiation item
export const ItemsTag: {
  title: string;
  badge?: string;
  colorScheme?: string;
}[] = [
  {
    title: "More Demo",
    badge: "Soon",
    colorScheme: "green",
  },
  {
    title: "Account Forms",
    badge: "Modal",
    colorScheme: "pink",
  },
];

export default main;
