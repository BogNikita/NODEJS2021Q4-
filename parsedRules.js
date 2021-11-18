const chiperCesar = require('./cipheringCesar');
const chiperAtbash = require('./cipheringAtbash');
const chiperROT8 = require('./cipheringROT8');

const parsedRules = (char, config) => {
  const queue = config.split('-');
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
