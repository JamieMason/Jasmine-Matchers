  /**
   * @module Dates
   */

  /**
   * @alias
   * module:Dates.toBeDate
   *
   * @description
   * <p>Assert subject is a true Date, created in the parent document — those created and imported
   * from within iframes or other windows will not match.
   * <p>See {@link http://git.io/jasmine-date-testing|Unit testing Dates with Jasmine}.
   *
   * @return {Boolean}
   */
  matchers.toBeDate = function() {
    return this.actual instanceof Date;
  };

  /**
   * @alias
   * module:Dates.toBeIso8601
   *
   * @description
   * <p>Assert subject is a Date String conforming to the ISO 8601 standard.
   * <p>See {@link http://git.io/jasmine-date-testing|Unit testing Dates with Jasmine}.
   *
   * @return {Boolean}
   */
  matchers.toBeIso8601 = function() {
    return matchers.toBeString.call(this)
      && this.actual.length >= 10
      && new Date(this.actual).toString() !== 'Invalid Date'
      && new Date(this.actual).toISOString().slice(0, this.actual.length) === this.actual;
  };

  /**
   * @alias
   * module:Dates.toBeBefore
   *
   * @description
   * <p>Assert subject is a Date occurring before another Date.
   * <p>See {@link http://git.io/jasmine-date-testing|Unit testing Dates with Jasmine}.
   *
   * @param {Date} date
   * @return {Boolean}
   */
  matchers.toBeBefore = function(date) {
    return matchers.toBeDate.call(this) && matchers.toBeDate.call({ actual: date }) && this.actual.getTime() < date.getTime();
  };

  /**
   * @alias
   * module:Dates.toBeAfter
   *
   * @description
   * <p>Assert subject is a Date occurring after another Date.
   * <p>See {@link http://git.io/jasmine-date-testing|Unit testing Dates with Jasmine}.
   *
   * @param {Date} date
   * @return {Boolean}
   */
  matchers.toBeAfter = function(date) {
    return matchers.toBeBefore.call({ actual: date }, this.actual);
  };
