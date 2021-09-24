import calculate from '../../logic/calculate';

describe('tests for calculate function', () => {
  test('show buttonName when it is clicked', () => {
    const data = { total: 5, next: '', operation: '/' };
    const newData = calculate(data, '/');
    expect(newData.operation).toEqual('/');
    expect(newData.next).toEqual('');
  });

  test('should return empty values when AC clicked', () => {
    const data = { total: 12, next: '8', operation: '+' };
    const newdata = calculate(data, 'AC');
    expect(newdata).toEqual({ total: '', next: '', operation: null });
  });

  test('should change nexts sign', () => {
    const data = { total: 12, next: '8', operation: '+' };
    const newdata = calculate(data, '+/-');
    expect(newdata).toEqual({ total: 12, next: '-8', operation: '+'});
  });

  test('should put the value to total when = clicked', () => {
    const data = { total: 12, next: '8', operation: '+' };
    const newdata = calculate(data, '=');
    expect(newdata).toEqual({ total: '20', next: '', operation: null });
  });

  test('should change operation according to next', () => {
    const data = { total: 12, next: '8', operation: '+' };
    const newdata = calculate(data, '-');
    expect(newdata).toEqual({ total: 12, next: '8', operation: null });
  });

  test('should change operation according to next', () => {
    const data = { total: 12, next: '', operation: '+' };
    const newdata = calculate(data, '-');
    expect(newdata).toEqual({ total: 12, next: '', operation: '-' });
  });
});
