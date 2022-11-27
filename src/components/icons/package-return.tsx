/**
 * Free Icon from UXwing
 * https://uxwing.com/category/logistics-shipping-delivery/
 * name: package-return
 */
import React, { memo } from "react";

import { chakra, type ChakraProps, type ThemingProps } from "@chakra-ui/react";

export const PackageReturnIcon: React.FC<ChakraProps & ThemingProps> = memo(
  (props) => {
    return (
      <chakra.svg
        // width="505"
        // height="511"
        viewBox="0 0 505 511.5"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <g fillRule="evenodd" fill="currentColor">
          <path d="M336.11 39.84l-115.38 68.94 135.38 18.4 111.32-69.44-131.32-17.9zm25.45 204.61c73.74 0 133.53 59.78 133.53 133.53 0 73.74-59.79 133.52-133.53 133.52-73.75 0-133.53-59.78-133.53-133.52 0-73.75 59.78-133.53 133.53-133.53zm-50.44 179.72l15.51-78.82 15.73 23.69c33.86-13.59 52.88-36 55.7-70.5 27.82 48.63 10.93 92.22-24.33 117.77l16.05 24.16-78.65-16.3h-.01zM204.83 126.13l-.09 141.71-51.45-35.04-51.46 29.07 6.1-148.91-88.54-12.03v312.98l178.95 23.13c2.52 7.1 5.47 13.99 8.85 20.63L9.3 432.07c-5.17-.2-9.3-4.47-9.3-9.68V89.86c.27-4.05 1.89-6.89 5.72-8.81L182.48.85c1.58-.72 3.52-1.01 5.25-.77l308.18 42.04c5.09.59 8.58 4.77 8.58 9.99v.02L505 280.9c-5.72-8.46-15.57-20.29-19.93-27.77V69.56l-115.81 74.93v59.81a174.846 174.846 0 0 0-19.39.36v-58.82l-145.04-19.71zm-81.52-30.58l112.17-69.44-47.58-6.49L44.24 84.8l79.07 10.75z" />
        </g>
      </chakra.svg>
    );
  },
);
