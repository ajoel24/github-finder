import React from 'react';
import PropTypes from 'prop-types';
import { Navbar } from 'react-bootstrap';

const Navigation = (props) => {
  const { icon, title } = props;

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">
        <i className={icon}></i>
        {title}
      </Navbar.Brand>
    </Navbar>
  );
};

Navigation.defaultProps = {
  icon: 'fab fa-github',
  title: 'GitHub Finder',
};

Navigation.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Navigation;
