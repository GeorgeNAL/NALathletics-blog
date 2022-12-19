import { IconType } from "react-icons-all";

type T_NavItem = {
  icon?: IconType;
  title: string;
  href: string;
};

interface T_NavItems extends T_NavItem {
  subitems: T_NavItem[];
  children?: React.ReactElement;
}

const WhereToItems = [
  {
    title: "Map: Find places to jump, throw or run",
    href: "https://nalathletics.com/map"
  },
  {
    title: "College T&F coaches' salaries explorere",
    href: "https://nalathletics.com/coaches-salaries-explorer.html"
  }
]

const ContactItems = [
  {
    title: "E-mail us",
    href: "mailto:george@nalathletics.com"
  }
]

const NavigationItems: T_NavItems[] = [
  {
    title: "Where to Now?",
    href: "",
    subitems: WhereToItems,
  },
  {
    title: "Contact Us", 
    href: "",
    subitems: ContactItems,
  }
];

export default NavigationItems;
