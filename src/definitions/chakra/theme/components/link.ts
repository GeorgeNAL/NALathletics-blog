import type { SystemStyleFunction } from "@chakra-ui/theme-tools";

const variantUnderline: SystemStyleFunction = (props) => {
  const { colorScheme: c, colorMode: m } = props;
  return {
    position: "relative",
    fontWeight: "semibold",
    "&::before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "2px",
      borderRadius: "2px",
      // backgroundColor: "currentColor",
      backgroundColor: m === "light" ? `${c}.400` : `${c}.500`,
      bottom: -1,
      left: 0,
      transformOrigin: "right",
      transform: "scaleX(0)",
      transition: "transform .3s ease-in-out",
    },
    "&:hover::before": {
      transformOrigin: "left",
      transform: "scaleX(1)",
    },
    _hover: {
      color: m === "light" ? `${c}.400` : `${c}.500`,
      textDecoration: "none",
    },
  };
};

const variantContinue: SystemStyleFunction = (props) => {
  const { colorScheme: c, colorMode: m } = props;

  const styles = {
    position: "relative",
    display: "inline",
    // color: m === "light" ? `${c}.400` : `${c}.500`,
    fontWeight: "semibold",
    "&::before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "1px",
      borderRadius: "1px",
      backgroundColor: "currentColor",
      bottom: -2,
      left: 0,
      transformOrigin: "right",
    },
    "&:hover::before": {
      transformOrigin: "left",
      transform: "scaleX(1)",
    },
    _hover: {
      color: m === "light" ? `${c}.200` : `${c}.400`,
      textDecoration: "none",
    },
  };

  if (c === "black") {
    return {
      ...styles,
      color: m === "light" ? `black` : `white`,
      _hover: {
        ...styles._hover,
        color: m === "light" ? `blackAlpha.600` : `whiteAlpha.600`,
      },
    };
  }

  if (c === "white") {
    return {
      ...styles,
      color: m === "light" ? `white` : `whiteAlpha.800`,
      _hover: {
        ...styles._hover,
        color: m === "light" ? `blackAlpha.600` : `whiteAlpha.600`,
      },
    };
  }

  return {
    ...styles,
    color: m === "light" ? `${c}.400` : `${c}.500`,
  };
};

const variants = {
  underline: variantUnderline,
  continue: variantContinue,
};

const defaultProps = {
  colorScheme: "brand",
};

const baseStyle = {
  transitionProperty: "common",
  transitionDuration: "normal",
  transitionTimingFunction: "ease-in-out",
  _hover: {
    textDecoration: "none",
  },
  _focus: {
    boxShadow: "outline",
  },
};

export default {
  baseStyle,
  variants,
  // sizes,
  defaultProps,
};
