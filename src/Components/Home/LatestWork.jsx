import ProjectsContainer from 'Components/Projects/ProjectsContainer';
import {
  SiThreedotjs, SiChakraui, SiReact, SiD3Dotjs,
} from 'react-icons/si';
import SpacePower from '../../assets/spacepower.png';

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
];

function LatestWork() {
  return (
    <ProjectsContainer title="Latest Work" projects={projects} />
  );
}

export default LatestWork;
