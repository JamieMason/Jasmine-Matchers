  // Numbers
  // ---------------------------------------------------------------------------

  /**
   * @name toBeNumber
   *
   * @description
   * Assert subject is not only calculable, but an actual Number
   *
   * @example
   * See {@link http://git.io/jasmine-number-testing|Unit testing Numbers with Jasmine}.
   *
   * @return {Boolean}
   */
  matchers.toBeNumber = function() {
    return !isNaN(parseFloat(this.actual)) && !priv.is(this.actual, 'String');
  };

  /**
   * @name toBeEvenNumber
   *
   * @description
   * Assert subject is an even Number.
   *
   * @example
   * See {@link http://git.io/jasmine-number-testing|Unit testing Numbers with Jasmine}.
   *
   * @return {Boolean}
   */
  matchers.toBeEvenNumber = function() {
    return matchers.toBeNumber.call(this) && this.actual % 2 === 0;
  };

  /**
   * @name toBeOddNumber
   *
   * @description
   * Assert subject is an odd Number.
   *
   * @example
   * See {@link http://git.io/jasmine-number-testing|Unit testing Numbers with Jasmine}.
   *
   * @return {Boolean}
   */
  matchers.toBeOddNumber = function() {
    return matchers.toBeNumber.call(this) && this.actual % 2 !== 0;
  };

  /**
   * @name toBeCalculable
   *
   * @description
   * Assert subject can be used in Mathemetic calculations, despite not being an actual Number.
   *
   * @example
   * // If all strings are numeric, JavaScript will cast them all as Numbers.
   * "1" * "2" === 2 (pass)
   *
   * @example
   * // If any string is not numeric, JavaScript will cast them all as Strings.
   * "wut?" * 2 === NaN (fail)
   *
   * @example
   * See {@link http://git.io/jasmine-number-testing|Unit testing Numbers with Jasmine}.
   *
   * @return {Boolean}
   */
  matchers.toBeCalculable = function() {
    return !isNaN(this.actual * 2);
  };

  /**
   * @name toBeWithinRange
   *
   * @description
   * Assert value falls on or between floor and ceiling.
   *
   * @example
   * See {@link http://git.io/jasmine-number-testing|Unit testing Numbers with Jasmine}.
   *
   * @param {Number} floor
   * @param {Number} ceiling
   * @return {Boolean}
   */
  matchers.toBeWithinRange = function(floor, ceiling) {
    return matchers.toBeNumber.call(this) && this.actual >= floor && this.actual <= ceiling;
  };

  /**
   * @name toBeWholeNumber
   *
   * @description
   * Assert value is a number with no decimal places.
   *
   * @example
   * See {@link http://git.io/jasmine-number-testing|Unit testing Numbers with Jasmine}.
   *
   * @return {Boolean}
   */
  matchers.toBeWholeNumber = function() {
    return matchers.toBeNumber.call(this) && (this.actual === 0 || this.actual % 1 === 0);
  };

  // Number Methods
  // ---------------------------------------------------------------------------

  /**
   * @name toHaveNumber
   *
   * @description
   * .
   *
   * @example
   * See {@link http://git.io/jasmine-number-testing|Unit testing Numbers with Jasmine}.
   *
   * @param  {String} memberName
   * @return {Boolean}
   */
  matchers.toHaveNumber = function(memberName) {
    return priv.assertMember.call(this, 'toBeNumber', memberName);
  };

  /**
   * @name toHaveNumberWithinRange
   *
   * @description
   * .
   *
   * @example
   * See {@link http://git.io/jasmine-number-testing|Unit testing Numbers with Jasmine}.
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
   * @name toHaveCalculable
   *
   * @description
   * .
   *
   * @example
   * See {@link http://git.io/jasmine-number-testing|Unit testing Numbers with Jasmine}.
   *
   * @param  {String} memberName
   * @return {Boolean}
   */
  matchers.toHaveCalculable = function(memberName) {
    return priv.assertMember.call(this, 'toBeCalculable', memberName);
  };

  /**
   * @name toHaveEvenNumber
   *
   * @description
   * .
   *
   * @example
   * See {@link http://git.io/jasmine-number-testing|Unit testing Numbers with Jasmine}.
   *
   * @param  {String} memberName
   * @return {Boolean}
   */
  matchers.toHaveEvenNumber = function(memberName) {
    return priv.assertMember.call(this, 'toBeEvenNumber', memberName);
  };

  /**
   * @name toHaveOddNumber
   *
   * @description
   * .
   *
   * @example
   * See {@link http://git.io/jasmine-number-testing|Unit testing Numbers with Jasmine}.
   *
   * @param  {String} memberName
   * @return {Boolean}
   */
  matchers.toHaveOddNumber = function(memberName) {
    return priv.assertMember.call(this, 'toBeOddNumber', memberName);
  };

  /**
   * @name toHaveWholeNumber
   *
   * @description
   * .
   *
   * @example
   * See {@link http://git.io/jasmine-number-testing|Unit testing Numbers with Jasmine}.
   *
   * @param  {String} memberName
   * @return {Boolean}
   */
  matchers.toHaveWholeNumber = function(memberName) {
    return priv.assertMember.call(this, 'toBeWholeNumber', memberName);
  };
