import React, { Fragment, useState, useEffect, useContext } from 'react';
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
import GithubContext from '../../context/github/githubContext';

const App = () => {
  const githubContext = useContext(GithubContext);
  const [alert, setAlert] = useState(null);

  useEffect(() => {
    githubContext.getDefaultUsers();
  }, []);

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
                <Search setAlert={createAlert} />
                <Users />
              </Fragment>
            )}
          />
          <Route exact path="/about" component={About} />
          <Route
            exact
            path="/users/:login"
            render={(props) => <User {...props} />}
          />
        </Switch>
      </Container>
    </Router>
  );
};

export default App;
