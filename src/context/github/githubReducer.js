import {
  GET_DEFAULT_USERS,
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS,
} from '../types';

export default (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_LOADING:
      return { ...state, loading: true };
    case SEARCH_USERS:
    case GET_DEFAULT_USERS:
      return { ...state, users: payload, loading: false };
    case CLEAR_USERS:
      return { ...state, users: [], loading: false };
    case GET_USER:
      return { ...state, user: payload, loading: false };
    case GET_REPOS:
      return { ...state, repos: payload, loading: false };
    default:
      return state;
  }
};
