import React, { useEffect, useContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Navigation from '../Layouts/Navigation/Navigation';
import User from '../Users/User';
import About from '../Pages/About/About';
import Home from '../Pages/Home';
import NotFound from '../Pages/NotFound';
import './App.css';
import GithubContext from '../../context/github/githubContext';

const App = () => {
  const githubContext = useContext(GithubContext);

  useEffect(() => {
    githubContext.getDefaultUsers();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Router>
      <Navigation icon="fab fa-github" title="GitHub Finder" />
      <Container>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/users/:login" component={User} />
          <Route component={NotFound} />
        </Switch>
      </Container>
    </Router>
  );
};

export default App;
