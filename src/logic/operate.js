import Big from 'big.js';

const operate = (number1, number2, operation) => {
  if (!number1 || !number2 || !operation) return '0';

  const numberOne = Number(number1);
  const numberTwo = Number(number2);

  switch (operation) {
    case '+':
      return (Big(numberOne).plus(Big(numberTwo))).toString();
    case '-':
      return (Big(numberOne).minus(Big(numberTwo))).toString();
    case '/':
      if (numberTwo === 0) {
        return 'Error';
      }
      return (Big(numberOne).div(Big(numberTwo))).toString();
    case 'x':
      return (Big(numberOne).times(Big(numberTwo))).toString();
    case '%':
      if (numberTwo === 0) {
        return 'Error';
      }
      return ((Big(numberOne).times(Big(numberTwo))).div(100)).toString();
    default:
      return null;
  }
};

export default operate;
