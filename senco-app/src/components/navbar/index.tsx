import { isValidElement, memo, useEffect, useRef, useState } from "react";

import NextLink from "next/link";
import { useRouter } from "next/router";

import { ChevronDownIcon, ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  chakra,
  Collapse,
  Flex,
  Icon,
  Link,
  Portal,
  SimpleGrid,
  Stack,
  StackDivider,
  Text,
  useColorModeValue,
  useDisclosure,
  useOutsideClick,
} from "@chakra-ui/react";

import Image from "@components/image";

import { INavbar } from "./navbar";

const DesktopNav: React.FC<
  INavbar.IProps & { containerRef: React.RefObject<HTMLElement> }
> = ({ items = [], colorScheme, containerRef, ...rest }) => {
  const internalRef = useRef();
  const [mega, setMega] = useState(null);
  const linkFontSize = "md";
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "black");

  // const dividerColor = useColorModeValue("gray.200", "whiteAlpha.400");
  const handleRouteChange = () => setMega(null);
  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  useOutsideClick({
    ref: containerRef,
    handler: (e) => {
      /**
       * Exclude internalRef
       * @FIX:  Use this feature with useMergeRefs in the future.
       * @ISSUE: https://github.com/chakra-ui/chakra-ui/issues/4869
       */
      const tree = e.composedPath();
      if (tree.indexOf(internalRef.current) === -1) setMega(null);
    },
  });

  return (
    <Stack ref={internalRef} direction="row" spacing={4} {...rest}>
      {items.map((item, idx) => (
        <Flex key={`idx-${item.title}`}>
          {item.subitems ? (
            <>
              <Button
                onClick={mega != idx ? () => setMega(idx) : null}
                variant="unstyled"
              >
                <Text
                  as="span"
                  p={2}
                  // href={item.href ?? "#"}
                  fontSize={linkFontSize}
                  fontWeight={500}
                  color={linkColor}
                  // cursor="pointer"
                  _hover={{
                    textDecoration: "none",
                    color: linkHoverColor,
                  }}
                >
                  {item.title}
                  <ChevronDownIcon h={"1.2em"} w={"1.2em"} ml={2} />
                </Text>
              </Button>

              {item.subitems && (
                <Portal containerRef={containerRef}>
                  {mega === idx && (
                    <Stack
                      p={6}
                      mt={4}
                      shadow="xl"
                      width="full"
                      rounded="xl"
                      align="start"
                      spacing={[10]}
                      direction={["row"]}
                      data-aos="fade-up-low"
                      divider={<StackDivider />}
                      bg={popoverContentBgColor}
                    >
                      <SimpleGrid
                        width="full"
                        columns={item.subColumns ?? 2}
                        spacing={2}
                      >
                        {item.subitems.map((item, idx) => (
                          <DesktopSubNav
                            key={`${idx}--${item.title}`}
                            {...item}
                            colorScheme={colorScheme}
                          />
                        ))}
                      </SimpleGrid>
                      {item.subChildren && (
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        <chakra.div as={item.subChildren as any} />
                      )}
                    </Stack>
                  )}
                </Portal>
              )}
            </>
          ) : (
            <NextLink key={`idx-${item.title}`} href={item.href} passHref>
              <Link
                key={`idx-${item.title}-link`}
                p={2}
                fontSize={linkFontSize}
                rounded="xl"
                fontWeight={500}
                color={linkColor}
                _hover={{
                  color: linkHoverColor,
                }}
              >
                {item.title}
              </Link>
            </NextLink>
          )}
        </Flex>
      ))}
    </Stack>
  );
};

DesktopNav.displayName = "DesktopNav";

