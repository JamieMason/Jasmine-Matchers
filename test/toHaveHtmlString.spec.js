const describeToHaveX = require('./lib/describeToHaveX');

describe('toHaveHtmlString', () => {
  describeToHaveX('toHaveHtmlString', () => {
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
        expect({
          memberName: '<element>text</element>'
        }).toHaveHtmlString('memberName');
        expect({
          memberName:
            '<a data-ng-href="//foo.com" data-ng-click="bar($event)">baz</a>'
        }).toHaveHtmlString('memberName');
        expect({
          memberName: '<div ng-if="foo > bar || bar < foo && baz == bar"></div>'
        }).toHaveHtmlString('memberName');
        expect({
          memberName: '<li ng-if="foo > bar || bar < foo && baz == bar">'
        }).toHaveHtmlString('memberName');
        expect({
          memberName: ngMultiLine
        }).toHaveHtmlString('memberName');
      });
    });
    describe('when subject is NOT a string of HTML markup', () => {
      it('should deny', () => {
        expect({
          memberName: 'div'
        }).not.toHaveHtmlString('memberName');
        expect({
          memberName: null
        }).not.toHaveHtmlString('memberName');
      });
    });
  });
});
