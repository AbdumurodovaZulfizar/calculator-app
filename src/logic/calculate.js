import operate from './operate';

const calculate = (object, buttonNames) => {
  const NewObj = { ...object };

  let { total, next, operation } = NewObj;
  if (buttonNames === 'AC') {
    total = '';
    next = '';
    operation = null;
  } else if (buttonNames === '.') {
    next = next === null ? `${0}${buttonNames}` : `${next}${buttonNames}`;
  } else if (
    buttonNames === '+'
    || buttonNames === '-'
    || buttonNames === '*'
    || buttonNames === '/'
    || buttonNames === '%'
  ) {
    operation = !next ? buttonNames : null;
  } else if (buttonNames === '+/-') {
    if (next) {
      next = (next * -1).toString();
    } else if (total) {
      total = (total * -1).toString();
    }
  } else if (buttonNames === '=') {
    total = operate(total, next, operation);
    next = '';
    operation = null;
  } else if (!operation) {
    total += buttonNames;
  } else {
    next += buttonNames;
  }
  return { total, next, operation };
};

export default calculate;
