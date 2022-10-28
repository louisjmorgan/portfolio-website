/* eslint-disable max-len */
/* eslint-disable quotes */
import {
  Flex,
  Stack,
  Text,
} from '@chakra-ui/react';
import { useRef } from 'react';
import Landing from '../Components/Home/Landing';
import About from '../Components/Home/About';
import LatestWork from '../Components/Home/LatestWork';
import CTAButtons from '../Components/Home/CTAButtons';

function Home() {
  const aboutRef = useRef();
  return (
    <Stack
      width="100%"
    >
      <Landing aboutRef={aboutRef} />
      <About aboutRef={aboutRef} />
      <LatestWork />
      <Flex p={10} justify="center" align="center" direction="column">
        <Text fontWeight="bold" fontSize="1.5rem">More info: </Text>
        <CTAButtons variant="outline" />
      </Flex>
    </Stack>
  );
}

export default Home;
