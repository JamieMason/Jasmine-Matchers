const toBeJsendSuccessObject = require('./toBeJsendSuccessObject');

// public
module.exports = function toBeJsendSuccessString(actual) {
  try {
    return toBeJsendSuccessObject(JSON.parse(actual));
  } catch (err) {
    return false;
  }
};
