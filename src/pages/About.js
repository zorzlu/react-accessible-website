import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Heading } from '@chakra-ui/react';
import { LiveMessage } from 'react-aria-live';

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
        <LiveMessage
          message="Navigated to About Us page"
          aria-live="polite"
          clearOnUnmount="true"
        />
        <Heading as="h1" size="xl">
          About Us
        </Heading>
        <div className="About">This is the About page.</div>
      </>
    );
  }
}

About.propTypes = {
  setNewPage: PropTypes.func.isRequired,
};

export default About;
