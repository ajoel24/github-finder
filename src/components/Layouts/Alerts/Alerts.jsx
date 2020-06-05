import React, { useContext } from 'react';
import { Alert } from 'react-bootstrap';
import AlertContext from '../../../context/alert/alertContext';

const Alerts = () => {
  const alertContext = useContext(AlertContext);

  const { alert, closeAlert } = alertContext;
  const { type, message } = alert !== null && alert;

  return (
    alert !== null && (
      <Alert variant={type} onClose={closeAlert} dismissible>
        <h5>
          <i className={`fa fa-info-circle`} aria-hidden="true"></i>
          {message}
        </h5>
      </Alert>
    )
  );
};

export default Alerts;
