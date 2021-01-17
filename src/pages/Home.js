import React, { Component } from 'react';
import {
  Heading,
  Image,
  Text,
  ListItem,
  OrderedList,
  Stack,
  Center,
  Button,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { LiveMessage } from 'react-aria-live';
import { CardsListHome, Hero } from '../components';
import { Link as RouterLink } from 'react-router-dom';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.setNewPage('Home');
  }

  render() {
    return (
      <>
        <LiveMessage message="Navigated to Home page" aria-live="polite" />
        <Hero />
        <section>
          <Heading as="h2" size="xl" fontWeight="bold" mt="2em" mb="1em">
            Our Mission
          </Heading>
          <Stack direction="row" spacing={[null, null, '2em']}>
            <Image
              display={['none', 'none', 'block']}
              aria-hidden="true"
              src={'mission.png'}
              boxSize="120px"
              rounded="1rem"
            />
            <Text
              maxW="70ch"
              fontSize="xl"
              fontWeight="normal"
              lineHeight={1.5}
            >
              {
                'It has always been our mission to help people all around reach their potential and bring their impact into society. We believe that volunteering is the key to individuals obtaining a deeper understanding of the world, and that the world is a better place when people have a deeper empathy. '
              }
            </Text>
          </Stack>
        </section>
        <section>
          <Heading as="h2" size="xl" fontWeight="bold" mt="2em" mb="1em">
            How to join an event
          </Heading>
          <OrderedList maxW="70ch">
            <ListItem textStyle="paragraph" lineHeight={2.5} fontSize="xl">
              Browse our wide selection of events.
            </ListItem>
            <ListItem textStyle="paragraph" lineHeight={2.5} fontSize="xl">
              Filter events by topic and location to find your best match.
            </ListItem>
            <ListItem textStyle="paragraph" lineHeight={2.5} fontSize="xl">
              Apply to your chosen event and fill in the form.
            </ListItem>
            <ListItem textStyle="paragraph" lineHeight={2.5} fontSize="xl">
              Now you only have to attend and enjoy!
            </ListItem>
          </OrderedList>
        </section>
        <section>
          <Heading as="h2" size="xl" fontWeight="bold" mt="2em" mb="1em">
            Recommended Events
          </Heading>

          <CardsListHome
            events={this.props.db.events}
            queryParams={{ id: this.props.db.recommendedEvents }}
            startHeading="3"
          />
          <Center mt="3em">
            <Button as={RouterLink} to="/events" colorScheme="brand">
              Discover More events
            </Button>
          </Center>
        </section>
      </>
    );
  }
}

Home.propTypes = {
  db: PropTypes.object.isRequired,
  setNewPage: PropTypes.func.isRequired,
};

export default Home;
