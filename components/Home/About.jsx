/* eslint-disable react/prop-types */
import {
  Flex, Img, Text, useColorMode,
} from '@chakra-ui/react';
import OffsetBox from '../Layout/OffsetBox';
import AboutText from './AboutText';

function About({ aboutRef }) {
  const { colorMode } = useColorMode();
  return (
    <Flex
      pt="5rem"
      direction="column"
      align="center"
      as="section"
      ref={aboutRef}
      scrollMarginTop="5rem"
      position="relative"
    >
      <Text
        mt="2.5rem"
        textStyle="heading"
      >
        About me
      </Text>
      <Flex
        p={[5, 10, 20, 20]}
        pt={[10, 10, 10, 10, 20]}
        width="100%"
        direction={['column', 'column', 'column', 'column', 'row']}
        align={['center', 'center', 'center', 'center', 'stretch']}
        justify="center"
        gap={10}
        overflow="hidden"
      >
        <OffsetBox
          offset="-5%"
        >
          <Img
            src='/man-computer.jpg'
            objectFit="cover"
            height="100%"
            borderRadius="0.25rem"
            alt="person coding at computer"
            boxShadow={`0 5px 10px ${colorMode === 'light' ? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,0.3)'}`}
          />
        </OffsetBox>
        <OffsetBox
          offset="5%"
        >
          <AboutText />
        </OffsetBox>
      </Flex>
    </Flex>
  );
}

export default About;
