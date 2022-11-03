/* eslint-disable react/prop-types */
import {
  Flex, VStack,
} from '@chakra-ui/react';

import Project from './Project';

function ProjectsContainer({ projects }) {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      as="section"
      position="relative"
      overflow="hidden"
    >
      <VStack
        gap={10}
        overflow="hidden"
      >
        {projects.map((project, index) => (
          <Project key={project.name} project={project} isReverse={index % 2 === 0} />
        ))}
      </VStack>
    </Flex>
  );
}

export default ProjectsContainer;
