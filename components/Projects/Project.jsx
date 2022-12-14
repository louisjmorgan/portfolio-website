/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import { ExternalLinkIcon } from '@chakra-ui/icons';
import {
  Button,
  ButtonGroup,
  Flex, Image, Link, Text, useBreakpointValue, useColorMode,
} from '@chakra-ui/react';
import { SiGithub } from 'react-icons/si';
import TechIcon from '../Atoms/TechIcon';
import OffsetBox from '../Layout/OffsetBox';

function Project({ project, isReverse }) {
  const { colorMode } = useColorMode();
  const shouldReverse = useBreakpointValue({
    base: false,
    sm: false,
    md: false,
    lg: false,
    xl: isReverse,
    xxl: isReverse,
  });
  return (
    <Flex
      p={[5, 20, 20, 20]}
      pt={[10, 10, 10, 10, 20]}
      maxWidth="100vw"
      direction={['column', 'column', 'column', 'column', isReverse ? 'row-reverse' : 'row']}
      align={['center', 'center', 'center', 'center', 'center']}
      gap={5}
    >
      <OffsetBox offset={shouldReverse ? '5%' : '-5%'}>
        <Image
          alt={project.title}
          src={project.image}
          objectFit="cover"
          height="100%"
          borderRadius="0.25rem"
          boxShadow={`0 5px 10px ${colorMode === 'light' ? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,0.3)'}`}
        />
      </OffsetBox>
      <OffsetBox offset={shouldReverse ? '-5%' : '5%'}>
        <Flex
          width="100%"
          direction="column"
          px={[10, 10, 20, 20]}
          py={10}
          borderRadius="0.25rem"
          align="center"
          boxShadow={`0 5px 10px ${colorMode === 'light' ? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,0.3)'}`}
        >
          <Text
            fontSize="1.25rem"
            fontWeight="bold"
            p={5}
          >
            {project.name}
          </Text>
          {project.description}
          <Flex
            my={10}
            justify="center"
            gap={3}
            align="center"
            flexWrap="wrap"
            width="100%"
          >
            <Text as="span" fontWeight="bold">Stack:</Text>
            {project.icons.map((icon) => <TechIcon key={icon.alt} icon={icon} />)}
          </Flex>
          <ButtonGroup
            as={Flex}
            direction={['column', 'row', 'row', 'row']}
          >
            <Button leftIcon={<ExternalLinkIcon />}>
              <Link isExternal href={project.live}>Live Site</Link>
            </Button>
            <Button leftIcon={<SiGithub />}>
              <Link isExternal href={project.source}>View Source</Link>
            </Button>
          </ButtonGroup>
        </Flex>
      </OffsetBox>
    </Flex>
  );
}

export default Project;
