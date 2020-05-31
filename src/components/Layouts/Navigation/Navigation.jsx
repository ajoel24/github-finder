import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Navbar } from 'react-bootstrap';

class Navigation extends Component {
  static defaultProps = {
    title: 'GitHub Finder',
    icon: 'fas fa-github',
  };

  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  };

  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">
          <i className={this.props.icon}></i>
          {this.props.title}
        </Navbar.Brand>
      </Navbar>
    );
  }
}

export default Navigation;
