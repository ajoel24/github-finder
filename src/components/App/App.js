import React, { Component, Fragment } from 'react';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import Navigation from '../Layouts/Navigation/Navigation';
import Users from '../Users/Users';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      loading: false,
    };
  }

  async componentDidMount() {
    this.setState({ loading: true });
    const usersRes = await axios.get('http://api.github.com/users');
    this.setState({ users: usersRes.data, loading: false });
  }

  render() {
    return (
      <Fragment>
        <Navigation icon="fab fa-github" title="GitHub Finder" />
        <Container>
          <Users loading={this.state.loading} users={this.state.users} />
        </Container>
      </Fragment>
    );
  }
}

export default App;
