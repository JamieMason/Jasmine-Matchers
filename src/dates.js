/**
 * @alias    toBeDate
 * @summary  <code>expect(date).toBeDate();</code>
 */
matchers.toBeDate = function() {
  return priv.is(this.actual, 'Date');
};

function isIso8601(string, pattern) {
  var returnValue = string.search(
    new RegExp('^' + pattern.map(function(term) {
      if (term === '-') {
        return '\\-';
      } else if (typeof term === 'string') {
        return term;
      } else {
        return '([0-9]{' + term + '})';
      }
    }).join('') + '$')
  ) !== -1;
  return returnValue;
}

/**
 * @alias    toBeIso8601
 * @summary  <code>expect(string).toBeIso8601();</code>
 */
matchers.toBeIso8601 = function() {

  if (!matchers.toBeString.call(this)) {
    return false;
  }

  if (isIso8601(this.actual, [
      // 2013-07-08
      4, '-', 2, '-', 2
    ]) || isIso8601(this.actual, [
      // 2013-07-08T07:29
      4, '-', 2, '-', 2, 'T', 2, ':', 2
    ]) || isIso8601(this.actual, [
      // 2013-07-08T07:29:15
      4, '-', 2, '-', 2, 'T', 2, ':', 2, ':', 2
    ]) || isIso8601(this.actual, [
      // 2013-07-08T07:29:15.863
      4, '-', 2, '-', 2, 'T', 2, ':', 2, ':', 2, '.', 3
    ]) || isIso8601(this.actual, [
      // 2013-07-08T07:29:15.863Z
      4, '-', 2, '-', 2, 'T', 2, ':', 2, ':', 2, '.', 3, 'Z'
    ])) {
    return new Date(this.actual).toString() !== 'Invalid Date';
  }

  return false;

};

/**
 * @alias    toBeBefore
 * @summary  <code>expect(date).toBeBefore(date);</code>
 */
matchers.toBeBefore = function(date) {
  return matchers.toBeDate.call(this) &&
    matchers.toBeDate.call({
      actual: date
    }) &&
    this.actual.getTime() < date.getTime();
};

/**
 * @alias    toBeAfter
 * @summary  <code>expect(date).toBeAfter(date);</code>
 */
matchers.toBeAfter = function(date) {
  return matchers.toBeBefore.call({
    actual: date
  }, this.actual);
};
