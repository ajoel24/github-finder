import React, { Component, Fragment } from 'react';
import { Container } from 'react-bootstrap';
import Navigation from '../Layouts/Navigation/Navigation';
import Users from '../Users/Users';
import './App.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navigation icon="fab fa-github" title="GitHub Finder" />
        <Container>
          <Users />
        </Container>
      </Fragment>
    );
  }
}

export default App;
