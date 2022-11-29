import { Flex, Link, Text } from '@chakra-ui/react';
import NextLink from 'next/link'
import {
  SiThreedotjs, SiChakraui, SiReact, SiD3Dotjs,
} from 'react-icons/si';
import ProjectsContainer from '../Projects/ProjectsContainer';
import SpacePower from '../../public/spacepower.png';

const projects = [
  {
    name: 'Space Power Simulator',
    image: '/spacepower.png',
    live: 'https://louisjmorgan.github.io/SpaceLasers/',
    source: 'https://github.com/louisjmorgan/SpaceLasers',
    description:
    <Flex direction="column" gap={5}>
      <Text>This project was commissioned by <Link textDecoration="underline" _hover={{color:'teal.500'}}as={ NextLink } href="https://space-pwr.com/" isExternal>SPACE POWER LTD</Link> to act as a demonstrator tool for their future satellite-to-satellite power services. The app simulates the power systems and orbits of satellites to show how space power satellites could be beneficial to potential customers who operate satellite fleets.</Text>
      <Text>The model calculates accurate orbits and simulates the power systems of user-specified satellites as they carry out their duties over a fixed period of time. Space power satellites within a given proximity can charge their batteries, augmenting the reserves that are typically dictated by their time in sunlight. All of this information is displayed to the user via a 3D animation, a HUD displaying real-time data, as well as a special charting view that shows simulation-time graphs of various power characteristics. Users can create their own missions via a form that generates a new simulation from orbit, power system and duty inputs for multiple satellites.</Text>
      <Text>This project combines a variety of front-end visualisation tools that are optimised for real-time performance to achieve a highly informative and smooth user experience.</Text>
    </Flex>,
    icons: [
      {
        icon: SiReact,
        alt: 'React',
      },
      {
        icon: SiThreedotjs,
        alt: 'Three.js',
      },
      {
        icon: SiD3Dotjs,
        alt: 'D3.js',
      },
      {
        icon: SiChakraui,
        alt: 'Chakra UI',
      },
    ],
  },
];

function LatestWork() {
  return (
    <Flex
      direction="column"
      justify="center"
      align="center"
      as="section"
    >
      <Text mt="2.5rem" textStyle="heading">
        Latest Work
      </Text>
      <ProjectsContainer projects={projects} />
    </Flex>
  );
}

export default LatestWork;
