/**
 * @alias    toHaveEmptyString
 * @summary  <code>expect(object):toHaveEmptyString(key:String);</code>
 */
matchers.toHaveEmptyString = function(key) {
  return priv.assertMember.call(this, 'toBeEmptyString', key);
};

/**
 * @alias    toHaveHtmlString
 * @summary  <code>expect(object):toHaveHtmlString(key:String);</code>
 */
matchers.toHaveHtmlString = function(key) {
  return priv.assertMember.call(this, 'toBeHtmlString', key);
};

/**
 * @alias    toHaveJsonString
 * @summary  <code>expect(object):toHaveJsonString(key:String);</code>
 */
matchers.toHaveJsonString = function(key) {
  return priv.assertMember.call(this, 'toBeJsonString', key);
};

/**
 * @alias    toHaveNonEmptyString
 * @summary  <code>expect(object):toHaveNonEmptyString(key:String);</code>
 */
matchers.toHaveNonEmptyString = function(key) {
  return priv.assertMember.call(this, 'toBeNonEmptyString', key);
};

/**
 * @alias    toHaveString
 * @summary  <code>expect(object):toHaveString(key:String);</code>
 */
matchers.toHaveString = function(key) {
  return priv.assertMember.call(this, 'toBeString', key);
};

/**
 * @alias    toHaveStringLongerThan
 * @summary  <code>expect(object):toHaveStringLongerThan(key:String, other:String);</code>
 */
matchers.toHaveStringLongerThan = function(key, other) {
  return priv.assertMember.call(this, 'toBeLongerThan', key, other);
};

/**
 * @alias    toHaveStringSameLengthAs
 * @summary  <code>expect(object):toHaveStringSameLengthAs(key:String, other:String);</code>
 */
matchers.toHaveStringSameLengthAs = function(key, other) {
  return priv.assertMember.call(this, 'toBeSameLengthAs', key, other);
};

/**
 * @alias    toHaveStringShorterThan
 * @summary  <code>expect(object):toHaveStringShorterThan(key:String, other:String);</code>
 */
matchers.toHaveStringShorterThan = function(key, other) {
  return priv.assertMember.call(this, 'toBeShorterThan', key, other);
};

/**
 * @alias    toHaveWhitespaceString
 * @summary  <code>expect(object):toHaveWhitespaceString(key:String);</code>
 */
matchers.toHaveWhitespaceString = function(key) {
  return priv.assertMember.call(this, 'toBeWhitespace', key);
};
