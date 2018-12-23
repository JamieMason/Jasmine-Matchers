describe('toBeHtmlString', () => {
  describe('when invoked', () => {
    describe('when subject IS a string of HTML markup', () => {
      let ngMultiLine;
      beforeEach(() => {
        ngMultiLine = '';
        ngMultiLine +=
          '<a data-ng-href="//www.google.com" data-ng-click="launchApp($event)" target="_blank" class="ng-binding" href="//www.google.com">';
        ngMultiLine += '\n';
        ngMultiLine += '  Watch with Google TV';
        ngMultiLine += '\n';
        ngMultiLine += '</a>';
        ngMultiLine += '\n';
      });
      it('should confirm', () => {
        expect('<element>text</element>').toBeHtmlString();
        expect(
          '<a data-ng-href="//foo.com" data-ng-click="bar($event)">baz</a>'
        ).toBeHtmlString();
        expect(
          '<div ng-if="foo > bar || bar < foo && baz == bar"></div>'
        ).toBeHtmlString();
        expect(
          '<li ng-if="foo > bar || bar < foo && baz == bar">'
        ).toBeHtmlString();
        expect(ngMultiLine).toBeHtmlString();
      });
    });
    describe('when subject is NOT a string of HTML markup', () => {
      it('should deny', () => {
        expect('div').not.toBeHtmlString();
        expect(null).not.toBeHtmlString();
      });
    });
  });
});
