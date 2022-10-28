import { Box } from '@chakra-ui/react';
import {
  SiThreedotjs, SiChakraui, SiReact, SiD3Dotjs,
} from 'react-icons/si';
import ProjectsContainer from '../Components/Projects/ProjectsContainer';
import SpacePower from '../assets/spacepower.png';
import OxygenEditor from '../assets/oxygen-editor.png';
import FootyStats from '../assets/footystats.png';

const projects = [
  {
    name: 'Space Power Simulator',
    src: SpacePower,
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
    src: OxygenEditor,
    icons: [{
      icon: SiReact,
      alt: 'React',
    },
    ],
  },
  {
    name: 'Footy Stats',
    src: FootyStats,
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
    <Box pt="5rem">
      <ProjectsContainer title="" projects={projects} />
    </Box>
  );
}

export default Projects;
