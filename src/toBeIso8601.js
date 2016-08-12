// modules
var toBeString = require('./toBeString');

// public
module.exports = toBeIso8601;

// implementation
var format = {
  '2013-07-08': [4, '-', 2, '-', 2],
  '2013-07-08T07:29': [4, '-', 2, '-', 2, 'T', 2, ':', 2],
  '2013-07-08T07:29:15': [4, '-', 2, '-', 2, 'T', 2, ':', 2, ':', 2],
  '2013-07-08T07:29:15.863': [4, '-', 2, '-', 2, 'T', 2, ':', 2, ':', 2, '.', 3],
  '2013-07-08T07:29:15.863Z': [4, '-', 2, '-', 2, 'T', 2, ':', 2, ':', 2, '.', 3, 'Z']
};

function toBeIso8601(actual) {
  if (!toBeString(actual)) {
    return false;
  }
  if (
    matches(format['2013-07-08'], actual) ||
    matches(format['2013-07-08T07:29'], actual) ||
    matches(format['2013-07-08T07:29:15'], actual) ||
    matches(format['2013-07-08T07:29:15.863'], actual) ||
    matches(format['2013-07-08T07:29:15.863Z'], actual)
  ) {
    return new Date(actual).toString() !== 'Invalid Date';
  }
  return false;
}

function matches(pattern, string) {
  var regex = new RegExp('^' + pattern.map(escapeTerm).join('') + '$');
  return string.search(regex) !== -1;
}

function escapeTerm(term) {
  if (term === '-') {
    return '\\-';
  }
  if (typeof term === 'string') {
    return term;
  }
  return '([0-9]{' + term + '})';
}
