/* eslint-disable react/prop-types */
import {
  Button, ButtonGroup, Flex, Icon,
} from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { IoCodeSlashOutline, IoDocumentTextOutline } from 'react-icons/io5';
import { MdOutlineContactPage } from 'react-icons/md';

function CTAButtons({ variant }) {
  // const { colorMode } = useColorMode();

  return (
    <ButtonGroup
      as={Flex}
      m={10}
      justify="space-between"
      variant={variant || 'ghost'}
      width="100%"
      maxWidth="50ch"
      direction={['column', 'row', 'row', 'row']}
      align="center"
      gap={2}
      border="0px"

    >
      <Button as={NavLink} to="projects">
        Projects
        <Icon
          ml={2}
          as={IoCodeSlashOutline}
        />
      </Button>
      <Button>
        CV
        <Icon
          ml={2}
          as={IoDocumentTextOutline}
        />
      </Button>
      <Button as={NavLink} to="contacts">
        Contact
        <Icon
          ml={2}
          as={MdOutlineContactPage}
        />
      </Button>
    </ButtonGroup>
  );
}

export default CTAButtons;
