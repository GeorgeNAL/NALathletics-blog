import React from "react";

import { NextSeo } from "next-seo";
import NextLink from "next/link";

import {
  Box,
  chakra,
  Container,
  Heading,
  Link,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";


import { getAllPosts } from '../lib/api'
import Post from '../interfaces/post'

type Props = {
    allPosts: Post[]
}

const BlogPage = ({ allPosts }: Props) => {
  return (
    <>
      <NextSeo title="Contact us" description="Senco contact us" />
      <chakra.main
        // bg="gray.50"
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Box
          pt={[28, 28, 32, 210]}
          pb={32}
          bg={useColorModeValue("gray.100", "gray.900")}
        >
          <Container maxW={850}>
            <VStack textAlign="center">
              <Heading
                as="h1"
                lineHeight={[1.5, 1, 1]}
                fontSize={["2em", "3em", "4em"]}
                data-aos="fade-up"
                data-aos-delay="50"
              >
                Blog
              </Heading>
            </VStack>
          </Container>
        </Box>
        <Container mt={-20} maxW="container.lg">
          <Box
            data-aos="fade-up"
            data-aos-delay="150"
            rounded="2xl"
            p={[4, 8, 10, 20]}
            bg={useColorModeValue("white", "gray.700")}
          >
              {
                allPosts.map(post => {
                    return(
                        <NextLink href={post.slug} passHref>
                            <Link
                                variant="underline"
                                data-aos="fade-up"
                                data-aos-delay={250}
                            >
                                <h2>{post.title}</h2>
                            </Link>
                        </NextLink>
                    )
                })
              }
            
          </Box>
        </Container>

        
      </chakra.main>
    </>
  );
};

export default BlogPage;


export const getStaticProps = async () => {
    const allPosts = getAllPosts([
      'title',
      'slug',
      'author',
      'post_image',
    ])
  
    return {
      props: { allPosts },
    }
}