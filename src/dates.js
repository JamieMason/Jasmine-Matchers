  // Dates
  // ---------------------------------------------------------------------------

  /**
   * @alias toBeDate
   *
   * @description
   * Assert subject is a true Date, created in the parent document — those created and imported
   * from within iframes or other windows will not match.
   *
   * @example
   * See {@link http://git.io/jasmine-date-testing|Unit testing Dates with Jasmine}.
   *
   * @return {Boolean}
   */
  matchers.toBeDate = function() {
    return this.actual instanceof Date;
  };

  /**
   * @alias toBeIso8601
   *
   * @description
   * Assert subject is a Date String conforming to the ISO 8601 standard.
   *
   * @example
   * See {@link http://git.io/jasmine-date-testing|Unit testing Dates with Jasmine}.
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
   * @alias toBeBefore
   *
   * @description
   * Assert subject is a Date occurring before another Date.
   *
   * @example
   * See {@link http://git.io/jasmine-date-testing|Unit testing Dates with Jasmine}.
   *
   * @param {Date} date
   * @return {Boolean}
   */
  matchers.toBeBefore = function(date) {
    return matchers.toBeDate.call(this) && matchers.toBeDate.call({ actual: date }) && this.actual.getTime() < date.getTime();
  };

  /**
   * @alias toBeAfter
   *
   * @description
   * Assert subject is a Date occurring after another Date.
   *
   * @example
   * See {@link http://git.io/jasmine-date-testing|Unit testing Dates with Jasmine}.
   *
   * @param {Date} date
   * @return {Boolean}
   */
  matchers.toBeAfter = function(date) {
    return matchers.toBeBefore.call({ actual: date }, this.actual);
  };

  // Date Members
  // ---------------------------------------------------------------------------

  /**
   * @alias toHaveDate
   *
   * @description
   * .
   *
   * @example
   * See {@link http://git.io/jasmine-date-testing|Unit testing Dates with Jasmine}.
   *
   * @param  {String} memberName
   * @return {Boolean}
   */
  matchers.toHaveDate = function(memberName) {
    return priv.assertMember.call(this, 'toBeDate', memberName);
  };

  /**
   * @alias toHaveDateAfter
   *
   * @description
   * .
   *
   * @example
   * See {@link http://git.io/jasmine-bdate-testing|Unit testing Dates with Jasmine}.
   *
   * @param  {String} memberName
   * @param  {Date} date
   * @return {Boolean}
   */
  matchers.toHaveDateAfter = function(memberName, date) {
    return priv.assertMember.call(this, 'toBeDateAfter', memberName, date);
  };

  /**
   * @alias toHaveDateBefore
   *
   * @description
   * .
   *
   * @example
   * See {@link http://git.io/jasmine-browser-date|Unit testing Browsers with Dates}.
   *
   * @param  {String} memberName
   * @param  {Date} date
   * @return {Boolean}
   */
  matchers.toHaveDateBefore = function(memberName, date) {
    return priv.assertMember.call(this, 'toBeDateBefore', memberName, date);
  };

  /**
   * @alias toHaveIso8601
   *
   * @description
   * .
   *
   * @example
   * See {@link http://git.io/jasmine-date-testing|Unit testing Dates with Jasmine}.
   *
   * @param  {String} memberName
   * @return {Boolean}
   */
  matchers.toHaveIso8601 = function(memberName) {
    return priv.assertMember.call(this, 'toBeIso8601', memberName);
  };
