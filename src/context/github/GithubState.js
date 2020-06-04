import React, { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_DEFAULT_USERS,
  GET_USER,
  GET_USERS,
  GET_REPOS,
} from '../types';

const GithubState = (props) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // Get default users
  const getDefaultUsers = async () => {
    setLoading();
    const usersRes = await axios.get(
      `https://api.github.com/users?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
    );
    dispatch({
      type: GET_DEFAULT_USERS,
      payload: usersRes.data,
    });
  };

  // Search users
  const searchUsers = async (username) => {
    setLoading();
    const usersSearchRes = await axios.get(
      `https://api.github.com/search/users?q=${username}&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
    );
    dispatch({
      type: SEARCH_USERS,
      payload: usersSearchRes.data.items,
    });
  };

  // Get a single user
  const getUser = async (username) => {
    setLoading();
    const userSearchRes = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
    );
    dispatch({ type: GET_USER, payload: userSearchRes.data });
  };

  //  Get repos
  const getUserRepos = async (username) => {
    setLoading();
    const userSearchRes = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
    );
    dispatch({ type: GET_REPOS, payload: userSearchRes.data });
  };

  //  Clear users
  const clearUsers = () => dispatch({ type: CLEAR_USERS });

  //  Set loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        getDefaultUsers,
        clearUsers,
        getUser,
        getUserRepos,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
