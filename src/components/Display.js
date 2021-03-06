import React from 'react';
import PropTypes from 'prop-types';

export default function Display({ total, next, operation }) {
  return (
    <>
      <div data-testid="display">
        <h5 className="previous m-0 font">
          {total || '0'}
          {operation}
          {next}
        </h5>
      </div>
    </>
  );
}

Display.propTypes = {
  total: PropTypes.string,
  next: PropTypes.string,
  operation: PropTypes.string,
};

Display.defaultProps = {
  total: '',
  next: '',
  operation: '',
};
