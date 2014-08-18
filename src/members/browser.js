  /**
   * BrowserMembers
   */

  /**
   * @alias
   * expect(object):toHaveHtmlNode
   *
   * @summary
   * Assert subject is a true Object containing a property at memberName which is an HTML Element.
   *
   * @description
   * See {@link http://git.io/jasmine-browser-testing|Unit testing Browsers with Jasmine}.
   *
   * @param {Boolean} memberName
   * @return {Boolean}
   */
  matchers.toHaveHtmlNode = function(memberName) {
    return priv.assertMember.call(this, 'toBeHtmlNode', memberName);
  };
