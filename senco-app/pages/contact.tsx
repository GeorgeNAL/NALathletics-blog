import { FiMapPin } from "@react-icons";

import React from "react";

import { NextSeo } from "next-seo";

import {
  Box,
  chakra,
  Container,
  Flex,
  Heading,
  Icon,
  Link,
  Stack,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";

import Image from "@components/image";

import ContactForm from "@blocks/contact-form";
import CTA from "@blocks/cta";

const ContactPage: React.FC = () => {
  return (
    <>
      <NextSeo title="Contact us" description="Senco contact us" />
      <chakra.main
        // bg="gray.50"
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Box
          pt={[28, 28, 32, 210]}
          pb={32}
          bg={useColorModeValue("gray.100", "gray.900")}
        >
          <Container maxW={850}>
            <VStack textAlign="center">
              <Text variant="subtitle" data-aos="fade-up">
                Contact
              </Text>
              <Heading
                as="h1"
                lineHeight={[1.5, 1, 1]}
                fontSize={["2em", "3em", "4em"]}
                data-aos="fade-up"
                data-aos-delay="50"
              >
                We would love to hear your comments and suggestions
              </Heading>
              <Text
                data-aos="fade-up"
                data-aos-delay="100"
                maxW={680}
                fontSize="2xl"
              >
                A corporate and premium e-commerce template designed to assist
                you in building websites more quickly.
              </Text>
            </VStack>
          </Container>
        </Box>
        <Container mt={-20} maxW="container.lg">
          <Box
            data-aos="fade-up"
            data-aos-delay="150"
            rounded="2xl"
            p={[4, 8, 10, 20]}
            bg={useColorModeValue("white", "gray.700")}
          >
            <ContactForm />
          </Box>
        </Container>

        <Container
          zIndex={1}
          pos="relative"
          py={[5, 10, 28]}
          maxW="container.xl"
        >
          {/* <ImageLazyload
            left="50%"
            top="50%"
            transform="translateY(-50%) translateX(-50%)"
            pos="absolute"
            maxWidth="750px"
            width="full"
            zIndex={-1}
            image={useColorModeValue(WorldMapDotLight, WorldMapDotDark)}
          /> */}
          <Box
            left="50%"
            top="50%"
            transform="translateY(-50%) translateX(-50%)"
            pos="absolute"
            zIndex={-1}
          >
            <Image
              src={useColorModeValue(
                "/images/world-map-dots-light.png",
                "/images/world-map-dots-dark.png",
              )}
              width={720}
              height={405}
              alt="world map dot"
            />
          </Box>

          <Stack
            alignItems={["stretch", "stretch", "center"]}
            direction={["column", "column", "row"]}
          >
            <Flex
              justify={["center", "center", "start"]}
              w="full"
              flex={[1, 1, 1, 2]}
              data-aos="fade-up"
            >
              <VStack
                textAlign={["center", "center", "start"]}
                align={["center", "center", "start"]}
              >
                <Text variant="subtitle">Location</Text>
                <Heading
                  lineHeight={[1.5, 1, 1]}
                  fontSize={["1.5em", "2em", "3em"]}
                >
                  Our offices
                </Heading>
                <Text fontSize="xl" maxW={400}>
                  We look forward to meeting you and offering solutions to your
                  software and design problems.
                </Text>
              </VStack>
            </Flex>

            <Flex
              data-aos="fade-up"
              data-aos-delay="50"
              justify={["center", "center", "start"]}
              flex="1"
            >
              <Box p={[2, 5, 10]}>
                <VStack align={["center", "center", "start"]}>
                  <Flex w="full" justify={["center", "center", "start"]}>
                    <Icon color="brand.400" as={FiMapPin} w={6} h={6} />
                  </Flex>
                  <Text fontSize="lg" fontWeight="600">
                    New York, USA
                  </Text>
                  <Text>
                    Eastern Parkway Pedestrian Mall, Brooklyn, NY 11213
                  </Text>
                  <Text>+1 216-342-3084</Text>
                  <Link>Get directions</Link>
                </VStack>
              </Box>
            </Flex>

            <Flex
              data-aos="fade-up"
              data-aos-delay="100"
              justify={["center", "center", "start"]}
              flex="1"
            >
              <Box p={[2, 5, 10]}>
                <VStack align={["center", "center", "start"]}>
                  <Flex w="full" justify={["center", "center", "start"]}>
                    <Icon color="brand.400" as={FiMapPin} w={6} h={6} />
                  </Flex>
                  <Text fontSize="lg" fontWeight="600">
                    Frankfurt, Germany
                  </Text>
                  <Text>Brückenstraße 70, 60594 Frankfurt am Main</Text>
                  <Text>+49 0211 44 29 68</Text>
                  <Link>Get directions</Link>
                </VStack>
              </Box>
            </Flex>
          </Stack>
        </Container>

        <Box pos="relative">
          <Container pos="relative" zIndex={1} maxW="container.xl">
            <CTA
              data-aos="fade-up"
              title="Start your & 14-day free trial"
              subtitle="Try out premium features and start trading right away"
            />
          </Container>
          <Box
            zIndex={0}
            bg="gray.900"
            w="full"
            pos="absolute"
            h={52}
            bottom={0}
          />
        </Box>
      </chakra.main>
    </>
  );
};

export default ContactPage;
