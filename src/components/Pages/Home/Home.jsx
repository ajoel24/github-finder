import React, { Fragment } from 'react';
import Users from '../../Users/Users';
import Search from '../../Search/Search';
import Alerts from '../../Layouts/Alerts/Alerts';

const Home = () => (
  <Fragment>
    <Alerts />
    <Search />
    <Users />
  </Fragment>
);

export default Home;
