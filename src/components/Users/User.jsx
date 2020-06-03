import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import SpinnerItem from '../Layouts/Spinner/SpinnerItem';
import DisplayUser from './DisplayUser';

const User = (props) => {
  const { loading, user, repos, getUser, getUserRepos } = props;
  const paramName = props.match.params.login;

  useEffect(() => {
    getUser(paramName);
    getUserRepos(paramName);
  }, []);

  return loading ? <SpinnerItem /> : <DisplayUser user={user} repos={repos} />;
};

User.propTypes = {
  user: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  getUser: PropTypes.func.isRequired,
  getUserRepos: PropTypes.func.isRequired,
  repos: PropTypes.array.isRequired,
};

export default User;
