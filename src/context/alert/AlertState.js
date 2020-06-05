import React, { useReducer } from 'react';
import AlertReducer from './alertReducer';
import AlertContext from './alertContext';
import { SET_ALERT, REMOVE_ALERT } from '../types';

const AlertState = (props) => {
  const initialState = null;
  const [state, dispatch] = useReducer(AlertReducer, initialState);

  // Create alert
  const createAlert = (type, message) => {
    dispatch({ type: SET_ALERT, payload: { type, message } });
    setTimeout(() => closeAlert(), 2000);
  };

  const closeAlert = () => dispatch({ type: REMOVE_ALERT });

  return (
    <AlertContext.Provider value={{ alert: state, createAlert, closeAlert }}>
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
