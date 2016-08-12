// public
module.exports = function toBeJsonString(actual) {
  try {
    return JSON.parse(actual) !== null;
  } catch (err) {
    return false;
  }
};
