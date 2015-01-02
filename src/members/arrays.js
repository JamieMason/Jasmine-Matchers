/**
 * ArrayMembers
 */

/**
 * @alias
 * expect(object):toHaveArray
 *
 * @summary
 * .
 *
 * @description
 * See {@link http://git.io/jasmine-array-testing|Unit testing Arrays with Jasmine}.
 *
 * @param  {String} memberName
 * @return {Boolean}
 */
matchers.toHaveArray = function(memberName) {
  return priv.assertMember.call(this, 'toBeArray', memberName);
};

/**
 * @alias
 * expect(object):toHaveArrayOfBooleans
 *
 * @summary
 * .
 *
 * @description
 * See {@link http://git.io/jasmine-array-testing|Unit testing Arrays with Jasmine}.
 *
 * @param  {String} memberName
 * @return {Boolean}
 */
matchers.toHaveArrayOfBooleans = function(memberName) {
  return priv.assertMember.call(this, 'toBeArrayOfBooleans', memberName);
};

/**
 * @alias
 * expect(object):toHaveArrayOfNumbers
 *
 * @summary
 * .
 *
 * @description
 * See {@link http://git.io/jasmine-array-testing|Unit testing Arrays with Jasmine}.
 *
 * @param  {String} memberName
 * @return {Boolean}
 */
matchers.toHaveArrayOfNumbers = function(memberName) {
  return priv.assertMember.call(this, 'toBeArrayOfNumbers', memberName);
};

/**
 * @alias
 * expect(object):toHaveArrayOfObjects
 *
 * @summary
 * .
 *
 * @description
 * See {@link http://git.io/jasmine-array-testing|Unit testing Arrays with Jasmine}.
 *
 * @param  {String} memberName
 * @return {Boolean}
 */
matchers.toHaveArrayOfObjects = function(memberName) {
  return priv.assertMember.call(this, 'toBeArrayOfObjects', memberName);
};

/**
 * @alias
 * expect(object):toHaveArrayOfSize
 *
 * @summary
 * .
 *
 * @description
 * See {@link http://git.io/jasmine-array-testing|Unit testing Arrays with Jasmine}.
 *
 * @param  {String} memberName
 * @param  {Number} size
 * @return {Boolean}
 */
matchers.toHaveArrayOfSize = function(memberName, size) {
  return priv.assertMember.call(this, 'toBeArrayOfSize', memberName, size);
};

/**
 * @alias
 * expect(object):toHaveNonEmptyArray
 *
 * @summary
 * .
 *
 * @description
 * See {@link http://git.io/jasmine-array-testing|Unit testing Arrays with Jasmine}.
 *
 * @param  {String} memberName
 * @return {Boolean}
 */
matchers.toHaveNonEmptyArray = function(memberName) {
  return priv.assertMember.call(this, 'toBeNonEmptyArray', memberName);
};

/**
 * @alias
 * expect(object):toHaveEmptyArray
 *
 * @summary
 * .
 *
 * @description
 * See {@link http://git.io/jasmine-array-testing|Unit testing Arrays with Jasmine}.
 *
 * @param  {String} memberName
 * @return {Boolean}
 */
matchers.toHaveEmptyArray = function(memberName) {
  return priv.assertMember.call(this, 'toBeEmptyArray', memberName);
};

/**
 * @alias
 * expect(object):toHaveArrayOfStrings
 *
 * @summary
 * .
 *
 * @description
 * See {@link http://git.io/jasmine-array-testing|Unit testing Arrays with Jasmine}.
 *
 * @param  {String} memberName
 * @return {Boolean}
 */
matchers.toHaveArrayOfStrings = function(memberName) {
  return priv.assertMember.call(this, 'toBeArrayOfStrings', memberName);
};
