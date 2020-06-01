import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Jumbotron } from 'react-bootstrap';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
    };
  }

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.username.trim() === '') {
      this.props.setAlert('warning', 'Please enter a username');
    } else {
      this.props.searchUsers(this.state.username);
      this.setState({ username: '' });
    }
  };

  handleClear = (e) => {
    this.props.clearUsers();
  };

  render() {
    return (
      <Jumbotron>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="search">
            <Form.Label>Search</Form.Label>
            <Form.Control
              type="text"
              name="username"
              placeholder="Type a username"
              value={this.state.username}
              onChange={this.handleChange}
            />
            <Form.Text className="text-muted">
              Find the details of GitHub users.
            </Form.Text>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
          {this.props.showClear && (
            <Button variant="secondary" type="clear" onClick={this.handleClear}>
              Clear Users
            </Button>
          )}
        </Form>
      </Jumbotron>
    );
  }
}

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired,
};

export default Search;
