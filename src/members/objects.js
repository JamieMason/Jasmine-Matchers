/**
 * @alias    toHaveMethod
 * @summary  <code>expect(object).toHaveMethod(key:String);</code>
 */
matchers.toHaveMethod = function(key) {
  return priv.assertMember.call(this, 'toBeFunction', key);
};

/**
 * @alias    toHaveObject
 * @summary  <code>expect(object).toHaveObject(key:String);</code>
 */
matchers.toHaveObject = function(key) {
  return priv.assertMember.call(this, 'toBeObject', key);
};

/**
 * @alias    toHaveEmptyObject
 * @summary  <code>expect(object).toHaveEmptyObject(key:String);</code>
 */
matchers.toHaveEmptyObject = function(key) {
  return priv.assertMember.call(this, 'toBeEmptyObject', key);
};

/**
 * @alias    toHaveNonEmptyObject
 * @summary  <code>expect(object).toHaveNonEmptyObject(key:String);</code>
 */
matchers.toHaveNonEmptyObject = function(key) {
  return priv.assertMember.call(this, 'toBeNonEmptyObject', key);
};

/**
 * @alias    toHaveMember
 * @summary  <code>expect(object).toHaveMember(key:String);</code>
 */
matchers.toHaveMember = function(key) {
  return key && priv.is(this.actual, 'Object') &&
    key in this.actual;
};
