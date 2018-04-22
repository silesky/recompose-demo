import { Switch, Route, Link } from 'react-router-dom';
import React from 'react';
import Vanilla from './1-Vanilla';
import WithStateHandlers from './2-WithStateHandlers';
import MyBranch from './3-Branch';

const Home = () => (
  <menu>
    <Link to="vanilla">vanilla</Link>
    <Link to="withStateHandlers">withStateHandlers</Link>
    <Link to="Branch">Branch, Lifecycle, Compose</Link>
  </menu>
);

const MyRoutes = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/Vanilla" component={Vanilla} />
      <Route path="/WithStateHandlers" component={WithStateHandlers} />
      <Route path="/Branch" component={MyBranch} />
    </Switch>
  </main>
);
export default MyRoutes;
