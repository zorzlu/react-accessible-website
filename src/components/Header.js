import React from 'react';
import PropTypes from 'prop-types';
import { Center, Container } from '@chakra-ui/react';
import { Logo } from '.';

const Header = ({ children, ...props }) => {
  return (
    <Center py="1.5em" px={[null, null, '1.5em']} {...props}>
      <Container maxW="75em">
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
