import { Box, Flex, Link, Text } from '@chakra-ui/react';
import NextLink from "next/link"
import {
  SiThreedotjs, SiChakraui, SiReact, SiD3Dotjs, SiMaterialui, SiNodedotjs, SiTypescript, SiExpress, SiMongodb, SiJest, SiBootstrap
} from 'react-icons/si';
import Head from 'next/head'
import ProjectsContainer from '../../components/Projects/ProjectsContainer';

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
  {
    name: 'Oxygen Editor',
    image: '/oxygen-editor.png',
    live: 'https://louismorgan.io/projects/oxygen-editor/',
    source: 'https://github.com/louisjmorgan/oxygen-editor',
    description:
    <Flex direction="column" gap={5}>
      <Text>This project was commissioned by a former classmate who is creating a framework to write full stack apps using tree structures. The editor is designed to allow easy editing and manipulation of tree structures, which would then be converted to apps by the framework. Data is stored in a custom tree structure based on nested Javascript maps with addresses, and rendered via a novel recursive react component. User actions directly change the underlying tree structure and the react component re-renders accordingly. A backend allows users to login and load or save trees that they’re working on.</Text>
      <Text>The project uses a reducer pattern combined with a series of tree manipulation functions to carry out user actions and change the program state. Previous iterations of the user’s tree are saved and can be restored to undo mistaken actions. A keyboard shortcut handler allows users to quickly navigate, edit and rearrange their trees without using the mouse.</Text>
    </Flex>,
    icons: [{
        icon: SiTypescript,
        alt: 'Typescript'
      },
      
      {
        icon: SiNodedotjs,
        alt: 'Node.js'
      },
      {
        icon: SiExpress,
        alt: "Express"
      },
      {
        icon: SiReact,
        alt: 'React',
      },
      {
        icon: SiMaterialui,
        alt: 'Material UI'
      },
     
    ],
  },
  {
    name: 'Footy Stats',
    image: '/footystats.png',
    live: 'https://louismorgan.io/projects/footystats/',
    source: 'https://github.com/louisjmorgan/footystats',
    description:
    <Flex direction="column" gap={5}>
      <Text>This was a learning project to explore full-stack development, REST APIs and non-relational databases, as well as working with data visualisation front end frameworks. I took publicly available data for the 2020-2021 English Premier League football season and stored it in my own MongoDB Atlas cluster. The data is served to the front end via a Node.js backend along REST API routes, corresponding to specific matches and their event data.</Text>
      <Text>Users are able to view d3.js visualisations of per match player stats across three different views: formations, match events and heatmaps. Each view has its own controls to allow user refinement of the visualisation.</Text>
    </Flex>,
    icons: [{
        icon: SiNodedotjs,
        alt: 'Node.js'
      },
      {
        icon: SiExpress,
        alt: "Express"
      },
      {
        icon: SiMongodb,
        alt: 'MongoDB',
      },
      {
        icon: SiJest,
        alt: 'Jest',
      },
      {
        icon: SiReact,
        alt: 'React',
      },
      {
        icon: SiD3Dotjs,
        alt: 'D3.js',
      },
      {
        icon: SiBootstrap,
        alt: 'Bootstrap'
      }
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
