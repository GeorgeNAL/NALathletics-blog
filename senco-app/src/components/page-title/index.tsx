import {
  Box,
  type ChakraProps,
  Container,
  Heading,
  type LayoutProps,
  Text,
  type ThemingProps,
  VStack,
} from "@chakra-ui/react";

interface PageTitleProps {
  title: string;
  body: string;
  subtitle?: string;
  bodyMaxW?: LayoutProps["maxW"];
}

const PageTitle: React.FC<PageTitleProps & ChakraProps & ThemingProps> = ({
  title,
  body,
  subtitle,
  bodyMaxW = 890,
  ...rest
}) => {
  return (
    <Box w="full" pt={[28, 28, 32, 210]} pb={10} {...rest}>
      <Container maxW="container.xl">
        <VStack textAlign="center">
          {subtitle && (
            <Text variant="subtitle" data-aos="fade-up">
              {subtitle}
            </Text>
          )}
          <Heading as="h1" size="3xl" data-aos="fade-up" data-aos-delay="100">
            {title}
          </Heading>
          <Text
            maxW={bodyMaxW}
            data-aos="fade-up"
            data-aos-delay="200"
            fontSize="xl"
          >
            {body}
          </Text>
        </VStack>
      </Container>
    </Box>
  );
};

export default PageTitle;
