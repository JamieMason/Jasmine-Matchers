/**
 * @alias    toHaveNumber
 * @summary  <code>expect(object):toHaveNumber(key:String);</code>
 */
matchers.toHaveNumber = function(key) {
  return priv.assertMember.call(this, 'toBeNumber', key);
};

/**
 * @alias    toHaveNumberWithinRange
 * @summary  <code>expect(object):toHaveNumberWithinRange(key:String, floor:Number, ceiling:Number);</code>
 */
matchers.toHaveNumberWithinRange = function(key, floor, ceiling) {
  return priv.assertMember.call(this, 'toBeWithinRange', key, floor, ceiling);
};

/**
 * @alias    toHaveCalculable
 * @summary  <code>expect(object):toHaveCalculable(key:String);</code>
 */
matchers.toHaveCalculable = function(key) {
  return priv.assertMember.call(this, 'toBeCalculable', key);
};

/**
 * @alias    toHaveEvenNumber
 * @summary  <code>expect(object):toHaveEvenNumber(key:String);</code>
 */
matchers.toHaveEvenNumber = function(key) {
  return priv.assertMember.call(this, 'toBeEvenNumber', key);
};

/**
 * @alias    toHaveOddNumber
 * @summary  <code>expect(object):toHaveOddNumber(key:String);</code>
 */
matchers.toHaveOddNumber = function(key) {
  return priv.assertMember.call(this, 'toBeOddNumber', key);
};

/**
 * @alias    toHaveWholeNumber
 * @summary  <code>expect(object):toHaveWholeNumber(key:String);</code>
 */
matchers.toHaveWholeNumber = function(key) {
  return priv.assertMember.call(this, 'toBeWholeNumber', key);
};
