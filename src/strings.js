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
    return matchers.toBeString.call(this) && this.actual.search(/<([a-z]+)([^<]+)*(?:>(.*)<\/\1>|\s+\/>)/) !== -1;
  };

  /**
   * Assert subject is a String containing nothing but whitespace
   * @return {Boolean}
   */
  matchers.toBeWhitespace = function() {
    return priv.is(this.actual, 'String') && this.actual.search(/\S/) === -1;
  };

  /**
   * Assert subject is a String which matches the supplied RegExp
   * @param {RegExp} regex
   * @return {Boolean}
   */
  matchers.toMatchRegExp = function(regex) {
    return priv.is(this.actual, 'String') && this.actual.search(regex) !== -1;
  };
