import React from 'react';
//import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Box, Flex, Image, Heading, Stack, Text } from '@chakra-ui/react';

export default function Hero({ title, description, image }) {
  return (
    <Flex
      align="center"
      justify={{ base: 'center', md: 'space-around', xl: 'space-between' }}
      direction={{ base: 'column-reverse', md: 'row' }}
      wrap="no-wrap"
      minH="auto"
    >
      <Stack
        spacing={10}
        w={{ base: '80%', md: '40%' }}
        align={['center', 'center', 'flex-start', 'flex-start']}
      >
        <Heading
          as="h1"
          size="xl"
          fontWeight="bold"
          color="primary.800"
          textAlign={['center', 'center', 'left', 'left']}
        >
          {title}
        </Heading>
        <Text
          fontSize="xl"
          color="primary.800"
          fontWeight="normal"
          lineHeight={1.5}
          textAlign={['center', 'center', 'left', 'left']}
        >
          {description}
        </Text>
      </Stack>
      <Box w={{ base: '80%', sm: '60%', md: '50%' }} mb={{ base: 12, md: 0 }}>
        <Image
          alt="Volunteers helping children"
          src={image}
          size="100%"
          rounded="1rem"
          shadow="2xl"
        />
      </Box>
    </Flex>
  );
}

Hero.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};

Hero.defaultProps = {
  title: 'Find volunteering opportunities nearby',
  description:
    'Through our platform you can discover volunteering events from all kind of fields and connect with nonprofit associations to achieve impactful outcomes.',
  image: 'hero.jpg',
};
