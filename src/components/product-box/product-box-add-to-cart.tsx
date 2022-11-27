import { FiEye, FiHeart } from "@react-icons";

import { memo, useState } from "react";

import {
  AspectRatio,
  Box,
  Button,
  IconButton,
  Stack,
  Text,
  Tooltip,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";

import Image from "@components/image";
import Price from "@components/price";

import { IProduct } from "./product.d";

const ProductBoxAddToCart: React.FC<IProduct.IProps> = ({
  images,
  title,
  subtitle,
  price,
  sale_price,
  bg,
}) => {
  const [isHover, setIsHover] = useState(false);
  const defaultBg = useColorModeValue("blackAlpha.100", "whiteAlpha.100");

  const actionItems = [
    {
      title: "Add to Whish List",
      icon: <FiHeart />,
      action: () => ({}),
    },
    {
      title: "Quick View",
      icon: <FiEye />,
      action: () => ({}),
    },
    // {
    //   title: "Purchase options",
    //   icon: <FiShoppingBag />,
    //   action: () => ({}),
    // },
  ];

  return (
    <>
      <Stack align="stretch" width="full" spacing={[3]}>
        {images && (
          <Box
            pos="relative"
            overflow="hidden"
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
          >
            <AspectRatio rounded="md" ratio={3 / 4}>
              <>
                <Image
                  pos="absolute"
                  rounded="md"
                  transitionProperty="common"
                  transitionDuration="1s"
                  transitionTimingFunction="ease-in-out"
                  src={images[0]}
                  layout="fill"
                  opacity={isHover ? 0 : 1}
                  bg={bg ? bg : defaultBg}
                  alt={title}
                />
                <Image
                  pos="absolute"
                  rounded="md"
                  transitionProperty="common"
                  transitionDuration="1s"
                  transitionTimingFunction="ease-in-out"
                  src={images[1]}
                  layout="fill"
                  opacity={isHover ? 1 : 0}
                  alt={title}
                />
              </>
            </AspectRatio>
            <Box
              pos="absolute"
              top="50%"
              right={0}
              transitionProperty="common"
              transitionDuration="300ms"
              transitionTimingFunction="ease-in-out"
              sx={{
                transform: isHover
                  ? "translateY(-50%) translateX(-10px)"
                  : "translateY(-50%) translateX(100%)",
              }}
            >
              <ActionButton items={actionItems} />
            </Box>
            <Box
              w="full"
              px="10px"
              pos="absolute"
              bottom={0}
              left="50%"
              transitionProperty="common"
              transitionDuration="400ms"
              transitionTimingFunction="ease-in-out"
              sx={{
                transform: isHover
                  ? "translateX(-50%) translateY(-10px)"
                  : "translateX(-50%) translateY(100%)",
              }}
            >
              <Button width="full" colorScheme="white">
                Add to Cart
              </Button>
            </Box>
          </Box>
        )}
        <Text lineHeight={1} fontSize="xs" opacity={0.8}>
          {subtitle}
        </Text>
        <Text lineHeight={1} fontSize="sm">
          {title}
        </Text>
        <Price fontSize={"sm"} price={price} sale_price={sale_price} />
      </Stack>
    </>
  );
};

const ActionButton = ({ items = [] }) => {
  return (
    <>
      {!!items && (
        <VStack spacing={2}>
          {items.map((item) => (
            <Tooltip
              key={item.title}
              hasArrow
              rounded="md"
              bg="blackAlpha.900"
              color="whiteAlpha.900"
              placement="left"
              label={item.title}
              aria-label={item.title}
            >
              <IconButton
                colorScheme="white"
                aria-label={item.title}
                icon={item.icon}
              />
            </Tooltip>
          ))}
        </VStack>
      )}
    </>
  );
};

export default memo(ProductBoxAddToCart);
