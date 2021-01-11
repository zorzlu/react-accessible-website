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
import PropTypes from 'prop-types';

const dateFromString = function (dateString) {
  return new Intl.DateTimeFormat('en-GB', {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  }).format(new Date(dateString));
};

const EventOverview = ({ eventdetails }) => {
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
          {eventdetails['name']}
        </Heading>
        <Text
          textStyle="paragraph"
          lineHeight={2}
          textAlign={['center', 'center', 'left', 'left']}
        >
          {'Date: ' + dateFromString(eventdetails.dateTime)}
        </Text>
        <Text
          textStyle="paragraph"
          lineHeight={2}
          textAlign={['center', 'center', 'left', 'left']}
        >
          {'Location: ' + eventdetails.location}
        </Text>
        <Text
          textStyle="paragraph"
          lineHeight={2}
          textAlign={['center', 'center', 'left', 'left']}
        >
          {'Telephone number: ' + eventdetails.phone}
        </Text>
        <Text
          stextStyle="paragraph"
          lineHeight={2}
          textAlign={['center', 'center', 'left', 'left']}
        >
          {'Association: ' + eventdetails.association}
        </Text>
        <Button
          as={RouterLink}
          to={'/event/' + eventdetails['id'] + '/register'}
          variant="outline"
          colorScheme="brand"
        >
          Apply now
        </Button>
      </Stack>
      <Box w={{ base: '80%', sm: '60%', md: '50%' }} mb={{ base: 12, md: 0 }}>
        <Image
          boxSize="300px"
          objectFit="cover"
          src={process.env.PUBLIC_URL + '/' + eventdetails.pictures[0]}
          alt={eventdetails.altPictures[0]}
          rounded="1rem"
          shadow="2xl"
        />
      </Box>
    </Flex>
  );
};

EventOverview.propTypes = {
  eventdetails: PropTypes.object.isRequired,
};

export default EventOverview;
