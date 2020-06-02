import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const Navigation = (props) => {
  const { icon, title } = props;

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">
        <i className={icon}></i>
        {title}
      </Navbar.Brand>
      <Nav variant="tabs" activeKey="/">
        <Nav.Item>
          <Link to="/">
            <Nav.Link href="/">Home</Nav.Link>
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/about">
            <Nav.Link href="/about">About</Nav.Link>
          </Link>
        </Nav.Item>
      </Nav>
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
