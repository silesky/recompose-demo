import React from 'react';

/* we can make our own */
const withStateHandlers = (initialState, handlers) => (Component) => {
  return class extends React.Component {
    state = initialState;
    render() {
      const handlersWithState = handlers.map((eachHandler) => {
        return (prevState) => {
          const newState = eachHandler(prevState);
          this.setState(() => newState);
        };
      });
      return <Component {...handlersWithState} {...this.props} />;
    }
  };
};

export default withStateHandlers;
