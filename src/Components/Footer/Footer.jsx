const { Flex, Text } = require('@chakra-ui/react');

function Footer() {
  return (
    <Flex
      px={10}
      pt={5}
      pb={2}
      justify="center"
      fontSize="0.65rem"
      color="grey"
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
