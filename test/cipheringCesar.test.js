const { expect } = require('@jest/globals');
const cipherinCesar = require('../cipheringCesar');

const MOCK_DATA_UPPER_CASE_FIRST = 'A';
const MOCK_DATA_UPPER_CASE_LAST = 'Z';
const MOCK_DATA_LOWER_CASE_FIRST = 'a';
const MOCK_DATA_LOWER_CASE_LAST = 'z';
const MOCK_DATA_SYMBOLS = '1'
const MOCK_DATA_RU = 'Й'

describe('cipherinCesar', () => {
  test('should change char to next', () => {
    expect(cipherinCesar.encode(MOCK_DATA_UPPER_CASE_FIRST)).toBe('B');
    expect(cipherinCesar.encode(MOCK_DATA_LOWER_CASE_FIRST)).toBe('b');
    expect(cipherinCesar.encode(MOCK_DATA_UPPER_CASE_LAST)).toBe('A');
    expect(cipherinCesar.encode(MOCK_DATA_LOWER_CASE_LAST)).toBe('a');
  });

  test('should change char only latin alphabet', () => {
    expect(cipherinCesar.encode(MOCK_DATA_SYMBOLS)).toBe('1');
    expect(cipherinCesar.encode(MOCK_DATA_RU)).toBe('Й');
  });

  test('should change char to prev', () => {
    expect(cipherinCesar.decode(MOCK_DATA_UPPER_CASE_FIRST)).toBe('Z');
    expect(cipherinCesar.decode(MOCK_DATA_LOWER_CASE_FIRST)).toBe('z');
    expect(cipherinCesar.decode(MOCK_DATA_UPPER_CASE_LAST)).toBe('Y');
    expect(cipherinCesar.decode(MOCK_DATA_LOWER_CASE_LAST)).toBe('y');
  });

  test('should change input only latin alphabet', () => {
    expect(cipherinCesar.decode(MOCK_DATA_SYMBOLS)).toBe('1');
    expect(cipherinCesar.decode(MOCK_DATA_RU)).toBe('Й');
  });


});