const chiperCesar = require('./cipheringCesar');
const chiperAtbash = require('./cipheringAtbash');
const chiperROT8 = require('./cipheringROT8');
const parser = require('./parser');

const { config } = parser(process.argv.slice(2));

const queue = config.split('-');
const parsedRules = (char) => {
  for (let i = 0; i < queue.length; i++) {
    if (queue[i][0] === 'C') {
      char = queue[i][1] === '1' ? chiperCesar.encode(char) : chiperCesar.decode(char);
    }
    if (queue[i][0] === 'R') {
      char = queue[i][1] === '1' ? chiperROT8.encode(char) : chiperROT8.decode(char);
    }
    if (queue[i] === 'A') {
      char = chiperAtbash.encode(char);
    }
  }
  return char;
};

module.exports = parsedRules;
