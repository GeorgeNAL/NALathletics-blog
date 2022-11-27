import {
  extendTheme,
  type ThemeConfig,
  withDefaultColorScheme, // withDefaultProps,
} from "@chakra-ui/react";

import Button from "./components/button";
import Link from "./components/link";
import Text from "./components/text";
import colors from "./foundations/colors";
import fontSizes from "./foundations/fontSizes";
import shadows from "./foundations/shadows";
import styles from "./styles";

/**
 * This file is generated for providing a custom theme to Chakra UI
 *
 * To learn more about custom themes
 * please visit https://chakra-ui.com/docs/getting-started#add-custom-theme-optional
 */

// Color mode config
const config: ThemeConfig = {
  // initialColorMode: "light",
  initialColorMode: "system",
  // useSystemColorMode: true,
};

const fonts = {
  heading: '"Playfair Display", sans-serif',
  body: "Raleway, sans-serif",
  mono: `SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
  // body: "Josefin Sans, sans-serif",
};

const overrides = {
  config,
  styles,
  colors,
  shadows,
  fonts,
  fontSizes,
  components: {
    Button,
    Input: {
      defaultProps: {
        focusBorderColor: "brand.400",
        // errorBorderColor: "yellow.400",
      },
      sizes: {
        lg: {
          field: {
            px: 6,
            py: 4,
            borderRadius: "xl",
          },
          addon: {
            borderRadius: "xl",
          },
        },
        md: {
          field: {
            borderRadius: "xl",
          },
          addon: {
            borderRadius: "xl",
          },
        },
        sm: {
          field: {
            borderRadius: "lg",
          },
          addon: {
            borderRadius: "lg",
          },
        },
        xs: {
          field: {
            borderRadius: "md",
          },
          addon: {
            borderRadius: "md",
          },
        },
      },
    },
    Select: {
      defaultProps: {
        focusBorderColor: "brand.400",
        borderRadius: "xl",
        // errorBorderColor: "yellow.400",
      },
      sizes: {
        lg: {
          field: {
            borderRadius: "xl",
          },
        },
        md: {
          field: {
            borderRadius: "xl",
          },
        },
        sm: {
          field: {
            borderRadius: "lg",
          },
        },
      },
    },
    Textarea: {
      defaultProps: {
        focusBorderColor: "brand.400",
        // errorBorderColor: "yellow.400",
      },
      sizes: {
        lg: {
          borderRadius: "xl",
        },
      },
    },
    Text,
    Link,
  },
};

const theme = extendTheme(
  overrides,
  withDefaultColorScheme({
    colorScheme: "brand",
  }),
);

export default theme;
