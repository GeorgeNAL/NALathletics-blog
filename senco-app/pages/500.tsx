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

const InternalServerErrorPage: React.FC = () => {
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
        title="500 Internal Server Error"
        description="Your request encountered an error, please try again in a while"
      />
      <chakra.main>
        <Container maxW="container.xl" py={28}>
          <Flex align="center" justify="center" height="calc(100vh - 224px)">
            <VStack spacing={4}>
              <Text fontSize="2xl" lineHeight={1} variant="subtitle">
                500
              </Text>
              <Heading lineHeight={1} size="3xl">
                Internal Server Error
              </Heading>
              <Text textAlign="center" fontSize="xl">
                Your request encountered an error, please try again in a while
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

export default InternalServerErrorPage;
