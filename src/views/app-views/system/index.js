import React, { lazy, Suspense } from "react";
import { Redirect, Route, Switch } from 'react-router-dom';
import Loading from 'components/shared-components/Loading';

const System = ({ match }) => (
  <Suspense fallback={<Loading cover="content"/>}>
    <Switch>
      <Route path={`${match.url}/settings`} component={lazy(() => import(`./settings`))} />
      <Route path={`${match.url}/mobile`} component={lazy(() => import(`./mobile`))} />
      <Route path={`${match.url}/logs`} component={lazy(() => import(`./logs`))} />
      <Redirect from={`${match.url}`} to={`${match.url}/settings`} />
    </Switch>
  </Suspense>
);

export default System;