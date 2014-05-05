  // Objects
  // ---------------------------------------------------------------------------

  /**
   * Assert subject is an Object, and not null
   * @return {Boolean}
   */
  matchers.toBeObject = function() {
    return this.actual instanceof Object;
  };

  /**
   * Report how many instance members the given Object has.
   * @param  {Object} object
   * @return {Number}
   */
  priv.countMembers = function(object) {
    return priv.reduce(object, function(memo, el, ix) {
      return memo + 1;
    }, 0);
  };

  /**
   * Assert subject is an Object with no instance members.
   * @return {Boolean}
   */
  matchers.toBeEmptyObject = function() {
    return matchers.toBeObject.call(this) && priv.countMembers(this.actual) === 0;
  };

  /**
   * Assert subject is an Object with at least one instance member.
   * @return {Boolean}
   */
  matchers.toBeNonEmptyObject = function() {
    return matchers.toBeObject.call(this) && priv.countMembers(this.actual) > 0;
  };

  /**
   * Assert subject features the same public members as api.
   * @param  {Object|Array} api
   * @return {Boolean}
   */
  matchers.toImplement = function(api) {
    var required;
    if (!this.actual || !api) {
      return false;
    }
    for (required in api) {
      if ((required in this.actual) === false) {
        return false;
      }
    }
    return true;
  };

  /**
   * Assert subject is a function
   * @return {Boolean}
   */
  matchers.toBeFunction = function() {
    return this.actual instanceof Function;
  };
