import Big from 'big.js';

const operate = (number1, number2, operation) => {
  const numberOne = Number(number1);
  const numberTwo = Number(number2);

  switch (operation) {
    case '+':
      return Big(numberOne) + Big(numberTwo);
    case '-':
      return Big(numberOne) - Big(numberTwo);
    case '/':
      return Big(numberOne) / Big(numberTwo);
    case '*':
      return Big(numberOne) * Big(numberTwo);
    case '%':
      return Big(numberOne) % Big(numberTwo);
    default:
      return null;
  }
};

export default operate;
