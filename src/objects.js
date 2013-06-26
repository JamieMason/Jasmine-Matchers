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
