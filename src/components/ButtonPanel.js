import React from 'react';
import PropTypes from 'prop-types';
import Button from './buttons/button';

const ordinaries = ['AC', '+/-', '%', '7', '8', '9', '4', '5', '6', '1', '2', '3'];
const lasts = ['.'];
const oranges = ['/', 'x', '-', '+', '='];

const ButtonPanel = ({ handleClick }) => (
  <div className="buttonPanel row p-0 m-0" data-testid="panel">
    <div className="ordinaries col-9 p-0">
      {ordinaries.map((numbers) => (
        <Button
          className="ordinary"
          buttonNames={numbers}
          classNameTwo="color"
          key={numbers}
          handleClick={handleClick}
        />
      ))}
      <Button
        className="width-half"
        buttonNames="0"
        classNameTwo="color"
        key="0"
        handleClick={handleClick}
      />
      {lasts.map((last) => (
        <Button
          className="ordinary"
          buttonNames={last}
          classNameTwo="color"
          key={last}
          handleClick={handleClick}
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
          handleClick={handleClick}
        />
      ))}
    </div>
  </div>
);

ButtonPanel.propTypes = {
  handleClick: PropTypes.func,
};

ButtonPanel.defaultProps = {
  handleClick: () => 'Error',
};

export default ButtonPanel;
