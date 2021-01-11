import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Button } from '@chakra-ui/react';
import PropTypes from 'prop-types';

function LinkNavigation({ to, children, ...rest }) {
  const { pathname } = useLocation();

  const isActive = Boolean(pathname === to);

  return (
    <Button
      colorScheme="brand"
      as={NavLink}
      to={to}
      variant="ghost"
      transition="0.2s all"
      isActive={isActive}
      color="black"
      aria-current={isActive ? 'page' : null}
      {...rest}
    >
      {children}
    </Button>
  );
}

LinkNavigation.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default LinkNavigation;
