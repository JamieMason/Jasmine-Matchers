describe('Jasmine-Matchers', function () {

  var types;

  beforeEach(function () {
    types = {
      object: {},
      array: [],
      int: 100,
      regEx: /regex/,
      fn: function () {},
      string: 'string',
      nullValue: null
    };
  });

  describe('toBeArray', function () {
    it('asserts value is a true Array', function () {
      expect([]).toBeArray();
      expect(new Array()).toBeArray();
      expect({}).not.toBeArray();
    });
  });

  describe('toBeArrayOfSize', function () {
    it('asserts value is a true Array with a required number of members', function () {
      expect([]).toBeArrayOfSize(0);
      expect([null]).toBeArrayOfSize(1);
      expect([]).not.toBeArrayOfSize(1);
      expect([null]).not.toBeArrayOfSize(0);
    });
  });

  describe('toBeNonEmptyArray', function () {
    it('asserts value is a true Array with at least one member', function () {
      expect([null]).toBeNonEmptyArray();
      expect([]).not.toBeNonEmptyArray();
    });
  });

  describe('toBeTrue', function () {
    it('asserts value is not only truthy, but a boolean true', function () {
      expect(true).toBeTrue();
      expect(1).not.toBeTrue();
    });
  });

  describe('toBeFalse', function () {
    it('asserts value is not only falsy, but a boolean false', function () {
      expect(false).toBeFalse();
      expect(1).not.toBeFalse();
    });
  });

  describe('toBeBoolean', function () {
    it('asserts value is not only truthy or falsy, but a boolean', function () {
      expect(true).toBeBoolean();
      expect(false).toBeBoolean();
      expect(1).not.toBeBoolean();
      expect(0).not.toBeBoolean();
    });
  });

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

  describe('toBeEmptyString', function () {
    it('asserts value is a string with no characters', function () {
      expect('').toBeEmptyString();
      expect(' ').not.toBeEmptyString();
    });
  });

  describe('toBeNonEmptyString', function () {
    it('asserts value is a string with at least one character', function () {
      expect(' ').toBeNonEmptyString();
      expect('').not.toBeNonEmptyString();
      expect(null).not.toBeNonEmptyString();
    });
  });

  describe('toBeString', function () {
    it('asserts value is a string of any length', function () {
      expect('').toBeString();
      expect(' ').toBeString();
      expect(null).not.toBeString();
    });
  });

  describe('toBeHtmlString', function () {
    it('asserts value is a string of HTML markup', function () {
      expect('<element>text</element>').toBeHtmlString();
      expect('div').not.toBeHtmlString();
      expect(null).not.toBeHtmlString();
    });
  });

  describe('toBeWhitespace', function () {
    it('asserts value is a string containing only tabs, spaces, returns etc', function () {
      expect(' ').toBeWhitespace();
      expect('').toBeWhitespace();
      expect('has-no-whitespace').not.toBeWhitespace();
      expect('has whitespace').not.toBeWhitespace();
      expect(null).not.toBeWhitespace();
    });
  });

  describe('toBeNumber', function () {
    it('asserts value is a number', function () {
      expect(1).toBeNumber();
      expect(1.11).toBeNumber();
      expect(1e3).toBeNumber();
      expect(0.11).toBeNumber();
      expect(-11).toBeNumber();
      expect('1').not.toBeNumber();
      expect(NaN).not.toBeNumber();
    });
  });

  describe('toBeCalculable', function () {
    it('asserts value can be coerced by JavaScript to be used in mathematical operations', function () {
      expect('1').toBeCalculable();
      expect({}).not.toBeCalculable();
      expect('').toBeCalculable();
      expect(null).toBeCalculable();
      expect(NaN).not.toBeCalculable();
    });
  });

  describe('toBeEvenNumber', function () {
    it('asserts value is an even number', function () {
      expect(2).toBeEvenNumber();
      expect(1).not.toBeEvenNumber();
      expect(NaN).not.toBeEvenNumber();
    });
  });

  describe('toBeOddNumber', function () {
    it('asserts value is an even number', function () {
      expect(1).toBeOddNumber();
      expect(2).not.toBeOddNumber();
      expect(NaN).not.toBeOddNumber();
    });
  });

  describe('toBeFunction', function () {
    it('asserts value is a function', function () {
      expect(function(){}).toBeFunction();
      expect(/regexp/).not.toBeFunction();
    });
  });

  describe('toBeObject', function () {
    it('asserts value is an Object', function () {
      function Foo(){}
      expect(new Foo()).toBeObject();
      expect({}).toBeObject();
      expect(null).not.toBeObject();
    });
  });

  describe('toImplement', function () {
    it('asserts value is an Object containing all of the supplied members', function () {
      expect({ a: 1, b: 2 }).toImplement({ a: 1, b: 2 });
      expect({ a: 1, b: 2 }).toImplement({ a: 1 });
      expect({ a: 1 }).not.toImplement({ c: 3 });
      expect(null).not.toImplement({ a: 1 });
    });
  });

  describe('toThrowError', function () {
    it('asserts value is a function which will error when called a particular way', function () {
      expect(function(){ throw new Error('wut?'); }).toThrowError();
      expect(function(){ return badReference.someValue }).toThrowError();
      expect(function(){}).not.toThrowError();
    });
  });

  describe('toThrowErrorOfType', function () {
    it('asserts value is a function which will throw a specific type of error when called a particular way', function () {
      expect(function(){ throw new Error('wut?'); }).toThrowErrorOfType('Error');
      expect(function(){ return badReference.someValue }).toThrowErrorOfType('ReferenceError');
    });
  });

  describe('toBeDate', function () {
    it('asserts value is an instance of Date', function () {
      expect(new Date()).toBeDate();
      expect(null).not.toBeDate();
    });
  });

});
