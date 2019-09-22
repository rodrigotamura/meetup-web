import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Signin from '~/pages/Signin';
import Signup from '~/pages/Signup';
import Dashboard from '~/pages/Dashboard';
import Profile from '~/pages/Profile';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Signin} />
      <Route path="/register" exact component={Signup} />
      <Route path="/dashboard" exact component={Dashboard} isPrivate />
      <Route path="/profile" exact component={Profile} isPrivate />
    </Switch>
  );
}
