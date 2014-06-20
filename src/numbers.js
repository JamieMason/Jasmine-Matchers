  // Numbers
  // ---------------------------------------------------------------------------

  /**
   * Assert subject is not only calculable, but an actual Number
   * @return {Boolean}
   */
  matchers.toBeNumber = function() {
    return !isNaN(parseFloat(this.actual)) && !priv.is(this.actual, 'String');
  };

  /**
   * Assert subject is an even Number
   * @return {Boolean}
   */
  matchers.toBeEvenNumber = function() {
    return matchers.toBeNumber.call(this) && this.actual % 2 === 0;
  };

  /**
   * Assert subject is an odd Number
   * @return {Boolean}
   */
  matchers.toBeOddNumber = function() {
    return matchers.toBeNumber.call(this) && this.actual % 2 !== 0;
  };

  /**
   * Assert subject can be used in Mathemetic calculations, despite not being an actual Number.
   * @example "1" * "2" === 2 (pass)
   * @example "wut?" * "2" === NaN (fail)
   * @return {Boolean}
   */
  matchers.toBeCalculable = function() {
    return !isNaN(this.actual * 2);
  };

  /**
   * Assert value is >= floor or <= ceiling
   * @param {Number} floor
   * @param {Number} ceiling
   * @return {Boolean}
   */
  matchers.toBeWithinRange = function(floor, ceiling) {
    return matchers.toBeNumber.call(this) && this.actual >= floor && this.actual <= ceiling;
  };

  /**
   * Assert value is a number with no decimal places
   * @return {Boolean}
   */
  matchers.toBeWholeNumber = function() {
    return matchers.toBeNumber.call(this) && (this.actual === 0 || this.actual % 1 === 0);
  };

	/**
	 * Assert value is greater or equal than given number
	 * @return {Boolean}
	 * */
	matchers.toBeGreaterOrEqualThan = function(number) {
		return matchers.toBeNumber.call(this) && this.actual >= number;
	};

	/**
	 * Assert value is less or equal than given number
	 * @return {Boolean}
	 * */
	matchers.toBeLessOrEqualThan = function(number) {
		return matchers.toBeNumber.call(this) && this.actual <= number;
	};