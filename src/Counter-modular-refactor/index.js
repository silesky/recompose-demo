import React from 'react';
import withLogic from './logic';
import Button from './components/Button';
import Label from './components/Label';

const Counter = ({ labelText, onChange }) => (
  <div>
    <h1>I am a Counter</h1>
    <Button onChange={() => onChange} />
    <Label labelText={labelText} />
  </div>
);

export default withLogic(Counter);
