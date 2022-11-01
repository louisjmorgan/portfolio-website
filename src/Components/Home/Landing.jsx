/* eslint-disable react/prop-types */
import {
  Box, Button, Flex, Icon, Text, keyframes, Spacer, useColorMode,
} from '@chakra-ui/react';
import { FiCornerRightDown } from 'react-icons/fi';
import { motion } from 'framer-motion';
import CTAButtons from './CTAButtons';

const animationKeyframes = keyframes`
  0% {background-position: left}
  50% {background-position: right}
  100% {background-position: left}
`;

const animation = `${animationKeyframes} 30s ease-in-out infinite`;

function Landing({ aboutRef }) {
  const { colorMode } = useColorMode();
  const handleDownBtn = () => {
    aboutRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  return (
    <Flex
      as={motion.section}
      animation={animation}
      minHeight="50rem"
      height="100vh"
      direction="column"
      align="center"
      justify="center"
      width="100%"
      // backgroundImage={colorMode === 'light'
      //   ? 'linear-gradient(248deg, #00e4a9, #aed524, #f8d861, #cd528c)'
      //   : 'linear-gradient(248deg, #dc2f52,#c55420, #a720c5, #20dcdb)'}
      layerStyle={colorMode === 'light' ? 'darkGradient' : 'lightGradient'}
      backgroundSize="600%"
      // p={[5, 10, '10rem', '10rem']}
    >
      <Box maxWidth="50ch" m={10}>
        <Text
          fontSize="3rem"
          fontWeight="bold"
          textAlign="center"
        >
          Louis Morgan
        </Text>
        <Text textAlign={['center', 'left']}>
          I'm a freelance full-stack developer looking for permanent roles.
          I'm passionate about finding new ways to solve complex problems.
        </Text>
      </Box>
      <CTAButtons />
      <Button
        variant="ghost"
        m={10}
        onClick={handleDownBtn}
      >
        <Text>More about me</Text>
        <Icon
          ml={2}
          display="block"
          as={FiCornerRightDown}
        />
      </Button>

    </Flex>
  );
}

export default Landing;
