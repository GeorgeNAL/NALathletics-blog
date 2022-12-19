import React, { memo, useContext, useRef, FC } from "react";

import { NextSeo } from "next-seo";

import {
    AspectRatio,
    Box,
    Button,
    chakra,
    type ChakraProps,
    Container,
    Divider,
    Flex,
    Heading,
    HStack,
    Link,
    SimpleGrid,
    Stack,
    Text,
    type TextProps,
    type ThemingProps,
    useColorModeValue,
    VStack,
    Wrap,
    WrapItem,
  } from "@chakra-ui/react";

import { ThemeColorContext } from "@definitions/context/theme";
import { useCountdown } from "@definitions/hooks/useCountdown";

import Image from "@components/image";
import SubscribeInput from "@components/subscribe-input";
import Hero1 from "@components/hero/hero-1";

const HomePage: FC = () => {
    const theme = useContext(ThemeColorContext);

    const themeColorScheme = theme.colorScheme; // global default primary theme color

    return(
        <>
        {/* https://github.com/garmeeh/next-seo#default-seo-configuration */}
            <NextSeo
                title="NALathletics blog"
                description="NALathletics makes it easier to be an athlete or fan of athletics."
            />
            {/* Need to figure  */}
            <chakra.main>
                <Hero1 
                    title='Blog' 
                    body='' 
                    bodyWidth={100} 
                    backgroundImage='/images/blog_page_header.jpg' 
                    backgroundPosition='center' 
                    backgroundSize='cover'
                />
                <SubscribeInput />
            </chakra.main>
        </>

    )
};

export default HomePage;