const toBeJsendFailObject = require('./toBeJsendFailObject');

// public
module.exports = function toBeJsendFailString(actual) {
  try {
    return toBeJsendFailObject(JSON.parse(actual));
  } catch (err) {
    return false;
  }
};
