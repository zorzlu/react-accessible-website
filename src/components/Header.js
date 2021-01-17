import React from 'react';
import PropTypes from 'prop-types';
import { Center, Container } from '@chakra-ui/react';

const Header = ({ children, ...props }) => {
  return (
    <Center {...props}>
      <Container maxW="70em" py="1.5em" px={{ base: '1em', sm: '2em' }}>
        {children}
      </Container>
    </Center>
  );
};

Header.propTypes = {
  children: PropTypes.any,
};

export default Header;
