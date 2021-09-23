import React, { useState } from 'react';
import '../App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

const App = () => {
  const [total, setTotal] = useState('');
  const [next, setNext] = useState('');
  const [operation, setOperation] = useState(null);

  const handleClick = (buttonName) => {
    const data = { total, next, operation };
    const calc = calculate(data, buttonName);
    setTotal(calc.total);
    setNext(calc.next);
    setOperation(calc.operation);
  };

  return (
    <>
      <Display total={total} next={next} operation={operation} />
      <ButtonPanel handleClick={handleClick} />
    </>
  );
};

export default App;
