import {
  Box, Button, Flex, FormLabel, Input,
  keyframes, Link, Stack, Text, Textarea, useColorMode,
} from '@chakra-ui/react';
import { useState } from 'react';

const animationKeyframes = keyframes`
  0% {background-position: left}
  50% {background-position: right}
  100% {background-position: left}
`;
const animation = `${animationKeyframes} 30s ease-in-out infinite`;

const darkGradient = 'linear-gradient(248deg, #00e4a9, #aed524, #f8d861, #cd528c)';
const lightGradient = 'linear-gradient(248deg, #dc2f52,#c55420, #a720c5, #20dcdb)';

function Contact() {
  const { colorMode } = useColorMode();
  const [copyMessage, setCopy] = useState('Copy to clipboard');
  const copyToClipBoard = () => {
    try {
      navigator.clipboard.writeText('louismorgan.dev@gmail.com');
      setCopy('Copy success');
    } catch {
      setCopy('Copy failed');
    }
  };
  return (
    <Flex
      p={[5, 10, '5rem', '10rem']}
      pt={['10rem', '10rem', '10rem', '10rem']}
      minHeight="100vh"
      align="center"
      direction="column"
      justify="center"
    >
      <Text fontSize="1.5rem" fontWeight="bold">
        Email:
      </Text>
      <Flex direction={['column', 'column', 'column', 'row']} align="center" gap={3} wrap p={5}>
        <Link href="mailto:louismorgan.dev@gmail.com" fontSize={['1rem', '1.25rem']}>
          louismorgan.dev@gmail.com
        </Link>
        <Box
          as={Button}
          onClick={copyToClipBoard}
          animation={animation}
          bgGradient={colorMode === 'light'
            ? darkGradient
            : lightGradient}
          maxWidth="30ch"
          backgroundSize="600%"
          size="md"
          _hover={{
            color: colorMode === 'light' ? 'background.light' : 'background.dark',
            backgroundSize: '600%',
            bgGradient: colorMode === 'light'
              ? lightGradient
              : darkGradient,
          }}
        >
          {copyMessage}
        </Box>
      </Flex>
      <Stack
        as="form"
        action="https://formspree.io/f/maykpawg"
        method="POST"
        width="50ch"
        maxWidth="90%"
        align="stretch"
        mt={10}
      >
        <FormLabel name="email">
          Email
          <Input type="email" name="email" isRequired />
        </FormLabel>
        <FormLabel name="subject" isRequired>
          Subject
          <Input type="text" name="subject" />
        </FormLabel>
        <FormLabel name="message" isRequired>
          Message
          <Textarea name="message" />
        </FormLabel>
        <Box
          as={Button}
          m={5}
          isExternal
          width="10ch"
          alignSelf="center"
          type="submit"
          animation={animation}
          bgGradient={colorMode === 'light'
            ? darkGradient
            : lightGradient}
          backgroundSize="600%"
          _hover={{
            color: colorMode === 'light' ? 'background.light' : 'background.dark',
            backgroundSize: '600%',
            bgGradient: colorMode === 'light'
              ? lightGradient
              : darkGradient,
          }}
        >
          Submit
        </Box>
      </Stack>
    </Flex>
  );
}

export default Contact;
