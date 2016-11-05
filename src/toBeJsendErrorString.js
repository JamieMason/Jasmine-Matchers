const toBeJsendErrorObject = require('./toBeJsendErrorObject');

// public
module.exports = function toBeJsendErrorString(actual) {
  try {
    return toBeJsendErrorObject(JSON.parse(actual));
  } catch (err) {
    return false;
  }
};
