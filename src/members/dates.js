/**
 * @alias    toHaveDate
 * @summary  <code>expect(object):toHaveDate(key:String);</code>
 */
matchers.toHaveDate = function(key) {
  return priv.assertMember.call(this, 'toBeDate', key);
};

/**
 * @alias    toHaveDateAfter
 * @summary  <code>expect(object):toHaveDateAfter(key:String, date:Date);</code>
 */
matchers.toHaveDateAfter = function(key, date) {
  return priv.assertMember.call(this, 'toBeAfter', key, date);
};

/**
 * @alias    toHaveDateBefore
 * @summary  <code>expect(object):toHaveDateBefore(key:String, date:Date);</code>
 */
matchers.toHaveDateBefore = function(key, date) {
  return priv.assertMember.call(this, 'toBeBefore', key, date);
};

/**
 * @alias    toHaveIso8601
 * @summary  <code>expect(object):toHaveIso8601(key:String);</code>
 */
matchers.toHaveIso8601 = function(key) {
  return priv.assertMember.call(this, 'toBeIso8601', key);
};
