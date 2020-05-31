import React, { Component, Fragment } from 'react';
import { Container } from 'react-bootstrap';
import Navigation from '../Layouts/Navigation/Navigation';
import './App.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navigation icon="fab fa-github" title="GitHub Finder" />
        <Container>
          <h1>Hello</h1>
        </Container>
      </Fragment>
    );
  }
}

export default App;
