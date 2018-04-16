import { Switch, Route, Link } from 'react-router-dom';
import React from 'react';
import Vanilla from './1-Vanilla';
import WithStateHandlersCustom from './2-WithStateHandlers-custom';

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
      <Route path="/WithStateHandlersCustom" component={WithStateHandlersCustom} />
    </Switch>
  </main>
);
export default MyRoutes;
