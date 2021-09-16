import React from 'react';
import PropTypes from 'prop-types';
/*eslint-disable*/
const Button = ({ buttonNames, className, classNameTwo}) => (
  <button className={className}>
    <h3 className={classNameTwo}>{buttonNames}</h3>
  </button>
);

Button.propTypes = {
  buttonNames: PropTypes.string,
  handleClick: PropTypes.func,
};

export default Button;
