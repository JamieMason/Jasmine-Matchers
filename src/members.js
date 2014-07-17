  // Members
  // ---------------------------------------------------------------------------



  matchers.toHaveDocument = function(memberName) {
    return priv.assertMember.call(this, 'toBeDocument', memberName);
  };

  matchers.toHaveEmptyObject = function(memberName) {
    return priv.assertMember.call(this, 'toBeEmptyObject', memberName);
  };

  /**
   * Assert subject is an Object containing a function at memberName.
   * @param {Boolean} memberName
   * @return {Boolean}
   */
  matchers.toHaveMethod = function(memberName) {
    return priv.assertMember.call(this, 'toBeFunction', memberName);
  };


  matchers.toHaveHtmlCommentNode = function(memberName) {
    return priv.assertMember.call(this, 'toBeHtmlCommentNode', memberName);
  };

  matchers.toHaveHtmlNode = function(memberName) {
    return priv.assertMember.call(this, 'toBeHtmlNode', memberName);
  };

  matchers.toHaveHtmlTextNode = function(memberName) {
    return priv.assertMember.call(this, 'toBeHtmlTextNode', memberName);
  };

  matchers.toHaveMethod = function(memberName) {
    return priv.assertMember.call(this, 'toBeMethod', memberName);
  };

  matchers.toHaveObject = function(memberName) {
    return priv.assertMember.call(this, 'toBeObject', memberName);
  };

  matchers.toHaveNonEmptyObject = function(memberName) {
    return priv.assertMember.call(this, 'toBeNonEmptyObject', memberName);
  };

  matchers.toHaveWindow = function(memberName) {
    return priv.assertMember.call(this, 'toBeWindow', memberName);
  };


  /**
   * Assert subject is an Object containing a member at memberName of any value.
   * @param {Boolean} memberName
   * @return {Boolean}
   */
  matchers.toHaveMember = function(memberName) {
    return memberName && matchers.toBeObject.call(this) && memberName in this.actual;
  };
