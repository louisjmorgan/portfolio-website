import { Flex, Text } from '@chakra-ui/react';
import ProjectsContainer from 'Components/Projects/ProjectsContainer';
import {
  SiThreedotjs, SiChakraui, SiReact, SiD3Dotjs,
} from 'react-icons/si';
import SpacePower from '../../assets/spacepower.png';

const projects = [
  {
    name: 'Space Power Simulator',
    image: SpacePower,
    live: 'https://louisjmorgan.github.io/SpaceLasers/',
    source: 'https://github.com/louisjmorgan/SpaceLasers',
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
