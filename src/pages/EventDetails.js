/* eslint-disable react/jsx-key */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Box,
  Image,
  Stack,
  Flex,
  Text,
  Heading,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react';
import { LiveMessage } from 'react-aria-live';
import { Link as RouterLink } from 'react-router-dom';
//import EventOverview from '../components/EventOverview';

const dateFromString = function (dateString) {
  return new Intl.DateTimeFormat('en-GB', {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  }).format(new Date(dateString));
};

class EventDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.setNewPage(this.props.details['name']);
  }
  render() {
    return (
      <React.Fragment>
        <LiveMessage
          message={
            'Navigated to ' + this.props.details['name'] + 'Event Details Page'
          }
          aria-live="polite"
          clearOnUnmount="true"
        />

        <Flex
          align="center"
          justify={{
            base: 'center',
            md: 'space-around',
            xl: 'space-between',
          }}
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
          <Box
            w={{ base: '80%', sm: '60%', md: '50%' }}
            mb={{ base: 12, md: 0 }}
          >
            <Image
              boxSize="300px"
              objectFit="cover"
              src={
                process.env.PUBLIC_URL + '/' + this.props.details.pictures[0]
              }
              alt={this.props.details.altPictures[0]}
              rounded="1rem"
              shadow="2xl"
            />
          </Box>
        </Flex>
        <Flex direction="column" maxW={{ xl: '1200px' }} m="0 auto">
          <Heading
            as="h2"
            textStyle="h2"
            lineHeight={2}
            textAlign={['center', 'center', 'left', 'left']}
          >
            {'Description of the event'}
          </Heading>
          <Text
            textStyle="paragraph"
            lineHeight={2}
            textAlign={['center', 'center', 'left', 'left']}
          >
            {this.props.details.longDescription}
          </Text>
          <Heading
            as="h2"
            textStyle="h2"
            lineHeight={2}
            textAlign={['center', 'center', 'left', 'left']}
          >
            {'Activities'}
          </Heading>
          <Text
            textStyle="paragraph"
            lineHeight={2}
            textAlign={['center', 'center', 'left', 'left']}
          >
            <UnorderedList>
              {this.props.details.activities.map((listitem) => (
                <ListItem>{listitem}</ListItem>
              ))}
            </UnorderedList>
          </Text>
          <br></br>
          <br></br>
          <Button
            as={RouterLink}
            to={'/event/' + this.props.details['id'] + '/register'}
            variant="outline"
            colorScheme="black"
          >
            Apply now
          </Button>
        </Flex>
      </React.Fragment>
    );
  }
}

EventDetails.propTypes = {
  details: PropTypes.object.isRequired,
  setNewPage: PropTypes.func.isRequired,
};

export default EventDetails;
