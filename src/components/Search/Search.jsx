import React, { Component } from 'react';
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
    console.log(this.state);
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
        </Form>
      </Jumbotron>
    );
  }
}

export default Search;
