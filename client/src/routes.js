import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Alert from './pages/Alert';
import Home from './pages/Home';
import NewAlert from './pages/NewAlert';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/alerts" component={Alert} exact />
        <Route path="/alerts/new" component={NewAlert} />
      </Switch>
    </BrowserRouter>
  );
};
