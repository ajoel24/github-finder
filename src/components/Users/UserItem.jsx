import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

const UserItem = (props) => {
  const { id, login, avatar_url } = props.user;
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
        <Link to={`/users/${login}`} rel="noopener noreferrer">
          <button className={`btn btn-primary`}>More Info</button>
        </Link>
      </Card.Body>
    </Card>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
