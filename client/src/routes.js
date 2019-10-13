import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Alert from './pages/Alert';
import Home from './pages/Home';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/alerts" component={Alert} />
      </Switch>
    </BrowserRouter>
  );
};
