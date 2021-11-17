const { expect } = require('@jest/globals');
const parsedRules = require('../parsedRules');

const MOCK_STR = 'This is secret. Message about "_" symbol!';
const MOCK_CONFIG_1 = 'C1-C1-R0-A';
const MOCK_CONFIG_2 = 'C1-C0-A-R1-R0-A-R0-R0-C1-A';
const MOCK_CONFIG_3 = 'A-A-A-R1-R0-R0-R0-C1-C1-A';
const MOCK_CONFIG_4 = 'C1-R1-C0-C0-A-R0-R1-R1-A-C1';

describe('parsedRule', () =>
  test('should check depending on configuration', () => {
    const result1 = MOCK_STR.split('')
      .map((item) => parsedRules(item, MOCK_CONFIG_1))
      .join('');
    const result2 = MOCK_STR.split('')
      .map((item) => parsedRules(item, MOCK_CONFIG_2))
      .join('');
    const result3 = MOCK_STR.split('')
      .map((item) => parsedRules(item, MOCK_CONFIG_3))
      .join('');
    const result4 = MOCK_STR.split('')
      .map((item) => parsedRules(item, MOCK_CONFIG_4))
      .join('');
    expect(result1).toBe('Myxn xn nbdobm. Tbnnfzb ferlm "_" nhteru!');
    expect(result2).toBe('Vhgw gw wkmxkv. Ckwwoik onauv "_" wqcnad!');
    expect(result3).toBe('Hvwg wg gsqfsh. Asggous opcih "_" gmapcz!');
    expect(result4).toBe('This is secret. Message about "_" symbol!');
  }));
