import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { About, Events, Home, SingleEvent, JoinEvent } from './pages';
import { Navigation, Footer } from './components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

function App({ events }) {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/about" exact component={() => <About />} />
          <Route path="/join" exact component={() => <JoinEvent />} />
          <Route
            path="/events"
            exact
            component={() => <Events list={events} />}
          />
          <Route
            path="/events/:eventId"
            exact
            component={() => <SingleEvent evList={events} />}
          />
        </Switch>
        <Footer />
      </Router>
    </ChakraProvider>
  );
}
App.propTypes = {
  events: PropTypes.array.isRequired,
};

export default App;
