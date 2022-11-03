/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import { Flex, Text, useColorMode } from '@chakra-ui/react';
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
      px={[10, 10, 20, 20]}
      py={10}
      borderRadius="0.25rem"
      align="center"
      boxShadow={`0 5px 10px ${colorMode === 'light' ? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,0.3)'}`}
    >
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet tellus cras adipiscing enim eu turpis egestas pretium. Mauris nunc congue nisi vitae suscipit tellus mauris a diam. Ut aliquam purus sit amet luctus venenatis lectus magna. Ultrices in iaculis nunc sed augue lacus viverra. Purus ut faucibus pulvinar elementum integer enim neque. Urna neque viverra justo nec ultrices dui sapien eget mi. Tincidunt ornare massa eget egestas purus. Integer quis auctor elit sed vulputate. Fermentum posuere urna nec tincidunt praesent semper. Aliquam eleifend mi in nulla.
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
        my={10}
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
