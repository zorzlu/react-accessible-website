import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Flex, Box, IconButton, Spacer } from '@chakra-ui/react';
import { FiX, FiMenu } from 'react-icons/fi';
import LinkNavigation from './LinkNavigation';

const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <>
      <IconButton
        display={{ base: 'yes', md: 'none' }}
        onClick={toggle}
        icon={isOpen ? <FiX /> : <FiMenu />}
        aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
        aria-expanded={isOpen}
        aria-controls="main_nav_buttons"
      />
    </>
  );
};

MenuToggle.propTypes = {
  toggle: PropTypes.any,
  isOpen: PropTypes.bool.isRequired,
};

const MenuLinks = ({ isOpen }) => {
  /* <Collapse
      in={{ base: isOpen ? 'true' : 'false', md: 'false' }}
      animateOpacity */
  return (
    <Box
      pt={[4, 4, 0, 0]}
      w="100%"
      display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
    >
      <Flex
        as="ul"
        listStyleType="none"
        id="main_nav_buttons"
        justify={['space-between', 'space-between', 'flex-end', 'flex-end']}
        direction={['column', 'row', 'row', 'row']}
        borderBottomWidth={['1px', '1px', '0px']}
        borderLeftWidth={['1px', '1px', '0px']}
        borderRightWidth={['1px', '1px', '0px']}
        borderBottomRadius="xl"
      >
        <Box mx={4} mb={[4, null]} as="li">
          <LinkNavigation to="/">Home</LinkNavigation>
        </Box>
        <Box mx={4} mb={[4, null]} as="li">
          <LinkNavigation to="/events">Events</LinkNavigation>
        </Box>
        <Box mx={4} mb={[4, null]} as="li">
          <LinkNavigation to="/about">About Us</LinkNavigation>
        </Box>
      </Flex>
    </Box>
  );
};

MenuLinks.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Flex
      as="nav"
      height="inherit"
      justify="space-between"
      wrap="wrap"
      maxW="75em"
      w={[null, null, '20 rem']}
      bg="transparent"
      color="primary.700"
      borderColor="black"
      direction={['row', 'row', 'row', 'row']}
    >
      <Spacer />
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
    </Flex>
  );
};

export default Navigation;
