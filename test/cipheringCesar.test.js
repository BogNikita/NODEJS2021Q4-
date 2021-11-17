const { expect } = require('@jest/globals');
const cipherinCesar = require('../cipheringCesar');

const MOCK_DATA_UPPER_CASE = 'A';
const MOCK_DATA_LOWER_CASE = 'a';
const MOCK_DATA_SYMBOLS = '1'
const MOCK_DATA_RU = 'Й'

describe('cipherinCesar', () => {
  test('should change char to next', () => {
    expect(cipherinCesar.encode(MOCK_DATA_UPPER_CASE)).toBe('B');
    expect(cipherinCesar.encode(MOCK_DATA_LOWER_CASE)).toBe('b');
  });

  test('should change char only latin alphabet', () => {
    expect(cipherinCesar.encode(MOCK_DATA_SYMBOLS)).toBe('1');
    expect(cipherinCesar.encode(MOCK_DATA_RU)).toBe('Й');
  });

  test('should change char to prev', () => {
    expect(cipherinCesar.decode(MOCK_DATA_UPPER_CASE)).toBe('Z');
    expect(cipherinCesar.decode(MOCK_DATA_LOWER_CASE)).toBe('z');
  });

  test('should change input only latin alphabet', () => {
    expect(cipherinCesar.decode(MOCK_DATA_SYMBOLS)).toBe('1');
    expect(cipherinCesar.decode(MOCK_DATA_RU)).toBe('Й');
  });


});