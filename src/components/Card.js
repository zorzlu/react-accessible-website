import React from 'react';
import { Box, Image, Flex, Text } from '@chakra-ui/react';
import { Link, Heading } from '@chakra-ui/react';
import { Link as RouterLink, useHistory } from 'react-router-dom';
import { ListTagsInCard } from '.';
import PropTypes from 'prop-types';

//HELPERS

const dateFromString = function (dateString) {
  return new Intl.DateTimeFormat('en-GB', {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  }).format(new Date(dateString));
};

//MAIN CARD COMPONENT

function Card({ eventDetails, startingHeading }) {
  let history = useHistory();

  function handleClickOnCard() {
    history.push('/event/' + eventDetails.id);
  }

  function luca(e) {
    e.preventDefault();
  }

  function computeHeading(starting, increment) {
    return 'h' + (parseInt(starting) + parseInt(increment)).toString();
  }

  return (
    <Box
      _focusWithin={{ boxShadow: 'outline' }}
      _hover={{ boxShadow: 'outline', cursor: 'pointer' }}
      onClick={() => handleClickOnCard()}
      as="article"
      className="card"
      margin="0.75em"
      maxW={[96, 60]}
      h={[null, 80]}
      borderRadius="lg"
      boxShadow="none"
      bg="white"
    >
      <Flex
        _focusWithin={{ boxShadow: 'xl' }}
        _hover={{ boxShadow: 'xl' }}
        direction="column"
        maxW="inherit"
        h="inherit"
        borderRadius="lg"
        overflow="hidden"
        boxShadow="md"
      >
        <Heading
          order="0"
          p="3"
          as={computeHeading(startingHeading, 0)}
          fontSize="lg"
        >
          <Link
            _focus={{ boxShadow: 'none' }}
            onClick={(e) => luca(e)}
            as={RouterLink}
            to={'/events/' + eventDetails.id}
          >
            {eventDetails.name}
          </Link>
        </Heading>

        <Image
          order="-1"
          minH={[16, 10]}
          maxH={[24, 80]}
          flex="1"
          w="100%"
          objectFit="cover"
          src={eventDetails.pictures[0]}
          alt={eventDetails.altPictures[0]}
        />
        <Text order="1" pl="3" pr="3" fontWeight="semibold" fontSize="lg">
          {dateFromString(eventDetails.dateTime)}
        </Text>
        <Box order="2" p="3">
          <Heading
            as={computeHeading(startingHeading, 1)}
            fontSize="md"
            fontWeight="semibold"
            pb="2"
          >
            Tags
          </Heading>
          <ListTagsInCard tags={eventDetails.tags} />
        </Box>
      </Flex>
    </Box>
  );
}

Card.propTypes = {
  eventDetails: PropTypes.object.isRequired,
  startingHeading: PropTypes.string.isRequired,
};

export default Card;
