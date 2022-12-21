// Want to setup a type for the props
import { Button, Heading, HStack, Image, VStack } from '@chakra-ui/react';
import { FC } from 'react'

// interface CardData {
//     excerpt: string,
//     frontmatter: Object
// }

// Look at using CardBody Chakra 
// https://chakra-ui.com/docs/components/card/usage
// const BlogPostCard: FC<CardData> = (blogData: CardData) => {
const BlogPostCard = ({ post }) => {
    return(
        <VStack my={8}>
            <Heading as='h4' textAlign={'left'}>{post.frontmatter.title}</Heading>
            <Image 
                src={`${post.fontmatter?.post_image}`}
                alt={post.title}
                // Maybe set to 100% once cards are rendering
                width={650}
                height={340}
            />
            {/* This is the card conatiner */}
            <VStack>
                <HStack>
                     {/* This can be left aligned */}
                     {/* May pull in react icons to make this better */}
                    <div>Date: {post.frontmatter.date}</div>
                    <div>Author: {post.frontmatter.author}</div>
                </HStack>
                <p>This is where the excerpt text will live...</p>
                <Button>Read More</Button>
            </VStack>
        </VStack>
    )
};

export default BlogPostCard