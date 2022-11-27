import { FiEye, FiHeart, FiShoppingBag } from "@react-icons";

import { memo, useState } from "react";

import {
  AspectRatio,
  Box,
  ButtonGroup,
  IconButton,
  Skeleton,
  Stack,
  Text,
  Tooltip,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";

import Image from "@components/image";
import Price from "@components/price";

import { IProduct } from "./product.d";

const ProductBox: React.FC<IProduct.IProps> = ({
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
    {
      title: "Purchase options",
      icon: <FiShoppingBag />,
      action: () => ({}),
    },
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
              bottom={0}
              left="50%"
              // transform={`translateX(-50%) translateY(100%)`}
              transitionProperty="common"
              transitionDuration="300ms"
              transitionTimingFunction="ease-in-out"
              sx={{
                transform: isHover
                  ? "translateX(-50%) translateY(-100%)"
                  : "translateX(-50%) translateY(100%)",
              }}
            >
              <ActionButton items={actionItems} />
            </Box>
          </Box>
        )}
        <Skeleton isLoaded>
          <Text lineHeight={1} fontSize="xs" opacity={0.8}>
            {subtitle}
          </Text>
        </Skeleton>
        <Skeleton isLoaded>
          <Text lineHeight={1} fontSize="sm">
            {title}
          </Text>
        </Skeleton>
        <Skeleton isLoaded>
          <Price fontSize={"sm"} price={price} sale_price={sale_price} />
        </Skeleton>
      </Stack>
    </>
  );
};

const ActionButton = ({ items = [] }) => {
  return (
    <>
      {!!items && (
        <ButtonGroup isAttached>
          {items.map((item) => (
            <Tooltip
              key={item.title}
              hasArrow
              rounded="md"
              bg="blackAlpha.900"
              color="whiteAlpha.900"
              placement="top"
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
        </ButtonGroup>
      )}
    </>
  );
};

export const ProductBoxSkeleton = () => {
  return (
    <Stack align="stretch" width="full" spacing={[3]}>
      <Skeleton rounded="md">
        <AspectRatio ratio={1}>
          <Text>Image</Text>
        </AspectRatio>
      </Skeleton>
      <Skeleton width="30%" height={2} />
      <Skeleton width="75%" height={6} />
      <VStack align="stretch" spacing={[1]}>
        <Skeleton height={3} />
        <Skeleton height={3} width="95%" />
      </VStack>
    </Stack>
  );
};

export default memo(ProductBox);
