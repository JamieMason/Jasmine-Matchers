describe('Strings', function() {

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

  describe('toMatchRegExp', function () {
    it('asserts value is a string matching the supplied RegExp', function () {
      expect('abc').toMatchRegExp(/abc/);
      expect('abc').not.toMatchRegExp(/ABC/);
      expect('abc').toMatchRegExp(/ABC/i);
      expect(123).not.toMatchRegExp(/123/);
    });
  });

  describe('toStartWith', function() {
    describe('when subject is empty', function() {
      it('correctly handles undefined or empty strings', function() {
        expect('').not.toStartWith('');
        expect(void(0)).not.toStartWith('');
        expect(void(0)).not.toStartWith('undefined');
        expect('undefined').not.toStartWith(void(0));
      });
    });
    describe('when subject is not empty', function() {
      it('asserts the leading characters of the subject match the expected string', function() {
        expect('jamie').toStartWith('jam');
        expect(' jamie').not.toStartWith('jam');
        expect('Jamie').not.toStartWith('jam');
      });
    });
  });

  describe('toEndWith', function() {
    describe('when subject is empty', function() {
      it('correctly handles undefined or empty strings', function() {
        expect('').not.toEndWith('');
        expect(void(0)).not.toEndWith('');
        expect(void(0)).not.toEndWith('undefined');
        expect('undefined').not.toEndWith(void(0));
      });
    });
    describe('when subject is not empty', function() {
      it('asserts the leading characters of the subject match the expected string', function() {
        expect('jamie').toEndWith('mie');
        expect('jamie ').not.toEndWith('mie');
        expect('jamiE').not.toEndWith('mie');
      });
    });
  });
});
