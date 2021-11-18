function encode(char) {
  if (
    (char.charCodeAt() > 64 && char.charCodeAt() < 90) ||
    (char.charCodeAt() > 96 && char.charCodeAt() < 122)
  ) {
    return String.fromCharCode(char.charCodeAt() + 1);
  }
  if (char.charCodeAt() === 90) {
    return String.fromCharCode(65);
  }
  if (char.charCodeAt() === 122) {
    return String.fromCharCode(97);
  }
  return char;
}

function decode(char) {
  if (
    (char.charCodeAt() > 65 && char.charCodeAt() <= 90) ||
    (char.charCodeAt() > 97 && char.charCodeAt() <= 122)
  ) {
    return String.fromCharCode(char.charCodeAt() - 1);
  }
  if (char.charCodeAt() === 65) {
    return String.fromCharCode(90);
  }
  if (char.charCodeAt() === 97) {
    return String.fromCharCode(122);
  }
  return char;
}

module.exports = {
  encode,
  decode,
};
