'use strict';

var describeToHaveX = require('./lib/describeToHaveX');

describe('toHaveHtmlString', function() {
    describeToHaveX('toHaveHtmlString', function() {
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
                expect({
                    memberName: '<element>text</element>'
                }).toHaveHtmlString('memberName');
                expect({
                    memberName: '<a data-ng-href="//foo.com" data-ng-click="bar($event)">baz</a>'
                }).toHaveHtmlString('memberName');
                expect({
                    memberName: '<div ng-if="foo > bar || bar < foo && baz == bar"></div>'
                }).toHaveHtmlString('memberName');
                expect({
                    memberName: '<li ng-if="foo > bar || bar < foo && baz == bar">'
                }).toHaveHtmlString('memberName');
                expect({
                    memberName: this.ngMultiLine
                }).toHaveHtmlString('memberName');
            });
        });
        describe('when subject is NOT a string of HTML markup', function() {
            it('should deny', function() {
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
