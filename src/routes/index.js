import React from 'react';
import { Switch, Route} from 'react-router-dom';

import Dashboard from '../pages/dashboard/index';
import Repository from '../pages/repository/index';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/repository" component={Repository} />
    </Switch>
  );
}