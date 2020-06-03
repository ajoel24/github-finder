import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SpinnerItem from '../Layouts/Spinner/SpinnerItem';
import DisplayUser from './DisplayUser';

class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
    this.props.getUserRepos(this.props.match.params.login);
  }

  render() {
    const { loading, user, repos } = this.props;
    return loading ? (
      <SpinnerItem />
    ) : (
      <DisplayUser user={user} repos={repos} />
    );
  }
}

User.propTypes = {
  user: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  getUser: PropTypes.func.isRequired,
  getUserRepos: PropTypes.func.isRequired,
};

export default User;
