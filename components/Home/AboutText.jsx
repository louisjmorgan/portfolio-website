/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import { Flex, Link, Text, useColorMode } from '@chakra-ui/react';
import NextLink from "next/link"
import {
  SiJavascript, SiTypescript, SiReact, SiExpress, SiMongodb,
  SiJest, SiPython, SiClojure, SiGo, SiRust, SiMysql,
} from 'react-icons/si';
import { FaNode } from 'react-icons/fa';
import TechIcon from '../Atoms/TechIcon';

const useIcons = [
  {
    icon: SiJavascript,
    alt: 'Javascript',
  },
  {
    icon: SiTypescript,
    alt: 'Typescript',
  },
  {
    icon: SiReact,
    alt: 'React',
  },
  {
    icon: SiJest,
    alt: 'Jest',
  },
  {
    icon: FaNode,
    alt: 'Node.js',
    size: '2rem',
  },
  {
    icon: SiExpress,
    alt: 'Express',
  },
  {
    icon: SiMongodb,
    alt: 'MongoDB',
  },
  {
    icon: SiPython,
    alt: 'Python',
  }];

const learningIcons = [
  {
    icon: SiClojure,
    alt: 'Clojure',
  },
  {
    icon: SiGo,
    alt: 'Go',
  },
  {
    icon: SiRust,
    alt: 'Rust',
  },
  {
    icon: SiMysql,
    alt: 'MySQL',
  },
];

function AboutText() {
  const { colorMode } = useColorMode();
  return (
    <Flex
      width="100%"
      direction="column"
      px={[10, 20, 20, 20]}
      py={20}
      borderRadius="0.25rem"
      align="center"
      boxShadow={`0 5px 10px ${colorMode === 'light' ? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,0.3)'}`}
      gap={5}
    >
      <Text>
        I started my full stack development journey in the summer of 2021, beginning with <Link textDecoration="underline" _hover={{color:'teal.500'}}as={ NextLink } href="https://www.theodinproject.com/" isExternal>the Odin Project</Link> and developing web apps with React and Node.js. Since the start of 2022 I have worked on a range of freelance projects, as well as building portfolio projects to further develop my skills. I am currently studying computer science in my spare time to widen the scope of my knowledge beyond web development, towards software engineering.
      </Text>
      <Text>
        I am ready to take the next step in my career, and so I am searching for junior developer roles at small to medium size companies in the Cambridge area. I have a strong sense of initiative and perseverance that enables me to tackle new challenges independently and I am confident that I would be able  to contribute from the very start. This is demonstrated by the projects hosted on this website, all of which I carried out entirely on my own with limited prior knowledge of the technologies at work. 
      </Text>
      <Text>
      I strongly believe in clean, understandable and maintainable code and would be excited to work with senior developers to ensure all my work meets a very high standard. My academic background in Systems Engineering would make me an ideal candidate for development roles with a scientific or engineering focus.
      </Text>
      <Text>
        My main hobby reflects my passion for technology and problem solving, as I build interactive audiovisual art installations as part of <Link textDecoration="underline" _hover={{color:'teal.500'}}as={ NextLink } href="https://www.typething.io/" isExternal>Typething Collective.</Link>
      </Text>
      <Flex
        m={10}
        justify="center"
        gap={3}
        align="center"
        flexWrap="wrap"
        width="100%"
      >
        <Text>
          I use
        </Text>
        {useIcons.map((icon) => (
          <TechIcon key={icon.alt} icon={icon} />
        ))}
      </Flex>
      <Flex
        mb={10}
        justify="center"
        gap={3}
        flexWrap="wrap"
        width="100%"
      >
        <Text>
          I&apos;m learning
        </Text>
        {learningIcons.map((icon) => (
          <TechIcon key={icon.alt} icon={icon} />
        ))}
      </Flex>
    </Flex>
  );
}

export default AboutText;
