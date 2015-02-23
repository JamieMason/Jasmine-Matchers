/**
 * @alias    toBeArray
 * @summary  <code>expect(array).toBeArray();</code>
 */
matchers.toBeArray = function() {
  return priv.is(this.actual, 'Array');
};

/**
 * @alias    toBeArrayOfSize
 * @summary  <code>expect(array).toBeArrayOfSize(size:Number);</code>
 */
matchers.toBeArrayOfSize = function(size) {
  return priv.is(this.actual, 'Array') &&
    this.actual.length === size;
};

/**
 * @alias    toBeEmptyArray
 * @summary  <code>expect(array).toBeEmptyArray();</code>
 */
matchers.toBeEmptyArray = function() {
  return matchers.toBeArrayOfSize.call(this, 0);
};

/**
 * @alias    toBeNonEmptyArray
 * @summary  <code>expect(array).toBeNonEmptyArray();</code>
 */
matchers.toBeNonEmptyArray = function() {
  return priv.is(this.actual, 'Array') &&
    this.actual.length > 0;
};

/**
 * @alias    toBeArrayOfObjects
 * @summary  <code>expect(array).toBeArrayOfObjects();</code>
 */
matchers.toBeArrayOfObjects = function() {
  return priv.is(this.actual, 'Array') &&
    priv.expectAllMembers.call(this, 'toBeObject');
};

/**
 * @alias    toBeArrayOfStrings
 * @summary  <code>expect(array).toBeArrayOfStrings();</code>
 */
matchers.toBeArrayOfStrings = function() {
  return priv.is(this.actual, 'Array') &&
    priv.expectAllMembers.call(this, 'toBeString');
};

/**
 * @alias    toBeArrayOfNumbers
 * @summary  <code>expect(array).toBeArrayOfNumbers();</code>
 */
matchers.toBeArrayOfNumbers = function() {
  return priv.is(this.actual, 'Array') &&
    priv.expectAllMembers.call(this, 'toBeNumber');
};

/**
 * @alias    toBeArrayOfBooleans
 * @summary  <code>expect(array).toBeArrayOfBooleans();</code>
 */
matchers.toBeArrayOfBooleans = function() {
  return priv.is(this.actual, 'Array') &&
    priv.expectAllMembers.call(this, 'toBeBoolean');
};
