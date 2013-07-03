  // Strings
  // ---------------------------------------------------------------------------

  /**
   * Assert subject is a String
   * @return {Boolean}
   */
  matchers.toBeString = function() {
    return priv.is(this.actual, 'String');
  };

  /**
   * @return {Boolean}
   */
  matchers.toBeEmptyString = function() {
    return this.actual === '';
  };

  /**
   * @return {Boolean}
   */
  matchers.toBeNonEmptyString = function() {
    return matchers.toBeString.call(this) && this.actual.length > 0;
  };

  /**
   * Assert subject is string containing HTML Markup
   * @return {Boolean}
   */
  matchers.toBeHtmlString = function() {
    return matchers.toMatchRegExp.call(this, /<([a-z]+)([^<]+)*(?:>(.*)<\/\1>|\s+\/>)/);
  };

  /**
   * Assert subject is a String containing nothing but whitespace
   * @return {Boolean}
   */
  matchers.toBeWhitespace = function() {
    return matchers.toBeString.call(this) && this.actual.search(/\S/) === -1;
  };

  /**
   * Assert subject is a String which matches the supplied RegExp
   * @param {RegExp} regex
   * @return {Boolean}
   */
  matchers.toMatchRegExp = function(regex) {
    return matchers.toBeString.call(this) && this.actual.search(regex) !== -1;
  };

  /**
   * Assert subject is a String whose first characters match our expected string
   * @param  {String} expected
   * @return {Boolean}
   */
  matchers.toStartWith = function (expected) {
    if (!matchers.toBeNonEmptyString.call(this) || !matchers.toBeNonEmptyString.call({ actual: expected })) {
      return false;
    }
    return this.actual.slice(0, expected.length) === expected;
  };

  /**
   * Assert subject is a String whose last characters match our expected string
   * @param  {String} expected
   * @return {Boolean}
   */
  matchers.toEndWith = function (expected) {
    if (!matchers.toBeNonEmptyString.call(this) || !matchers.toBeNonEmptyString.call({ actual: expected })) {
      return false;
    }
    return this.actual.slice(this.actual.length - expected.length, this.actual.length) === expected;
  };

  /**
   * Assert subject is a String whose length is greater than our other string
   * @param  {String} other
   * @return {Boolean}
   */
  matchers.toBeLongerThan = function (other) {
    return matchers.toBeString.call(this) && matchers.toBeString.call({
      actual: other
    }) && this.actual.length > other.length;
  };

  /**
   * Assert subject is a String whose length is less than our other string
   * @param  {String} other
   * @return {Boolean}
   */
  matchers.toBeShorterThan = function (other) {
    return matchers.toBeString.call(this) && matchers.toBeString.call({
      actual: other
    }) && this.actual.length < other.length;
  };

  /**
   * Assert subject is a String whose length is equal to our other string
   * @param  {String} other
   * @return {Boolean}
   */
  matchers.toBeSameLengthAs = function (other) {
    return matchers.toBeString.call(this) && matchers.toBeString.call({
      actual: other
    }) && this.actual.length === other.length;
  };

