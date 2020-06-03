import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import RepoItem from './RepoItem';
import { CardColumns } from 'react-bootstrap';

const Repos = (props) => {
  return (
    <Fragment>
      <h2>Repositories</h2>
      <CardColumns>
        {props.repos.map((repo) => (
          <RepoItem repo={repo} key={repo.id} />
        ))}
      </CardColumns>
    </Fragment>
  );
};

Repos.propTypes = {
  repos: PropTypes.array.isRequired,
};

export default Repos;
