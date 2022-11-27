import { yupResolver } from "@hookform/resolvers/yup";
import { BiCheckCircle } from "@react-icons";

import { memo, useState } from "react";

import { useForm } from "react-hook-form";
import * as yup from "yup";

import {
  Box,
  Button,
  chakra,
  type ChakraProps,
  FormControl,
  FormErrorMessage,
  Heading,
  Icon,
  Input,
  Stack,
  Text,
  type ThemingProps,
  useColorModeValue,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

interface CTAFormValues {
  email: string;
}

const schema = yup
  .object({
    email: yup
      .string()
      .email("Please enter a valid email")
      .required("Email is a required field"),
  })
  .required();

interface ICTAProps extends ChakraProps, ThemingProps {
  title: string;
  subtitle: string;
}

const CTA: React.FC<ICTAProps> = ({
  title,
  subtitle,
  colorScheme = "brand",
  ...rest
}) => {
  const [
    formData, // eslint-disable-line @typescript-eslint/no-unused-vars
    setFormData,
  ] = useState<CTAFormValues>();

  const {
    handleSubmit, // handels the form submit event
    register, // ties the inputs to react-form
    formState: { errors, isSubmitting }, // gets errors and "loading" state
  } = useForm<CTAFormValues>({
    reValidateMode: "onBlur",
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: CTAFormValues) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(data);
        setFormData(data);
        alert(JSON.stringify(data, null, 2));
      }, 4000);
    });
  };

  return (
    <Box
      color="white"
      p={[5, 10, 28]}
      rounded="2xl"
      bg={useColorModeValue(`${colorScheme}.500`, `${colorScheme}.800`)}
      bgSize="cover"
      bgPosition="center"
      {...rest}
    >
      <VStack spacing={10}>
        <VStack textAlign="center">
          <Heading as="h3" size="2xl">
            {title}
          </Heading>
          <Text fontSize="2xl">{subtitle}</Text>
        </VStack>
        <chakra.form
          w={["full", "full", "80%"]}
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <Stack
            align="start"
            justify={"center"}
            direction={["column", "column", "row"]}
            spacing={8}
          >
            <FormControl isRequired isInvalid={!!errors?.email}>
              <Input
                placeholder="Enter your email address"
                focusBorderColor={`whiteAlpha.600`}
                border="none"
                bg="whiteAlpha.200"
                px={6}
                py={8}
                _placeholder={{
                  color: "whiteAlpha.800",
                }}
                _focus={{
                  bg: "whiteAlpha.400",
                }}
                size="lg"
                {...register("email")}
              />
              <FormErrorMessage>{errors?.email?.message}</FormErrorMessage>
            </FormControl>
            <Box>
              <Button
                type="submit"
                px={6}
                isLoading={isSubmitting}
                colorScheme="white"
                size="jumbo"
              >
                Get Started
              </Button>
            </Box>
          </Stack>
        </chakra.form>

        <Wrap spacingX={8}>
          <WrapItem alignItems="center">
            <Icon mr={2} w={6} h={6} as={BiCheckCircle} />
            <Text fontSize="xl">No credit card required</Text>
          </WrapItem>
          <WrapItem alignItems="center">
            <Icon mr={2} w={6} h={6} as={BiCheckCircle} />
            <Text fontSize="xl">Cancel anytime</Text>
          </WrapItem>
        </Wrap>
      </VStack>
    </Box>
  );
};

export default memo(CTA);
