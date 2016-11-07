const toBeJsendFailObject = require('./toBeJsendFailObject');
const toBeJsendErrorObject = require('./toBeJsendErrorObject');
const toBeJsendSuccessObject = require('./toBeJsendSuccessObject');

// public
module.exports = function toBeJsendObject(actual) {
  try {
    return Boolean(actual) && Boolean(actual.status) && (toBeJsendSuccessObject(actual) || toBeJsendErrorObject(actual) || toBeJsendFailObject(actual));
  } catch (err) {
    return false;
  }
};
