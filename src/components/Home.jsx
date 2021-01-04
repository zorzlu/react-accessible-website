import React, { Component } from 'react';
class Home extends Component {
  render() {
    return (
        <div className="Home">
            <header className="App-header">
                <img src={process.env.PUBLIC_URL + "logo.svg"} className="App-logo" alt="App logo" />
                <p>
                Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
                >
                Learn React
                </a>
            </header>
      </div>
    )
  }
}
export default Home;