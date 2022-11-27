import { RefObject } from "react";

import { IconType } from "react-icons-all/lib";

import type { ChakraProps, ThemingProps } from "@chakra-ui/react";

declare namespace INavbar {
  export interface IProps extends ChakraProps, ThemingProps {
    logo?: React.ReactNode | undefined;
    items?: IItem[] | undefined;
    startItems?: React.ReactNode | undefined;
    endItems?: React.ReactNode | undefined;
    isOnline?: boolean;
    isOverlay?: boolean;
    isDark?: boolean;
    children?: React.ReactNode;
    containerRef?: RefObject<HTMLElement>;
    // colorScheme?: string;
    // variant?: string;
  }

  export interface IItem extends ChakraProps, ThemingProps {
    title: string;
    href: string | UrlObject;
    description?: string;
    icon?: IconType | React.ReactElement;
    image?: string;
    subitems?: IItem[];
    subColumns?: number[];
    subChildren?: React.FC | React.ReactNode | React.ReactElement;
  }

  // interface I_Item {
  //   title: string;
  //   href: string;
  //   description?: string;
  //   icon?: IconType;
  //   subitems?: IItem[];
  // }
}

export { INavbar };
