const is = require('./lib/is');
var keys = require('./lib/keys');

// public
module.exports = function toBeJsendFailObject(actual) {
  try {
    return is(actual, 'Object') &&
      // Expect status & data props:
      // According to the spec, the data for a fail is "an object explaining what went wrong, typically a hash of validation errors".
      // In the spirit of that wording, this expects data to be a non-empty object.
      // More info: https://labs.omniti.com/labs/jsend
      actual.status === 'fail' &&
      is(actual.data, 'Object') &&
      keys(actual).length > 0;
  } catch (err) {
    return false;
  }
};
