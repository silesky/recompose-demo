import React from 'react';
import {
  branch,
  compose,
  renderComponent,
  lifecycle,
  withStateHandlers,
} from 'recompose';
import { withCounterState, fetchDataFromApi, Spinner } from '../utils';

const Counter = ({ counter, add }) => (
  <div>
    <h1>counter: {counter}</h1>
    <button onClick={add}>+</button>
  </div>
);

const withLoadData = compose(
  withStateHandlers(
    { data: [] },
    {
      loadData: () => data => ({ data }),
    },
  ),
  // fetch data
  lifecycle({
    componentDidMount() {
      fetchDataFromApi().then(data => this.props.loadData(data));
    },
  }),
  // if data still loading, render 'loading' message
  branch(
    props => !props.data.length,
    renderComponent(() => <Spinner />),
  ),
);

export default compose(withCounterState, withLoadData)(Counter);
