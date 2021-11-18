const ValidationError = require("./customError");

function checkDuplicate(arr) {
  const obj = arr.reduce((acc, item) => {
    if (item.includes('--')) {
      const sliceItem = item.slice(1, 3);
      acc[sliceItem] = (acc[sliceItem] + 1) | 0;
    } else {
      acc[item] = (acc[item] + 1) | 0;
    }
    return acc;
  }, {});
  const result = Object.values(obj).some((el) => el > 0);
  if (result) {
    throw new ValidationError('Config includes Duplicate')
  }
  return true;
}

module.exports = checkDuplicate;
