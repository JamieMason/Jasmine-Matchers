/**
 * @alias    toBeNumber
 * @summary  <code>expect(number).toBeNumber();</code>
 */
matchers.toBeNumber = function() {
  return !isNaN(parseFloat(this.actual)) &&
    !priv.is(this.actual, 'String');
};

/**
 * @alias    toBeEvenNumber
 * @summary  <code>expect(number).toBeEvenNumber();</code>
 */
matchers.toBeEvenNumber = function() {
  return matchers.toBeNumber.call(this) &&
    this.actual % 2 === 0;
};

/**
 * @alias    toBeOddNumber
 * @summary  <code>expect(number).toBeOddNumber();</code>
 */
matchers.toBeOddNumber = function() {
  return matchers.toBeNumber.call(this) &&
    this.actual % 2 !== 0;
};

/**
 * @alias    toBeCalculable
 * @summary  <code>expect(mixed).toBeCalculable();</code>
 * @description
 * Assert subject can be used in Mathemetic calculations despite not being a
 * Number, for example <code>"1" * "2" === 2</code> but
 * <code>"wut?" * 2 === NaN</code>.
 */
matchers.toBeCalculable = function() {
  return !isNaN(this.actual * 2);
};

/**
 * @alias    toBeWithinRange
 * @summary  <code>expect(number).toBeWithinRange(floor:Number, ceiling:Number);</code>
 */
matchers.toBeWithinRange = function(floor, ceiling) {
  return matchers.toBeNumber.call(this) &&
    this.actual >= floor &&
    this.actual <= ceiling;
};

/**
 * @alias    toBeWholeNumber
 * @summary  <code>expect(number).toBeWholeNumber();</code>
 */
matchers.toBeWholeNumber = function() {
  return matchers.toBeNumber.call(this) &&
    (this.actual === 0 || this.actual % 1 === 0);
};
