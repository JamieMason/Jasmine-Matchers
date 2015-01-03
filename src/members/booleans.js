/**
 * @alias    toHaveBoolean
 * @summary  <code>expect(object).toHaveBoolean(key:String);</code>
 */
matchers.toHaveBoolean = function(key) {
  return priv.assertMember.call(this, 'toBeBoolean', key);
};

/**
 * @alias    toHaveFalse
 * @summary  <code>expect(object).toHaveFalse(key:String);</code>
 */
matchers.toHaveFalse = function(key) {
  return priv.assertMember.call(this, 'toBeFalse', key);
};

/**
 * @alias    toHaveTrue
 * @summary  <code>expect(object).toHaveTrue(key:String);</code>
 */
matchers.toHaveTrue = function(key) {
  return priv.assertMember.call(this, 'toBeTrue', key);
};
