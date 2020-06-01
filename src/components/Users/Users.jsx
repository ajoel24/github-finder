import React, { Component } from 'react';
import UserItem from './UserItem';
import { CardColumns } from 'react-bootstrap';

class Users extends Component {
  generateUser(user) {
    return <UserItem key={user.id} user={user} />;
  }

  render() {
    return <CardColumns>{this.props.users.map(this.generateUser)}</CardColumns>;
  }
}

export default Users;
