import React from 'react';

export default () => (
  <div tabIndex="0" data-tooltip-trigger data-tooltip-target="#unique-tooltip" role="tooltip" className="bx--tooltip__trigger">
    <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <g fillRule="evenodd">
        <path d="M8 14.5a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13zM8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16z" fillRule="nonzero" />
        <path fillRule="nonzero" d="M9 13H7V7h2z" />
        <circle cx="8" cy="4" r="1" />
      </g>
    </svg>
  </div>
);
