import { Switch, Route } from 'react-router-dom';
import React from 'react';
import Home from './Home';
import Vanilla from './1-Vanilla';
import WithStateHandlers from './2-WithStateHandlers';

const MyRoutes = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/vanilla" component={Vanilla} />
      <Route path="/withStateHandlers" component={WithStateHandlers} />
    </Switch>
  </main>
);
export default MyRoutes;
