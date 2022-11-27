/**
 * TODO: Properly handle user tabbing
 * Source : https://codesandbox.io/s/dd8vn
 */
import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { motion, PanInfo, useAnimation, useMotionValue } from "framer-motion";

import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Circle,
  Flex,
  HStack,
  Progress,
  useMediaQuery,
  useTheme,
  VStack,
} from "@chakra-ui/react";

import useBoundingRect from "@definitions/hooks/useBoundingRect";
import percentage from "@definitions/utils/percentage";

const MotionFlex = motion(Flex);

const transitionProps = {
  stiffness: 400,
  type: "spring",
  damping: 60,
  mass: 3,
};

interface ChakraCarouselProps {
  children: React.ReactNode[];
  isSingle?: boolean;
  navigation?: "simple" | "progress" | "buttons";
  gap: number;
}

const ChakraCarousel: React.FC<ChakraCarouselProps> = ({
  children,
  isSingle = false,
  navigation = "simple",
  gap,
}) => {
  const [trackIsActive, setTrackIsActive] = useState(false);
  const [multiplier, setMultiplier] = useState(0.35);
  const [sliderWidth, setSliderWidth] = useState(0);
  const [activeItem, setActiveItem] = useState(0);
  const [constraint, setConstraint] = useState(0);
  const [itemWidth, setItemWidth] = useState(0);

  const initSliderWidth = useCallback(
    (width: number) => setSliderWidth(width),
    [],
  );

  const positions = useMemo(
    () => children.map((_, index) => -Math.abs((itemWidth + gap) * index)),
    [children, itemWidth, gap],
  );

  const { breakpoints } = useTheme();

  const [isBetweenBaseAndMd] = useMediaQuery(
    `(min-width: ${breakpoints.base}) and (max-width: ${breakpoints.md})`,
  );

  const [isBetweenMdAndXl] = useMediaQuery(
    `(min-width: ${breakpoints.md}) and (max-width: ${breakpoints.xl})`,
  );

  const [isGreaterThanXL] = useMediaQuery(`(min-width: ${breakpoints.xl})`);

  useEffect(() => {
    const singleW = sliderWidth - gap;
    const doubleW = sliderWidth / 2 - gap;
    const tripleW = sliderWidth / 3 - gap;

    if (isSingle) {
      setItemWidth(singleW);
      setMultiplier(0.65);
      setConstraint(1);
      return;
    }

    if (isBetweenBaseAndMd) {
      setItemWidth(singleW);
      setMultiplier(0.65);
      setConstraint(1);
    }
    if (isBetweenMdAndXl) {
      setItemWidth(doubleW);
      setMultiplier(0.5);
      setConstraint(2);
    }
    if (isGreaterThanXL) {
      setItemWidth(tripleW);
      setMultiplier(0.35);
      setConstraint(3);
    }
  }, [
    isBetweenBaseAndMd,
    isBetweenMdAndXl,
    isGreaterThanXL,
    sliderWidth,
    isSingle,
    gap,
  ]);

  const sliderProps = {
    setTrackIsActive,
    initSliderWidth,
    setActiveItem,
    activeItem,
    constraint,
    itemWidth,
    positions,
    gap,
    navigation,
  };

  const trackProps = {
    setTrackIsActive,
    trackIsActive,
    setActiveItem,
    sliderWidth,
    activeItem,
    constraint,
    multiplier,
    itemWidth,
    positions,
    gap,
  };

  const itemProps = {
    setTrackIsActive,
    trackIsActive,
    setActiveItem,
    activeItem,
    constraint,
    itemWidth,
    positions,
    gap,
  };

  return (
    <Slider {...sliderProps}>
      <Track {...trackProps}>
        {!!children &&
          children.map((child, index) => (
            <Item {...itemProps} index={index} key={index}>
              {child}
            </Item>
          ))}
      </Track>
    </Slider>
  );
};

interface ISliderProps {
  children: React.ReactNode;
  navigation?: "simple" | "progress" | "buttons";
  setTrackIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  initSliderWidth: (val: number) => void;
  setActiveItem: React.Dispatch<React.SetStateAction<number>>;
  activeItem: number;
  constraint: number;
  itemWidth: number;
  positions: number[];
  // children: any;
  gap: number;
}

