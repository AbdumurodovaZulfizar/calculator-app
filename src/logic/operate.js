import Big from 'big.js';

const operate = (number1, number2, operation) => {
  if (!number1 || !number2 || !operation) return '0';

  const numberOne = Number(number1);
  const numberTwo = Number(number2);

  switch (operation) {
    case '+':
      return (Big(numberOne) + Big(numberTwo)).toString();
    case '-':
      return (Big(numberOne) - Big(numberTwo)).toString();
    case '/':
      return (Big(numberOne) / Big(numberTwo)).toString();
    case '*':
      return (Big(numberOne) * Big(numberTwo)).toString();
    case '%':
      return ((Big(numberOne) * Big(numberTwo)) / 100).toString();
    default:
      return null;
  }
};

export default operate;
