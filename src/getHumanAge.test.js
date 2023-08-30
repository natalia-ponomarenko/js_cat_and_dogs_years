'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return an array', () => {
    expect(getHumanAge(28, 28))
      .toBeInstanceOf(Array);
  });

  test('should return an array', () => {
    expect(getHumanAge(14, 14))
      .toHaveLength(2);
  });

  test('should return zero human years if catAge is 0', () => {
    expect(getHumanAge(0, 15)).toEqual([0, 1]);
  });

  test('should return zero human years if dogAge is 0', () => {
    expect(getHumanAge(15, 0)).toEqual([1, 0]);
  });

  test('should return correct result', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });
});
