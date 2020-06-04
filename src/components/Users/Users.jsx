import React, { useContext } from 'react';
import { CardColumns } from 'react-bootstrap';
import UserItem from './UserItem';
import SpinnerItem from '../Layouts/Spinner/SpinnerItem';
import GithubContext from '../../context/github/githubContext';

const generateUser = (user) => <UserItem key={user.id} user={user} />;

const Users = () => {
  const githubContext = useContext(GithubContext);
  const { loading, users } = githubContext;
  return loading ? (
    <SpinnerItem />
  ) : (
    <CardColumns>{users.map(generateUser)}</CardColumns>
  );
};
export default Users;
