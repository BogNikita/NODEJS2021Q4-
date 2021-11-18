const errorHandler = (err) => {
  const { isCustom } = err;
  if (isCustom) {
    process.stderr.write(err.message);
    process.exit(2);
  } else {
    throw err;
  }
};

module.exports = errorHandler;
