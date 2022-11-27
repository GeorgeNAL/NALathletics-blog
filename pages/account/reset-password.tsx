import { yupResolver } from "@hookform/resolvers/yup";

import React, { memo, useContext, useState } from "react";

import { useForm } from "react-hook-form";
import * as yup from "yup";

import { NextSeo } from "next-seo";

import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
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
  InputGroup,
  InputRightElement,
  Stack,
  type ThemingProps,
  useColorModeValue,
} from "@chakra-ui/react";

import { ThemeColorContext } from "@definitions/context/theme";
import { __DEV__ } from "@definitions/utils";

import Layout from "@layouts/default";

const ResetPasswordPage = () => {
  const theme = useContext(ThemeColorContext);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const color = theme.colorScheme; // global default primary theme color

  return (
    <>
      <NextSeo
        title="Reset Password"
        description="Senco Reset Password Example Page"
      />
      <chakra.main bg={useColorModeValue("gray.50", "gray.700")}>
        <Flex
          pos="relative"
          overflow="hidden"
          minH={"100vh"}
          align={"center"}
          justify={"center"}
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
    password: yup
      .string()
      .required("No password provided.")
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(/[a-zA-Z0-9]/, "Password can only contain Latin letters."),
  })
  .required();

interface ResetPasswordFormValues {
  email: string;
  password: string;
}

const ResetPasswordForm: React.FC<ChakraProps & ThemingProps> = memo(
  ({ colorScheme, ...rest }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [
      formData, // eslint-disable-line @typescript-eslint/no-unused-vars
      setFormData,
    ] = useState<ResetPasswordFormValues>();

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
          spacing={4}
          width="full"
          rounded="xl"
          boxShadow="2xl"
          bg={useColorModeValue("white", "gray.700")}
        >
          <Heading lineHeight={1.1} fontSize={{ base: "2xl", md: "3xl" }}>
            Enter New Password
          </Heading>
          <FormControl isRequired isInvalid={!!errors?.email}>
            <FormLabel>Email address</FormLabel>
            <Input
              size="lg"
              type="email"
              placeholder="john.doe@example.com"
              _placeholder={{ color: "gray.500" }}
              {...register("email")}
            />
            <FormErrorMessage>{errors?.email?.message}</FormErrorMessage>
          </FormControl>
          <FormControl id="password" isRequired isInvalid={!!errors?.password}>
            <FormLabel>New Password</FormLabel>
            <InputGroup>
              <Input
                size="lg"
                type={showPassword ? "text" : "password"}
                placeholder="******"
                {...register("password")}
              />
              <InputRightElement height="full">
                <Button
                  variant="link"
                  onClick={() =>
                    setShowPassword((showPassword) => !showPassword)
                  }
                >
                  {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                </Button>
              </InputRightElement>
            </InputGroup>
            <FormErrorMessage>{errors?.password?.message}</FormErrorMessage>
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

ResetPasswordPage.PageLayout = memo(
  ({ children }: { children: React.ReactNode }) => {
    return <Layout footer={<></>}>{children}</Layout>;
  },
);

export default ResetPasswordPage;
