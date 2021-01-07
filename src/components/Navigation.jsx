import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import { Link, Box, Text, Stack, IconButton } from '@chakra-ui/react';
import { FiX, FiMenu } from 'react-icons/fi';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <nav>
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
    </nav>
  );
};

const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <IconButton
      display={{ base: 'yes', md: 'none' }}
      onClick={toggle}
      icon={isOpen ? <FiX /> : <FiMenu />}
      aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
    />
  );
};

const MenuItem = ({ children, to = '/', ...rest }) => {
  return (
    <Link as={RouterLink} to={to}>
      <Text display="block" {...rest}>
        {children}
      </Text>
    </Link>
  );
};

MenuToggle.propTypes = {
  toggle: PropTypes.any,
  isOpen: PropTypes.bool.isRequired,
};

MenuItem.propTypes = {
  children: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

const MenuLinks = ({ isOpen }) => {
  return (
    <Box
      display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
      flexBasis={{ base: '100%', md: 'auto' }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={['center', 'space-between', 'flex-end', 'flex-end']}
        direction={['column', 'row', 'row', 'row']}
        pt={[4, 4, 0, 0]}
      >
        <MenuItem to="/">Home</MenuItem>

        <MenuItem to="/events">Events </MenuItem>
        <MenuItem to="/about">About us</MenuItem>
        <MenuItem to="/join">Join</MenuItem>
      </Stack>
    </Box>
  );
};

MenuLinks.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

export default Navigation;
