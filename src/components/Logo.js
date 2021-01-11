import React from 'react';
import { Box, Image } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

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
      <NavLink to="/">
        <Image
          boxSize="2.5em"
          src={process.env.PUBLIC_URL + 'logo.svg'}
          alt="Application Logo, back to Homepage."
        />
      </NavLink>
    </Box>
  );
};

export default Logo;
