  /**
   * Assert subject is a Date
   * @return {Boolean}
   */
  matchers.toBeDate = function() {
    return this.actual instanceof Date;
  };

  /**
   * Assert subject is a Date String conforming to the ISO 8601 standard
   * @return {Boolean}
   */
  matchers.toBeIso8601 = function() {
    return matchers.toBeString.call(this)
      && this.actual.length >= 10
      && new Date(this.actual).toString() !== 'Invalid Date'
      && new Date(this.actual).toISOString().slice(0, this.actual.length) === this.actual;
  };

  /**
   * Assert subject is a Date occurring before another Date
   * @param {Date} date
   * @return {Boolean}
   */
  matchers.toBeBefore = function(date) {
    return matchers.toBeDate.call(this) && matchers.toBeDate.call({ actual: date }) && this.actual.getTime() < date.getTime();
  };

  /**
   * Assert subject is a Date occurring after another Date
   * @param {Date} date
   * @return {Boolean}
   */
  matchers.toBeAfter = function(date) {
    return matchers.toBeBefore.call({ actual: date }, this.actual);
  };
