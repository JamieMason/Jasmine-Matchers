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
    '1999-12-31': /^(\d{4})-(\d{2})-(\d{2})$/,
    '1999-12-31T23:59': /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})$/,
    '1999-12-31T23:59:59': /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})$/,
    '1999-12-31T23:59:59.000': /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})\.(\d{3})$/,
    '1999-12-31T23:59:59.000Z': /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})\.(\d{3})Z$/
  };
  return actual.search(patterns[pattern]) !== -1;
}
