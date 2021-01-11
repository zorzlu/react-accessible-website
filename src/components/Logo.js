import React from 'react';
import { Box, Image, Link } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import logoApp from './logo.svg';
const Logo = (props) => {
  return (
    <Box
      w="2.5em"
      h="2.5em"
      borderRadius="md"
      _focusWithin={{ boxShadow: 'outline' }}
      _hover={{ boxShadow: 'outline' }}
      {...props}
    >
      <Link _focus={{ boxShadow: null }} as={NavLink} to="/">
        <Image
          boxSize="2.5em"
          src={logoApp}
          alt="Application Logo, back to Homepage."
        />
      </Link>
    </Box>
  );
};

export default Logo;
