const { Transform } = require('stream');
const parsedRules = require('./parsedRules');

const transformStream = new Transform({
  transform(chunk, encoding, callback) {
    const result = chunk.toString().split('').map(parsedRules);
    callback(null, result.join(''));
  },
});

module.exports = transformStream;
