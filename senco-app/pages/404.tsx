import React, { useContext } from "react";

import { NextSeo } from "next-seo";

import {
  Button,
  chakra,
  Container,
  Flex,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";

import { ThemeColorContext } from "@definitions/context/theme";
import Site from "@definitions/site";

const PageNotFoundPage: React.FC = () => {
  const theme = useContext(ThemeColorContext);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const themeColorScheme = theme.colorScheme; // global default primary theme color

  const backButtonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (event.button === 0) window.location.href = "/";
    if (event.button === 1) window.location.href = "/";
  };

  return (
    <>
      <NextSeo
        title="404 Page not found"
        description="Page not found, It appears that the page you were searching for no longer exists."
      />
      <chakra.main>
        <Container maxW="container.xl" py={28}>
          <Flex align="center" justify="center" height="calc(100vh - 224px)">
            <VStack spacing={4}>
              <Text fontSize="2xl" lineHeight={1} variant="subtitle">
                404
              </Text>
              <Heading lineHeight={1} size="3xl">
                Page not found
              </Heading>
              <Text textAlign="center" fontSize="xl">
                Hmm, it appears that the page you were searching for no longer
                exists.
              </Text>
              <Button onClick={backButtonHandler} size="jumbo">
                Back to {Site.name}
              </Button>
            </VStack>
          </Flex>
        </Container>
      </chakra.main>
    </>
  );
};

export default PageNotFoundPage;
