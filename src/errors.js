  /**
   * @module Errors
   */

  /**
   * @alias
   * module:Errors.toThrowError
   *
   * @description
   * <p>Asserts subject throws an Error of any type.
   * <p>See {@link http://git.io/jasmine-error-testing|Unit testing Errors with Jasmine}.
   *
   * @return {Boolean}
   */
  matchers.toThrowError = function() {
    var threwError = false;
    try {
      this.actual();
    } catch (e) {
      threwError = true;
    }
    return threwError;
  };

  /**
   * @alias
   * module:Errors.toThrowErrorOfType
   *
   * @description
   * <p>Asserts subject throws an Error of a specific type, such as "TypeError".
   * <p>See {@link http://git.io/jasmine-error-testing|Unit testing Errors with Jasmine}.
   *
   * @param  {String} type
   * @return {Boolean}
   */
  matchers.toThrowErrorOfType = function(type) {
    var threwErrorOfType = false;
    try {
      this.actual();
    } catch (e) {
      threwErrorOfType = (e.name === type);
    }
    return threwErrorOfType;
  };
