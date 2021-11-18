const { expect } = require('@jest/globals');
const parser = require('../parser');
const MOCK_VALID_CONFIG_1 = ['-c', 'C0-A-C1-R0', '-i', 'input.txt', '-o', 'output.txt'];
const MOCK_VALID_CONFIG_2 = ['-c', 'C0-A-C1-R0', '-o', 'output.txt'];
const MOCK_VALID_CONFIG_3 = ['-c', 'C0-A-C1-R0', '-i', 'input.txt'];
const MOCK_VALID_CONFIG_4 = ['-c', 'C0-A-C1-R0'];
const MOCK_INVALID_CONFIG = ['-c', 'C0-A-C1-R2'];
const MOCK_INVALID_WITH_DUPL = ['-c', 'C0-A-C1-R0', '--config', 'C0-R1'];

describe('parser', () => {
  test('should have valid', () => {
    expect(parser(MOCK_VALID_CONFIG_1)).toStrictEqual({
      config: 'C0-A-C1-R0',
      inputFile: 'input.txt',
      outputFile: 'output.txt',
    });
    expect(parser(MOCK_VALID_CONFIG_2)).toStrictEqual({
      config: 'C0-A-C1-R0',
      inputFile: 'stdin',
      outputFile: 'output.txt',
    });
    expect(parser(MOCK_VALID_CONFIG_3)).toStrictEqual({
      config: 'C0-A-C1-R0',
      inputFile: 'input.txt',
      outputFile: 'stdout',
    });
    expect(parser(MOCK_VALID_CONFIG_4)).toStrictEqual({
      config: 'C0-A-C1-R0',
      inputFile: 'stdin',
      outputFile: 'stdout',
    });
  });

  test('should show error invalid config', () => {
    const mockExit = jest.spyOn(process, 'exit').mockImplementation(() => {});
    const mockStderr = jest.spyOn(process.stderr, 'write').mockImplementation(() => {});
    parser(MOCK_INVALID_CONFIG)
    expect(mockStderr).toHaveBeenCalledWith('Invalid config');
    expect(mockExit).toHaveBeenCalledWith(2);
  });

  test('should show error config includes Duplicate', () => {
    const mockExit = jest.spyOn(process, 'exit').mockImplementation(() => {});
    const mockStderr = jest.spyOn(process.stderr, 'write').mockImplementation(() => {});
    parser(MOCK_INVALID_WITH_DUPL)
    expect(mockStderr).toHaveBeenCalledWith('Config includes Duplicate');
    expect(mockExit).toHaveBeenCalledWith(2);
  });

});
