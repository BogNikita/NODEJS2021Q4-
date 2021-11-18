const ValidationError = require('./customError');
const fs = require('fs');
const errorHandler = require('./errorHandler');

function fileExist(file, type) {
  try {
    if (file !== 'stdin' && file !== 'stdout') {
      fs.accessSync(file, fs.constants.F_OK, (err) => {
        if (err) {
          errorHandler(`${type} file doesn't exist`);
        }
      });
    }
  } catch (error) {
    throw new ValidationError(`${type} file doesn't exist`);
  }
}

module.exports = fileExist;
