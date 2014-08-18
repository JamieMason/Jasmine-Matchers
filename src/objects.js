  /**
   * @module Objects
   */

  /**
   * @inner
   *
   * @description
   * <p>Report how many instance members the given Object has.
   *
   * @param  {Object} object
   * @return {Number}
   * @memberOf priv
   */
  priv.countMembers = function(object) {
    return priv.reduce(object, function(memo, el, ix) {
      return memo + 1;
    }, 0);
  };

  /**
   * @alias
   * module:Objects.toBeObject
   *
   * @description
   * <p>Assert subject is a true Object, created in the parent document — those created and imported
   * from within iframes or other windows will not match.
   * <p>See {@link http://git.io/jasmine-object-testing|Unit testing Objects with Jasmine}.
   *
   * @return {Boolean}
   */
  matchers.toBeObject = function() {
    return this.actual instanceof Object;
  };

  /**
   * @alias
   * module:Objects.toBeEmptyObject
   *
   * @description
   * <p>Assert subject is a true Object with no instance members.
   * <p>See {@link http://git.io/jasmine-object-testing|Unit testing Objects with Jasmine}.
   *
   * @return {Boolean}
   */
  matchers.toBeEmptyObject = function() {
    return priv.is(this.actual, 'Object') && priv.countMembers(this.actual) === 0;
  };

  /**
   * @alias
   * module:Objects.toBeNonEmptyObject
   *
   * @description
   * <p>Assert subject is a true Object with at least one instance member.
   * <p>See {@link http://git.io/jasmine-object-testing|Unit testing Objects with Jasmine}.
   *
   * @return {Boolean}
   */
  matchers.toBeNonEmptyObject = function() {
    return priv.is(this.actual, 'Object') && priv.countMembers(this.actual) > 0;
  };

  /**
   * @alias
   * module:Objects.toImplement
   *
   * @description
   * <p>Assert subject is a true Object which features at least the same keys as `other` (regardless of
   * whether it also has other members).
   * <p>See {@link http://git.io/jasmine-object-testing|Unit testing Objects with Jasmine}.
   *
   * @param  {Object} other
   * @return {Boolean}
   */
  matchers.toImplement = function(other) {
    if (!priv.is(this.actual, 'Object') || !priv.is(other, 'Object')) {
      return false;
    }
    for (var key in other) {
      if (key in this.actual) {
        continue;
      }
      return false;
    }
    return true;
  };

  /**
   * @alias
   * module:Objects.toBeFunction
   *
   * @description
   * <p>Assert subject is a true Function, created in the parent document — those created and imported
   * from within iframes or other windows will not match.
   * <p>See {@link http://git.io/jasmine-object-testing|Unit testing Objects with Jasmine}.
   *
   * @return {Boolean}
   */
  matchers.toBeFunction = function() {
    return this.actual instanceof Function;
  };
