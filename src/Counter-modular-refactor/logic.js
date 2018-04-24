import { mapProps, compose, withReducer } from 'recompose';
import { times2 } from './utils';

export default compose(
  withReducer('state', 'dispatch', (state = { counter: 0 }, action) => {
    switch (action.type) {
      case 'ADD':
        return { ...state, counter: state.counter + 1 };
      default:
        return state;
    }
  }),
  mapProps(({ state, dispatch }) => ({
    labelText: times2(state.counter),
    onChange: () => dispatch({ type: 'ADD' }),
  })),
);
