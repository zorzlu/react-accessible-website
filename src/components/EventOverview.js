import React from 'react';
import {
  Box,
  Button,
  Flex,
  Text,
  Image,
  Stack,
  Heading,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const dateFromString = function (dateString) {
  return new Intl.DateTimeFormat('en-GB', {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  }).format(new Date(dateString));
};

const EventOverview = () => {
  return (
    <Flex
      align="center"
      justify={{ base: 'center', md: 'space-around', xl: 'space-between' }}
      direction={{ base: 'column-reverse', md: 'row' }}
      wrap="no-wrap"
      minH="auto"
      //px={8}
      //mb={16}
    >
      <Stack
        spacing={2}
        w={{ base: '80%', md: '40%' }}
        align={['center', 'center', 'flex-start', 'flex-start']}
      >
        <Heading
          as="h1"
          size="xl"
          lineHeight={2}
          textAlign={['center', 'center', 'left', 'left']}
        >
          {this.props.details['name']}
        </Heading>
        <Text
          textStyle="paragraph"
          lineHeight={2}
          textAlign={['center', 'center', 'left', 'left']}
        >
          {'Date: ' + dateFromString(this.props.details.dateTime)}
        </Text>
        <Text
          textStyle="paragraph"
          lineHeight={2}
          textAlign={['center', 'center', 'left', 'left']}
        >
          {'Location: ' + this.props.details.location}
        </Text>
        <Text
          textStyle="paragraph"
          lineHeight={2}
          textAlign={['center', 'center', 'left', 'left']}
        >
          {'Telephone number: ' + this.props.details.phone}
        </Text>
        <Text
          stextStyle="paragraph"
          lineHeight={2}
          textAlign={['center', 'center', 'left', 'left']}
        >
          {'Association: ' + this.props.details.association}
        </Text>
        <Button
          as={RouterLink}
          to={'/event/' + this.props.details['id'] + '/register'}
          variant="outline"
          colorScheme="black"
        >
          Apply now
        </Button>
      </Stack>
      <Box w={{ base: '80%', sm: '60%', md: '50%' }} mb={{ base: 12, md: 0 }}>
        <Image
          boxSize="300px"
          objectFit="cover"
          src={process.env.PUBLIC_URL + '/' + this.props.details.pictures[0]}
          alt={this.props.details.altPictures[0]}
          rounded="1rem"
          shadow="2xl"
        />
      </Box>
    </Flex>
  );
};

export default EventOverview;
