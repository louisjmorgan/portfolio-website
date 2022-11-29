import { Box, Text } from '@chakra-ui/react';
import Link from 'next/link'

function Logo() {
  return (
    <Box
      as={Link}
      href="/"
      w="100px"
      // color={['white', 'white', 'primary.500', 'primary.500']}
    >
      <Text
        fontSize="lg"
        fontWeight="bold"
        fontFamily={`"Arvo", sans-serif`}
      >
        LM
      </Text>
    </Box>
  );
}

export default Logo;
