import { FiMonitor, FiMoon, FiSun } from "@react-icons";

import { useCallback } from "react";

import {
  Button,
  Icon,
  Popover,
  PopoverArrow,
  PopoverContent,
  PopoverTrigger,
  Text,
  useBoolean,
  useColorMode,
  useToken,
  VStack,
} from "@chakra-ui/react";

const ModeList = [
  {
    id: "system",
    icon: FiMonitor,
    title: "System",
  },
  {
    id: "light",
    icon: FiSun,
    title: "Light",
  },
  {
    id: "dark",
    icon: FiMoon,
    title: "Dark",
  },
];

const PrefersColorSchemeSelect = () => {
  const { colorMode, setColorMode } = useColorMode();
  const [isEditing, setIsEditing] = useBoolean();
  const Active = ModeList.find(({ id }) => id === colorMode);
  const changeModeCallback = useCallback(
    (event: React.FormEvent<HTMLButtonElement>) => {
      setColorMode(event.currentTarget.name);
      setIsEditing.off();
    },
    [],
  );

  const darkBtnStyle = {
    colorScheme: "gray",
    borderColor: "gray.600",
    _hover: {
      bg: "whiteAlpha.300",
    },
    _active: {
      bg: "whiteAlpha.500",
    },
  };

  const borderColor = useToken("colors", "gray.600");

  const darkPopupStyle = {
    bg: "gray.900",
    borderColor,
  };

  return (
    <Popover
      isOpen={isEditing}
      onOpen={setIsEditing.on}
      onClose={setIsEditing.off}
      // closeOnBlur={false}
      isLazy
      lazyBehavior="keepMounted"
      arrowShadowColor={borderColor}
    >
      <PopoverTrigger>
        <Button
          leftIcon={<Icon as={Active.icon} />}
          variant="outline"
          size="sm"
          rounded="md"
          width="fit-content"
          // minW={125}
          {...darkBtnStyle}
        >
          <Text as="span" fontSize="xs">
            {Active.title}
          </Text>
        </Button>
      </PopoverTrigger>
      <PopoverContent
        width="full"
        maxW={200}
        borderColor="transparent"
        p={2}
        {...darkPopupStyle}
      >
        <PopoverArrow {...darkPopupStyle} />
        {/* <PopoverCloseButton /> */}
        <VStack align="stretch">
          {ModeList.map((item) => (
            <Button
              key={`prefers-color-scheme-${item.title}-${item.id}`}
              leftIcon={<Icon as={item.icon} />}
              variant="ghost"
              rounded="md"
              size="sm"
              name={item.id}
              onClick={changeModeCallback}
              {...darkBtnStyle}
            >
              {item.title}
            </Button>
          ))}
        </VStack>
      </PopoverContent>
    </Popover>
  );
};

export default PrefersColorSchemeSelect;
