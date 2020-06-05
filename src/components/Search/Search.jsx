import React, { useState, useContext } from 'react';
import { Form, Button, Jumbotron } from 'react-bootstrap';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

  const { clearUsers, users } = githubContext;
  const { createAlert } = alertContext;

  const [username, setUsername] = useState('');

  const handleChange = (e) => setUsername(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() === '') {
      createAlert('warning', 'Please enter a username');
    } else {
      githubContext.searchUsers(username);
      setUsername('');
    }
  };

  const handleClear = () => {
    clearUsers();
  };

  return (
    <Jumbotron>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="search">
          <Form.Label>Search</Form.Label>
          <Form.Control
            type="text"
            name="username"
            placeholder="Type a username"
            value={username}
            onChange={handleChange}
          />
          <Form.Text className="text-muted">
            Find the details of GitHub users.
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit" style={{ marginRight: '1rem' }}>
          Submit
        </Button>
        {users.length > 0 && (
          <Button variant="secondary" type="clear" onClick={handleClear}>
            Clear Users
          </Button>
        )}
      </Form>
    </Jumbotron>
  );
};

export default Search;
