  /**
   * @module BooleanMembers
   */

  /**
   * @alias
   * module:BooleanMembers.toHaveBoolean
   *
   * @description
   * <p>.
   * <p>See {@link http://git.io/jasmine-boolean-testing|Unit testing Booleans with Jasmine}.
   *
   * @param  {String} memberName
   * @return {Boolean}
   */
  matchers.toHaveBoolean = function(memberName) {
    return priv.assertMember.call(this, 'toBeBoolean', memberName);
  };

  /**
   * @alias
   * module:BooleanMembers.toHaveFalse
   *
   * @description
   * <p>.
   * <p>See {@link http://git.io/jasmine-boolean-testing|Unit testing Booleans with Jasmine}.
   *
   * @param  {String} memberName
   * @return {Boolean}
   */
  matchers.toHaveFalse = function(memberName) {
    return priv.assertMember.call(this, 'toBeFalse', memberName);
  };

  /**
   * @alias
   * module:BooleanMembers.toHaveTrue
   *
   * @description
   * <p>.
   * <p>See {@link http://git.io/jasmine-boolean-testing|Unit testing Booleans with Jasmine}.
   *
   * @param  {String} memberName
   * @return {Boolean}
   */
  matchers.toHaveTrue = function(memberName) {
    return priv.assertMember.call(this, 'toBeTrue', memberName);
  };
