import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import User from './pages/User';
import Department from './pages/Department';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/users" component={User} />
      <Route path="/departments" component={Department} />
    </Switch>
  );
}
