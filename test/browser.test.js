describe('Browser', function() {

  describe('toBeWindow', function () {
    it('asserts value is a host environments window object', function () {
      expect(window).toBeWindow();
      expect({}).not.toBeWindow();
    });
  });

  describe('toBeDocument', function () {
    it('asserts value is a host environments window object', function () {
      expect(window.document).toBeDocument();
      expect(document).toBeDocument();
      expect({}).not.toBeDocument();
    });
  });

  describe('toBeHtmlCommentNode', function () {
    it('asserts value is a DOM reference to an HTML comment', function () {
      var div = document.createElement('div');
      var comment;
      div.innerHTML = '<!-- some comment -->';
      comment = div.childNodes[0];
      expect(comment).toBeHtmlCommentNode();
    });
  });

  describe('toBeHtmlNode', function () {
    it('asserts value is a DOM reference to an HTML element', function () {
      var div = document.createElement('div');
      expect(div).toBeHtmlNode();
    });
  });

  describe('toBeHtmlTextNode', function () {
    it('asserts value is a DOM reference to an HTML text element', function () {
      var div = document.createElement('div');
      var text;
      div.innerHTML = 'some text';
      text = div.childNodes[0];
      expect(text).toBeHtmlTextNode();
    });
  });

});
