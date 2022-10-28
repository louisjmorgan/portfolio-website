/* eslint-disable react/prop-types */
import {
  Flex, Text,
} from '@chakra-ui/react';

import Project from './Project';

function ProjectsContainer({ title, projects }) {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
    >
      <Text textStyle="heading">
        {title}
      </Text>
      {projects.map((project, index) => (
        <Project project={project} isReverse={index % 2 === 0} />
      ))}
    </Flex>
  );
}

export default ProjectsContainer;
