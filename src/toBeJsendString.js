const toBeJsendObject = require('./toBeJsendObject');

// public
module.exports = function toBeJsendString(actual) {
  try {
    return toBeJsendObject(JSON.parse(actual));
  } catch (err) {
    return false;
  }
};
