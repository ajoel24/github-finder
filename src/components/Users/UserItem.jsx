import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

const UserItem = ({ user: { id, login, avatar_url, html_url } }) => {
  return (
    <Card
      border="primary"
      style={{ minWidth: '20vw' }}
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
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
