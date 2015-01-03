/**
 * @alias    toBeObject
 * @summary  <code>expect(object).toBeObject();</code>
 */
matchers.toBeObject = function() {
  return this.actual instanceof Object;
};

/**
 * @alias    toBeEmptyObject
 * @summary  <code>expect(object).toBeEmptyObject();</code>
 */
matchers.toBeEmptyObject = function() {
  return priv.is(this.actual, 'Object') &&
    priv.countMembers(this.actual) === 0;
};

/**
 * @alias    toBeNonEmptyObject
 * @summary  <code>expect(object).toBeNonEmptyObject();</code>
 */
matchers.toBeNonEmptyObject = function() {
  return priv.is(this.actual, 'Object') &&
    priv.countMembers(this.actual) > 0;
};

/**
 * @alias    toImplement
 * @summary  <code>expect(object).toImplement(interface:Object);</code>
 * @description
 * Assert subject is a true Object which features at least the same keys as
 * <code>other</code> regardless of whether it also has other members.
 */
matchers.toImplement = function(other) {
  if (!priv.is(this.actual, 'Object') || !priv.is(other, 'Object')) {
    return false;
  }
  for (var key in other) {
    if (other.hasOwnProperty(key)) {
      if (key in this.actual) {
        continue;
      }
      return false;
    }
  }
  return true;
};

/**
 * @alias    toBeFunction
 * @summary  <code>expect(function).toBeFunction();</code>
 */
matchers.toBeFunction = function() {
  return this.actual instanceof Function;
};
