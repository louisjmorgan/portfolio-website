/* eslint-disable react/prop-types */
import {
  Flex, Image, Text, useColorMode,
} from '@chakra-ui/react';
import OffsetBox from '../Layout/OffsetBox';
import ManComputer from '../../assets/man-computer.jpg';
import AboutText from './AboutText';

function About({ aboutRef }) {
  const { colorMode } = useColorMode();
  return (
    <Flex
      mt="7.5rem"
      direction="column"
      justify="center"
      align="center"
      as="section"
      ref={aboutRef}
      scrollMarginTop="7.5rem"
      position="relative"
    >
      <Text
        mt="2.5rem"
        textStyle="heading"
      >
        About me
      </Text>
      <Flex
        p={[5, 20, 20, 20]}
        pt={[10, 10, 10, 10, 20]}
        direction={['column', 'column', 'column', 'column', 'row']}
        align={['center', 'center', 'center', 'center', 'stretch']}
        gap={10}
      >
        <OffsetBox
          offset="-5%"
        >
          <Image
            src={ManComputer}
            objectFit="cover"
            height="100%"
            borderRadius="0.25rem"
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
