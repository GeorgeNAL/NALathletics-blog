import { useContext } from "react";

import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import ReactMarkdown from "react-markdown";
import { Components } from "react-markdown/lib/ast-to-react";

import { NextSeo } from "next-seo";

import {
  Box,
  chakra,
  Container,
  Flex,
  Heading,
  Link,
  ListItem,
  OrderedList,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";

import { ThemeColorContext } from "@definitions/context/theme";
import terms from "@definitions/data/terms";
import { useScrollSpy } from "@definitions/hooks/useScrollSpy";

import PageTitle from "@components/page-title";

const TermsPage: React.FC = (): JSX.Element => {
  const theme = useContext(ThemeColorContext);
  const color = theme.colorScheme; // global default primary theme color

  const activeId = useScrollSpy(
    terms.map(({ id }) => `[id="${id}"]`),
    {
      rootMargin: "0% 0% -99% 0%",
      // threshold: 0,
    },
  );

  const headingStyle = {
    fontSize: "lg",
    fontFamily: "body",
    fontWeight: "700",
    mb: 5,
  };

  const textStyle = {
    color: useColorModeValue("gray.600", "gray.400"),
  };

  const activeColor = useColorModeValue(`${color}.500`, `${color}.300`);

  interface Defaults extends Components {
    heading?: Components["h1"];
  }

  const CustomMarkdownTheme: Defaults = {
    p: (props) => {
      const { children } = props;
      return <Text {...textStyle}>{children}</Text>;
    },
  };

  return (
    <>
      <NextSeo
        title="Senco Terms and Conditions"
        description="Senco Terms and Conditions Example Page"
      />
      <chakra.main>
        <PageTitle
          subtitle="Terms"
          title="Senco Terms & Conditions"
          body="Effective date: 1 January 2022"
          bg={useColorModeValue("gray.100", "gray.900")}
        />
        <Box py={14}>
          <Container maxW="container.lg">
            <Flex>
              <Flex
                display={{ base: "none", md: "flex" }}
                align="start"
                justify="start"
                direction="column"
                minWidth="320px"
                flex="1"
              >
                <Box position="sticky" top="2rem">
                  <OrderedList styleType="none" spacing={3}>
                    {terms.map((t) => {
                      return (
                        <ListItem
                          key={t.id}
                          borderLeftWidth={"2px"}
                          px={4}
                          borderColor={
                            activeId === t.id ? activeColor : "transparent"
                          }
                        >
                          <Link
                            href={`#${t.id}`}
                            fontWeight="bold"
                            color={activeId === t.id ? activeColor : undefined}
                            _hover={{
                              color: activeColor,
                            }}
                          >
                            {t.title}
                          </Link>
                        </ListItem>
                      );
                    })}
                  </OrderedList>
                </Box>
              </Flex>

              <Box>
                <VStack align="stretch" spacing={2}>
                  <Box id="terms">
                    <VStack
                      align="stretch"
                      {...textStyle}
                      fontSize="lg"
                      lineHeight={1.6}
                      spacing={2}
                    >
                      <Text>
                        Thanks for using our products and services ("Services").
                        The Services are provided by Senco Ltd. ("Senco"),
                        located at 132 Boroughbridge Road B12 18SP, Birmingham
                        United Kingdom.
                      </Text>

                      <Text>
                        By using our Services, you are agreeing to these terms.
                        Please read them carefully.
                      </Text>

                      <Text>
                        Our Services are very diverse, so sometimes additional
                        terms or product requirements (including age
                        requirements) may apply. Additional terms will be
                        available with the relevant Services, and those
                        additional terms become part of your agreement with us
                        if you use those Services.
                      </Text>
                    </VStack>
                  </Box>

                  {/* Term Contents */}
                  {terms.map((t, idx) => {
                    return (
                      <Box key={`${t.id}-${idx}`} pt={10} id={t.id}>
                        <Heading {...headingStyle}>
                          {idx + 1}. {t.title}
                        </Heading>
                        <VStack align="stretch" spacing={2}>
                          <ReactMarkdown
                            components={ChakraUIRenderer(CustomMarkdownTheme)}
                            children={t.body}
                          />
                        </VStack>
                      </Box>
                    );
                  })}
                </VStack>
              </Box>
            </Flex>
          </Container>
        </Box>
      </chakra.main>
    </>
  );
};

export default TermsPage;
