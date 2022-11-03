import {
  Flex,
  Stack,
  Text,
} from '@chakra-ui/react';
import Head from 'next/head'
import { useRef } from 'react';
import Landing from '../components/Home/Landing';
import About from '../components/Home/About';
import LatestWork from '../components/Home/LatestWork';
import CTAButtons from '../components/Home/CTAButtons';

function Home() {
  const aboutRef = useRef();
  return (
    <>
    <Head>
      <title>Louis Morgan</title>
    </Head>
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
    </>
  );
}

export default Home;
