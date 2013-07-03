  // Browser
  // ---------------------------------------------------------------------------

  /**
   * Assert subject is the window global
   * @return {Boolean}
   */
  matchers.toBeWindow = function() {
    return typeof window !== 'undefined' && this.actual === window;
  };

  /**
   * Assert subject is the document global
   * @return {Boolean}
   */
  matchers.toBeDocument = function() {
    return typeof document !== 'undefined' && this.actual === document;
  };

  /**
   * Assert subject is an HTML Element
   * @return {Boolean}
   */
  matchers.toBeHtmlNode = function() {
    return priv.isHtmlElementOfType(this.actual, 1);
  };

  /**
   * Assert subject is an HTML Text Element
   * @return {Boolean}
   */
  matchers.toBeHtmlTextNode = function() {
    return priv.isHtmlElementOfType(this.actual, 3);
  };

  /**
   * Assert subject is an HTML Text Element
   * @return {Boolean}
   */
  matchers.toBeHtmlCommentNode = function() {
    return priv.isHtmlElementOfType(this.actual, 8);
  };
