import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

class UserItem extends Component {
  render() {
    const { id, login, avatar_url, html_url } = this.props.user;
    return (
      <Card
        border="primary"
        style={{ width: '20vw' }}
        id={id}
        className="text-center"
      >
        <Card.Title>{login}</Card.Title>
        <Card.Body>
          <img
            src={avatar_url}
            alt="User"
            style={{
              borderRadius: '50%',
              width: '5rem',
              height: '5rem',
              objectFit: 'cover',
            }}
          />
          <br />
          <br />
          <a href={html_url} rel="noopener noreferrer">
            <button className={`btn btn-primary`}>More Info</button>
          </a>
        </Card.Body>
      </Card>
    );
  }
}

export default UserItem;
