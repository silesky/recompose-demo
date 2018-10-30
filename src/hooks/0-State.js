/* DROPDOWN TOGGLE */
import React from 'react';


/*  Dropdown with reduceer */
const reducer = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE':
      return action.payload === undefined ? !state : action.payload;
  }
};

export const useToggle = () => {
  const [isOpen, dispatch] = React.useReducer(reducer);

  const toggleOpen = (status = !isOpen) => dispatch({ type: 'TOGGLE', payload: status });
  /*
   Can be done with state as well

   const [isOpen, setOpen] = React.useState(false);
   const toggleOpen = (status = !isOpen) => setOpen(status);
   */


  return {
    isOpen,
    toggleOpen,
  };
};


const Menu = () => (
  <ul>
    <li>Foo</li>
    <li>Bar</li>
    <li>Baz</li>
    <li>Foobar</li>
    <li>Foobaz</li>
  </ul>
);


const Dropdown = () => {
  const { isOpen, toggleOpen } = useToggle();
  return (
    <div>
      <h1>Dropdown - Toggle</h1>
      <button onClick={() => toggleOpen()}>Open</button>
      { isOpen && (<Menu />) }
    </div>);
};

export default () => {
  return (
    <React.Fragment>
      <Dropdown />
    </React.Fragment>
  );
};
