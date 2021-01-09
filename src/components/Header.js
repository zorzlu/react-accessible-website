import React from 'react';
import PropTypes from 'prop-types';
import { Flex } from '@chakra-ui/react';

const Header = ({ children, ...props }) => {
  return (
    <Flex
      align="center"
      height="inherit"
      justify="space-between"
      wrap="wrap"
      maxW="75em"
      w="100%"
      p="1.5em"
      bg="transparent"
      color="primary.700"
      borderColor="black"
      {...props}
    >
      {children}
    </Flex>
  );
};

Header.propTypes = {
  children: PropTypes.any,
};

export default Header;
