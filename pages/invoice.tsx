import isValidHTMLProp from "@emotion/is-prop-valid";
import { GrDocumentPdf, GrPrint, MdKeyboardBackspace } from "@react-icons";

import React, { memo } from "react";

import { NextSeo } from "next-seo";
import { useRouter } from "next/router";

import {
  Box,
  Button,
  chakra,
  Container,
  Divider,
  Flex,
  type FlexProps,
  Heading,
  Icon,
  shouldForwardProp,
  Stack,
  Table,
  Tbody,
  Td,
  Text,
  type TextProps,
  Th,
  Thead,
  Tr,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";

import Site from "@definitions/site";
import { __DEV__ } from "@definitions/utils";
import NumberFormat from "@definitions/utils/number-format";
import customScrollbar from "@definitions/utils/scrollbar";

import Logo from "@components/logo";

import Layout from "@layouts/default";

// Custom Chakra Element
const Address = chakra("address", {
  shouldForwardProp: (prop) => {
    // don't forward Chakra's props
    const isChakraProp = !shouldForwardProp(prop);
    if (isChakraProp) return false;

    // forward valid HTML props
    const isValidProp = isValidHTMLProp(prop);
    if (isValidProp) return true;

    // else, only forward `sample` prop
    return ["sample"].includes(prop);
  },
});

const InvoicePage = (): JSX.Element => {
  const router = useRouter();
  const mainBg = useColorModeValue("gray.100", "gray.800");
  const contentBg = useColorModeValue("white", "gray.700");
  return (
    <>
      <NextSeo title="Invoice" description="Senco Invoice Example Page" />
      <chakra.main bg={mainBg}>
        <Container py={20} maxW="container.lg">
          <Box rounded="xl" bg={contentBg} p={10} shadow="xl">
            <HeaderInvoice invoiceNumber={"000001"} />
            <Divider my={5} w={["full", "full", "full"]} />
            <BillingInvoice
              name="Scott Henderson"
              address="Grove Street New York, NY 10013, United States"
              invoiceDate="Mar 10, 2022"
              dueDate="Mar 30, 2022"
            />
            <TableInvoice
              paid={150.6}
              items={[
                {
                  item: "Web Template Design",
                  tax: 0.08,
                  qty: 1,
                  price: 900,
                },
                { item: "Social Media Page", tax: 0.08, qty: 2, price: 120 },
                {
                  item: "Logo & Brand Identity",
                  tax: 0.1,
                  qty: 1,
                  price: 499.9,
                },
              ]}
            />
            <Box py={10} w={["full", "full", "55%"]}>
              <Heading fontFamily="body" as="h3" fontSize="xl" mb={3}>
                Thank you!
              </Heading>
              <Text>
                If you have any questions concerning this invoice, use the
                following contact information: <b>account@senco.tld</b>
              </Text>
            </Box>
          </Box>
          <Box
            my={10}
            sx={{
              "@media print": {
                display: "none",
              },
            }}
          >
            <Stack justify={["end"]} direction={["column", "row", "row"]}>
              <Button
                variant={"ghost"}
                mr={["unset", "auto", "auto"]}
                onClick={() => router.back()}
                leftIcon={<Icon as={MdKeyboardBackspace} />}
              >
                Go Back
              </Button>
              <Button colorScheme="gray" leftIcon={<Icon as={GrDocumentPdf} />}>
                Download as PDF
              </Button>
              <Button
                colorScheme="gray"
                onClick={() => window.print()}
                leftIcon={<Icon as={GrPrint} />}
              >
                Print Invoice
              </Button>
            </Stack>
          </Box>
        </Container>
      </chakra.main>
    </>
  );
};

/* -------------------------------------------------------------------------- */
/*                                 PAGE BLOCKS                                */
/*    All page content can be edited via props. You do not need to make any   */
/*    changes in this part if you are not going to make design arrangements   */
/* -------------------------------------------------------------------------- */

interface IHeaderInvoice {
  invoiceNumber: number | string;
}

const HeaderInvoice: React.FC<IHeaderInvoice> = memo(({ invoiceNumber }) => {
  return (
    <Flex mb={[5, 0, 5]} direction={["column-reverse", "row", "row"]}>
      <Box mt={[5, 0, 0]} flex="1">
        <Logo width={"65px"} height={"65px"} />
        <Heading
          mb={0}
          fontSize="2xl"
          fontWeight="700"
          fontFamily="body"
          textTransform="uppercase"
        >
          {Site.company}
        </Heading>
      </Box>
      <Box textAlign={["left", "right", "right"]}>
        <VStack spacing={3} alignItems={["start", "end", "end"]}>
          <Box>
            <Heading
              as="h2"
              fontWeight="700"
              fontFamily="body"
              fontSize={["xl", "xl", "2xl"]}
            >
              Invoice #
            </Heading>
            <Text>{invoiceNumber}</Text>
          </Box>
          <Box maxWidth={"200px"}>
            <Address color="gray.500">{Site.address}</Address>
          </Box>
        </VStack>
      </Box>
    </Flex>
  );
});

if (__DEV__) {
  HeaderInvoice.displayName = "HeaderInvoice";
}

interface IBillingInvoice {
  name: string;
  address: string;
  invoiceDate: string;
  dueDate: string;
}

const BillingInvoice: React.FC<IBillingInvoice> = memo(
  ({ name, address, invoiceDate, dueDate }) => {
    const subtitle = {
      flex: "2",
      fontSize: "lg",
      fontWeight: "700",
      align: ["start", "start", "end"],
    } as TextProps;

    const metaStyle = {
      flex: "1",
      align: ["start", "start", "end"],
      color: "gray.500",
    } as TextProps;

    return (
      <Flex direction={["column", "column", "row"]} justify="space-between">
        <Box flex="1">
          <VStack align="stretch" direction="column">
            <Text fontSize="xl" fontWeight="700">
              Bill to:
            </Text>
            <Text fontSize="xl" fontWeight="700">
              {name}
            </Text>
            <Box maxWidth={"200px"}>
              <Address color="gray.500">{address}</Address>
            </Box>
          </VStack>
        </Box>

        <Box mt={[4, 4, 0]} flex="1">
          <Stack w="full" direction={["column"]}>
            <Stack
              spacing={1}
              direction={["column", "row", "row"]}
              align="baseline"
            >
              <Text {...subtitle}>Invoice date:</Text>
              <Text {...metaStyle}>{invoiceDate}</Text>
            </Stack>
            <Stack
              spacing={1}
              direction={["column", "row", "row"]}
              align="baseline"
            >
              <Text {...subtitle}>Due date:</Text>
              <Text {...metaStyle}>{dueDate}</Text>
            </Stack>
          </Stack>
        </Box>
      </Flex>
    );
  },
);

if (__DEV__) {
  BillingInvoice.displayName = "BillingInvoice";
}

interface ITableInvoice {
  paid: number;
  discount?: number;
  items: {
    item: string;
    tax: number;
    qty: number;
    price: number;
  }[];
}

const TableInvoice: React.FC<ITableInvoice> = memo(
  ({ paid = 0, items = [] }): JSX.Element => {
    const subtitle = {
      flex: "1",
      fontSize: "md",
      fontWeight: "700",
      textAlign: ["start", "start", "end"],
    } as TextProps;

    const meta = {
      flex: "1",
      color: "gray.500",
      fontWeight: "500",
      textAlign: ["start", "start", "end"],
    } as TextProps;

    const flexStyle = {
      direction: ["column", "row", "row"],
      justify: "space-between",
      w: ["full", "full", "320px"],
    } as FlexProps;

    const subtotal = items.reduce((sum, i) => sum + i.price * i.qty, 0);
    const tax = items.reduce((sum, i) => sum + i.price * i.qty * i.tax, 0);
    const total = subtotal + tax;
    const due = total - paid;

    return (
      <Box>
        <Box mb={5} sx={customScrollbar()} overflow="auto">
          <Table
            minWidth="46em"
            my={5}
            sx={{
              "& td, & th": {
                borderColor: useColorModeValue("gray.200", "gray.600"),
              },
            }}
          >
            <Thead borderColor="red.100" fontFamily="body">
              <Tr bg={useColorModeValue("gray.50", "gray.800")}>
                <Th fontFamily="body">Product</Th>
                <Th fontFamily="body" isNumeric>
                  Quantity
                </Th>
                <Th fontFamily="body" isNumeric>
                  Tax (%)
                </Th>
                <Th fontFamily="body" isNumeric>
                  Price (USD)
                </Th>
                <Th fontFamily="body" isNumeric>
                  Amount (USD)
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {items.map((i, idx) => {
                return (
                  <Tr key={idx}>
                    <Td>{i.item}</Td>
                    <Td isNumeric>{i.qty}</Td>
                    <Td isNumeric>{i.tax * 100}</Td>
                    <Td isNumeric>{NumberFormat(i.price)}</Td>
                    <Td isNumeric>{NumberFormat(i.qty * i.price)}</Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </Box>
        <Stack align="end">
          <Flex {...flexStyle}>
            <Text {...subtitle}>Subtotal:</Text>
            <Text {...meta}>{NumberFormat(subtotal)}</Text>
          </Flex>
          <Flex {...flexStyle}>
            <Text {...subtitle}>Total:</Text>
            <Text {...meta}>{NumberFormat(total)}</Text>
          </Flex>
          <Flex {...flexStyle}>
            <Text {...subtitle}>Tax:</Text>
            <Text {...meta}>{NumberFormat(tax)}</Text>
          </Flex>
          <Divider w={["full", "full", "320px"]} />
          <Flex {...flexStyle}>
            <Text {...subtitle}>Amount paid:</Text>
            <Text {...meta}> {NumberFormat(paid)}</Text>
          </Flex>
          <Flex {...flexStyle}>
            <Text {...subtitle}>Due balance:</Text>
            <Text {...meta}>{NumberFormat(due)}</Text>
          </Flex>
        </Stack>
      </Box>
    );
  },
);

if (__DEV__) {
  TableInvoice.displayName = "TableInvoice";
}

InvoicePage.PageLayout = ({ children }: { children: React.ReactNode }) => (
  <Layout header={<></>} footer={<></>}>
    {children}
  </Layout>
);

export default InvoicePage;
