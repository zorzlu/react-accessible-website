import React from 'react';
import PropTypes from 'prop-types';
import { Flex } from '@chakra-ui/react';

const Header = ({ children, ...props }) => {
  return (
    <Flex
      as="header"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={8}
      bg="transparent"
      color="primary.700"
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
