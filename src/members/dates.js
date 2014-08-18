  /**
   * @module DateMembers
   */

  /**
   * @alias
   * module:DateMembers.toHaveDate
   *
   * @description
   * <p>.
   * <p>See {@link http://git.io/jasmine-date-testing|Unit testing Dates with Jasmine}.
   *
   * @param  {String} memberName
   * @return {Boolean}
   */
  matchers.toHaveDate = function(memberName) {
    return priv.assertMember.call(this, 'toBeDate', memberName);
  };

  /**
   * @alias
   * module:DateMembers.toHaveDateAfter
   *
   * @description
   * <p>.
   * <p>See {@link http://git.io/jasmine-bdate-testing|Unit testing Dates with Jasmine}.
   *
   * @param  {String} memberName
   * @param  {Date} date
   * @return {Boolean}
   */
  matchers.toHaveDateAfter = function(memberName, date) {
    return priv.assertMember.call(this, 'toBeDateAfter', memberName, date);
  };

  /**
   * @alias
   * module:DateMembers.toHaveDateBefore
   *
   * @description
   * <p>.
   * <p>See {@link http://git.io/jasmine-browser-date|Unit testing Browsers with Dates}.
   *
   * @param  {String} memberName
   * @param  {Date} date
   * @return {Boolean}
   */
  matchers.toHaveDateBefore = function(memberName, date) {
    return priv.assertMember.call(this, 'toBeDateBefore', memberName, date);
  };

  /**
   * @alias
   * module:DateMembers.toHaveIso8601
   *
   * @description
   * <p>.
   * <p>See {@link http://git.io/jasmine-date-testing|Unit testing Dates with Jasmine}.
   *
   * @param  {String} memberName
   * @return {Boolean}
   */
  matchers.toHaveIso8601 = function(memberName) {
    return priv.assertMember.call(this, 'toBeIso8601', memberName);
  };
