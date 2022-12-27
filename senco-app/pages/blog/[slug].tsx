import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import { NextSeo } from 'next-seo';
import formExcerpt from "@definitions/utils/excerpt";
import { Container, Heading, Image, VStack, Text } from '@chakra-ui/react';
import SubscribeInput from '@components/subscribe-input';

const BlogPage = ({ frontmatter, content }) => { 
    return(
        <>
            <NextSeo
                title={frontmatter.title}
                description={formExcerpt(content, frontmatter.seo_description_size)}
                
            />
            {/* Need to fix this -> Will probably want to create a content container to format tags correctly */}
            {/* Need to see if I can find a good example of the content containers for markdown / raw HTML */}
            {/* This will need to be passed into a true contentContainer component */}
            <Container py={20}>
                <Heading 
                    color='blue.500' 
                    size='xl' 
                    textAlign='left'
                    mb={4}
                >
                    {frontmatter.title}
                </Heading>
                <VStack
                    my={2}
                    alignItems='flex-start'
                    fontWeight='bold'
                >
                    {/* Date */}
                    <Text>
                        {new Date(frontmatter.date).toDateString()}
                    </Text>
                    {/* Authors */}
                    <Text>
                        {frontmatter.author}
                    </Text>
                </VStack>
                <Image 
                    src={frontmatter.post_image} 
                    my={2}
                />
                    <div dangerouslySetInnerHTML={{ __html: marked.parse(content)} }></div>
            </Container>
            <SubscribeInput />
        </>
    )
};

export async function getStaticPaths() {
    const files = fs.readdirSync(path.join('posts'));
    const paths = files.map((filename) => {
        const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8');

        return {
            params: {
                slug: filename.replace(".md", "")
            }
        }
    })

    return {
        paths, 
        fallback: false
    }

}

export async function getStaticProps({ params: { slug } }){
    const markdownWithMeta = fs.readFileSync(path.join('posts', slug + ".md"), 'utf-8');

    const { data: frontmatter, content } = matter(markdownWithMeta);

    return {
        props: {
            frontmatter,
            content 
        }
    }
}

 export default BlogPage;