import React from 'react';
import { Center, ChakraProvider, Container } from '@chakra-ui/react';
import { SkipNavLink, SkipNavContent } from '@chakra-ui/skip-nav';
import PropTypes from 'prop-types';
import {
  About,
  Events,
  Home,
  JoinEvent,
  EventDetails,
  PageNotFound,
} from './pages';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Footer, Logo, Navigation, Header } from './components';
import { OurTheme } from './theme';
import { LiveAnnouncer } from 'react-aria-live';
import EventChecker from './pages/EventChecker';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.contentContainer = React.createRef();
    this.setNewPage = this.setNewPage.bind(this);
    this.state = {
      websiteName: 'AppName',
    };
  }

  setNewPage(name) {
    let areEqual = name.toUpperCase() === 'HOME';
    let shortName = name.length > 20 ? name.substring(0, 19) + '...' : name;
    // Still setting the document title
    document.title = areEqual
      ? this.state.websiteName
      : shortName + ' | ' + this.state.websiteName;
    // Set focus to the content ref
    this.contentContainer.current.focus();
    //        <Announcements message={this.state.announcementMessage} />
  }

  render() {
    return (
      <>
        <LiveAnnouncer>
          <ChakraProvider theme={OurTheme}>
            <Router>
              <div id="accessibilityLinks">
                <div ref={this.contentContainer} tabIndex="-1" />
                <SkipNavLink id="navigation" zIndex="1000">
                  Skip to navigation
                </SkipNavLink>
                <SkipNavLink id="main" zIndex="1000">
                  Skip to Main
                </SkipNavLink>
              </div>
              <Center as="header">
                <Header>
                  <Logo height="3em" />
                  <SkipNavContent height="inherit" id="navigation">
                    <Navigation />
                  </SkipNavContent>
                </Header>
              </Center>
              <Container as="main" size="pageContainer">
                <SkipNavContent id="main">
                  <Switch>
                    <Route
                      path="/"
                      exact
                      component={() => (
                        <Home db={this.props.db} setNewPage={this.setNewPage} />
                      )}
                    />
                    <Route
                      path="/about"
                      exact
                      component={() => <About setNewPage={this.setNewPage} />}
                    />
                    <Route
                      path="/event/:eventId/register"
                      exact
                      component={() => (
                        <EventChecker
                          db={this.props.db}
                          setNewPage={this.setNewPage}
                          PageToLoad={JoinEvent}
                        />
                      )}
                    />
                    <Route
                      path="/event/:eventId"
                      exact
                      component={() => (
                        <EventChecker
                          db={this.props.db}
                          setNewPage={this.setNewPage}
                          PageToLoad={EventDetails}
                        />
                      )}
                    />
                    <Route
                      path="/events"
                      component={() => (
                        <Events
                          db={this.props.db}
                          setNewPage={this.setNewPage}
                        />
                      )}
                    />

                    <Route
                      path="*"
                      component={() => (
                        <PageNotFound setNewPage={this.setNewPage} />
                      )}
                    />
                  </Switch>
                </SkipNavContent>
              </Container>
              <Container as="footer" size="footer">
                <Footer />
              </Container>
            </Router>
          </ChakraProvider>
        </LiveAnnouncer>
      </>
    );
  }
}

App.propTypes = {
  db: PropTypes.object.isRequired,
};

export default App;
