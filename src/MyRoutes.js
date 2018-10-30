import { Switch, Route, Link } from 'react-router-dom';
import React from 'react';
import Vanilla from './hoc/1-Vanilla';
import WithStateHandlers from './hoc/2-WithStateHandlers';
import MyBranch from './hoc/3-Branch';
import WithReducer from './hoc/4-WithReducer';
// hooks
import { State, ComposableState } from './hooks';

const Home = () => (
  <span>
    <span>
      <h1>HOC</h1>
      <menu>
        <Link to="vanilla">vanilla</Link>
        <Link to="withStateHandlers">withStateHandlers</Link>
        <Link to="withReducer">withReducer</Link>
        <Link to="Branch">Branch, Lifecycle, Compose</Link>
      </menu>
    </span>
    <span>
      <h1>hoc</h1>
      <menu>
        <Link to="State">State</Link>
        <Link to="ComposableState">ComposableState</Link>
      </menu>
    </span>
  </span>
);

const MyRoutes = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/Vanilla" component={Vanilla} />
      <Route path="/WithStateHandlers" component={WithStateHandlers} />
      <Route path="/WithReducer" component={WithReducer} />
      <Route path="/Branch" component={MyBranch} />
      <Route path="/State" component={State} />
      <Route path="/ComposableState" component={ComposableState} />
    </Switch>
  </main>
);
export default MyRoutes;
