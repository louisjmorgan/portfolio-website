/* eslint-disable no-nested-ternary */
import { Flex, useColorMode } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import Links from './Links';
import Logo from './Logo';
import MenuButton from './MenuButton';

function NavContainer() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const { colorMode } = useColorMode();
  const [hasScrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if ((window.scrollY > 0)) setScrolled(true);
    else if ((window.scrollY === 0)) setScrolled(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      py={[2, 2, 4, 4]}
      px={[4, 8]}
      pb={2}
      position="fixed"
      transition="background-color 0.2s ease-out"
      // bg={colorMode === 'light' ? 'background.light' : 'background.dark'}
      backgroundColor={hasScrolled
        ? colorMode === 'light' ? 'background.light' : 'background.dark'
        : isOpen ? colorMode === 'light' ? 'background.light' : 'background.dark' : 'transparent'}
      backgroundSize="300%"
      zIndex={5}
      boxShadow={hasScrolled && `0 1px 3px ${colorMode === 'light' ? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,0.3)'}`}

      // bg={['primary.500', 'primary.500', 'transparent', 'transparent']}
      // color={['white', 'white', 'primary.700', 'primary.700']}
    >
      <Logo />
      <MenuButton isOpen={isOpen} toggle={toggle} />
      <Links isOpen={isOpen} setIsOpen={setIsOpen} />
    </Flex>
  );
}

export default NavContainer;
