import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button, Card, Row, Col, Badge } from 'react-bootstrap';

const DisplayUser = (props) => {
  const {
    name,
    avatar_url,
    company,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = props.user;

  const styles = {
    container: {
      backgroundColor: '#e0e0e0',
      padding: '1rem',
    },

    card: {
      width: '100%',
      margin: 'auto',
      textAlign: 'center',
      padding: '1rem',
    },

    image: {
      borderRadius: '50%',
      margin: 'auto',
      width: '200px',
      height: '200px',
      borderStyle: 'solid',
      borderColor: '#aaa',
    },

    column: {
      textAlign: 'left',
    },
  };

  return (
    <Container style={styles.container}>
      <Link to="/">
        <Button variant="primary">Go Back</Button>
      </Link>{' '}
      <br />
      <h4>
        Hireable:{' '}
        {hireable ? (
          <i className="fas fa-check"></i>
        ) : (
          <i className="fas fa-times"></i>
        )}
      </h4>
      <Card style={styles.card}>
        <Row>
          <Col sm>
            <img src={avatar_url} alt="Profile" style={styles.image} />
            <h3>{name}</h3>
            <h5>@{login}</h5>
            <h5>
              <i className="fa fa-globe"></i>
              {location}
            </h5>
          </Col>
          <Col sm className="justify-content-sm-center">
            {bio && (
              <h5>
                <i className="fa fa-info-circle"></i>
                {bio}
              </h5>
            )}{' '}
            {company && (
              <h5>
                <i className="fas fa-building"></i>
                {company}
              </h5>
            )}
            <a href={html_url} target="_blank" rel="noopener noreferrer">
              <Button className="btn btn-success">Visit GitHub Profile</Button>
            </a>
          </Col>
        </Row>
      </Card>
      <Card style={styles.card}>
        <Row className="justify-content-md-center">
          <h3>
            <Badge variant="primary" style={{ margin: '1rem' }}>
              Followers: {followers}
            </Badge>
          </h3>
          <h3>
            <Badge variant="success" style={{ margin: '1rem' }}>
              Following: {following}
            </Badge>
          </h3>
          <h3>
            <Badge variant="danger" style={{ margin: '1rem' }}>
              Public Repositories: {public_repos}
            </Badge>
          </h3>
          <h3>
            <Badge variant="warning" style={{ margin: '1rem' }}>
              Public Gists: {public_gists}
            </Badge>
          </h3>
        </Row>
      </Card>
    </Container>
  );
};

export default DisplayUser;
