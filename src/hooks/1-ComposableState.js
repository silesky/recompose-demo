/* HOVER TOGGLE */
import React from 'react';
import { useToggle } from './index';
import Tooltip from '../components/Tooltip';

/* we can reuse the state */
export const HoverTooltip = ({ children }) => {
  const { isOpen, toggleOpen } = useToggle();
  return (
    <span
      role="none"
      className="tooltip__hover"
      onMouseEnter={() => toggleOpen(true)}
      onMouseLeave={() => toggleOpen(false)}
    >
      {children}
      {isOpen && 'TOOLTIP MESSAGE' }
    </span>
  );
};

export default () => {
  return (
    <HoverTooltip>
      <Tooltip />
    </HoverTooltip>);
};
