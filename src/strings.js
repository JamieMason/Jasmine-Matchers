  /**
   * @module Strings
   */

  /**
   * @alias
   * module:Strings.toBeString
   *
   * @description
   * <p>Assert subject is a String.
   * <p>See {@link http://git.io/jasmine-string-testing|Unit testing Strings with Jasmine}.
   *
   * @return {Boolean}
   */
  matchers.toBeString = function() {
    return priv.is(this.actual, 'String');
  };

  /**
   * @alias
   * module:Strings.toBeEmptyString
   *
   * @description
   * <p>Assert subject is a String of length 0.
   * <p>See {@link http://git.io/jasmine-string-testing|Unit testing Strings with Jasmine}.
   *
   * @return {Boolean}
   */
  matchers.toBeEmptyString = function() {
    return this.actual === '';
  };

  /**
   * @alias
   * module:Strings.toBeNonEmptyString
   *
   * @description
   * <p>Assert subject is a String with at least 1 character.
   * <p>See {@link http://git.io/jasmine-string-testing|Unit testing Strings with Jasmine}.
   *
   * @return {Boolean}
   */
  matchers.toBeNonEmptyString = function() {
    return matchers.toBeString.call(this) && this.actual.length > 0;
  };

  /**
   * @alias
   * module:Strings.toBeHtmlString
   *
   * @description
   * <p>Assert subject is string containing HTML Markup.
   * <p>See {@link http://git.io/jasmine-string-testing|Unit testing Strings with Jasmine}.
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
   * module:Strings.toBeJsonString
   *
   * @description
   * <p>Assert subject is string containing parseable JSON.
   * <p>See {@link http://git.io/jasmine-string-testing|Unit testing Strings with Jasmine}.
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
   * module:Strings.toBeWhitespace
   *
   * @description
   * <p>Assert subject is a String containing nothing but whitespace.
   * <p>See {@link http://git.io/jasmine-string-testing|Unit testing Strings with Jasmine}.
   *
   * @return {Boolean}
   */
  matchers.toBeWhitespace = function() {
    return matchers.toBeString.call(this) && this.actual.search(/\S/) === -1;
  };

  /**
   * @alias
   * module:Strings.toStartWith
   *
   * @description
   * <p>Assert subject is a String whose first characters match our expected string.
   * <p>See {@link http://git.io/jasmine-string-testing|Unit testing Strings with Jasmine}.
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
   * module:Strings.toEndWith
   *
   * @description
   * <p>Assert subject is a String whose last characters match our expected string.
   * <p>See {@link http://git.io/jasmine-string-testing|Unit testing Strings with Jasmine}.
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
   * module:Strings.toBeLongerThan
   *
   * @description
   * <p>Assert subject is a String whose length is greater than our other string.
   * <p>See {@link http://git.io/jasmine-string-testing|Unit testing Strings with Jasmine}.
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
   * module:Strings.toBeShorterThan
   *
   * @description
   * <p>Assert subject is a String whose length is greater than our other string.
   * <p>See {@link http://git.io/jasmine-string-testing|Unit testing Strings with Jasmine}.
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
   * module:Strings.toBeSameLengthAs
   *
   * @description
   * <p>Assert subject is a String whose length is equal to our other string.
   * <p>See {@link http://git.io/jasmine-string-testing|Unit testing Strings with Jasmine}.
   *
   * @param  {String} other
   * @return {Boolean}
   */
  matchers.toBeSameLengthAs = function(other) {
    return matchers.toBeString.call(this) && matchers.toBeString.call({
      actual: other
    }) && this.actual.length === other.length;
  };

  /**
   * @module StringMembers
   */

  /**
   * @alias
   * module:StringMembers.toHaveEmptyString
   *
   * @description
   * <p>.
   * <p>See {@link http://git.io/jasmine-string-testing|Unit testing Strings with Jasmine}.
   *
   * @param  {String} memberName
   * @return {Boolean}
   */
  matchers.toHaveEmptyString = function(memberName) {
    return priv.assertMember.call(this, 'toBeEmptyString', memberName);
  };

  /**
   * @alias
   * module:StringMembers.toHaveHtmlString
   *
   * @description
   * <p>.
   * <p>See {@link http://git.io/jasmine-string-testing|Unit testing Strings with Jasmine}.
   *
   * @param  {String} memberName
   * @return {Boolean}
   */
  matchers.toHaveHtmlString = function(memberName) {
    return priv.assertMember.call(this, 'toBeHtmlString', memberName);
  };

  /**
   * @alias
   * module:StringMembers.toHaveJsonString
   *
   * @description
   * <p>.
   * <p>See {@link http://git.io/jasmine-string-testing|Unit testing Strings with Jasmine}.
   *
   * @param  {String} memberName
   * @return {Boolean}
   */
  matchers.toHaveJsonString = function(memberName) {
    return priv.assertMember.call(this, 'toBeJsonString', memberName);
  };

  /**
   * @alias
   * module:StringMembers.toHaveNonEmptyString
   *
   * @description
   * <p>.
   * <p>See {@link http://git.io/jasmine-string-testing|Unit testing Strings with Jasmine}.
   *
   * @param  {String} memberName
   * @return {Boolean}
   */
  matchers.toHaveNonEmptyString = function(memberName) {
    return priv.assertMember.call(this, 'toBeNonEmptyString', memberName);
  };

  /**
   * @alias
   * module:StringMembers.toHaveString
   *
   * @description
   * <p>.
   * <p>See {@link http://git.io/jasmine-string-testing|Unit testing Strings with Jasmine}.
   *
   * @param  {String} memberName
   * @return {Boolean}
   */
  matchers.toHaveString = function(memberName) {
    return priv.assertMember.call(this, 'toBeString', memberName);
  };

  /**
   * @alias
   * module:StringMembers.toHaveStringLongerThan
   *
   * @description
   * <p>.
   * <p>See {@link http://git.io/jasmine-string-testing|Unit testing Strings with Jasmine}.
   *
   * @param  {String} memberName
   * @param  {String} other
   * @return {Boolean}
   */
  matchers.toHaveStringLongerThan = function(memberName, other) {
    return priv.assertMember.call(this, 'toBeLongerThan', memberName, other);
  };

  /**
   * @alias
   * module:StringMembers.toHaveStringSameLengthAs
   *
   * @description
   * <p>.
   * <p>See {@link http://git.io/jasmine-string-testing|Unit testing Strings with Jasmine}.
   *
   * @param  {String} memberName
   * @param  {String} other
   * @return {Boolean}
   */
  matchers.toHaveStringSameLengthAs = function(memberName, other) {
    return priv.assertMember.call(this, 'toBeSameLengthAs', memberName, other);
  };

  /**
   * @alias
   * module:StringMembers.toHaveStringShorterThan
   *
   * @description
   * <p>.
   * <p>See {@link http://git.io/jasmine-string-testing|Unit testing Strings with Jasmine}.
   *
   * @param  {String} memberName
   * @param  {String} other
   * @return {Boolean}
   */
  matchers.toHaveStringShorterThan = function(memberName, other) {
    return priv.assertMember.call(this, 'toBeShorterThan', memberName, other);
  };

  /**
   * @alias
   * module:StringMembers.toHaveWhitespaceString
   *
   * @description
   * <p>.
   * <p>See {@link http://git.io/jasmine-string-testing|Unit testing Strings with Jasmine}.
   *
   * @param  {String} memberName
   * @return {Boolean}
   */
  matchers.toHaveWhitespaceString = function(memberName) {
    return priv.assertMember.call(this, 'toBeWhitespace', memberName);
  };
