import { yupResolver } from "@hookform/resolvers/yup";

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
  FormLabel,
  Input,
  Stack,
  Text,
  Textarea,
  type ThemingProps,
  useColorModeValue,
} from "@chakra-ui/react";

interface ContactFormValues {
  fullName: string;
  email: string;
  companyName: string;
  message: string;
  phone?: string;
  accept: boolean;
}

const phoneRegExp =
  /^$|((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

// string()
//   .nullable()
//   .transform((o, c) => (o === "" ? null : c))
//   .min(10, "This value must be minimum of 10 characters.");

const schema = yup
  .object({
    fullName: yup
      .string()
      .min(6, "Full name must be at least 6 characters long")
      .required("Full name is a required field")
      .matches(
        /^[a-zA-Z.]+\s+[a-zA-Z.]+$/,
        "Full name must contain only letters",
      ),
    email: yup
      .string()
      .email("Please enter a valid email")
      .required("Email is a required field"),
    companyName: yup
      .string()
      .nullable(true)
      .min(3, "Company name must be at least 3 characters long")
      .transform((_, val) => (val === "" ? null : val)),
    phone: yup
      .string()
      .nullable(true)
      .matches(phoneRegExp, "Phone number is not valid")
      .transform((_, val) => (val === val ? val : null)),
    message: yup.string().required("Message is a required field"),
    // accept: yup
    //   .boolean()
    //   .oneOf([true], "You must accept the terms and conditions"),
  })
  .required();

const ContactForm: React.FC<ChakraProps & ThemingProps> = ({
  colorScheme = "brand",
}) => {
  const [
    formData, // eslint-disable-line @typescript-eslint/no-unused-vars
    setFormData,
  ] = useState<ContactFormValues>();

  const inactiveColor = useColorModeValue("gray.500", "gray.400");

  const {
    handleSubmit, // handels the form submit event
    register, // ties the inputs to react-form
    formState: { errors, isSubmitting }, // gets errors and "loading" state
  } = useForm<ContactFormValues>({
    reValidateMode: "onBlur",
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: ContactFormValues) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(data);
        setFormData(data);
        alert(JSON.stringify(data, null, 2));
      }, 4000);
    });
  };

  const inputBG = useColorModeValue("gray.50", "gray.800");

  return (
    <Box>
      <chakra.form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Stack direction="column" spacing={[2, 4, 8]}>
          <Stack
            direction={["column", "column", "row"]}
            spacing={[2, 4, 8, 10]}
          >
            <FormControl isRequired isInvalid={!!errors?.fullName}>
              <FormLabel htmlFor="fullName">Full Name</FormLabel>
              <Input
                id="fullName"
                placeholder="William Bell"
                focusBorderColor={`${colorScheme}.400`}
                size="lg"
                bg={inputBG}
                {...register("fullName")}
              />
              <FormErrorMessage>{errors?.fullName?.message}</FormErrorMessage>
            </FormControl>

            <FormControl isRequired isInvalid={!!errors?.email}>
              <FormLabel htmlFor="email">Your Email</FormLabel>
              <Input
                id="email"
                placeholder="william.bell@senco.tld"
                focusBorderColor={`${colorScheme}.400`}
                size="lg"
                bg={inputBG}
                {...register("email")}
              />
              <FormErrorMessage>{errors?.email?.message}</FormErrorMessage>
            </FormControl>
          </Stack>

          <Stack
            direction={["column", "column", "row"]}
            spacing={[2, 4, 8, 10]}
          >
            <FormControl isInvalid={!!errors?.companyName}>
              <FormLabel fontSize="lg" htmlFor="companyName">
                Company Name{" "}
                <Text as="span" fontSize="sm" color="gray.400">
                  (Optional)
                </Text>
              </FormLabel>
              <Input
                id="companyName"
                placeholder="Massive Dynamic"
                focusBorderColor={`${colorScheme}.400`}
                size="lg"
                bg={inputBG}
                {...register("companyName")}
              />
              <FormErrorMessage>
                {errors?.companyName?.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors?.phone}>
              <FormLabel fontSize="lg" htmlFor="phone">
                Phone Number{" "}
                <Text as="span" fontSize="sm" color="gray.400">
                  (Optional)
                </Text>
              </FormLabel>
              <Input
                id="phone"
                placeholder="+9 (999) 99-999-9999"
                bg={inputBG}
                // color="gray.500"
                size="lg"
                focusBorderColor={`${colorScheme}.400`}
                {...register("phone")}
              />
              <FormErrorMessage>{errors?.phone?.message}</FormErrorMessage>
            </FormControl>
          </Stack>

          <FormControl isRequired isInvalid={!!errors?.message}>
            <FormLabel fontSize="lg">Your message</FormLabel>
            <Textarea
              {...register("message")}
              placeholder="Briefly describe how we can help you ..."
              resize="vertical"
              size="lg"
              minHeight={32}
              bg={inputBG}
              focusBorderColor={`${colorScheme}.400`}
            />
            <FormErrorMessage>{errors?.message?.message}</FormErrorMessage>
          </FormControl>
          <Box>
            <Stack mt={[4, 6, 8, 10]} align="center" justify="center">
              <Button
                type="submit"
                size="lg"
                colorScheme={colorScheme}
                isLoading={isSubmitting}
              >
                Send message
              </Button>
              <Text
                color={inactiveColor}
                textAlign="center"
                mt={2}
                fontSize="sm"
              >
                We'll get back to you in 1-3 business days.
              </Text>
            </Stack>
          </Box>
        </Stack>
      </chakra.form>
    </Box>
  );
};

export default memo(ContactForm);
