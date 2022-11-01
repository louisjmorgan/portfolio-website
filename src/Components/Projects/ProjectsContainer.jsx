/* eslint-disable react/prop-types */
import {
  Flex, Text, VStack,
} from '@chakra-ui/react';

import Project from './Project';

function ProjectsContainer({ title, projects }) {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      as="section"
      position="relative"
    >
      <Text textStyle="heading">
        {title}
      </Text>
      <VStack gap={10}>
        {projects.map((project, index) => (
          <Project project={project} isReverse={index % 2 === 0} />
        ))}
      </VStack>
    </Flex>
  );
}

export default ProjectsContainer;
