import { yupResolver } from "@hookform/resolvers/yup";

import React, { memo, useContext, useState } from "react";

import { useForm } from "react-hook-form";
import * as yup from "yup";

import { NextSeo } from "next-seo";

import {
  Button,
  chakra,
  type ChakraProps,
  Container,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
  type ThemingProps,
  useColorModeValue,
} from "@chakra-ui/react";

import { ThemeColorContext } from "@definitions/context/theme";
import { __DEV__ } from "@definitions/utils";

import Layout from "@layouts/default";

const ForgotPasswordPage = () => {
  const theme = useContext(ThemeColorContext);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const color = theme.colorScheme; // global default primary theme color

  return (
    <>
      <NextSeo
        title="Forgot your password"
        description="Senco Reset Password Example Page"
      />
      <chakra.main bg={useColorModeValue("gray.50", "gray.700")}>
        <Flex
          pos="relative"
          overflow="hidden"
          minH="100vh"
          align="center"
          justify="center"
        >
          <Container zIndex={2} maxW={["full", 500, 500]}>
            <ResetPasswordForm mb={10} mt={[24, 24, 24]} colorScheme={color} />
          </Container>
        </Flex>
      </chakra.main>
    </>
  );
};

// Validation Schema
const schema = yup
  .object({
    email: yup
      .string()
      .email("Please enter a valid email")
      .required("Email is a required field"),
  })
  .required();

interface ResetPasswordFormValues {
  email: string;
}

const ResetPasswordForm: React.FC<ChakraProps & ThemingProps> = memo(
  ({ colorScheme, ...rest }) => {
    const [
      formData, // eslint-disable-line @typescript-eslint/no-unused-vars
      setFormData,
    ] = useState<{
      email: string;
    }>();

    const {
      handleSubmit, // handels the form submit event
      register, // ties the inputs to react-form
      formState: { errors, isSubmitting }, // gets errors and "loading" state
    } = useForm<ResetPasswordFormValues>({
      reValidateMode: "onBlur",
      resolver: yupResolver(schema),
    });

    const onSubmit = (data: ResetPasswordFormValues) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(data);
          setFormData(data);
          alert(JSON.stringify(data, null, 2));
        }, 4000);
      });
    };

    return (
      <chakra.form onSubmit={handleSubmit(onSubmit)} noValidate {...rest}>
        <Stack
          p={10}
          w="full"
          spacing={4}
          rounded="xl"
          boxShadow="2xl"
          bg={useColorModeValue("white", "gray.700")}
        >
          <Heading lineHeight={1.1} fontSize={{ base: "2xl", md: "3xl" }}>
            Forgot your password?
          </Heading>
          <Text>You'll get an email with a reset link</Text>
          <FormControl isRequired isInvalid={!!errors?.email}>
            <FormLabel size="lg">Email address</FormLabel>
            <Input
              size="lg"
              type="email"
              placeholder="john.doe@example.com"
              _placeholder={{ color: "gray.500" }}
              {...register("email")}
            />
            <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
          </FormControl>

          <Stack spacing={6}>
            <Button
              size="lg"
              type="submit"
              loadingText="Submitting"
              colorScheme={colorScheme}
              isLoading={isSubmitting}
            >
              Submit
            </Button>
          </Stack>
        </Stack>
      </chakra.form>
    );
  },
);

if (__DEV__) {
  ResetPasswordForm.displayName = "ResetPasswordForm";
}

ForgotPasswordPage.PageLayout = memo(
  ({ children }: { children: React.ReactNode }) => {
    return <Layout footer={<></>}>{children}</Layout>;
  },
);

export default ForgotPasswordPage;
