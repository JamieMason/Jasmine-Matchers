const toBeString = require('./toBeString');
const toBeValidDate = require('./toBeValidDate');

module.exports = actual =>
  toBeString(actual) && (
    isMatch('1999-12-31', actual) ||
    isMatch('1999-12-31T23:59', actual) ||
    isMatch('1999-12-31T23:59:59', actual) ||
    isMatch('1999-12-31T23:59:59.000', actual) ||
    isMatch('1999-12-31T23:59:59.000Z', actual)
  ) &&
  toBeValidDate(new Date(actual));

function isMatch(pattern, actual) {
  const patterns = {
    '1999-12-31': /^([0-9]{4})-([0-9]{2})-([0-9]{2})$/,
    '1999-12-31T23:59': /^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2})$/,
    '1999-12-31T23:59:59': /^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2}):([0-9]{2})$/,
    '1999-12-31T23:59:59.000': /^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2}):([0-9]{2})\.([0-9]{3})$/,
    '1999-12-31T23:59:59.000Z': /^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2}):([0-9]{2})\.([0-9]{3})Z$/
  };
  return actual.search(patterns[pattern]) !== -1;
}
