import {
  mapProps,
  compose,
} from 'recompose';
import { times2 } from './utils';
import { withCounterReducer } from '../4-WithReducer';

// you choose what props to pass in
const withMappedProps = mapProps(({ state, dispatch }) => ({
  labelText: times2(state.counter),
  onChange: () => dispatch({ type: 'ADD' }),
}));

export default compose(
  withCounterReducer,
  withMappedProps,
);
