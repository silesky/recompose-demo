import React from 'react';
import {
  branch,
  compose,
  renderComponent,
  lifecycle,
  withStateHandlers,
} from 'recompose';
import { withCounterState, fetchDataFromApi } from './utils';


const Counter = ({ counter, add }) => {
  return (
    <div>
      <h1>counter: {counter}</h1>
      <button onClick={add}>+</button>
    </div>
  );
};

// use compose reverse + lifecycle
const withApiCall = compose(
  withStateHandlers(({ data = [] }) => ({ data }), {
    loadData: () => data => ({ data }),
  }),
  lifecycle({
    componentDidMount() {
      fetchDataFromApi().then(data => this.props.loadData(data));
    },
  }),
);
const withLoadingOrNot = branch(
  props => !props.data.length, // if no data, render
  renderComponent(() => <h2>Loading....</h2>),
);

export default compose(withCounterState, withApiCall, withLoadingOrNot)(Counter);
