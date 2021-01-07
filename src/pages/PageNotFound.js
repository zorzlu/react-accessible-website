import { Text } from '@chakra-ui/react';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PageNotFound extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.setNewPage('Page Not Found');
  }
  render() {
    return (
      <div>
        <h1>This is the 404 page.</h1>
        <Text color="tomato">Boy I&apos;m so sad. It is not a happy day!</Text>
      </div>
    );
  }
}

PageNotFound.propTypes = {
  setNewPage: PropTypes.func.isRequired,
};

export default PageNotFound;
