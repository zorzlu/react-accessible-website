import React, { Component } from 'react';
import { Flex, Heading, Text, ListItem, OrderedList } from '@chakra-ui/react';
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
        <LiveMessage
          message="Navigated to Home page"
          aria-live="polite"
          clearOnUnmount="true"
        />
        <Hero />
        <Flex direction="column" maxW={{ xl: '1200px' }} m="0 auto">
          <Heading
            as="h2"
            textStyle="h1"
            lineHeight={2}
            textAlign={['center', 'center', 'left', 'left']}
          >
            {'Our mission'}
          </Heading>
          <Text
            textStyle="paragraph"
            lineHeight={2}
            textAlign={['center', 'center', 'left', 'left']}
            fontSize="lg"
          >
            {'Our mission'}
          </Text>
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
          <Text
            textStyle="paragraph"
            lineHeight={2.5}
            textAlign={['center', 'center', 'left', 'left']}
            fontSize="lg"
          >
            <OrderedList>
              <ListItem>Browse our wide selection of events.</ListItem>
              <ListItem>
                Filter events by topic and location to find your best match.
              </ListItem>
              <ListItem>
                Apply to your chosen event and fill in the form.
              </ListItem>
              <ListItem>Now you only have to attend and enjoy!</ListItem>
            </OrderedList>
          </Text>
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
        </Flex>
      </>
    );
  }
}

Home.propTypes = {
  db: PropTypes.object.isRequired,
  setNewPage: PropTypes.func.isRequired,
};

export default Home;
