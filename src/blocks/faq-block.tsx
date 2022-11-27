import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Text,
  type UseAccordionProps,
  useColorModeValue,
} from "@chakra-ui/react";

interface I_FAQBlockProps extends UseAccordionProps {
  items: {
    title: string;
    body: string;
    isDisabled?: boolean;
  }[];
}

const FAQBlock: React.FC<I_FAQBlockProps> = ({ items = [] }) => {
  return (
    <Accordion allowToggle>
      {items.map((item) => (
        <AccordionItem
          key={item.title}
          isDisabled={item.isDisabled ?? false}
          border={0}
        >
          {({ isExpanded }: { isExpanded: boolean }) => (
            <>
              <AccordionButton
                borderBottom="1px solid"
                px={0}
                py={6}
                borderColor={useColorModeValue("gray.200", "gray.700")}
                _hover={{
                  bg: "none",
                }}
              >
                <Box as="span" flex="1" textAlign="left">
                  <Text as="span" fontWeight={600} fontSize={"xl"}>
                    {item.title}
                  </Text>
                </Box>
                <PlusMinusIcons isExpanded={isExpanded} />
              </AccordionButton>
              <AccordionPanel px={0} py={4}>
                {item.body}
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
      ))}
    </Accordion>
  );
};

const PlusMinusIcons: React.FC<{ isExpanded: boolean }> = ({
  isExpanded,
}): JSX.Element => {
  return (
    <Box
      as="span"
      transform={isExpanded ? "rotate(180deg)" : "rotate(0deg)"}
      transition="transform 250ms linear"
      display="flex"
      width="12px"
      height="12px"
    >
      {isExpanded ? <MinusIcon fontSize="12px" /> : <AddIcon fontSize="12px" />}
    </Box>
  );
};

export default FAQBlock;
