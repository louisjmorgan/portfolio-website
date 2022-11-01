/* eslint-disable react/prop-types */
import { Link, Text } from '@chakra-ui/react';
import { NavLink, useLocation } from 'react-router-dom';

function MenuItem({
  text, to = '/', onChooseItem,
}) {
  const { pathname } = useLocation();
  return (
    <Link as={NavLink} to={to} onClick={onChooseItem}>
      <Text display="block" textStyle={pathname === to ? 'active' : ''}>
        {text}
      </Text>
    </Link>
  );
}

export default MenuItem;
