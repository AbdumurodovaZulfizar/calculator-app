import React from 'react';
import Button from './buttons/button';

// /* eslint-disable */

const ordinaries = ['AC', '+/-', '%', '7', '8', '9', '4', '5', '6', '1', '2', '3'];
const lasts = ['.', '='];
const oranges = ['/', 'x', '-', '+'];

const ButtonPanel = () => (
  <div className="buttonPanel row p-0 m-0">
    <div className="ordinaries col-9 p-0">
      {ordinaries.map((numbers) => (
        <Button
          className="ordinary"
          buttonNames={numbers}
          classNameTwo="color"
          key={numbers}
        />
      ))}
      <Button
        className="width-half"
        buttonNames="0"
        classNameTwo="color"
        key="0"
      />
      {lasts.map((last) => (
        <Button
          className="ordinary"
          buttonNames={last}
          classNameTwo="color"
          key={last}
        />
      ))}
    </div>
    <div className="oranges col-3 p-0">
      {oranges.map((orange) => (
        <Button
          className="orange"
          buttonNames={orange}
          classNameTwo=""
          key={orange}
        />
      ))}
    </div>
  </div>
);

export default ButtonPanel;
