/**
 * DateMembers
 */

/**
 * @alias
 * expect(object):toHaveDate
 *
 * @summary
 * .
 *
 * @description
 * See {@link http://git.io/jasmine-date-testing|Unit testing Dates with Jasmine}.
 *
 * @param  {String} memberName
 * @return {Boolean}
 */
matchers.toHaveDate = function(memberName) {
  return priv.assertMember.call(this, 'toBeDate', memberName);
};

/**
 * @alias
 * expect(object):toHaveDateAfter
 *
 * @summary
 * .
 *
 * @description
 * See {@link http://git.io/jasmine-bdate-testing|Unit testing Dates with Jasmine}.
 *
 * @param  {String} memberName
 * @param  {Date} date
 * @return {Boolean}
 */
matchers.toHaveDateAfter = function(memberName, date) {
  return priv.assertMember.call(this, 'toBeAfter', memberName, date);
};

/**
 * @alias
 * expect(object):toHaveDateBefore
 *
 * @summary
 * .
 *
 * @description
 * See {@link http://git.io/jasmine-browser-date|Unit testing Browsers with Dates}.
 *
 * @param  {String} memberName
 * @param  {Date} date
 * @return {Boolean}
 */
matchers.toHaveDateBefore = function(memberName, date) {
  return priv.assertMember.call(this, 'toBeBefore', memberName, date);
};

/**
 * @alias
 * expect(object):toHaveIso8601
 *
 * @summary
 * .
 *
 * @description
 * See {@link http://git.io/jasmine-date-testing|Unit testing Dates with Jasmine}.
 *
 * @param  {String} memberName
 * @return {Boolean}
 */
matchers.toHaveIso8601 = function(memberName) {
  return priv.assertMember.call(this, 'toBeIso8601', memberName);
};
