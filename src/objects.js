/**
 * @file Objects
 *
 * @description
 * See {@link http://git.io/jasmine-object-testing|Unit testing Objects with Jasmine}.
 */

/**
 * @alias
 * expect(object):toBeObject
 *
 * @summary
 * Assert subject is a true Object, created in the parent document — those created and imported
 * from within iframes or other windows will not match.
 *
 * @return {Boolean}
 */
matchers.toBeObject = function() {
  return this.actual instanceof Object;
};

/**
 * @alias
 * expect(object):toBeEmptyObject
 *
 * @summary
 * Assert subject is a true Object with no instance members.
 *
 * @return {Boolean}
 */
matchers.toBeEmptyObject = function() {
  return priv.is(this.actual, 'Object') && priv.countMembers(this.actual) === 0;
};

/**
 * @alias
 * expect(object):toBeNonEmptyObject
 *
 * @summary
 * Assert subject is a true Object with at least one instance member.
 *
 * @return {Boolean}
 */
matchers.toBeNonEmptyObject = function() {
  return priv.is(this.actual, 'Object') && priv.countMembers(this.actual) > 0;
};

/**
 * @alias
 * expect(object):toImplement
 *
 * @summary
 * Assert subject is a true Object which features at least the same keys as `other` (regardless of
 * whether it also has other members).
 *
 * @param  {Object} other
 * @return {Boolean}
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
 * @alias
 * expect(function):toBeFunction
 *
 * @summary
 * Assert subject is a true Function, created in the parent document — those created and imported
 * from within iframes or other windows will not match.
 *
 * @return {Boolean}
 */
matchers.toBeFunction = function() {
  return this.actual instanceof Function;
};
