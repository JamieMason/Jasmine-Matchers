'use strict';

describe('toBeHtmlString', function() {
    describe('when invoked', function() {
        describe('when subject IS a string of HTML markup', function() {
            beforeEach(function() {
                this.ngMultiLine = '';
                this.ngMultiLine += '<a data-ng-href="//www.google.com" data-ng-click="launchApp($event)" target="_blank" class="ng-binding" href="//www.google.com">';
                this.ngMultiLine += '\n';
                this.ngMultiLine += '  Watch with Google TV';
                this.ngMultiLine += '\n';
                this.ngMultiLine += '</a>';
                this.ngMultiLine += '\n';
            });
            it('should confirm', function() {
                expect('<element>text</element>').toBeHtmlString();
                expect('<a data-ng-href="//foo.com" data-ng-click="bar($event)">baz</a>').toBeHtmlString();
                expect('<div ng-if="foo > bar || bar < foo && baz == bar"></div>').toBeHtmlString();
                expect('<li ng-if="foo > bar || bar < foo && baz == bar">').toBeHtmlString();
                expect(this.ngMultiLine).toBeHtmlString();
            });
        });
        describe('when subject is NOT a string of HTML markup', function() {
            it('should deny', function() {
                expect('div').not.toBeHtmlString();
                expect(null).not.toBeHtmlString();
            });
        });
    });
});
