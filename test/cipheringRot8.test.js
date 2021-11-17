const { expect } = require('@jest/globals');
const cipherinROT8 = require('../cipheringROT8');

const MOCK_DATA_UPPER_CASE = 'A';
const MOCK_DATA_LOWER_CASE = 'a';
const MOCK_DATA_SYMBOLS = '1'
const MOCK_DATA_RU = 'Й'

describe('cipherinROT8', () => {
  test('should change char to next', () => {
    expect(cipherinROT8.encode(MOCK_DATA_UPPER_CASE)).toBe('I');
    expect(cipherinROT8.encode(MOCK_DATA_LOWER_CASE)).toBe('i');
  });

  test('should change char only latin alphabet', () => {
    expect(cipherinROT8.encode(MOCK_DATA_SYMBOLS)).toBe('1');
    expect(cipherinROT8.encode(MOCK_DATA_RU)).toBe('Й');
  });

  test('should change char to prev', () => {
    expect(cipherinROT8.decode(MOCK_DATA_UPPER_CASE)).toBe('S');
    expect(cipherinROT8.decode(MOCK_DATA_LOWER_CASE)).toBe('s');
  });

  test('should change input only latin alphabet', () => {
    expect(cipherinROT8.decode(MOCK_DATA_SYMBOLS)).toBe('1');
    expect(cipherinROT8.decode(MOCK_DATA_RU)).toBe('Й');
  });


});