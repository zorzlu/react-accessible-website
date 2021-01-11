import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Heading,
  UnorderedList,
  ListItem,
  Text,
  Stack,
  Image,
} from '@chakra-ui/react';
import { LiveMessage } from 'react-aria-live';
import { Grid } from '../components';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.setNewPage('About Us');
  }

  render() {
    return (
      <>
        <LiveMessage message="Navigated to About Us page" aria-live="polite" />
        <Heading
          as="h1"
          textStyle="h1"
          lineHeight={2}
          textAlign={['center', 'center', 'left', 'left']}
        >
          {'Who are we'}
        </Heading>
        <Stack direction={'row'} spacing={5}>
          <Image
            alt="Two people holding hands"
            src={'helpinghand.jpg'}
            //size="40%"
            boxSize="200px"
            width="50"
            objectFit="cover"
            rounded="1rem"
            shadow="2xl"
          />
          <Text
            textStyle="paragraph"
            lineHeight={2}
            textAlign={['center', 'center', 'left', 'left']}
            fontSize="lg"
          >
            {
              'Launched at the end of 2020, we first set out to create a bridge between people that want to have a greater impact into society and associations that offer interesting opportunities. Every partner and volunteer who joined us since then, encouraged us to believe and work harder on our mission. Today we are using all of our resources to create an activated community and help people find their own way to see the world.'
            }
          </Text>
        </Stack>
        <Heading
          as="h2"
          textStyle="h1"
          lineHeight={2}
          textAlign={['center', 'center', 'left', 'left']}
        >
          {'Our goals'}
        </Heading>
        <UnorderedList>
          <ListItem textStyle="paragraph" lineHeight={2.5} fontSize="lg">
            Connect people with volunteering associations and increase social
            awareness.
          </ListItem>
          <ListItem textStyle="paragraph" lineHeight={2.5} fontSize="lg">
            Increase community engagement.
          </ListItem>
          <ListItem textStyle="paragraph" lineHeight={2.5} fontSize="lg">
            Inspire people to be open-minded and to learn.
          </ListItem>
        </UnorderedList>
        <Heading
          as="h2"
          textStyle="h1"
          lineHeight={2}
          textAlign={['center', 'center', 'left', 'left']}
        >
          {'Our figures'}
        </Heading>
        <Grid />
        <Heading
          as="h2"
          textStyle="h1"
          lineHeight={2}
          textAlign={['center', 'center', 'left', 'left']}
        >
          {'Contact information'}
        </Heading>
        <Text
          textStyle="paragraph"
          lineHeight={2}
          textAlign={['center', 'center', 'left', 'left']}
          fontSize="lg"
        >
          {'You can contact us at:'}
        </Text>
      </>
    );
  }
}

About.propTypes = {
  setNewPage: PropTypes.func.isRequired,
};

export default About;
