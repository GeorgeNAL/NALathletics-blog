import { ImQuotesLeft } from "@react-icons";

import React, { memo } from "react";

import {
  Avatar,
  Box,
  Button,
  type ChakraProps,
  Container,
  Icon,
  Stack,
  Text,
  type ThemingProps,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";

type Testimonial = {
  avatar: string;
  name: string;
  body: string;
  job: string;
  rate?: number;
};

type CTA = {
  title: string;
  body: string;
  action: {
    text: string;
    action: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  }[];
};

interface ICallToAction extends ChakraProps, ThemingProps {
  testimonial: Testimonial;
  cta: CTA;
}

const CallToActionBlock: React.FC<ICallToAction> = ({
  testimonial,
  cta,
  ...rest
}) => {
  const defaultBg = useColorModeValue("gray.50", "gray.900");
  const lightBg = useColorModeValue("white", "gray.700");
  const firstTextColor = useColorModeValue("gray.700", "whiteAlpha.900");
  const secondTextColor = useColorModeValue("gray.600", "whiteAlpha.600");
  return (
    <Box bg={defaultBg} py={20} width="full" {...rest}>
      <Container maxW="container.lg">
        <Stack
          align="center"
          direction={["column", "column", "row"]}
          spacing={[10, 10, 20]}
        >
          <VStack
            width="full"
            flex="2"
            align={["center", "center", "start"]}
            spacing={[4, 4, 6]}
          >
            <Avatar
              as={Box}
              size="lg"
              name={testimonial?.name}
              src={testimonial?.avatar}
              data-aos="fade-up"
            />
            {testimonial?.body && (
              <Text
                fontSize="xl"
                color={firstTextColor}
                textAlign={["center", "center", "start"]}
                data-aos="fade-up"
                data-aos-delay={100}
              >
                <Icon w={7} h={7} mr={2} float="left" as={ImQuotesLeft} />
                {testimonial.body}
              </Text>
            )}
            <Box textAlign={["center", "center", "start"]}>
              {testimonial?.name && (
                <Text
                  fontSize="lg"
                  fontWeight="semibold"
                  color={firstTextColor}
                  data-aos="fade-up"
                  data-aos-delay={150}
                >
                  {testimonial?.name}
                </Text>
              )}
              {testimonial?.job && (
                <Text
                  color={secondTextColor}
                  data-aos="fade-up"
                  data-aos-delay={200}
                >
                  {testimonial?.job}
                </Text>
              )}
            </Box>
          </VStack>
          <Box
            flex="1"
            shadow="xl"
            width="full"
            bg={lightBg}
            rounded="xl"
            p={[6, 10, 10, 14]}
            data-aos="fade-in"
          >
            <VStack spacing={[4]}>
              {cta?.title && (
                <Text
                  fontWeight="semibold"
                  fontSize="2xl"
                  data-aos="fade-up"
                  data-aos-delay={200}
                >
                  {cta.title}
                </Text>
              )}
              {cta?.body && (
                <Text
                  textAlign={["center", "center", "center"]}
                  data-aos="fade-up"
                  data-aos-delay={250}
                >
                  {cta.body}
                </Text>
              )}
              <VStack>
                <Button
                  width="full"
                  size="jumbo"
                  onClick={cta?.action[0]?.action}
                  data-aos="fade-up"
                  data-aos-delay={300}
                >
                  {cta?.action[0]?.text}
                </Button>
                <Button
                  width="full"
                  variant="outline"
                  colorScheme="gray"
                  size="jumbo"
                  onClick={cta?.action[1]?.action}
                  data-aos="fade-up"
                  data-aos-delay={350}
                >
                  {cta?.action[1]?.text}
                </Button>
              </VStack>
            </VStack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default memo(CallToActionBlock);
