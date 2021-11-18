const checkDuplicate = require('./checkDuplicate');
const ValidationError = require('./customError');
const errorHandler = require('./errorHandler');
const fileExist = require('./fileExist');

function parser(arg) {
  const regEx = /^((A|(R(0|1))|(C(0|1)))-?)+$/;
  try {
    checkDuplicate(arg);

    const configAliasIndex = arg.findIndex((el) => el === '-c' || el === '--config');
    const inputAliasIndex = arg.findIndex((el) => el === '-i' || el === '--input');
    const outputAliasIndex = arg.findIndex((el) => el === '-o' || el === '--output');

    const config =
      ['-i', '-o'].includes(arg[configAliasIndex + 1]) || configAliasIndex === -1
        ? 'invalid'
        : arg[configAliasIndex + 1];
    const inputFile =
      ['-c', '-o'].includes(arg[inputAliasIndex + 1]) || inputAliasIndex === -1
        ? 'stdin'
        : arg[inputAliasIndex + 1];
    const outputFile =
      ['-c', '-i'].includes(arg[outputAliasIndex + 1]) || outputAliasIndex === -1
        ? 'stdout'
        : arg[outputAliasIndex + 1];

    if (config === 'invalid' || !config.match(regEx)) {
      throw new ValidationError('Invalid config')
    }

    fileExist(inputFile, 'Input');

    fileExist(outputFile, 'Output');

    return { config, inputFile, outputFile };
  } catch (error) {
    errorHandler(error);
  }
}

module.exports = parser;
