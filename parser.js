const fs = require('fs');
const checkDuplicate = require('./checkDuplicate');

function parser(arg) {
  const regEx = /^((A|(R(0|1))|(C(0|1)))-?)+$/;

  if (checkDuplicate(arg)) {
    process.stderr.write('Config includes Duplicate');
    process.exitCode = 4;
    process.exit();
  }

  const configAliasIndex = arg.findIndex((el) => el === '-c' || el === '--config');
  const inputAliasIndex = arg.findIndex((el) => el === '-i' || el === '--input');
  const outputAliasIndex = arg.findIndex((el) => el === '-o' || el === '--output');

  const config =
    ['-i', '-o'].includes(arg[configAliasIndex + 1]) || configAliasIndex === -1
      ? 'invalid'
      : arg[configAliasIndex + 1];
  const inputFile = ['-c', '-o'].includes(arg[inputAliasIndex + 1]) || inputAliasIndex === -1
    ? 'stdin'
    : arg[inputAliasIndex + 1];
  const outputFile = ['-c', '-i'].includes(arg[outputAliasIndex + 1]) || outputAliasIndex === -1
    ? 'stdout'
    : arg[outputAliasIndex + 1];

    if (config === 'invalid' || !config.match(regEx)) {
    process.stderr.write('Invalid config');
    process.exitCode = 2;
    process.exit();
  }

  if (inputFile !== 'stdin') {
    fs.access(inputFile, fs.constants.F_OK, (err) => {
      if (err) {
        process.stderr.write(`Input file ${inputFile} is not exist`);
        process.exitCode = 3;
        process.exit();
      }
    });
  }

  if (outputFile !== 'stdout') {
    fs.access(outputFile, fs.constants.F_OK, (err) => {
      if (err) {
        process.stderr.write(`Output file ${outputFile} is not exist`);
        process.exitCode = 3;
        process.exit();
      }
    });
  }

  return { config, inputFile, outputFile };
}

module.exports = parser;