const DesktopSubNav = ({
  icon,
  image,
  title,
  href,
  description,
  colorScheme,
}: INavbar.IItem) => {
  const hoverBG = useColorModeValue("gray.100", "gray.900");
  const titleColor = useColorModeValue("blackAlpha.800", "whiteAlpha.800");
  const hoverTitleColor = useColorModeValue("blackAlpha.800", "white");
  const descriptionColor = useColorModeValue(
    "blackAlpha.600",
    "whiteAlpha.600",
  );
  const hoverColorDescription = useColorModeValue(
    "blackAlpha.700",
    "whiteAlpha.700",
  );
  return (
    <NextLink href={href} passHref>
      <Link
        p={5}
        role="group"
        rounded="md"
        display="block"
        transitionProperty="common"
        transitionDuration="normal"
        transitionTimingFunction="ease-in-out"
        _hover={{ bg: hoverBG }}
      >
        <Stack direction="row" align="center">
          {icon && (
            <Flex alignSelf="start" mr={2} mt={1}>
              {isValidElement(icon) ? icon : <Icon as={icon} />}
            </Flex>
          )}
          <Flex align="stretch" justify="center" direction="column">
            {image && (
              <Box mb={6}>
                <Image
                  maxH={250}
                  width={800}
                  height={600}
                  // layout="responsive"
                  objectFit="cover"
                  objectPosition="top"
                  rounded="2xl"
                  alt={title}
                  src={image}
                />
              </Box>
            )}
            <Text
              mb={0}
              // mt={image ? 6 : 0}
              fontSize="xl"
              fontWeight={600}
              color={titleColor}
              transitionProperty="common"
              transitionDuration="normal"
              transitionTimingFunction="ease-in-out"
              _groupHover={{ color: hoverTitleColor }}
            >
              {title}
            </Text>
            <Text
              fontSize="sm"
              transitionProperty="common"
              transitionDuration="normal"
              transitionTimingFunction="ease-in-out"
              color={descriptionColor}
              _groupHover={{ color: hoverColorDescription }}
            >
              {description}
            </Text>
          </Flex>

          {!image && (
            <Flex
              flex={1}
              align="center"
              justify="flex-end"
              opacity={0}
              transition="all 250ms ease-in-out"
              transform="translateX(-10px)"
              _groupHover={{ opacity: 1, transform: "translateX(0)" }}
            >
              <Icon
                as={ChevronRightIcon}
                color={`${colorScheme}.400`}
                w={5}
                h={5}
              />
            </Flex>
          )}
        </Stack>
      </Link>
    </NextLink>
  );
};

DesktopSubNav.displayName = "DesktopSubNav";

export const MobileNav: React.FC<{ items: INavbar.IItem[] }> = ({
  items = [],
  ...rest
}) => {
  return (
    <Stack p={4} display={{ lg: "none" }} {...rest}>
      {items.map((item, idx) => (
        <MobileNavItem
          // id={`MobileNavItem-${item.title}-${idx}`}
          key={`MobileNavItem-${item.title}-${idx}`}
          {...item}
        />
      ))}
    </Stack>
  );
};

MobileNav.displayName = "MobileNav";

const MobileNavItem: React.FC<INavbar.IItem> = ({
  title,
  subitems,
  href,
  subChildren,
}) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack
      spacing={4}
      onClick={subitems && onToggle}
      cursor={subitems ? "pointer" : null}
    >
      <Flex
        py={2}
        as={subitems ? null : Link}
        href={href ? href : null}
        justify="space-between"
        align="center"
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {title}
        </Text>
        {subitems && (
          <Icon
            as={ChevronDownIcon}
            transition="all 250ms ease-in-out"
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle="solid"
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align="start"
        >
          {subitems &&
            subitems.map((item) => (
              <NextLink key={item.title} href={item.href} passHref>
                <Link py={2}>{item.title}</Link>
              </NextLink>
            ))}
          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
          {subChildren && <chakra.div as={subChildren as any} />}
        </Stack>
      </Collapse>
    </Stack>
  );
};

MobileNavItem.displayName = "MobileNavItem";

export default memo(DesktopNav);
