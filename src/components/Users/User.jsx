import React, { useEffect, useContext } from 'react';
import SpinnerItem from '../Layouts/Spinner/SpinnerItem';
import DisplayUser from './DisplayUser';
import GithubContext from '../../context/github/githubContext';

const User = (props) => {
  const githubContext = useContext(GithubContext);
  const { getUser, user, loading, repos, getUserRepos } = githubContext;

  const paramName = props.match.params.login;

  useEffect(() => {
    getUser(paramName);
    getUserRepos(paramName);
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return loading ? <SpinnerItem /> : <DisplayUser user={user} repos={repos} />;
};

export default User;
