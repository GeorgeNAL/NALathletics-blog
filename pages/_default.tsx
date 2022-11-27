import React, { useContext } from "react";

import { NextSeo } from "next-seo";

import { chakra, Text, VStack } from "@chakra-ui/react";

import { ThemeColorContext } from "@definitions/context/theme";

const DefaultPage: React.FC = () => {
  const theme = useContext(ThemeColorContext);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const themeColorScheme = theme.colorScheme; // global default primary theme color

  return (
    <>
      <NextSeo
        title="Senco React E-Commerce"
        description="Senco React E-Commerce Website Template"
      />
      <chakra.main>
        <VStack mb={32} spacing={32}>
          <Text>Default Page</Text>
        </VStack>
      </chakra.main>
    </>
  );
};

export default DefaultPage;
