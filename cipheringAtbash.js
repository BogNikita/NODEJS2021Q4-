function encode(char) {
  if (char.charCodeAt() > 64 && char.charCodeAt() < 91) {
    return String.fromCharCode(64 + (91 - char.charCodeAt()));
  }
  if (char.charCodeAt() > 96 && char.charCodeAt() < 123) {
    return String.fromCharCode(96 + (123 - char.charCodeAt()));
  }
  return char;
}

module.exports = {
  encode,
};
