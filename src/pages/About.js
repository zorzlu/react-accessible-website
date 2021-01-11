import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Heading,
  UnorderedList,
  ListItem,
  Text,
  Stack,
  Image,
  Box,
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
        <Heading as="h1" size="xl">
          {'About CommunityMate'}
        </Heading>
        <section>
          <Stack
            direction={['column', 'column', 'row']}
            mt="5em"
            spacing="3em"
            px={[null, null, '5em', '5em']}
          >
            <Image
              alt="Two people holding hands"
              src={'helpinghand.jpg'}
              width={['100%', '100%', '20em']}
              maxH={['15em', '15em', '50em']}
              objectFit="cover"
              rounded="1rem"
              shadow="2xl"
            />
            <Box>
              <Heading as="h2" size="md" fontWeight="bold" mb="1em">
                Our Story
              </Heading>
              <Text textStyle="p" fontSize="lg">
                {
                  'Launched at the end of 2020, we first set out to create a bridge between people that want to have a greater impact into society and associations that offer interesting opportunities. Every partner and volunteer who joined us since then, encouraged us to believe and work harder on our mission. Today we are using all of our resources to create an activated community and help people find their own way to see the world.'
                }
              </Text>
            </Box>
          </Stack>
        </section>
        <section>
          <Heading as="h2" size="md" mt="3em" fontWeight="bold" mb="1em">
            Our goals
          </Heading>
          <UnorderedList>
            <ListItem lineHeight={2.5} fontSize="lg">
              Connect people with volunteering associations and increase social
              awareness.
            </ListItem>
            <ListItem lineHeight={2.5} fontSize="lg">
              Increase community engagement.
            </ListItem>
            <ListItem lineHeight={2.5} fontSize="lg">
              Inspire people to be open-minded and to learn.
            </ListItem>
          </UnorderedList>
        </section>
        <section>
          <Heading as="h2" size="md" mt="3em" fontWeight="bold" mb="1em">
            Our figures
          </Heading>
          <Grid />
        </section>
        <section>
          <Heading as="h2" size="md" mt="3em" fontWeight="bold" mb="1em">
            Contact Information
          </Heading>
          <Text
            textStyle="paragraph"
            lineHeight={2}
            textAlign={['center', 'center', 'left', 'left']}
            fontSize="lg"
          >
            {'You can contact us at:'}
          </Text>
        </section>
      </>
    );
  }
}

About.propTypes = {
  setNewPage: PropTypes.func.isRequired,
};

export default About;
