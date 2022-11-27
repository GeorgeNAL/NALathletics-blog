import { mode, type Styles } from "@chakra-ui/theme-tools";

const styles: Styles = {
  global: (props) => ({
    // "html, body": {
    //   fontFamily:
    //     '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    // },
    "html, body": {
      fontFamily: "body",
    },
    h1: {
      fontWeight: 700,
      // marginBottom: "0.5em",
    },
    p: {
      // marginBottom: "1em",
    },
    "*::selection, mark": {
      color: mode("brand.400", "brand.400")(props),
      background: mode("brand.50", "brand.900")(props),
    },
  }),
};

export default styles;
