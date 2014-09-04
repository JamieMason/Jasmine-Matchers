  // Errors
  // ---------------------------------------------------------------------------

  /**
   * Asserts subject throws an Error of any type
   * @return {Boolean}
   */
  matchers.toThrowAnyError = function() {
    var threwError = false;
    try {
      this.actual();
    } catch (e) {
      threwError = true;
    }
    return threwError;
  };

  /**
   * Asserts subject throws an Error of a specific type, such as 'TypeError'
   * @param  {String} type
   * @return {Boolean}
   */
  matchers.toThrowErrorOfType = function(type) {
    var threwErrorOfType = false;
    try {
      this.actual();
    } catch (e) {
      threwErrorOfType = (e.name === type);
    }
    return threwErrorOfType;
  };
