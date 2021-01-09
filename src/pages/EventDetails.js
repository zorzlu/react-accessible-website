/* eslint-disable react/jsx-key */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Flex,
  Text,
  Image,
  Link,
  Stack,
  Heading,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react';
import { LiveMessage } from 'react-aria-live';
import { Link as RouterLink } from 'react-router-dom';

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
          justify={{ base: 'center', md: 'space-around', xl: 'space-between' }}
          direction={{ base: 'column-reverse', md: 'row' }}
          wrap="no-wrap"
          //minH="30vh"
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
            <Link
              as={RouterLink}
              to={'/event/' + this.props.details['id'] + '/register'}
              border="1px"
              rounded="1rem"
              p="3"
              fontWeight="bold"
            >
              Apply now
            </Link>
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
        <Flex>
          <Stack spacing={1}>
            <Heading
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
            <Link
              as={RouterLink}
              to={'/event/' + this.props.details['id'] + '/register'}
              border="1px"
              rounded="1rem"
              p="3"
              fontWeight="bold"
              w="10%"
            >
              Apply now
            </Link>
          </Stack>
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
