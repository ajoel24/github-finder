import React from 'react';
import { CardColumns } from 'react-bootstrap';
import UserItem from './UserItem';
import SpinnerItem from '../Layouts/Spinner/SpinnerItem';

const generateUser = (user) => <UserItem key={user.id} user={user} />;

const Users = (props) =>
  props.loading ? (
    <SpinnerItem />
  ) : (
    <CardColumns>{props.users.map(generateUser)}</CardColumns>
  );

export default Users;
