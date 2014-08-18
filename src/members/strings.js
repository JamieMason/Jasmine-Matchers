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
