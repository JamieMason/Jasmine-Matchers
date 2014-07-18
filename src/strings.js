  // Strings
  // ---------------------------------------------------------------------------

  /**
   * @name toBeString
   *
   * @description
   * Assert subject is a String.
   *
   * @example
   * See {@link http://git.io/jasmine-string-testing|Unit testing Strings with Jasmine}.
   *
   * @return {Boolean}
   */
  matchers.toBeString = function() {
    return priv.is(this.actual, 'String');
  };

  /**
   * @name toBeEmptyString
   *
   * @description
   * Assert subject is a String of length 0.
   *
   * @example
   * See {@link http://git.io/jasmine-string-testing|Unit testing Strings with Jasmine}.
   *
   * @return {Boolean}
   */
  matchers.toBeEmptyString = function() {
    return this.actual === '';
  };

  /**
   * @name toBeNonEmptyString
   *
   * @description
   * Assert subject is a String with at least 1 character.
   *
   * @example
   * See {@link http://git.io/jasmine-string-testing|Unit testing Strings with Jasmine}.
   *
   * @return {Boolean}
   */
  matchers.toBeNonEmptyString = function() {
    return matchers.toBeString.call(this) && this.actual.length > 0;
  };

  /**
   * @name toBeHtmlString
   *
   * @description
   * Assert subject is string containing HTML Markup.
   *
   * @example
   * See {@link http://git.io/jasmine-string-testing|Unit testing Strings with Jasmine}.
   *
   * @return {Boolean}
   */
  matchers.toBeHtmlString = function() {
    var container = document.createElement('div');
    container.innerHTML = this.actual;
    return matchers.toBeString.call(this) && priv.some(container.childNodes, function(node) {
      return node.nodeType !== 3;
    });
  };

  /**
   * @name toBeJsonString
   *
   * @description
   * Assert subject is string containing parseable JSON.
   *
   * @example
   * See {@link http://git.io/jasmine-string-testing|Unit testing Strings with Jasmine}.
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
   * @name toBeWhitespace
   *
   * @description
   * Assert subject is a String containing nothing but whitespace.
   *
   * @example
   * See {@link http://git.io/jasmine-string-testing|Unit testing Strings with Jasmine}.
   *
   * @return {Boolean}
   */
  matchers.toBeWhitespace = function() {
    return matchers.toBeString.call(this) && this.actual.search(/\S/) === -1;
  };

  /**
   * @name toStartWith
   *
   * @description
   * Assert subject is a String whose first characters match our expected string.
   *
   * @example
   * See {@link http://git.io/jasmine-string-testing|Unit testing Strings with Jasmine}.
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
   * @name toEndWith
   *
   * @description
   * Assert subject is a String whose last characters match our expected string.
   *
   * @example
   * See {@link http://git.io/jasmine-string-testing|Unit testing Strings with Jasmine}.
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
   * @name toBeLongerThan
   *
   * @description
   * Assert subject is a String whose length is greater than our other string.
   *
   * @example
   * See {@link http://git.io/jasmine-string-testing|Unit testing Strings with Jasmine}.
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
   * @name toBeShorterThan
   *
   * @description
   * Assert subject is a String whose length is greater than our other string.
   *
   * @example
   * See {@link http://git.io/jasmine-string-testing|Unit testing Strings with Jasmine}.
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
   * @name toBeSameLengthAs
   *
   * @description
   * Assert subject is a String whose length is equal to our other string.
   *
   * @example
   * See {@link http://git.io/jasmine-string-testing|Unit testing Strings with Jasmine}.
   *
   * @param  {String} other
   * @return {Boolean}
   */
  matchers.toBeSameLengthAs = function(other) {
    return matchers.toBeString.call(this) && matchers.toBeString.call({
      actual: other
    }) && this.actual.length === other.length;
  };

  // String Members
  // ---------------------------------------------------------------------------

  /**
   * @name toHaveEmptyString
   *
   * @description
   * .
   *
   * @example
   * See {@link http://git.io/jasmine-string-testing|Unit testing Strings with Jasmine}.
   *
   * @param  {String} memberName
   * @return {Boolean}
   */
  matchers.toHaveEmptyString = function(memberName) {
    return priv.assertMember.call(this, 'toBeEmptyString', memberName);
  };

  /**
   * @name toHaveHtmlString
   *
   * @description
   * .
   *
   * @example
   * See {@link http://git.io/jasmine-string-testing|Unit testing Strings with Jasmine}.
   *
   * @param  {String} memberName
   * @return {Boolean}
   */
  matchers.toHaveHtmlString = function(memberName) {
    return priv.assertMember.call(this, 'toBeHtmlString', memberName);
  };

  /**
   * @name toHaveJsonString
   *
   * @description
   * .
   *
   * @example
   * See {@link http://git.io/jasmine-string-testing|Unit testing Strings with Jasmine}.
   *
   * @param  {String} memberName
   * @return {Boolean}
   */
  matchers.toHaveJsonString = function(memberName) {
    return priv.assertMember.call(this, 'toBeJsonString', memberName);
  };

  /**
   * @name toHaveNonEmptyString
   *
   * @description
   * .
   *
   * @example
   * See {@link http://git.io/jasmine-string-testing|Unit testing Strings with Jasmine}.
   *
   * @param  {String} memberName
   * @return {Boolean}
   */
  matchers.toHaveNonEmptyString = function(memberName) {
    return priv.assertMember.call(this, 'toBeNonEmptyString', memberName);
  };

  /**
   * @name toHaveString
   *
   * @description
   * .
   *
   * @example
   * See {@link http://git.io/jasmine-string-testing|Unit testing Strings with Jasmine}.
   *
   * @param  {String} memberName
   * @return {Boolean}
   */
  matchers.toHaveString = function(memberName) {
    return priv.assertMember.call(this, 'toBeString', memberName);
  };

  /**
   * @name toHaveStringLongerThan
   *
   * @description
   * .
   *
   * @example
   * See {@link http://git.io/jasmine-string-testing|Unit testing Strings with Jasmine}.
   *
   * @param  {String} memberName
   * @param  {String} other
   * @return {Boolean}
   */
  matchers.toHaveStringLongerThan = function(memberName, other) {
    return priv.assertMember.call(this, 'toBeLongerThan', memberName, other);
  };

  /**
   * @name toHaveStringSameLengthAs
   *
   * @description
   * .
   *
   * @example
   * See {@link http://git.io/jasmine-string-testing|Unit testing Strings with Jasmine}.
   *
   * @param  {String} memberName
   * @param  {String} other
   * @return {Boolean}
   */
  matchers.toHaveStringSameLengthAs = function(memberName, other) {
    return priv.assertMember.call(this, 'toBeSameLengthAs', memberName, other);
  };

  /**
   * @name toHaveStringShorterThan
   *
   * @description
   * .
   *
   * @example
   * See {@link http://git.io/jasmine-string-testing|Unit testing Strings with Jasmine}.
   *
   * @param  {String} memberName
   * @param  {String} other
   * @return {Boolean}
   */
  matchers.toHaveStringShorterThan = function(memberName, other) {
    return priv.assertMember.call(this, 'toBeShorterThan', memberName, other);
  };

  /**
   * @name toHaveWhitespaceString
   *
   * @description
   * .
   *
   * @example
   * See {@link http://git.io/jasmine-string-testing|Unit testing Strings with Jasmine}.
   *
   * @param  {String} memberName
   * @return {Boolean}
   */
  matchers.toHaveWhitespaceString = function(memberName) {
    return priv.assertMember.call(this, 'toBeWhitespace', memberName);
  };
