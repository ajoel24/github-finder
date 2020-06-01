import React from 'react';
import { Spinner } from 'react-bootstrap';

const SpinnerItem = () => (
  <Spinner
    animation="border"
    role="status"
    style={{
      position: 'absolute',
      top: '50vh',
      left: '50vw',
      right: '50vw',
      bottom: '50vh',
      scale: '2',
    }}
  >
    <span className="sr-only">Loading...</span>
  </Spinner>
);

export default SpinnerItem;
