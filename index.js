const parser = require('./parser');
const writeStream = require('./writeStream');
const readStream = require('./readStream');
const transformStream = require('./transformStream');

const { inputFile, outputFile } = parser(process.argv.slice(2));

(inputFile === 'stdin' ? process.stdin : readStream(inputFile))
  .pipe(transformStream)
  .pipe(outputFile === 'stdout' ? process.stdout : writeStream(outputFile));