/* A React component that renders a carousel slider navigation */
const Slider: React.FC<ISliderProps> = ({
  navigation = "simple",
  setTrackIsActive,
  initSliderWidth,
  setActiveItem,
  activeItem,
  constraint,
  itemWidth,
  positions,
  children,
  gap,
}) => {
  const [ref, { width }] = useBoundingRect();

  useLayoutEffect(
    () => initSliderWidth(Math.round(width)),
    [width, initSliderWidth],
  );

  const handleFocus = () => setTrackIsActive(true);

  const handleDecrementClick = () => {
    setTrackIsActive(true);
    !(activeItem === positions.length - positions.length) &&
      setActiveItem((prev: number) => prev - 1);
  };

  const handleIncrementClick = () => {
    setTrackIsActive(true);
    !(activeItem === positions.length - constraint) &&
      setActiveItem((prev: number) => prev + 1);
  };

  return (
    <Box pos="relative" role="group">
      <Box
        ref={ref}
        w={{ base: "100%", md: `calc(100% + ${gap}px)` }}
        ml={{ base: 0, md: `-${gap / 2}px` }}
        px={`${gap / 2}px`}
        position="relative"
        overflow="hidden"
        // _before={{
        //   bgGradient: "linear(to-r, blackAlpha.400, transparent)",
        //   position: "absolute",
        //   roundedRight: "xl",
        //   w: `${gap / 2}px`,
        //   content: "''",
        //   zIndex: 1,
        //   h: "100%",
        //   left: 0,
        //   top: 0,
        // }}
        // _after={{
        //   bgGradient: "linear(to-l, blackAlpha.400, transparent)",
        //   roundedLeft: "xl",
        //   position: "absolute",
        //   w: `${gap / 2}px`,
        //   content: "''",
        //   zIndex: 1,
        //   h: "100%",
        //   right: 0,
        //   top: 0,
        // }}
      >
        {children}
      </Box>

      {
        {
          progress: (
            <Flex w={`${itemWidth}px`} mt={`${gap / 2}px`} mx="auto">
              <Button
                onClick={handleDecrementClick}
                onFocus={handleFocus}
                mr={`${gap / 3}px`}
                color="gray.400"
                variant="link"
                minW={0}
              >
                <ChevronLeftIcon boxSize={9} />
              </Button>

              <Progress
                value={percentage(activeItem, positions.length - constraint)}
                alignSelf="center"
                borderRadius="2px"
                bg="blackAlpha.50"
                flex={1}
                h="3px"
                sx={{
                  "> div": {
                    backgroundColor: "gray.400",
                  },
                }}
              />

              <Button
                onClick={handleIncrementClick}
                onFocus={handleFocus}
                ml={`${gap / 3}px`}
                color="gray.400"
                variant="link"
                zIndex={2}
                minW={0}
              >
                <ChevronRightIcon boxSize={9} />
              </Button>
            </Flex>
          ),
          buttons: (
            <>
              <Button
                pos="absolute"
                zIndex={100}
                left={[2, 5, 5, 10]}
                top="50%"
                onClick={handleDecrementClick}
                onFocus={handleFocus}
                color="gray.400"
                variant="solid"
                colorScheme="white"
                width={14}
                height={14}
                rounded="full"
                transitionProperty="common"
                transitionDuration="normal"
                transitionTimingFunction="ease-in-out"
                opacity={0.1}
                transform="translateY(-50%)"
                _groupHover={{
                  opacity: 1,
                }}
              >
                <ChevronLeftIcon boxSize={9} />
              </Button>
              <Button
                pos="absolute"
                zIndex={100}
                right={[2, 5, 6, 10]}
                top="50%"
                onClick={handleIncrementClick}
                onFocus={handleFocus}
                ml={`${gap / 3}px`}
                color="gray.400"
                variant="solid"
                colorScheme="white"
                width={14}
                height={14}
                rounded="full"
                transitionProperty="common"
                transitionDuration="normal"
                transitionTimingFunction="ease-in-out"
                opacity={0.1}
                transform="translateY(-50%)"
                _groupHover={{
                  opacity: 1,
                }}
              >
                <ChevronRightIcon boxSize={9} />
              </Button>
            </>
          ),
          simple: (
            <>
              <Button
                pos="absolute"
                zIndex={100}
                left={[2, 5, 5, 10]}
                top="50%"
                onClick={handleDecrementClick}
                onFocus={handleFocus}
                color="gray.400"
                variant="solid"
                colorScheme="white"
                width={14}
                height={14}
                rounded="full"
                transitionProperty="common"
                transitionDuration="normal"
                transitionTimingFunction="ease-in-out"
                opacity={0.1}
                transform="translateY(-50%)"
                _groupHover={{
                  opacity: 1,
                }}
              >
                <ChevronLeftIcon boxSize={9} />
              </Button>
              <Button
                pos="absolute"
                zIndex={100}
                right={[2, 5, 6, 10]}
                top="50%"
                onClick={handleIncrementClick}
                onFocus={handleFocus}
                ml={`${gap / 3}px`}
                color="gray.400"
                variant="solid"
                colorScheme="white"
                width={14}
                height={14}
                rounded="full"
                transitionProperty="common"
                transitionDuration="normal"
                transitionTimingFunction="ease-in-out"
                opacity={0.1}
                transform="translateY(-50%)"
                _groupHover={{
                  opacity: 1,
                }}
              >
                <ChevronRightIcon boxSize={9} />
              </Button>
              <HStack
                pos="absolute"
                bottom={[2, 4, 5, 10]}
                width="full"
                // align="center"
                justify="center"
                // left={"50%"}
                // right={"50%"}
                // transform="translateX(-50%)"
              >
                {!!positions &&
                  Array(positions.length)
                    .fill(null)
                    .map((_, idx) => (
                      <Circle
                        role="button"
                        aria-label="navigation buton"
                        onClick={() => setActiveItem(idx)}
                        bg="white"
                        opacity={activeItem == idx ? 1 : 0.5}
                        size={4}
                        key={`navigation-footer-${idx}`}
                      />
                    ))}
              </HStack>
            </>
          ),
        }[navigation]
      }
    </Box>
  );
};

