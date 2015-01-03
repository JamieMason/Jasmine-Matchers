/**
 * @alias    toHaveArray
 * @summary  <code>expect(object).toHaveArray(key:String);</code>
 */
matchers.toHaveArray = function(key) {
  return priv.assertMember.call(this, 'toBeArray', key);
};

/**
 * @alias    toHaveArrayOfBooleans
 * @summary  <code>expect(object).toHaveArrayOfBooleans(key:String);</code>
 */
matchers.toHaveArrayOfBooleans = function(key) {
  return priv.assertMember.call(this, 'toBeArrayOfBooleans', key);
};

/**
 * @alias    toHaveArrayOfNumbers
 * @summary  <code>expect(object).toHaveArrayOfNumbers(key:String);</code>
 */
matchers.toHaveArrayOfNumbers = function(key) {
  return priv.assertMember.call(this, 'toBeArrayOfNumbers', key);
};

/**
 * @alias    toHaveArrayOfObjects
 * @summary  <code>expect(object).toHaveArrayOfObjects(key:String);</code>
 */
matchers.toHaveArrayOfObjects = function(key) {
  return priv.assertMember.call(this, 'toBeArrayOfObjects', key);
};

/**
 * @alias    toHaveArrayOfSize
 * @summary  <code>expect(object).toHaveArrayOfSize(key:String, size:Number);</code>
 */
matchers.toHaveArrayOfSize = function(key, size) {
  return priv.assertMember.call(this, 'toBeArrayOfSize', key, size);
};

/**
 * @alias    toHaveNonEmptyArray
 * @summary  <code>expect(object).toHaveNonEmptyArray(key:String);</code>
 */
matchers.toHaveNonEmptyArray = function(key) {
  return priv.assertMember.call(this, 'toBeNonEmptyArray', key);
};

/**
 * @alias    toHaveEmptyArray
 * @summary  <code>expect(object).toHaveEmptyArray(key:String);</code>
 */
matchers.toHaveEmptyArray = function(key) {
  return priv.assertMember.call(this, 'toBeEmptyArray', key);
};

/**
 * @alias    toHaveArrayOfStrings
 * @summary  <code>expect(object).toHaveArrayOfStrings(key:String);</code>
 */
matchers.toHaveArrayOfStrings = function(key) {
  return priv.assertMember.call(this, 'toBeArrayOfStrings', key);
};
