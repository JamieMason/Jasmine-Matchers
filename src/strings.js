/**
 * @alias    toBeString
 * @summary  <code>expect(string).toBeString();</code>
 */
matchers.toBeString = function() {
  return priv.is(this.actual, 'String');
};

/**
 * @alias    toBeEmptyString
 * @summary  <code>expect(string).toBeEmptyString();</code>
 */
matchers.toBeEmptyString = function() {
  return this.actual === '';
};

/**
 * @alias    toBeNonEmptyString
 * @summary  <code>expect(string).toBeNonEmptyString();</code>
 */
matchers.toBeNonEmptyString = function() {
  return matchers.toBeString.call(this) &&
    this.actual.length > 0;
};

/**
 * @alias    toBeHtmlString
 * @summary  <code>expect(string).toBeHtmlString();</code>
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
  return matchers.toBeString.call(this) &&
    this.actual.search(/<("[^"]*"|'[^']*'|[^'">])*>/) !== -1;
};

/**
 * @alias    toBeJsonString
 * @summary  <code>expect(string).toBeJsonString();</code>
 */
matchers.toBeJsonString = function() {
  var isParseable;
  var json;
  try {
    json = JSON.parse(this.actual);
  } catch (e) {
    isParseable = false;
  }
  return isParseable !== false &&
    json !== null;
};

/**
 * @alias    toBeWhitespace
 * @summary  <code>expect(string).toBeWhitespace();</code>
 */
matchers.toBeWhitespace = function() {
  return matchers.toBeString.call(this) &&
    this.actual.search(/\S/) === -1;
};

/**
 * @alias    toStartWith
 * @summary  <code>expect(string).toStartWith(expected:String);</code>
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
 * @alias    toEndWith
 * @summary  <code>expect(string).toEndWith(expected:String);</code>
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
 * @alias    toBeLongerThan
 * @summary  <code>expect(string).toBeLongerThan(other:String);</code>
 */
matchers.toBeLongerThan = function(other) {
  return matchers.toBeString.call(this) &&
    matchers.toBeString.call({
      actual: other
    }) &&
    this.actual.length > other.length;
};

/**
 * @alias    toBeShorterThan
 * @summary  <code>expect(string).toBeShorterThan(other:String);</code>
 */
matchers.toBeShorterThan = function(other) {
  return matchers.toBeString.call(this) &&
    matchers.toBeString.call({
      actual: other
    }) &&
    this.actual.length < other.length;
};

/**
 * @alias    toBeSameLengthAs
 * @summary  <code>expect(string).toBeSameLengthAs(other:String);</code>
 */
matchers.toBeSameLengthAs = function(other) {
  return matchers.toBeString.call(this) &&
    matchers.toBeString.call({
      actual: other
    }) &&
    this.actual.length === other.length;
};
