const is = require('./lib/is');

// public
module.exports = function toBeJsendErrorObject(actual) {
  try {
    return is(actual, 'Object') &&
      // Expect status & message props:
      actual.status === 'error' &&
      is(actual.message, 'String') && actual.message.length > 0;
  } catch (err) {
    return false;
  }
};
