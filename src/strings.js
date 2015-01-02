/**
 * @file Strings
 *
 * @description
 * See {@link http://git.io/jasmine-string-testing|Unit testing Strings with Jasmine}.
 */

/**
 * @alias
 * expect(string):toBeString
 *
 * @summary
 * Assert subject is a String.
 *
 * @return {Boolean}
 */
matchers.toBeString = function() {
  return priv.is(this.actual, 'String');
};

/**
 * @alias
 * expect(string):toBeEmptyString
 *
 * @summary
 * Assert subject is a String of length 0.
 *
 * @return {Boolean}
 */
matchers.toBeEmptyString = function() {
  return this.actual === '';
};

/**
 * @alias
 * expect(string):toBeNonEmptyString
 *
 * @summary
 * Assert subject is a String with at least 1 character.
 *
 * @return {Boolean}
 */
matchers.toBeNonEmptyString = function() {
  return matchers.toBeString.call(this) && this.actual.length > 0;
};

/**
 * @alias
 * expect(string):toBeHtmlString
 *
 * @summary
 * Assert subject is string containing HTML Markup.
 *
 * @return {Boolean}
 */
matchers.toBeHtmlString = function() {
  // <           start with opening tag "<"
  //  (          start group 1
  //    "[^"]*"  allow string in "double quotes"
  //    |        OR
  //    '[^']*'  allow string in "single quotes"
  //    |        OR
  //    [^'">]   cant contains one single quotes, double quotes and ">"
  //  )          end group 1
  //  *          0 or more
  // >           end with closing tag ">"
  return matchers.toBeString.call(this) && this.actual.search(/<("[^"]*"|'[^']*'|[^'">])*>/) !== -1;
};

/**
 * @alias
 * expect(string):toBeJsonString
 *
 * @summary
 * Assert subject is string containing parseable JSON.
 *
 * @return {Boolean}
 */
matchers.toBeJsonString = function() {
  var isParseable;
  var json;
  try {
    json = JSON.parse(this.actual);
  } catch (e) {
    isParseable = false;
  }
  return isParseable !== false && json !== null;
};

/**
 * @alias
 * expect(string):toBeWhitespace
 *
 * @summary
 * Assert subject is a String containing nothing but whitespace.
 *
 * @return {Boolean}
 */
matchers.toBeWhitespace = function() {
  return matchers.toBeString.call(this) && this.actual.search(/\S/) === -1;
};

/**
 * @alias
 * expect(string):toStartWith
 *
 * @summary
 * Assert subject is a String whose first characters match our expected string.
 *
 * @param  {String} expected
 * @return {Boolean}
 */
matchers.toStartWith = function(expected) {
  if (!matchers.toBeNonEmptyString.call(this) || !matchers.toBeNonEmptyString.call({
    actual: expected
  })) {
    return false;
  }
  return this.actual.slice(0, expected.length) === expected;
};

/**
 * @alias
 * expect(string):toEndWith
 *
 * @summary
 * Assert subject is a String whose last characters match our expected string.
 *
 * @param  {String} expected
 * @return {Boolean}
 */
matchers.toEndWith = function(expected) {
  if (!matchers.toBeNonEmptyString.call(this) || !matchers.toBeNonEmptyString.call({
    actual: expected
  })) {
    return false;
  }
  return this.actual.slice(this.actual.length - expected.length, this.actual.length) === expected;
};

/**
 * @alias
 * expect(string):toBeLongerThan
 *
 * @summary
 * Assert subject is a String whose length is greater than our other string.
 *
 * @param  {String} other
 * @return {Boolean}
 */
matchers.toBeLongerThan = function(other) {
  return matchers.toBeString.call(this) && matchers.toBeString.call({
    actual: other
  }) && this.actual.length > other.length;
};

/**
 * @alias
 * expect(string):toBeShorterThan
 *
 * @summary
 * Assert subject is a String whose length is greater than our other string.
 *
 * @param  {String} other
 * @return {Boolean}
 */
matchers.toBeShorterThan = function(other) {
  return matchers.toBeString.call(this) && matchers.toBeString.call({
    actual: other
  }) && this.actual.length < other.length;
};

/**
 * @alias
 * expect(string):toBeSameLengthAs
 *
 * @summary
 * Assert subject is a String whose length is equal to our other string.
 *
 * @param  {String} other
 * @return {Boolean}
 */
matchers.toBeSameLengthAs = function(other) {
  return matchers.toBeString.call(this) && matchers.toBeString.call({
    actual: other
  }) && this.actual.length === other.length;
};
