/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { Heading, Text, Image, Stack } from '@chakra-ui/react';
import { FourOFour } from '.';

//This is a template, not a fully implemented webpage

function EventDetails({ details }) {
  return (
    <React.Fragment>
      <Heading>{details['name']}</Heading>
      <Stack direction="row">
        <Image
          boxSize="100px"
          objectFit="cover"
          src={process.env.PUBLIC_URL + '/' + details.pictures[0]}
          alt={details.altPictures[0]}
        />
        <Image
          boxSize="100px"
          objectFit="cover"
          src={process.env.PUBLIC_URL + '/' + details.pictures[1]}
          alt={details.altPictures[1]}
        />
      </Stack>
      <Text>{details.longDescription}</Text>
    </React.Fragment>
  );
}
SingleEvent.propTypes = {
  details: PropTypes.object.isRequired,
};

function SingleEvent({ evList }) {
  let { eventId } = useParams();
  var result = evList.filter((obj) => {
    return obj.id == eventId;
  });
  if (result.length === 0) {
    return <FourOFour />;
  } else {
    return <EventDetails details={result[0]} />;
  }
}

SingleEvent.propTypes = {
  evList: PropTypes.array.isRequired,
};

export default SingleEvent;
