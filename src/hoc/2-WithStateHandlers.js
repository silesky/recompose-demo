import React from 'react';
import { withStateHandlers } from 'recompose';
/* Generic implementation of withStateHandlers */
import { CounterStateless } from './1-Vanilla';

const withStateHandlersCustom = (initialState, handlers) => (Component) => {
  return class extends React.Component {
    state = initialState;
    createHandlers(handlerObj) {
      // pass in an object that looks like { add: (state) => state.counter + 1 }, dynamically create handlers.
      const handlersWithState = Object.keys(handlerObj).map((k) => {
        return {
          [k]: () => {
            const eachHandlerFn = handlers[k];
            const newState = eachHandlerFn(this.state);
            this.setState(newState);
          },
        };
      });
      // flatten into object.
      return Object.assign(...handlersWithState);
    }

    render() {
      return (
        <Component
          {...this.createHandlers(handlers)}
          {...this.state}
          {...this.props}
        />
      );
    }
  };
};

export default withStateHandlers(
  { isOpen: true },
  { handleOpen: ({ isOpen }) => (openStatus = !openStatus) => ({ isOpen: openStatus }) },
)(CounterStateless);


/*
Recompose implementation
.
.
.
.
.
.
.
.
*/
