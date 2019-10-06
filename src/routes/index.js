import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Signin from '~/pages/Signin';
import Signup from '~/pages/Signup';
import Meetups from '~/pages/Meetups';
import Profile from '~/pages/Profile';
import Details from '~/pages/Meetups/Details';
import EditMeetup from '~/pages/Meetups/EditMeetup';
import NewMeetup from '~/pages/Meetups/NewMeetup';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Signin} />
      <Route path="/register" component={Signup} />
      <Route path="/profile" component={Profile} isPrivate />
      <Route path="/meetups" exact component={Meetups} isPrivate />
      <Route path="/meetups/new" exact component={NewMeetup} isPrivate />
      <Route path="/meetups/:id" exact component={Details} isPrivate />
      <Route path="/meetups/edit/:id" component={EditMeetup} isPrivate />

      <Route path="/" component={() => <h1>404</h1>} />
    </Switch>
  );
}
