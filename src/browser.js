  // Browser
  // ---------------------------------------------------------------------------

  /**
   * @name toBeWindow
   *
   * @description
   * Assert subject is a browser Window global, whether that be the parent window or those created
   * within iframes or other windows.
   *
   * @example
   * expect(window).toBeWindow();
   * expect({}).not.toBeWindow();
   *
   * @return {Boolean}
   */
  matchers.toBeWindow = function() {
    return this.actual && typeof this.actual === 'object' && this.actual.window === this.actual;
  };

  /**
   * @name toBeDocument
   *
   * @description
   * Assert subject is a browser Window global, whether that be the parent window or those created
   * within iframes or other windows.
   *
   * @example
   * expect(window.document).toBeDocument();
   * expect({}).not.toBeDocument();
   *
   * @return {Boolean}
   */
  matchers.toBeDocument = function() {
    return this.actual && typeof this.actual === 'object' && this.actual instanceof window.HTMLDocument;
  };

  /**
   * @name toBeHtmlNode
   *
   * @description
   * Assert subject is an HTML Element.
   *
   * @example
   * expect(document.createElement('div')).toBeHtmlNode();
   * expect('<div>a string of html</div>').not.toBeHtmlNode();
   * expect(document.createTextNode('i am DOM text')).not.toBeHtmlNode();
   *
   * @return {Boolean}
   */
  matchers.toBeHtmlNode = function() {
    return priv.isHtmlElementOfType(this.actual, 1);
  };

  /**
   * @name toBeHtmlTextNode
   *
   * @description
   * Assert subject is an HTML Text Element.
   *
   * @example
   * expect(document.createTextNode('i am DOM text')).toBeHtmlTextNode();
   * expect(document.querySelector('title').firstChild).toBeHtmlTextNode();
   * expect(document.createElement('div')).not.toBeHtmlTextNode();
   * expect('<div>a string of html</div>').not.toBeHtmlTextNode();
   *
   * @return {Boolean}
   */
  matchers.toBeHtmlTextNode = function() {
    return priv.isHtmlElementOfType(this.actual, 3);
  };

  /**
   * @name toBeHtmlCommentNode
   *
   * @description
   * Assert subject is an HTML Comment Element.
   *
   * @example
   * expect(document.createComment('i am a comment')).toBeHtmlCommentNode();
   * expect(document.createElement('div')).not.toBeHtmlCommentNode();
   * expect('<--a string of html-->').not.toBeHtmlCommentNode();
   *
   * @return {Boolean}
   */
  matchers.toBeHtmlCommentNode = function() {
    return priv.isHtmlElementOfType(this.actual, 8);
  };
