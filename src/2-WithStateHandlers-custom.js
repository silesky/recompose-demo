import React from 'react';
/* home-made implementation */

const withStateHandlers = (initialState, handlers) => (Component) => {
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

const state = { counter: 0 };
const handlers = {
  add: ({ counter }) => ({
    counter: counter + 1,
  }),
};

const Counter = ({ counter, add }) => {
  return (
    <div>
      <h1>counter: {counter}</h1>
      <button onClick={add}>+</button>
    </div>
  );
};

export default withStateHandlers(state, handlers)(Counter);
