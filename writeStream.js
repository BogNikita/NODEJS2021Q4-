const fs = require('fs');

function writeStream(outputFile) {
  return fs.createWriteStream(outputFile, {
    flags: 'a',
    encoding: 'utf8',
  });
}

module.exports = writeStream;
