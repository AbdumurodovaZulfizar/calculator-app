import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ buttonNames, className, classNameTwo }) => (
  <button className={className} type="button">
    <h3 className={classNameTwo}>{buttonNames}</h3>
  </button>
);

Button.propTypes = {
  buttonNames: PropTypes.string,
  className: PropTypes.string,
  classNameTwo: PropTypes.string,
};

Button.defaultProps = {
  buttonNames: '1',
  classNameTwo: 'ordinary',
  className: 'ordinary',
};

export default Button;
