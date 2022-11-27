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

export const main = [
  {
    title: "Home",
    href: "",
    subColumns: [3],
    subitems: [
      {
        title: "Home 1",
        href: "/home-1",
        image: "/images/page-home-1-4x3.png",
        description:
          "Senco is a premium template that has helped millions of small businesses get started.",
      },
      {
        title: "Home 2",
        href: "/home-2",
        image: "/images/page-home-2-4x3.png",
        description:
          "Senco provides you with prebuilt pages to get you started quickly.",
      },
      {
        title: "Home 3",
        href: "/home-3",
        image: "/images/page-home-3-4x3.png",
        description:
          "Senco offers different variations for popular pages for your customization.",
      },
    ],
  },
  {
    title: "Blog",
    href: "",
    subColumns: [4],
    subitems: [
      {
        title: "Blog 1",
        href: "/blog-1",
        image: "/images/page-blog-1.png",
        description:
          "Expand the audience in line with brand goals with blog posts.",
      },
      {
        title: "Blog 2",
        href: "/blog-2",
        image: "/images/page-blog-2.png",
        description:
          "Blog pages to keep your website up to date and drive more traffic.",
      },
      {
        title: "Blog 3",
        href: "/blog-3",
        image: "/images/page-blog-3.png",
        description: "To keep ahead of your rivals, provide fresh content.",
      },
      {
        title: "Blog Post",
        href: "/blog-post",
        image: "/images/page-blog-post.png",
        description:
          "Senco provides several variants for popular sites for customisation.",
      },
    ],
  },
  {
    title: "Pricing",
    href: "",
    subColumns: [3],
    subitems: [
      {
        title: "Pricing 1",
        href: "/pricing-1",
        image: "/images/page-pricing-1.png",
        description: "Premium price pages for all commercial solutions.",
      },
      {
        title: "Pricing 2",
        href: "/pricing-2",
        image: "/images/page-pricing-2.png",
        description: "E-commerce sites need a premium pricing page.",
      },
      {
        title: "Pricing 3",
        href: "/pricing-3",
        image: "/images/page-pricing-3.png",
        description: "Strengthen your brand with customizable price pages.",
      },
    ],
  },
  {
    title: "Pages",
    href: "",
    subColumns: [1, 2, 2],
    subChildren: PagesSubChildren,
    subitems: [
      {
        icon: <Icon fontSize={24} as={MdInfoOutline} />,
        title: "About",
        href: "/about",
        description: "Trending Design to inspire you",
      },
      {
        icon: <Icon fontSize={24} as={HiOutlineSupport} />,
        title: "Help & Support",
        href: "/help",
        description: "Gain access to product support",
      },
      // {
      //   icon: <Icon fontSize={24} as={MdOutlineAssignment} />,
      //   title: "Invoice",
      //   href: "/invoice",
      //   description: "Fully customizable dynamic invoice page",
      // },
      {
        icon: <Icon fontSize={24} as={TbListDetails} />,
        title: "Product Overview",
        href: "/product-overview",
        description: "Summary of the product",
      },
      {
        icon: <Icon fontSize={24} as={BiGridAlt} />,
        title: "Filtered Products",
        href: "/filtered-products",
        description: "Filtered product listings page",
      },
      {
        icon: <Icon fontSize={24} as={BsCart} />,
        title: "Shopping Cart",
        href: "/shopping-cart",
        description: "You can edit and see the products you have added",
      },
      {
        icon: <Icon fontSize={24} as={IoBagCheckOutline} />,
        title: "Checkout",
        href: "/checkout",
        description: "Customers completing their orders",
      },
    ],
  },
  {
    title: "Contact",
    href: "/contact",
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
