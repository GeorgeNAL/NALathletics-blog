import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
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
import PostHeader from '../../src/components/post-header/index'
import PostBody from '../../src/components/post-body/index'
import Head from 'next/head'
import { getPostBySlug, getAllPosts } from '../../lib/api'
import markdownToHtml from '../../lib/markdownToHtml'
import type PostType from '../../interfaces/post'

type Props = {
  post: PostType
  morePosts: PostType[]
  preview?: boolean
}

const PostPage = ({ post }: Props) => {
    return (
      <>
        <NextSeo title="Contact us" description="Senco contact us" />
        <chakra.main
          // bg="gray.50"
          bg={useColorModeValue("gray.50", "gray.800")}
        >
          <Container mt={-20} maxW="container.lg">
                <Head>
                <title>
                  {post.title}
                </title>
                <meta property="og:image" content={post.post_image} />
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.post_image}
                date={post.date}
                author={post.author}
              />
              <PostBody content={post.content} />
          </Container>
        </chakra.main>
      </>
    );
};
  
export default PostPage;

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    'title',
    'slug',
    'author',
    'content',
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}