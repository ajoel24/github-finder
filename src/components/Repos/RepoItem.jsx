import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';

const RepoItem = (props) => {
  const { name, description, updated_at, git_url } = props.repo;
  return (
    <Card>
      <Card.Header>
        <h4>{name}</h4>
      </Card.Header>
      <Card.Body>
        <Card.Text>{description}</Card.Text>
        <a href={git_url} target="_blank" rel="noopener noreferrer">
          <Button variant="success">Show in GitHub</Button>
        </a>
      </Card.Body>
      <Card.Footer>Last updated at: {updated_at}</Card.Footer>
    </Card>
  );
};

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired,
};

export default RepoItem;
