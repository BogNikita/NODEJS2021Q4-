function encode(char) {
  if (
    (char.charCodeAt() > 64 && char.charCodeAt() < 83) ||
    (char.charCodeAt() > 96 && char.charCodeAt() < 115)
  ) {
    return String.fromCharCode(char.charCodeAt() + 8);
  }
  if (char.charCodeAt() > 82 && char.charCodeAt() <= 90) {
    return String.fromCharCode(char.charCodeAt() - 18);
  }
  if (char.charCodeAt() > 114 && char.charCodeAt() <= 122) {
    return String.fromCharCode(char.charCodeAt() - 18);
  }
  return char;
}

function decode(char) {
  if (
    (char.charCodeAt() > 73 && char.charCodeAt() <= 90) ||
    (char.charCodeAt() > 104 && char.charCodeAt() <= 122)
  ) {
    return String.fromCharCode(char.charCodeAt() - 8);
  }
  if (char.charCodeAt() < 73 && char.charCodeAt() >= 65) {
    return String.fromCharCode(char.charCodeAt() + 18);
  }
  if (char.charCodeAt() > 96 && char.charCodeAt() <= 104) {
    return String.fromCharCode(char.charCodeAt() + 18);
  }
  return char;
}

module.exports = {
  encode,
  decode,
};
