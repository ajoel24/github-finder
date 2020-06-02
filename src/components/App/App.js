import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import Navigation from '../Layouts/Navigation/Navigation';
import Users from '../Users/Users';
import User from '../Users/User';
import Search from '../Search/Search';
import Alerts from '../Layouts/Alerts/Alerts';
import About from '../Pages/About';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      user: {},
      loading: false,
      alert: null,
    };
  }

  async componentDidMount() {
    this.setState({ loading: true });
    const usersRes = await axios.get(
      `https://api.github.com/users?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
    );
    this.setState({ users: usersRes.data, loading: false });
  }

  searchUsers = async (username) => {
    this.setState({ loading: true });
    const usersSearchRes = await axios.get(
      `https://api.github.com/search/users?q=${username}&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
    );
    this.setState({ users: usersSearchRes.data.items, loading: false });
  };

  clearUsers = () => {
    this.setState({ users: [], loading: false });
  };

  getUser = async (username) => {
    this.setState({ loading: true });
    const userSearchRes = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
    );
    this.setState({ user: userSearchRes.data, loading: false });
  };

  setAlert = (type, message) => {
    this.setState({ alert: { type, message } });
    setTimeout(() => this.closeAlert(), 2000);
  };

  closeAlert = () => this.setState({ alert: null });

  render() {
    const { users, loading, alert, user } = this.state;
    return (
      <Router>
        <Navigation icon="fab fa-github" title="GitHub Finder" />
        <Container>
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <Fragment>
                  {alert && (
                    <Alerts
                      type={alert.type}
                      message={alert.message}
                      onClose={this.closeAlert}
                    />
                  )}
                  <Search
                    searchUsers={this.searchUsers}
                    clearUsers={this.clearUsers}
                    showClear={users.length > 0 ? true : false}
                    setAlert={this.setAlert}
                  />
                  <Users loading={loading} users={users} />
                </Fragment>
              )}
            />
            <Route exact path="/about" component={About} />
            <Route
              exact
              path="/users/:login"
              render={(props) => (
                <User
                  {...props}
                  getUser={this.getUser}
                  user={user}
                  loading={loading}
                />
              )}
            />
          </Switch>
        </Container>
      </Router>
    );
  }
}

export default App;
