// modules
var toBeNumber = require('./toBeNumber');

// public
module.exports = function toBeWholeNumber(actual) {
  return toBeNumber(actual) && (
        actual === 0 || actual % 1 === 0
    );
};
