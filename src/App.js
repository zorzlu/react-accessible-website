import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { About, Events, Home, SingleEvent } from './pages';
import { Navigation, Footer } from './components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/about" exact component={() => <About />} />
          <Route path="/events" exact component={() => <Events />} />
          <Route path="/singleEvent" exact component={() => <SingleEvent />} />
        </Switch>
        <Footer />
      </Router>
    </ChakraProvider>
  );
}

export default App;
