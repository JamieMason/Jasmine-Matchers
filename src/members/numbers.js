/**
 * NumberMembers
 */

/**
 * @alias
 * expect(object):toHaveNumber
 *
 * @summary
 * .
 *
 * @description
 * See {@link http://git.io/jasmine-number-testing|Unit testing Numbers with Jasmine}.
 *
 * @param  {String} memberName
 * @return {Boolean}
 */
matchers.toHaveNumber = function(memberName) {
  return priv.assertMember.call(this, 'toBeNumber', memberName);
};

/**
 * @alias
 * expect(object):toHaveNumberWithinRange
 *
 * @summary
 * .
 *
 * @description
 * See {@link http://git.io/jasmine-number-testing|Unit testing Numbers with Jasmine}.
 *
 * @param  {String} memberName
 * @param  {Number} floor
 * @param  {Number} ceiling
 * @return {Boolean}
 */
matchers.toHaveNumberWithinRange = function(memberName, floor, ceiling) {
  return priv.assertMember.call(this, 'toBeWithinRange', memberName, floor, ceiling);
};

/**
 * @alias
 * expect(object):toHaveCalculable
 *
 * @summary
 * .
 *
 * @description
 * See {@link http://git.io/jasmine-number-testing|Unit testing Numbers with Jasmine}.
 *
 * @param  {String} memberName
 * @return {Boolean}
 */
matchers.toHaveCalculable = function(memberName) {
  return priv.assertMember.call(this, 'toBeCalculable', memberName);
};

/**
 * @alias
 * expect(object):toHaveEvenNumber
 *
 * @summary
 * .
 *
 * @description
 * See {@link http://git.io/jasmine-number-testing|Unit testing Numbers with Jasmine}.
 *
 * @param  {String} memberName
 * @return {Boolean}
 */
matchers.toHaveEvenNumber = function(memberName) {
  return priv.assertMember.call(this, 'toBeEvenNumber', memberName);
};

/**
 * @alias
 * expect(object):toHaveOddNumber
 *
 * @summary
 * .
 *
 * @description
 * See {@link http://git.io/jasmine-number-testing|Unit testing Numbers with Jasmine}.
 *
 * @param  {String} memberName
 * @return {Boolean}
 */
matchers.toHaveOddNumber = function(memberName) {
  return priv.assertMember.call(this, 'toBeOddNumber', memberName);
};

/**
 * @alias
 * expect(object):toHaveWholeNumber
 *
 * @summary
 * .
 *
 * @description
 * See {@link http://git.io/jasmine-number-testing|Unit testing Numbers with Jasmine}.
 *
 * @param  {String} memberName
 * @return {Boolean}
 */
matchers.toHaveWholeNumber = function(memberName) {
  return priv.assertMember.call(this, 'toBeWholeNumber', memberName);
};
