import React, { lazy, Suspense } from "react";
import { Redirect, Route, Switch } from 'react-router-dom';
import Loading from 'components/shared-components/Loading';

const Main = ({ match }) => (
  <Suspense fallback={<Loading cover="content"/>}>
    <Switch>
      <Route path={`${match.url}/users`} component={lazy(() => import(`./users`))} />
      {/* <Redirect from={`${match.url}`} to={`${match.url}/users`} /> */}
    </Switch>
  </Suspense>
);

export default Main;