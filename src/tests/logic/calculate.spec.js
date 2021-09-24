import calculate from '../../logic/calculate';

describe('tests for calculate function', () => {
  test('show buttonName when it is clicked', () => {
    const data = { total: 5, next: '', operation: '/' };
    const newData = calculate(data, '/');
    expect(newData.operation).toEqual('/');
    expect(newData.next).toEqual('');
  });
});
