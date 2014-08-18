  /**
   * @file Numbers
   *
   * @description
   * See {@link http://git.io/jasmine-number-testing|Unit testing Numbers with Jasmine}.
   */

  /**
   * @alias
   * expect(number):toBeNumber
   *
   * @summary
   * Assert subject is not only calculable, but an actual Number
   *
   * @return {Boolean}
   */
  matchers.toBeNumber = function() {
    return !isNaN(parseFloat(this.actual)) && !priv.is(this.actual, 'String');
  };

  /**
   * @alias
   * expect(number):toBeEvenNumber
   *
   * @summary
   * Assert subject is an even Number.
   *
   * @return {Boolean}
   */
  matchers.toBeEvenNumber = function() {
    return matchers.toBeNumber.call(this) && this.actual % 2 === 0;
  };

  /**
   * @alias
   * expect(number):toBeOddNumber
   *
   * @summary
   * Assert subject is an odd Number.
   *
   * @return {Boolean}
   */
  matchers.toBeOddNumber = function() {
    return matchers.toBeNumber.call(this) && this.actual % 2 !== 0;
  };

  /**
   * @alias
   * expect(mixed):toBeCalculable
   *
   * @summary
   * Assert subject can be used in Mathemetic calculations, despite not being an actual Number.
   *
   * @example
   * // If all strings are numeric, JavaScript will cast them all as expect(number):
   * "1" * "2" === 2 (pass)
   *
   * @example
   * // If any string is not numeric, JavaScript will cast them all as Strings.
   * "wut?" * 2 === NaN (fail)
   *
   * @return {Boolean}
   */
  matchers.toBeCalculable = function() {
    return !isNaN(this.actual * 2);
  };

  /**
   * @alias
   * expect(number):toBeWithinRange
   *
   * @summary
   * Assert value falls on or between floor and ceiling.
   *
   * @param {Number} floor
   * @param {Number} ceiling
   * @return {Boolean}
   */
  matchers.toBeWithinRange = function(floor, ceiling) {
    return matchers.toBeNumber.call(this) && this.actual >= floor && this.actual <= ceiling;
  };

  /**
   * @alias
   * expect(number):toBeWholeNumber
   *
   * @summary
   * Assert value is a number with no decimal places.
   *
   * @return {Boolean}
   */
  matchers.toBeWholeNumber = function() {
    return matchers.toBeNumber.call(this) && (this.actual === 0 || this.actual % 1 === 0);
  };
