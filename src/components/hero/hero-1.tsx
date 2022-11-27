import {
  Box,
  type ChakraProps,
  Container,
  Heading,
  Text,
  type ThemingProps,
  VStack,
} from "@chakra-ui/react";

interface I_Hero {
  title: string;
  body: string;
  bodyWidth?: number | number[];
}

const Hero1: React.FC<I_Hero & ChakraProps & ThemingProps> = ({
  title,
  body,
  bodyWidth,
  ...rest
}) => {
  return (
    <Box w="full" pt={[28, 28, 32, 210]} pb={10} {...rest}>
      <Container maxW="container.xl">
        <VStack textAlign="center">
          <Heading as="h1" size="3xl" data-aos="fade-up">
            {title}
          </Heading>
          <Text
            maxW={bodyWidth}
            data-aos="fade-up"
            data-aos-delay="100"
            fontSize="xl"
          >
            {body}
          </Text>
        </VStack>
      </Container>
    </Box>
  );
};

export default Hero1;
