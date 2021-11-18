const { Transform } = require('stream');
const parsedRules = require('./parsedRules');
const parser = require('./parser');

const transformStream = new Transform({
  transform(chunk, encoding, callback) {
    const { config } = parser(process.argv.slice(2));

    const result = chunk
      .toString()
      .split('')
      .map((item) => parsedRules(item, config));
    callback(null, result.join(''));
  },
});

module.exports = transformStream;
