import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'react-bootstrap';

const Alerts = (props) => {
  const { type, message, onClose } = props;

  return (
    <Alert variant={type} onClose={onClose} dismissible>
      <h5>
        <i className={`fa fa-info-circle`} aria-hidden="true"></i>
        {message}
      </h5>
    </Alert>
  );
};

Alerts.propTypes = {
  type: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Alerts;