interface ITrackProps {
  children: React.ReactNode;
  setTrackIsActive: (val: boolean) => void;
  trackIsActive: boolean;
  setActiveItem: React.Dispatch<React.SetStateAction<number>>;
  activeItem: number;
  constraint: number;
  multiplier: number;
  itemWidth: number;
  positions: number[];
  // children: any;
}

const Track: React.FC<ITrackProps> = ({
  setTrackIsActive,
  trackIsActive,
  setActiveItem,
  activeItem,
  constraint,
  multiplier,
  itemWidth,
  positions,
  children,
}) => {
  const [dragStartPosition, setDragStartPosition] = useState(0);
  const controls = useAnimation();
  const x = useMotionValue(0);
  const node = useRef(null);

  const handleDragStart = () => setDragStartPosition(positions[activeItem]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleDragEnd = (_: any, info: PanInfo) => {
    const distance = info.offset.x;
    const velocity = info.velocity.x * multiplier;
    const direction = velocity < 0 || distance < 0 ? 1 : -1;

    const extrapolatedPosition =
      dragStartPosition +
      (direction === 1
        ? Math.min(velocity, distance)
        : Math.max(velocity, distance));

    const closestPosition = positions.reduce((prev, curr) => {
      return Math.abs(curr - extrapolatedPosition) <
        Math.abs(prev - extrapolatedPosition)
        ? curr
        : prev;
    }, 0);

    if (!(closestPosition < positions[positions.length - constraint])) {
      setActiveItem(positions.indexOf(closestPosition));
      controls.start({
        x: closestPosition,
        transition: {
          velocity: info.velocity.x,
          ...transitionProps,
        },
      });
    } else {
      setActiveItem(positions.length - constraint);
      controls.start({
        x: positions[positions.length - constraint],
        transition: {
          velocity: info.velocity.x,
          ...transitionProps,
        },
      });
    }
  };

  const handleResize = useCallback(
    () =>
      controls.start({
        x: positions[activeItem],
        transition: {
          ...transitionProps,
        },
      }),
    [activeItem, controls, positions],
  );

  const handleClick = useCallback(
    (event: MouseEvent) =>
      node.current.contains(event.target)
        ? setTrackIsActive(true)
        : setTrackIsActive(false),
    [setTrackIsActive],
  );

  /**
   * @TODO: fix any event handler
   */
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (trackIsActive) {
        if (activeItem < positions.length - constraint) {
          if (event.key === "ArrowRight" || event.key === "ArrowUp") {
            event.preventDefault();
            setActiveItem((prev: number) => prev + 1);
          }
        }
        if (activeItem > positions.length - positions.length) {
          if (event.key === "ArrowLeft" || event.key === "ArrowDown") {
            event.preventDefault();
            setActiveItem((prev: number) => prev - 1);
          }
        }
      }
    },
    [trackIsActive, setActiveItem, activeItem, constraint, positions.length],
  );

  useEffect(() => {
    // handleResize(positions);
    handleResize();

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClick);
    };
  }, [handleClick, handleResize, handleKeyDown, positions]);

  return (
    <>
      {!!itemWidth && (
        <VStack ref={node} spacing={5} alignItems="stretch">
          <MotionFlex
            dragConstraints={node}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            animate={controls}
            style={{ x }}
            drag="x"
            _active={{ cursor: "grabbing" }}
            minWidth="min-content"
            flexWrap="nowrap"
            cursor="grab"
            zIndex={99}
          >
            {children}
          </MotionFlex>
        </VStack>
      )}
    </>
  );
};

interface IItemProps {
  children: React.ReactNode;
  setTrackIsActive: (val: boolean) => void;
  setActiveItem: React.Dispatch<React.SetStateAction<number>>;
  activeItem: number;
  constraint: number;
  itemWidth: number;
  positions: number[];
  // children: any;
  index: number;
  gap: number;
}

const Item: React.FC<IItemProps> = ({
  setTrackIsActive,
  setActiveItem,
  activeItem,
  constraint,
  itemWidth,
  positions,
  children,
  index,
  gap,
}) => {
  const [userDidTab, setUserDidTab] = useState(false);

  const handleFocus = () => setTrackIsActive(true);

  const handleBlur = () => {
    userDidTab && index + 1 === positions.length && setTrackIsActive(false);
    setUserDidTab(false);
  };

  const handleKeyUp = (event: React.KeyboardEvent) =>
    event.key === "Tab" &&
    !(activeItem === positions.length - constraint) &&
    setActiveItem(index);

  const handleKeyDown = (event: React.KeyboardEvent) =>
    event.key === "Tab" && setUserDidTab(true);

  return (
    <Flex
      onFocus={handleFocus}
      onBlur={handleBlur}
      onKeyUp={handleKeyUp}
      onKeyDown={handleKeyDown}
      w={`${itemWidth}px`}
      _notLast={{
        mr: `${gap}px`,
      }}
      // py="4px"
    >
      {children}
    </Flex>
  );
};

export default ChakraCarousel;
