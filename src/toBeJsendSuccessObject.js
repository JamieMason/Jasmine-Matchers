const is = require('./lib/is');

// public
module.exports = function toBeJsendSuccessObject(actual) {
  try {
    return is(actual, 'Object') &&
      // Expect status & data props:
      actual.status === 'success' &&
      (actual.data === null ||
        is(actual.data, 'Object') ||
        is(actual.data, 'Array') ||
        is(actual.data, 'String') ||
        is(actual.data, 'Number') ||
        is(actual.data, 'Boolean')
      );
  } catch (err) {
    return false;
  }
};
