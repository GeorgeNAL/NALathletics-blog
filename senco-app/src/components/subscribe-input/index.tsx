import { Input, Box, Button, Flex, Heading } from '@chakra-ui/react';
import React from 'react';

// TODO : Need to fix the styling and set this up as a form
const SubscribeInput = () => {
    return(
        <Flex justifyContent='center' m={12}>
            <Flex flexDirection='column' width='40%' >
                <Heading as='h3' mb={5}>Jump. Throw. Run. Subscribe.</Heading>
                <p>We want to be able to tell you more. We actually want to be able to tell you everything. Sign up for our e-mail so you can hear it all.</p>
            </Flex>
            <Flex width='40%' m={4}>
                <Input 
                    placeholder={"Enter your email"}
                />
                <Button flex="1 0 auto">Subscribe</Button>
            </Flex>
        </Flex>
    )
};

export default SubscribeInput;