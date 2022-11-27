import React, { useState } from "react";

import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
} from "@chakra-ui/icons";
import {
  Box,
  Circle,
  HStack,
  IconButton,
  Stack,
  VStack,
} from "@chakra-ui/react";

import Image from "@components/image";

interface T_GalleryProps {
  items: { title: string; image: string }[];
}

export const GalleryVertical: React.FC<T_GalleryProps> = ({ items = [] }) => {
  const [active, setActive] = useState(0);

  const increase = () => {
    const index = (active + 1) % items.length;
    setActive(index);
  };
  const decrease = () => {
    const index = active ? (active - 1) % items.length : items.length - 1;
    setActive(index);
  };

  return (
    <Box>
      <Stack align="center" direction={["row"]} spacing={[5]}>
        <VStack spacing={[5]}>
          <IconButton
            aria-label="Up"
            icon={<ChevronUpIcon />}
            variant="ghost"
            onClick={increase}
          />
          <VStack>
            {items.map((item, idx) => (
              <Box
                opacity={idx === active ? 0.25 : 1}
                key={`vertical-${item.title}-${idx}`}
                onClick={() => setActive(idx)}
                transitionProperty="common"
                transitionDuration="normal"
                transitionTimingFunction="ease-in-out"
                cursor="pointer"
                _hover={{
                  opacity: 0.5,
                }}
              >
                <Image
                  alt={item.title}
                  src={item.image}
                  width={90}
                  height={90}
                />
              </Box>
            ))}
          </VStack>
          <IconButton
            aria-label="Down"
            icon={<ChevronDownIcon />}
            variant="ghost"
            onClick={decrease}
          />
        </VStack>
        <Box>
          <Image
            alt={items[active].title}
            src={items[active].image}
            width={600}
            height={600}
          />
        </Box>
      </Stack>
    </Box>
  );
};

export const GalleryCarousel: React.FC<T_GalleryProps> = ({ items = [] }) => {
  const [active, setActive] = useState(0);

  const increase = () => {
    const index = (active + 1) % items.length;
    setActive(index);
  };
  const decrease = () => {
    const index = active ? (active - 1) % items.length : items.length - 1;
    setActive(index);
  };

  return (
    <Box role="group" pos="relative">
      <Image
        alt={items[active].title ?? null}
        src={items[active].image ?? null}
        width={600}
        height={600}
      />

      <IconButton
        pos="absolute"
        top={"50%"}
        transform="translateY(-50%)"
        left={6}
        aria-label="Next"
        variant="solid"
        colorScheme="white"
        icon={<ChevronLeftIcon w={6} h={6} />}
        // variant="ghost"
        size="lg"
        isRound
        onClick={increase}
        opacity={0}
        _groupHover={{
          opacity: 1,
        }}
      />

      <IconButton
        pos="absolute"
        top={"50%"}
        transform="translateY(-50%)"
        right={6}
        aria-label="Prev"
        variant="solid"
        colorScheme="white"
        icon={<ChevronRightIcon w={6} h={6} />}
        // variant="ghost"
        size="lg"
        isRound
        onClick={decrease}
        opacity={0}
        _groupHover={{
          opacity: 1,
        }}
      />

      <HStack justify="center" width="full" pos="absolute" bottom={6}>
        {items.map((item, idx) => (
          <Circle
            bg="white"
            key={`carousel-${item.title}-${idx}`}
            opacity={idx === active ? 0.5 : 0.8}
            onClick={() => setActive(idx)}
            transitionProperty="common"
            transitionDuration="normal"
            transitionTimingFunction="ease-in-out"
            cursor="pointer"
            size={2}
            _hover={{
              opacity: 0.5,
            }}
          ></Circle>
        ))}
      </HStack>
    </Box>
  );
};

export const GalleryHorizontal: React.FC<T_GalleryProps> = ({ items = [] }) => {
  const [active, setActive] = useState(0);

  const increase = () => {
    const index = (active + 1) % items.length;
    setActive(index);
  };
  const decrease = () => {
    const index = active ? (active - 1) % items.length : items.length - 1;
    setActive(index);
  };

  return (
    <Box>
      {!!items.length && (
        <Stack align="center" direction={["column"]} spacing={[2]}>
          <Image
            alt={items[active].title ?? null}
            src={items[active].image ?? null}
            width={600}
            height={600}
          />
          <HStack spacing={[5]}>
            <IconButton
              aria-label="Next"
              icon={<ChevronLeftIcon />}
              variant="ghost"
              onClick={increase}
            />
            <HStack spacing={[2]}>
              {items.map((item, idx) => (
                <Box
                  key={`horizontal-${item.title}-${idx}`}
                  opacity={idx === active ? 0.25 : 1}
                  onClick={() => setActive(idx)}
                  transitionProperty="common"
                  transitionDuration="normal"
                  transitionTimingFunction="ease-in-out"
                  cursor="pointer"
                  _hover={{
                    opacity: 0.5,
                  }}
                >
                  <Image
                    alt={item.title}
                    src={item.image}
                    width={90}
                    height={90}
                  />
                </Box>
              ))}
            </HStack>
            <IconButton
              aria-label="Prev"
              icon={<ChevronRightIcon />}
              variant="ghost"
              onClick={decrease}
            />
          </HStack>
        </Stack>
      )}
    </Box>
  );
};
