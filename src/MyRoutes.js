import { Switch, Route, Link } from 'react-router-dom';
import React from 'react';
import Vanilla from './1-Vanilla';
import WithStateHandlers from './2-WithStateHandlers';

const Home = () => (
  <menu>
    <Link to="Vanilla">Vanilla</Link>
    <Link to="WithStateHandlersCustom">WithStateHandlersCustom</Link>
  </menu>
);

const MyRoutes = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/Vanilla" component={Vanilla} />
      <Route path="/WithStateHandlersCustom" component={WithStateHandlers} />
    </Switch>
  </main>
);
export default MyRoutes;
