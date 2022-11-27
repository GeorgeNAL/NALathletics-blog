import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system";
import { mode, transparentize } from "@chakra-ui/theme-tools";
import { runIfFn } from "@chakra-ui/utils";

// type AccessibleColor = {
//   bg?: string;
//   color?: string;
//   hoverBg?: string;
//   activeBg?: string;
// };

/** Accessible color overrides for less accessible colors. */
// const accessibleColorMap: { [key: string]: AccessibleColor } = {
//   yellow: {
//     bg: "yellow.400",
//     color: "black",
//     hoverBg: "yellow.500",
//     activeBg: "yellow.600",
//   },
//   cyan: {
//     bg: "cyan.400",
//     color: "black",
//     hoverBg: "cyan.500",
//     activeBg: "cyan.600",
//   },
// };

const variantGhost = defineStyle((props) => {
  const { colorScheme: c, theme } = props;

  if (c === "white") {
    return {
      color: mode(`inherit`, `whiteAlpha.800`)(props),
      _hover: {
        color: mode(`whiteAlpha.800`, `blackAlpha.800`)(props),
        bg: mode(`blackAlpha.900`, `whiteAlpha.900`)(props),
      },
      _active: {
        color: mode(`whiteAlpha.900`, `blackAlpha.700`)(props),
        bg: mode(`blackAlpha.900`, `whiteAlpha.900`)(props),
      },
    };
  }

  if (c === "gray") {
    return {
      color: mode(`inherit`, `whiteAlpha.900`)(props),
      _hover: {
        bg: mode(`gray.100`, `whiteAlpha.200`)(props),
      },
      _active: { bg: mode(`gray.200`, `whiteAlpha.300`)(props) },
    };
  }

  const darkHoverBg = transparentize(`${c}.200`, 0.12)(theme);
  const darkActiveBg = transparentize(`${c}.200`, 0.24)(theme);

  return {
    color: mode(`${c}.600`, `${c}.200`)(props),
    bg: "transparent",
    _hover: {
      bg: mode(`${c}.50`, darkHoverBg)(props),
    },
    _active: {
      bg: mode(`${c}.100`, darkActiveBg)(props),
    },
  };
});

const variantOutline = defineStyle((props) => {
  const { colorScheme: c } = props;
  const borderColor = mode(`gray.200`, `whiteAlpha.300`)(props);

  if (c === "white") {
    return {
      border: "1px solid",
      borderColor: "whiteAlpha.800",
      color: c,
      ".chakra-button__group[data-attached] > &:not(:last-of-type)": {
        marginEnd: "-1px",
      },
      _hover: {
        bg: "whiteAlpha.400",
        borderColor: "whiteAlpha.400",
      },
      _active: {
        bg: "whiteAlpha.600",
        borderColor: "whiteAlpha.600",
      },
    };
  }
  if (c === "black") {
    return {
      border: "1px solid",
      borderColor: "blackAlpha.800",
      color: c,
      ".chakra-button__group[data-attached] > &:not(:last-of-type)": {
        marginEnd: "-1px",
      },
      _hover: {
        bg: "blackAlpha.400",
        borderColor: "blackAlpha.400",
      },
      _active: {
        bg: "blackAlpha.600",
        borderColor: "blackAlpha.600",
      },
    };
  }

  return {
    border: "1px solid",
    borderColor: c === "gray" ? borderColor : "currentColor",
    ".chakra-button__group[data-attached] > &:not(:last-of-type)": {
      marginEnd: "-1px",
    },
    ...runIfFn(variantGhost, props),
  };
});

const variantSolid = defineStyle((props) => {
  const { colorScheme: c } = props;

  if (c === "black") {
    const bg = "black";
    const color = "white";

    return {
      bg,
      color,
      _hover: {
        color: "black",
        bg: "white",
        _disabled: {
          color,
          bg,
        },
      },
      _active: { bg: "whiteAlpha.600" },
    };
  }

  if (c === "white") {
    const bg = "white";
    const color = "black";

    return {
      bg,
      color,
      _hover: {
        color: "white",
        bg: "black",
        _disabled: {
          color,
          bg,
        },
      },
      _active: { bg: "blackAlpha.600" },
    };
  }
});

const variants = {
  ghost: variantGhost,
  outline: variantOutline,
  solid: variantSolid,
  // link: variantLink,
  // unstyled: variantUnstyled,
};

const baseStyle = defineStyle({
  borderRadius: "xl",
  letterSpacing: "0.02em",
  // textTransform: "uppercase",
});

const sizes = {
  jumbo: defineStyle({
    px: 16,
    h: 16,
    fontSize: "lg",
  }),
};

export default defineStyleConfig({
  baseStyle,
  variants,
  sizes,
});
