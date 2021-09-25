import operate from '../../logic/operate';

test('it should do the given opration', () => {
  const add = operate('4', '6', '+');
  const div = operate('6', '3', '/');
  const mult = operate('2', '3', 'x');
  const minus = operate('10', '4', '-');
  const percent = operate('2', '2', '%');

  expect(add).toEqual('10');
  expect(div).toEqual('2');
  expect(mult).toEqual('6');
  expect(minus).toEqual('6');
  expect(percent).toEqual('0.04');
});
