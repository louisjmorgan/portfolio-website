/* eslint-disable react/prop-types */
import { Box, Tooltip } from '@chakra-ui/react';

function TechIcon({ icon }) {
  return (
    <Tooltip label={icon.alt}>
      <span>
        <Box
          ml={2}
          boxSize={icon.size || '1.5rem'}
          as={icon.icon}
          transition="all 0.3s linear;"
          _hover={{
            transform: 'scale(1.5)',
          }}
        />
      </span>
    </Tooltip>
  );
}

export default TechIcon;
