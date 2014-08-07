describe('Browser', function() {

  describe('toBeWindow', function() {
    describe('when invoked', function() {
      describe('when value is a host Window object', function() {
        it('should confirm', function() {
          expect(window).toBeWindow();
        });
      });
      describe('when value is NOT a host Window object', function() {
        it('should deny', function() {
          expect({}).not.toBeWindow();
        });
      });
    });
  });

  describe('toBeDocument', function() {
    describe('when invoked', function() {
      describe('when value is a host Document object', function() {
        it('should confirm', function() {
          expect(window.document).toBeDocument();
          expect(document).toBeDocument();
        });
      });
      describe('when value is NOT a host Document object', function() {
        it('should deny', function() {
          expect({}).not.toBeDocument();
        });
      });
    });
  });

  describe('toBeHtmlCommentNode', function() {
    describe('when invoked', function() {
      describe('when value is a DOM reference to an HTML comment', function() {
        beforeEach(function() {
          var div = document.createElement('div');
          div.innerHTML = '<!-- some comment -->';
          this.comment = div.childNodes[0];
        });
        it('should confirm', function() {
          expect(this.comment).toBeHtmlCommentNode();
        });
      });
    });
  });

  describe('toBeHtmlNode', function() {
    describe('when invoked', function() {
      describe('when value is a DOM reference to an HTML element', function() {
        beforeEach(function() {
          this.div = document.createElement('div');
        });
        it('should confirm', function() {
          expect(this.div).toBeHtmlNode();
        });
      });
    });
  });

  describe('toBeHtmlTextNode', function() {
    describe('when invoked', function() {
      describe('when value is a DOM reference to an HTML text element', function() {
        beforeEach(function() {
          var div = document.createElement('div');
          div.innerHTML = 'some text';
          this.text = div.childNodes[0];
        });
        it('should confirm', function() {
          expect(this.text).toBeHtmlTextNode();
        });
      });
    });
  });

});
