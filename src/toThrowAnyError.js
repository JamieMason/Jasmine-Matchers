// public
module.exports = function toThrowAnyError(actual) {
  try {
    actual();
    return false;
  } catch (err) {
    return true;
  }
};
