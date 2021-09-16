import React from 'react';
import PropTypes from 'prop-types';

export default function Display({ previousVal, currentVal }) {
  return (
    <>
      <div className="">
        <h5 className="previous m-0">{previousVal}</h5>
      </div>
      <div className="">
        <h3 className="current m-0">{currentVal}</h3>
      </div>
    </>
  );
}

/* eslint-disable*/

Display.propTypes = {
  previousVal: PropTypes.string,
  currentVal: PropTypes.string,
}
