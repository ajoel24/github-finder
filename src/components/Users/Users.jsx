import React, { Component } from 'react';
import UserItem from './UserItem';
import { CardDeck } from 'react-bootstrap';

class Users extends Component {
  constructor() {
    super();
    this.state = {
      users: [
        {
          id: '1',
          login: 'defunkt',
          avatar_url: 'https://avatars0.githubusercontent.com/u/2?v=4',
          html_url: 'https://github.com/defunkt',
        },
        {
          id: '2',
          login: 'defunkt',
          avatar_url: 'https://avatars0.githubusercontent.com/u/2?v=4',
          html_url: 'https://github.com/defunkt',
        },
        {
          id: '3',
          login: 'defunkt',
          avatar_url: 'https://avatars0.githubusercontent.com/u/2?v=4',
          html_url: 'https://github.com/defunkt',
        },
      ],
    };
  }

  generateUser(user) {
    return <UserItem key={user.id} user={user} />;
  }

  render() {
    return <CardDeck>{this.state.users.map(this.generateUser)}</CardDeck>;
  }
}

export default Users;
