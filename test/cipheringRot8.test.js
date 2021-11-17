const { expect } = require('@jest/globals');
const cipherinROT8 = require('../cipheringROT8');

const MOCK_DATA_UPPER_CASE_FIRST = 'A';
const MOCK_DATA_UPPER_CASE_LAST = 'Z';
const MOCK_DATA_LOWER_CASE_FIRST = 'a';
const MOCK_DATA_LOWER_CASE_LAST = 'z';
const MOCK_DATA_SYMBOLS = '1'
const MOCK_DATA_RU = 'Й'

describe('cipherinROT8', () => {
  test('should change char to next', () => {
    expect(cipherinROT8.encode(MOCK_DATA_UPPER_CASE_FIRST)).toBe('I');
    expect(cipherinROT8.encode(MOCK_DATA_LOWER_CASE_FIRST)).toBe('i');
    expect(cipherinROT8.encode(MOCK_DATA_UPPER_CASE_LAST)).toBe('H');
    expect(cipherinROT8.encode(MOCK_DATA_LOWER_CASE_LAST)).toBe('h');
  });

  test('should change char only latin alphabet', () => {
    expect(cipherinROT8.encode(MOCK_DATA_SYMBOLS)).toBe('1');
    expect(cipherinROT8.encode(MOCK_DATA_RU)).toBe('Й');
  });

  test('should change char to prev', () => {
    expect(cipherinROT8.decode(MOCK_DATA_UPPER_CASE_FIRST)).toBe('S');
    expect(cipherinROT8.decode(MOCK_DATA_LOWER_CASE_FIRST)).toBe('s');
    expect(cipherinROT8.decode(MOCK_DATA_UPPER_CASE_LAST)).toBe('R');
    expect(cipherinROT8.decode(MOCK_DATA_LOWER_CASE_LAST)).toBe('r');
  });

  test('should change input only latin alphabet', () => {
    expect(cipherinROT8.decode(MOCK_DATA_SYMBOLS)).toBe('1');
    expect(cipherinROT8.decode(MOCK_DATA_RU)).toBe('Й');
  });


});