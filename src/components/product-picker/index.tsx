import React, { ChangeEvent, memo, useState } from "react";

import { AddIcon, CheckIcon, MinusIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  type ChakraProps,
  Circle,
  Flex,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  type SquareProps,
  Stack,
  Text,
  type ThemingProps,
  useColorModeValue,
  useNumberInput,
  useRadio,
  useRadioGroup,
  type UseRadioProps,
  VStack,
} from "@chakra-ui/react";

import Site from "@definitions/site";

// import PriceFormat from "@definitions/utils/price-format";

/**
 * It's a quantity input that uses the `useNumberInput` hook to manage the state of
 * the input
 * @param  - `step` - the amount to increment or decrement the value by
 * @returns A Box component with a Flex component inside of it.
 */
export const QuantityPicker = memo(
  ({ maxQuantity }: { maxQuantity: number }) => {
    const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
      useNumberInput({
        step: 1,
        defaultValue: 1,
        min: 1,
        max: maxQuantity,
        precision: 0,
      });

    const inc = getIncrementButtonProps();
    const dec = getDecrementButtonProps();
    const input = getInputProps();

    return (
      <Box p={2} rounded="lg" borderWidth="1px" width="full" maxW={320}>
        <Flex>
          <VStack w="full" align="start" spacing={0}>
            <Text color="gray.500" fontSize="sm">
              Select quantity
            </Text>
            <Input
              variant="unstyled"
              {...input}
              autoCorrect={undefined}
              autoComplete={undefined}
            />
          </VStack>
          <HStack spacing={[0]}>
            <Button size="xs" variant="ghost" {...inc}>
              <AddIcon />
            </Button>
            <Button size="xs" variant="ghost" {...dec}>
              <MinusIcon />
            </Button>
          </HStack>
        </Flex>
      </Box>
    );
  },
);

interface ColorPickerProps {
  circleSize: number;
  options: { title: string; value: string; color: string }[];
}

export const ColorPicker: React.FC<
  ColorPickerProps & ChakraProps & ThemingProps
> = memo(({ options = [], circleSize, ...rest }) => {
  const [selected, setSelected] = useState(null);

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "color_bariant",
    defaultValue: selected,
    onChange: (value) => setSelected(value),
  });

  const group = getRootProps();

  return (
    <Box {...rest}>
      <Text mb={1} color="gray.500" fontSize="sm">
        Select Color:{" "}
        {selected && options.find(({ value }) => value === selected).title}
      </Text>
      <HStack {...group}>
        {options.map((option) => {
          const radio = getRadioProps({ value: option.value });
          return (
            <RadioCardCircle
              color={option.color}
              circleSize={circleSize}
              key={option.value}
              {...radio}
            >
              {/* {option.title} */}
              {selected === option.value && <CheckIcon w={3} h={3} />}
            </RadioCardCircle>
          );
        })}
      </HStack>
    </Box>
  );
});

/**
 * It renders a list of radio buttons
 * @param  - `name` - the name of the radio group
 * @returns A function that returns a component
 */
export const ProductPickerBox = ({
  name,
  prefix,
  suffix,
  options = [],
  ...rest
}: {
  name: string;
  prefix?: string;
  suffix?: string;
  options: { title: string; value: string }[];
} & ChakraProps &
  ThemingProps) => {
  const [selected, setSelected] = useState(null);

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: name,
    defaultValue: selected,
    onChange: (value) => setSelected(value),
  });

  const group = getRootProps();

  return (
    <Box {...rest}>
      <Text mb={1} color="gray.500" fontSize="sm">
        Select {name}: {!!selected && prefix}
        {selected && options.find(({ value }) => value === selected).title}
        {!!selected && suffix}
      </Text>
      <HStack {...group}>
        {options.map((option) => {
          const radio = getRadioProps({ value: option.value });
          return (
            <RadioCardBox key={option.value} {...radio}>
              {option.title}
              {/* {selected === option.value && <CheckIcon w={3} h={3} />} */}
            </RadioCardBox>
          );
        })}
      </HStack>
    </Box>
  );
};

const RadioCardCircle: React.FC<
  { children: React.ReactNode; circleSize: SquareProps["size"] } & ChakraProps &
    ThemingProps &
    UseRadioProps
> = memo(({ children, color, circleSize, ...rest }) => {
  const { getInputProps, getCheckboxProps } = useRadio(rest);

  const input = getInputProps();
  const checkbox = getCheckboxProps();
  return (
    <Box as="label">
      <input {...input} />
      <Circle
        {...checkbox}
        as="span"
        bg={color}
        size={circleSize}
        cursor="pointer"
        // borderWidth="1px"
        // borderRadius="md"
        // boxShadow="md"
        _checked={{
          // outline: "2px solid red",
          boxShadow: "outline",
          // bg: "teal.600",
          color: "white",
          // borderColor: "teal.600",
        }}
        _focus={{
          boxShadow: "outline",
        }}
      >
        {children}
      </Circle>
    </Box>
  );
});

const RadioCardBox: React.FC<
  { children: React.ReactNode } & ChakraProps & ThemingProps & UseRadioProps
> = (props) => {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();
  const inputBg = useColorModeValue("white", "gray.900");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const checkedBg = useColorModeValue("brand.50", "brand.900");
  const checkedColor = useColorModeValue("brand.600", "brand.300");
  return (
    <Box as="label">
      <input {...input} />
      <Box
        as="span"
        display="block"
        {...checkbox}
        bg={inputBg}
        py={1}
        px={2}
        fontSize="sm"
        cursor="pointer"
        borderWidth="1px"
        borderColor={borderColor}
        borderRadius="md"
        _checked={{
          color: checkedColor,
          borderColor: "brand.400",
          bg: checkedBg,
        }}
      >
        {props.children}
      </Box>
    </Box>
  );
};

export const PricerangePicker: React.FC<ChakraProps & ThemingProps> = () => {
  const [range, setRange] = useState<number[]>([100, 500]);

  const MinSet = (el: ChangeEvent<HTMLInputElement>): void => {
    // console.log("MinSet", val.target.value);
    const min = Number(el.currentTarget.value);
    if (!min) return;
    setRange([min, range[1]]);
  };
  const MaxSet = (el: ChangeEvent<HTMLInputElement>): void => {
    // console.log("MinSet", val.target.value);
    const max = Number(el.currentTarget.value);
    if (!max) return;
    setRange([range[0], max]);
  };

  return (
    <VStack>
      <RangeSlider
        aria-label={["min", "max"]}
        // defaultValue={range}
        value={range}
        min={10}
        max={1000}
        step={5}
        mb={3}
        // onChangeEnd={(val) => setRange(val)}
        onChange={(val: number[]) => setRange(val)}
      >
        <RangeSliderTrack>
          <RangeSliderFilledTrack />
        </RangeSliderTrack>
        <RangeSliderThumb index={0} />
        <RangeSliderThumb index={1} />
      </RangeSlider>
      <Stack direction={["column", "row", "row", "row"]}>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            color="gray.400"
            children={Site.defaultCurrencySymbol}
          />
          <Input
            type="number"
            placeholder="Min"
            // defaultValue={`${range[0]}`}
            value={`${range[0]}`}
            onChange={MinSet}
          />
        </InputGroup>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            color="gray.400"
            children={Site.defaultCurrencySymbol}
          />
          <Input
            type="number"
            placeholder="Max"
            // defaultValue={`${range[1]}`}
            value={`${range[1]}`}
            onChange={MaxSet}
          />
        </InputGroup>
      </Stack>
    </VStack>
  );
};
