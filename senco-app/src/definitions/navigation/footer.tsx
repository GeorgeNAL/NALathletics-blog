import { FiHelpCircle, FiLifeBuoy, FiSettings } from "@react-icons";

import { IconType } from "react-icons-all";

import CountrySelect from "@components/flags/country-select";

type T_NavItem = {
  icon?: IconType;
  title: string;
  href: string;
};

interface T_NavItems extends T_NavItem {
  subitems: T_NavItem[];
  children?: React.ReactElement;
}

const HomePageItems = [
  {
    href: "/home-1",
    title: "Homepage 1",
  },
  {
    href: "/home-2",
    title: "Homepage 2",
  },

  {
    href: "/home-3",
    title: "Homepage 3",
  },
];
const PricingPageItems = [
  {
    href: "/pricing-1",
    title: "Pricing 1",
  },
  {
    href: "/pricing-2",
    title: "Pricing 2",
  },

  {
    href: "/pricing-3",
    title: "Pricing 3",
  },
];
const BlogPageItems = [
  {
    href: "/blog-1",
    title: "Blog 1",
  },
  {
    href: "/blog-2",
    title: "Blog 2",
  },
  {
    href: "/blog-3",
    title: "Blog 3",
  },
  {
    href: "/blog-post",
    title: "Blog Post",
  },
];
const CommponPageItems = [
  {
    href: "/about",
    title: "About",
  },
  {
    href: "/checkout",
    title: "Checkout",
  },
  {
    href: "/shopping-cart",
    title: "Shopping Cart",
  },
  {
    href: "/product-overview",
    title: "Product Overview",
  },
  {
    href: "/filtered-products",
    title: "Filtered Products",
  },
  {
    href: "/contact",
    title: "Contact",
  },
  {
    href: "/invoice",
    title: "Invoice",
  },
];

const CompanyItems = [
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Careers",
    href: "#",
  },
  {
    title: "Terms of Service",
    href: "/terms",
  },
  {
    title: "Return policy",
    href: "#",
  },
];

const ResourcesItems = [
  {
    icon: FiHelpCircle,
    title: "Help",
    href: "/help",
  },
  {
    icon: FiLifeBuoy,
    title: "Support",
    href: "/help",
  },
  {
    icon: FiSettings,
    title: "Account settings",
    href: "#",
  },
];

const NavigationItems: T_NavItems[] = [
  {
    title: "Company",
    href: "",
    subitems: CompanyItems,
  },
  {
    title: "Home Pages",
    href: "#",
    subitems: HomePageItems,
  },
  {
    title: "Blog Pages",
    href: "#",
    subitems: BlogPageItems,
  },
  {
    title: "Pricing Pages",
    href: "#",
    subitems: PricingPageItems,
  },
  {
    title: "Common Pages",
    href: "#",
    subitems: CommponPageItems,
  },
  {
    title: "Get Help",
    href: "",
    subitems: ResourcesItems,
    children: <CountrySelect />,
  },
];

export default NavigationItems;
