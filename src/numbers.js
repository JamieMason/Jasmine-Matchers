  /**
   * @module Numbers
   */

  /**
   * @alias
   * module:Numbers.toBeNumber
   *
   * @description
   * <p>Assert subject is not only calculable, but an actual Number
   * <p>See {@link http://git.io/jasmine-number-testing|Unit testing Numbers with Jasmine}.
   *
   * @return {Boolean}
   */
  matchers.toBeNumber = function() {
    return !isNaN(parseFloat(this.actual)) && !priv.is(this.actual, 'String');
  };

  /**
   * @alias
   * module:Numbers.toBeEvenNumber
   *
   * @description
   * <p>Assert subject is an even Number.
   * <p>See {@link http://git.io/jasmine-number-testing|Unit testing Numbers with Jasmine}.
   *
   * @return {Boolean}
   */
  matchers.toBeEvenNumber = function() {
    return matchers.toBeNumber.call(this) && this.actual % 2 === 0;
  };

  /**
   * @alias
   * module:Numbers.toBeOddNumber
   *
   * @description
   * <p>Assert subject is an odd Number.
   * <p>See {@link http://git.io/jasmine-number-testing|Unit testing Numbers with Jasmine}.
   *
   * @return {Boolean}
   */
  matchers.toBeOddNumber = function() {
    return matchers.toBeNumber.call(this) && this.actual % 2 !== 0;
  };

  /**
   * @alias
   * module:Numbers.toBeCalculable
   *
   * @description
   * <p>Assert subject can be used in Mathemetic calculations, despite not being an actual Number.
   *
   * @example
   * // If all strings are numeric, JavaScript will cast them all as Numbers.
   * "1" * "2" === 2 (pass)
   *
   * @example
   * // If any string is not numeric, JavaScript will cast them all as Strings.
   * "wut?" * 2 === NaN (fail)
   * <p>See {@link http://git.io/jasmine-number-testing|Unit testing Numbers with Jasmine}.
   *
   * @return {Boolean}
   */
  matchers.toBeCalculable = function() {
    return !isNaN(this.actual * 2);
  };

  /**
   * @alias
   * module:Numbers.toBeWithinRange
   *
   * @description
   * <p>Assert value falls on or between floor and ceiling.
   * <p>See {@link http://git.io/jasmine-number-testing|Unit testing Numbers with Jasmine}.
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
   * module:Numbers.toBeWholeNumber
   *
   * @description
   * <p>Assert value is a number with no decimal places.
   * <p>See {@link http://git.io/jasmine-number-testing|Unit testing Numbers with Jasmine}.
   *
   * @return {Boolean}
   */
  matchers.toBeWholeNumber = function() {
    return matchers.toBeNumber.call(this) && (this.actual === 0 || this.actual % 1 === 0);
  };

  /**
   * @module NumberMembers
   */

  /**
   * @alias
   * module:NumberMembers.toHaveNumber
   *
   * @description
   * <p>.
   * <p>See {@link http://git.io/jasmine-number-testing|Unit testing Numbers with Jasmine}.
   *
   * @param  {String} memberName
   * @return {Boolean}
   */
  matchers.toHaveNumber = function(memberName) {
    return priv.assertMember.call(this, 'toBeNumber', memberName);
  };

  /**
   * @alias
   * module:NumberMembers.toHaveNumberWithinRange
   *
   * @description
   * <p>.
   * <p>See {@link http://git.io/jasmine-number-testing|Unit testing Numbers with Jasmine}.
   *
   * @param  {String} memberName
   * @param  {Number} floor
   * @param  {Number} ceiling
   * @return {Boolean}
   */
  matchers.toHaveNumberWithinRange = function(memberName, floor, ceiling) {
    return priv.assertMember.call(this, 'toBeWithinRange', memberName, floor, ceiling);
  };

  /**
   * @alias
   * module:NumberMembers.toHaveCalculable
   *
   * @description
   * <p>.
   * <p>See {@link http://git.io/jasmine-number-testing|Unit testing Numbers with Jasmine}.
   *
   * @param  {String} memberName
   * @return {Boolean}
   */
  matchers.toHaveCalculable = function(memberName) {
    return priv.assertMember.call(this, 'toBeCalculable', memberName);
  };

  /**
   * @alias
   * module:NumberMembers.toHaveEvenNumber
   *
   * @description
   * <p>.
   * <p>See {@link http://git.io/jasmine-number-testing|Unit testing Numbers with Jasmine}.
   *
   * @param  {String} memberName
   * @return {Boolean}
   */
  matchers.toHaveEvenNumber = function(memberName) {
    return priv.assertMember.call(this, 'toBeEvenNumber', memberName);
  };

  /**
   * @alias
   * module:NumberMembers.toHaveOddNumber
   *
   * @description
   * <p>.
   * <p>See {@link http://git.io/jasmine-number-testing|Unit testing Numbers with Jasmine}.
   *
   * @param  {String} memberName
   * @return {Boolean}
   */
  matchers.toHaveOddNumber = function(memberName) {
    return priv.assertMember.call(this, 'toBeOddNumber', memberName);
  };

  /**
   * @alias
   * module:NumberMembers.toHaveWholeNumber
   *
   * @description
   * <p>.
   * <p>See {@link http://git.io/jasmine-number-testing|Unit testing Numbers with Jasmine}.
   *
   * @param  {String} memberName
   * @return {Boolean}
   */
  matchers.toHaveWholeNumber = function(memberName) {
    return priv.assertMember.call(this, 'toBeWholeNumber', memberName);
  };
