const { expect } = require('@jest/globals');
const checkDuplicate = require('../checkDuplicate');

const ARG_WITH_DUPL = ['-c', '--config'];
const ARG_WITHOUT_DUPL = ['-c', '--input'];

describe('checkDuplicate', () => {

  test('should dont have duplicate in arg', () => {
    expect(checkDuplicate(ARG_WITHOUT_DUPL)).toBe(true);
  });

  test('should show error message', () => {
    expect(() => checkDuplicate(ARG_WITH_DUPL)).toThrowError(new Error('Config includes Duplicate'));
  });
});
