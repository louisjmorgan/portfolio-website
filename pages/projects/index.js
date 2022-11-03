import { Box } from '@chakra-ui/react';
import {
  SiThreedotjs, SiChakraui, SiReact, SiD3Dotjs,
} from 'react-icons/si';
import Head from 'next/head'
import ProjectsContainer from '../../components/Projects/ProjectsContainer';

const projects = [
  {
    name: 'Space Power Simulator',
    image: '/spacepower.png',
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
  {
    name: 'Oxygen Editor',
    image: '/oxygen-editor.png',
    live: 'https://louismorgan.io/projects/oxygen-editor/',
    source: 'https://github.com/louisjmorgan/oxygen-editor',
    icons: [{
      icon: SiReact,
      alt: 'React',
    },
    ],
  },
  {
    name: 'Footy Stats',
    image: '/footystats.png',
    live: 'https://louismorgan.io/projects/footystats/',
    source: 'https://github.com/louisjmorgan/footystats',
    icons: [
      {
        icon: SiReact,
        alt: 'React',
      },
      {
        icon: SiD3Dotjs,
        alt: 'D3.js',
      },
    ],
  },
];

function Projects() {
  return (
    <>
    <Head>
      <title>Projects | Louis Morgan</title>
    </Head>
    <Box pt="5rem">
      <ProjectsContainer title="" projects={projects} />
    </Box>
    </>
  );
}

export default Projects;
