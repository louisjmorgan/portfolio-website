const { Flex, Text } = require('@chakra-ui/react');

function Footer() {
  return (
    <Flex
      px={10}
      py={3}
      justify="center"
      fontSize="0.65rem"
      color="grey"
      position="absolute"
      bottom={0}
      left={0}
      right={0}
    >
      <Text>
        © Louis Morgan 2022
      </Text>
      {/* <Text>
        Designed by
        {' '}
        <Link href="https://www.lousimorgan.io" isExternal>Louis Morgan</Link>
      </Text> */}
    </Flex>
  );
}

export default Footer;
