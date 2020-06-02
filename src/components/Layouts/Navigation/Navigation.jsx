import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const Navigation = (props) => {
  const { icon, title } = props;

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={Link} to="/">
        <i className={icon}></i>
        {title}
      </Navbar.Brand>

      <Navbar.Collapse>
        <Nav variant="pills" activeKey="/">
          <Nav.Item eventkey={1} href="/">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item eventkey={1} href="/about">
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
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
