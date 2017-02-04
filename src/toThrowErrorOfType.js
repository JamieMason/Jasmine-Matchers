// public
module.exports = (type, actual) => {
  try {
    actual();
    return false;
  } catch (err) {
    return err.name === type;
  }
};
