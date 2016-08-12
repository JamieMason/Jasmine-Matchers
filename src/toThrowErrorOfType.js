// public
module.exports = function toThrowErrorOfType(type, actual) {
  try {
    actual();
    return false;
  } catch (err) {
    return err.name === type;
  }
};
