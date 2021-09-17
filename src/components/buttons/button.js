import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  buttonNames, className, classNameTwo, handleClick,
}) => (
  <button className={className} type="button" onClick={() => handleClick(buttonNames)}>
    <h3 className={classNameTwo}>{buttonNames}</h3>
  </button>
);

Button.propTypes = {
  buttonNames: PropTypes.string,
  className: PropTypes.string,
  classNameTwo: PropTypes.string,
  handleClick: PropTypes.func,
};

Button.defaultProps = {
  buttonNames: '1',
  classNameTwo: 'ordinary',
  className: 'ordinary',
  handleClick: () => 'Error',
};

export default Button;
