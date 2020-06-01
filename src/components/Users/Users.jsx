import React from 'react';
import PropTypes from 'prop-types';
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

Users.propTypes = {
  loading: PropTypes.bool.isRequired,
  users: PropTypes.array.isRequired,
};
export default Users;
