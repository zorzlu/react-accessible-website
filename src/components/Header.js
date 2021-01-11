import React from 'react';
import PropTypes from 'prop-types';
import { Center, Container } from '@chakra-ui/react';
import { Logo } from '.';

const Header = ({ children, ...props }) => {
  return (
    <Center p="1.5em">
      <Container maxW="75em" {...props}>
        <Logo position="absolute" />
        {children}
      </Container>
    </Center>
  );
};

Header.propTypes = {
  children: PropTypes.any,
};

export default Header;
