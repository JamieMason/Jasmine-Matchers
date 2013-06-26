  /**
   * Assert subject is a Date
   * @return {Boolean}
   */
  matchers.toBeDate = function() {
    return this.actual instanceof Date;
  };
