import React, { Component } from 'react';
import {
  Heading,
  Image,
  Text,
  ListItem,
  OrderedList,
  Stack,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { LiveMessage } from 'react-aria-live';
import { Hero } from '../components';
import { Grid } from '../components';

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
        <Heading
          as="h2"
          textStyle="h1"
          lineHeight={2}
          textAlign={['center', 'center', 'left', 'left']}
        >
          {'Our mission'}
        </Heading>
        <Stack direction={'row'} spacing={5}>
          <Image
            alt="Mission icon"
            src={'mission.png'}
            boxSize="120px"
            rounded="1rem"
          />
          <Text
            textStyle="paragraph"
            lineHeight={2}
            textAlign={['center', 'center', 'left', 'left']}
            fontSize="lg"
          >
            {
              'It has always been our mission to help people all around reach their potential and bring their impact into society. We believe that volunteering is the key to individuals obtaining a deeper understanding of the world, and that the world is a better place when people have a deeper empathy. '
            }
          </Text>
        </Stack>
        <Heading
          as="h2"
          textStyle="h1"
          lineHeight={2}
          textAlign={['center', 'center', 'left', 'left']}
        >
          {'How to apply to an event'}
        </Heading>
        <Text
          textStyle="paragraph"
          lineHeight={2}
          textAlign={['center', 'center', 'left', 'left']}
          fontSize="lg"
        >
          {
            'The application process is simple and quick. You just need to follow four steps:'
          }
        </Text>
        <OrderedList>
          <ListItem textStyle="paragraph" lineHeight={2.5} fontSize="lg">
            Browse our wide selection of events.
          </ListItem>
          <ListItem textStyle="paragraph" lineHeight={2.5} fontSize="lg">
            Filter events by topic and location to find your best match.
          </ListItem>
          <ListItem textStyle="paragraph" lineHeight={2.5} fontSize="lg">
            Apply to your chosen event and fill in the form.
          </ListItem>
          <ListItem textStyle="paragraph" lineHeight={2.5} fontSize="lg">
            Now you only have to attend and enjoy!
          </ListItem>
        </OrderedList>
        <Heading
          as="h2"
          textStyle="h1"
          lineHeight={2}
          textAlign={['center', 'center', 'left', 'left']}
        >
          {'Recommended events'}
        </Heading>
        <Heading
          as="h2"
          textStyle="h1"
          lineHeight={2}
          textAlign={['center', 'center', 'left', 'left']}
        >
          {'Our benefits'}
        </Heading>
        <Grid />
      </>
    );
  }
}

Home.propTypes = {
  db: PropTypes.object.isRequired,
  setNewPage: PropTypes.func.isRequired,
};

export default Home;
