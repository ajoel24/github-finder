import React, { Fragment, useState, useEffect } from 'react';
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

const App = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [repos, setRepos] = useState([]);
  const [alert, setAlert] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const usersRes = await axios.get(
        `https://api.github.com/users?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
      );
      setUsers(usersRes.data);
      setLoading(false);
    }
    fetchData();
  }, []);

  const searchUsers = async (username) => {
    setLoading(true);
    const usersSearchRes = await axios.get(
      `https://api.github.com/search/users?q=${username}&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
    );
    setUsers(usersSearchRes.data.items);
    setLoading(false);
  };

  const clearUsers = () => {
    setUsers([]);
    setLoading(false);
  };

  const getUser = async (username) => {
    setLoading(true);
    const userSearchRes = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
    );
    setUser(userSearchRes.data);
    setLoading(false);
  };

  const getUserRepos = async (username) => {
    setLoading(true);
    const userSearchRes = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
    );
    setRepos(userSearchRes.data);
    setLoading(false);
  };

  const createAlert = (type, message) => {
    setAlert({ type, message });
    setTimeout(() => closeAlert(), 2000);
  };

  const closeAlert = () => setAlert(null);

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
                    onClose={closeAlert}
                  />
                )}
                <Search
                  searchUsers={searchUsers}
                  clearUsers={clearUsers}
                  showClear={users.length > 0 ? true : false}
                  setAlert={createAlert}
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
                getUser={getUser}
                getUserRepos={getUserRepos}
                user={user}
                repos={repos}
                loading={loading}
              />
            )}
          />
        </Switch>
      </Container>
    </Router>
  );
};

export default App;
