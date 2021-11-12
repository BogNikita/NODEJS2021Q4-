const fs = require('fs');

function readStream(outputFile) {
  return fs.createReadStream(outputFile, 'utf8');
}

module.exports = readStream;
