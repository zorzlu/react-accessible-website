import React from 'react';
import {
  Box,
  Image,
  keyframes,
  usePrefersReducedMotion,
} from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const Logo = (props) => {
  const prefersReducedMotion = usePrefersReducedMotion();

  const animation = prefersReducedMotion
    ? undefined
    : `${spin} infinite 20s linear`;

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
          animation={animation}
          src={process.env.PUBLIC_URL + 'logo.svg'}
          alt="Application Logo, back to Homepage."
        />
      </NavLink>
    </Box>
  );
};

export default Logo;
