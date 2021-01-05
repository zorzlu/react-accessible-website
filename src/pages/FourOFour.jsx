import { Text } from '@chakra-ui/react';
import React, { Component } from 'react';

//import { useParams } from 'react-router-dom';
class FourOFour extends Component {
  render() {
    return (
      //let { eventId } = useParams();
      <div className="FourOFour">
        This is the 404 page.
        <Text color="tomato">Boy I&apos;m so sad. It is not a happy day!</Text>
      </div>
    );
  }
}
export default FourOFour;
