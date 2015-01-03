/**
 * @alias    toHaveHtmlNode
 * @summary  <code>expect(object).toHaveHtmlNode(key:String);</code>
 */
matchers.toHaveHtmlNode = function(key) {
  return priv.assertMember.call(this, 'toBeHtmlNode', key);
};
