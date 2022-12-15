import { memo } from "react";

import { StarIcon } from "@chakra-ui/icons";
import { HStack, useColorModeValue } from "@chakra-ui/react";

/**
 * A React component that takes in a value and returns a star rating.
 * @param  - `value` - the rating value
 * @param  - `activeColor` - active rating star color
 * @param  - `passiveColor` - passive rating star color
 * @returns returns the value as a 5-star rating.
 */
export default memo(
  ({
    value = 0,
    activeColor = "amber.300",
    passiveColor,
    fontSize = "md",
  }: {
    value: number;
    activeColor?: string;
    passiveColor?: string;
    fontSize?: string;
  }) => {
    const ratingModel = 5;
    const ratingRound = Math.round(value);
    const diff = ratingModel - ratingRound;

    const defaultPassiveColor = useColorModeValue("gray.200", "whiteAlpha.500");

    return (
      <HStack spacing={[1]}>
        {Array(ratingRound)
          .fill(null)
          .map((r, idx) => (
            <StarIcon
              key={`rating-active-${idx}`}
              fontSize={fontSize}
              color={activeColor}
            />
          ))}
        {Array(diff)
          .fill(null)
          .map((r, idx) => (
            <StarIcon
              key={`rating-passive-${idx}`}
              fontSize={fontSize}
              color={passiveColor ?? defaultPassiveColor}
            />
          ))}
      </HStack>
    );
  },
);
