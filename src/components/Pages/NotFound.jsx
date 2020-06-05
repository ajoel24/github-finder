import React from 'react';
import { Alert, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <Alert variant="danger">
      <Alert.Heading>Page not found</Alert.Heading>
      <p>
        The page you are looking for does not exist. Maybe you have entered an
        incorrect URL?
      </p>
      <hr />
      <p className="mb-0">
        <Link to="/">
          <Button variant="primary">Back to Home page</Button>
        </Link>
      </p>
    </Alert>
  );
};

export default NotFound;
