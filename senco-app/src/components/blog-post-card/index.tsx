// Want to setup a type for the props
import { FC } from 'react'
import { Button, Heading, HStack, Link, Image, Text, VStack } from '@chakra-ui/react';
import { BsFillPersonFill, BsFillCalendarFill } from '@react-icons'

// https://chakra-ui.com/docs/components/card/usage
const BlogPostCard: FC<CardData> = ({ post }) => {
    return(
        // Maybe add box shadow to this
        <VStack 
            my={8} 
            marginY={[2, 4, 6]}
            maxWidth="700px"
            justifyContent='center'
            backgroundColor="black" 
            p={4} 
            borderRadius={25}
        >
            <Link href={`/blog/${encodeURIComponent(post.frontmatter.slug)}`} >
                <Heading as='h4' textAlign={'left'}>{post.frontmatter.title}</Heading>
            </Link>
            <Image 
                src={post.frontmatter.post_image}
                alt={post.frontmatter.title}
                // Need to set a width and height to decreatse load time 
            />
            <VStack 
                backgroundColor='lightgray' 
                color="black" 
                width='100%' 
                p='4' 
                borderBottomRadius={25} 
                alignItems="left"
            >
                <HStack>
                    <BsFillCalendarFill /> 
                    <Text fontWeight='bold'>{new Date(post.frontmatter.date).toDateString()}</Text>
                </HStack>
                <HStack>
                    <BsFillPersonFill /> 
                    <Text fontWeight='bold'>{post.frontmatter.author}</Text>
                </HStack>
                <p>{post.excerpt}</p>
                <Link href={`/blog/${post.fileName}`} alignSelf="center">
                    <Button>Read More</Button>            
                </Link>
            </VStack>
        </VStack>
    )
};

export default BlogPostCard