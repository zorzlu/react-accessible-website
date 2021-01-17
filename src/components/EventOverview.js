import React from 'react';
import {
  Button,
  Text,
  Image,
  Heading,
  Box,
  SimpleGrid,
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
    <>
      <header>
        <Image
          mb="2em"
          w="100%"
          h="30vh"
          maxH="20em"
          objectFit="cover"
          src={process.env.PUBLIC_URL + eventdetails.pictures[0]}
          alt={eventdetails.altPictures[0]}
          rounded="1rem"
          shadow="xl"
        />
        <Heading as="h1" size="xl" mb="1em">
          {eventdetails['name']}
        </Heading>
      </header>
      <section>
        <Heading as="h2" size="md" fontWeight="bold" mt="2em" mb="1em">
          Event Overview
        </Heading>
        <SimpleGrid columns={[1, 1, 3]} spacing={[0, 0, '2em']} align="centre">
          <Box>
            <Text textStyle="p" lineHeight={2}>
              {'Date: ' + dateFromString(eventdetails.dateTime)}
            </Text>
            <Text textStyle="p" lineHeight={2}>
              {'Location: ' + eventdetails.location}
            </Text>
          </Box>
          <Box>
            <Text textStyle="p" lineHeight={2}>
              {'Association: ' + eventdetails.association}
            </Text>
            <Text textStyle="p" lineHeight={2}>
              {'Telephone number: ' + eventdetails.phone}
            </Text>
          </Box>
          <Box mt="1em">
            <Button
              as={RouterLink}
              to={'/event/' + eventdetails['id'] + '/join'}
              colorScheme="brand"
            >
              Join Event
            </Button>
          </Box>
        </SimpleGrid>
      </section>
    </>
  );
};

EventOverview.propTypes = {
  eventdetails: PropTypes.object.isRequired,
};

export default EventOverview;
