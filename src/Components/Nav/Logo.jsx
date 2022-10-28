import { Box, Text } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

function Logo() {
  return (
    <Box
      as={NavLink}
      to="/"
      w="100px"
      m={5}
      // color={['white', 'white', 'primary.500', 'primary.500']}
    >
      <Text
        fontSize="lg"
        fontWeight="bold"
      >
        LM
      </Text>
    </Box>
  );
}

export default Logo;
