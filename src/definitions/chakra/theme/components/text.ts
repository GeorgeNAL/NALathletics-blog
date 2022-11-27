import type { SystemStyleFunction } from "@chakra-ui/theme-tools";

const variantSubtitle: SystemStyleFunction = (props) => {
  const { colorMode: m } = props;
  return {
    fontSize: "md",
    fontWeight: 700,
    letterSpacing: "0.05em",
    textTransform: "uppercase",
    color: m === "light" ? "brand.400" : "brand.300",
  };
};

const variants = {
  subtitle: variantSubtitle,
};

export default {
  // baseStyle,
  variants,
  // sizes,
};
