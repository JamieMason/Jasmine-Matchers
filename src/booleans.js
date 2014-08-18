  /**
   * @module Booleans
   */

  /**
   * @alias
   * module:Booleans.toBeBoolean
   *
   * @description
   * <p>Assert subject is not only truthy or falsy, but an actual Boolean.
   * <p>See {@link http://git.io/jasmine-boolean-testing|Unit testing Booleans with Jasmine}.
   *
   * @return {Boolean}
   */
  matchers.toBeBoolean = function() {
    return matchers.toBeTrue.call(this) || matchers.toBeFalse.call(this);
  };

  /**
   * @alias
   * module:Booleans.toBeTrue
   *
   * @description
   * <p>Assert subject is not only truthy, but an actual Boolean true.
   * <p>See {@link http://git.io/jasmine-boolean-testing|Unit testing Booleans with Jasmine}.
   *
   * @return {Boolean}
   */
  matchers.toBeTrue = function() {
    return this.actual === true || this.actual instanceof Boolean && this.actual.valueOf() === true;
  };

  /**
   * @alias
   * module:Booleans.toBeFalse
   *
   * @description
   * <p>Assert subject is not only falsy, but an actual Boolean false.
   * <p>See {@link http://git.io/jasmine-boolean-testing|Unit testing Booleans with Jasmine}.
   *
   * @return {Boolean}
   */
  matchers.toBeFalse = function() {
    return this.actual === false || this.actual instanceof Boolean && this.actual.valueOf() === false;
  };

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
