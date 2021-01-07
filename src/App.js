import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { SkipNavLink, SkipNavContent } from '@chakra-ui/skip-nav';
import PropTypes from 'prop-types';
import { About, Events, Home, PageNotFound } from './pages';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Header, Footer, Logo, Navigation } from './components';
import { OurTheme } from './theme';
import { LiveAnnouncer } from 'react-aria-live';
import EventChecker from './utils/EventChecker';

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
              <Header>
                <Logo height="2em" />
                <SkipNavContent id="navigation">
                  <Navigation />
                </SkipNavContent>
              </Header>
              <SkipNavContent as="main" id="main">
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
                    path="/events"
                    exact
                    component={() => (
                      <Events db={this.props.db} setNewPage={this.setNewPage} />
                    )}
                  />
                  <Route
                    path="/events/:eventId"
                    exact
                    component={() => (
                      <EventChecker
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
              <Footer role="contentinfo" />
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
