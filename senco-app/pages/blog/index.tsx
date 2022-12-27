import React, { memo, useContext, useRef, FC, useState, useEffect } from "react";
import matter from 'gray-matter';
import path from 'path';
import fs from 'fs';
import formExcerpt from "@definitions/utils/excerpt";
// TODO : Need to set index page to point to the blog
// blog gets both / and /blog

import { NextSeo } from "next-seo";

import {
    Box,
    Button,
    chakra,
    Container,
    useColorModeValue,
    HStack,
    
} from "@chakra-ui/react";

import { MdArrowBackIosNew, MdArrowForwardIos} from '@react-icons'

import { ThemeColorContext } from "@definitions/context/theme";

import SubscribeInput from "@components/subscribe-input";
import Hero1 from "@components/hero/hero-1";
import BlogPostCard from "@components/blog-post-card";

const HomePage: FC = ({ posts }) => {
    const theme = useContext(ThemeColorContext);
    // Control pagination features with this state
    // Will want to refactor this out into a component that can be reused? 
    const RESULT_SET_SIZE = 10;
    let [totalPostCount, setTotalPostCount] = useState(posts.length);
    let [currentPage, setCurrentPage] = useState(1);
    let [lowerPage, setLowerPage] = useState(0);
    let [upperPage, setUpperPage] = useState(10);
    let [currentPosts, setCurrentPosts] = useState(posts.slice(0, 10))

    const themeColorScheme = theme.colorScheme; // global default primary theme color


    const pageFoward = () => {
        setCurrentPage(currentPage + 1);
        setLowerPage(lowerPage + 10);
        setUpperPage(upperPage + 10);
    }

    const pageBackward = () => {
        setCurrentPage(currentPage -1);
        setLowerPage(lowerPage - 10);
        setUpperPage(upperPage - 10);
    }

    useEffect(() => {
        setCurrentPosts(posts.slice(lowerPage, upperPage));
    }, [currentPage])

    return(
        <>
        {/* https://github.com/garmeeh/next-seo#default-seo-configuration */}
            <NextSeo
                title="NALathletics blog"
                description="NALathletics makes it easier to be an athlete or fan of athletics."
            />
            <chakra.main
                bg={useColorModeValue("gray.50", "gray.800")}
            >
                <Box
                    pt={28}
                    bg={useColorModeValue("gray.100", "gray.900")}
                    ></Box>
                <Hero1 
                    title='Blog' 
                    body='' 
                    bodyWidth={100} 
                    backgroundImage='/images/blog_page_header.jpg' 
                    backgroundPosition='center' 
                    backgroundSize='cover'
                    pb={100}
                />
                <Container
                    maxW={900}
                    centerContent={true}
                    >
                    {currentPosts.map((post, index) => {
                        return(                            
                            <BlogPostCard key={index} post={post} />
                        )
                    }
                    )}
                    <HStack my={6}>
                        <Button onClick={pageBackward} disabled={currentPage <= 1}><MdArrowBackIosNew /></Button>
                        {/* Need to add margin to left and right */}
                        <p>Page: {currentPage} </p>
                        <Button onClick={pageFoward} disabled={Math.ceil(totalPostCount / RESULT_SET_SIZE) <= currentPage}><MdArrowForwardIos /></Button>
                    </HStack>
                </Container>
                <SubscribeInput />
            </chakra.main>
        </>

    )
};

export async function getStaticProps() {
    const files = fs.readdirSync(path.join('posts')).reverse();
    const posts = files.map((fileName) => {
        const markdownWithMeta = fs.readFileSync(path.join('posts', fileName), 'utf-8');
        const { data: frontmatter, content } = matter(markdownWithMeta);

        return {
            frontmatter,
            content,
            excerpt: formExcerpt(content, frontmatter.excerpt_size),
        }
    });
    

    return {
        props: {
            posts,
        },
    };
};

export default HomePage;