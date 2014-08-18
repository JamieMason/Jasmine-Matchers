  /**
   * BooleanMembers
   */

  /**
   * @alias
   * expect(object):toHaveBoolean
   *
   * @summary
   * .
   *
   * @description
   * See {@link http://git.io/jasmine-boolean-testing|Unit testing Booleans with Jasmine}.
   *
   * @param  {String} memberName
   * @return {Boolean}
   */
  matchers.toHaveBoolean = function(memberName) {
    return priv.assertMember.call(this, 'toBeBoolean', memberName);
  };

  /**
   * @alias
   * expect(object):toHaveFalse
   *
   * @summary
   * .
   *
   * @description
   * See {@link http://git.io/jasmine-boolean-testing|Unit testing Booleans with Jasmine}.
   *
   * @param  {String} memberName
   * @return {Boolean}
   */
  matchers.toHaveFalse = function(memberName) {
    return priv.assertMember.call(this, 'toBeFalse', memberName);
  };

  /**
   * @alias
   * expect(object):toHaveTrue
   *
   * @summary
   * .
   *
   * @description
   * See {@link http://git.io/jasmine-boolean-testing|Unit testing Booleans with Jasmine}.
   *
   * @param  {String} memberName
   * @return {Boolean}
   */
  matchers.toHaveTrue = function(memberName) {
    return priv.assertMember.call(this, 'toBeTrue', memberName);
  };
