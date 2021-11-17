const { expect } = require('@jest/globals');
const cipheringAtbash = require('../cipheringAtbash');

const MOCK_DATA_UPPER_CASE = 'A';
const MOCK_DATA_LOWER_CASE = 'a';


const MOCK_DATA_SYMBOLS = '1'

const MOCK_DATA_RU = 'Й'

describe('cipheringAtbash', () => {
  test('should change input', () => {
    expect(cipheringAtbash.encode(MOCK_DATA_UPPER_CASE)).toBe('Z');
    expect(cipheringAtbash.encode(MOCK_DATA_LOWER_CASE)).toBe('z');
  });

  test('should change input only latin alphabet', () => {
    expect(cipheringAtbash.encode(MOCK_DATA_SYMBOLS)).toBe('1');
    expect(cipheringAtbash.encode(MOCK_DATA_RU)).toBe('Й');
  });


});