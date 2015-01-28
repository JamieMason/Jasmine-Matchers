describe('String Members', function() {

  describeToHaveX({
    name: 'toHaveEmptyString',
    whenPresent: function() {
      describe('when subject IS a string with no characters', function() {
        it('should confirm', function() {
          expect({
            memberName: ''
          }).toHaveEmptyString('memberName');
        });
      });
      describe('when subject is NOT a string with no characters', function() {
        it('should deny', function() {
          expect({
            memberName: ' '
          }).not.toHaveEmptyString('memberName');
        });
      });
    }
  });

  describeToHaveX({
    name: 'toHaveNonEmptyString',
    whenPresent: function() {
      describe('when subject IS a string with at least one character', function() {
        it('should confirm', function() {
          expect({
            memberName: ' '
          }).toHaveNonEmptyString('memberName');
        });
      });
      describe('when subject is NOT a string with at least one character', function() {
        it('should deny', function() {
          expect({
            memberName: ''
          }).not.toHaveNonEmptyString('memberName');
          expect({
            memberName: null
          }).not.toHaveNonEmptyString('memberName');
        });
      });
    }
  });

  describeToHaveX({
    name: 'toHaveString',
    whenPresent: function() {
      describe('when subject IS a string of any length', function() {
        it('should confirm', function() {
          expect({
            memberName: ''
          }).toHaveString('memberName');
          expect({
            memberName: ' '
          }).toHaveString('memberName');
        });
      });
      describe('when subject is NOT a string of any length', function() {
        it('should deny', function() {
          expect({
            memberName: null
          }).not.toHaveString('memberName');
        });
      });
    }
  });

  describeToHaveX({
    name: 'toHaveHtmlString',
    whenPresent: function() {
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
    }
  });

  describeToHaveX({
    name: 'toHaveJsonString',
    whenPresent: function() {
      describe('when subject IS a string of parseable JSON', function() {
        it('should confirm', function() {
          expect({
            memberName: '{}'
          }).toHaveJsonString('memberName');
          expect({
            memberName: '[]'
          }).toHaveJsonString('memberName');
          expect({
            memberName: '[1]'
          }).toHaveJsonString('memberName');
        });
      });
      describe('when subject is NOT a string of parseable JSON', function() {
        it('should deny', function() {
          expect({
            memberName: '[1,]'
          }).not.toHaveJsonString('memberName');
          expect({
            memberName: '<>'
          }).not.toHaveJsonString('memberName');
          expect({
            memberName: null
          }).not.toHaveJsonString('memberName');
          expect({
            memberName: ''
          }).not.toHaveJsonString('memberName');
          expect({
            memberName: void(0)
          }).not.toHaveJsonString('memberName');
        });
      });
    }
  });

  describeToHaveX({
    name: 'toHaveWhitespaceString',
    whenPresent: function() {
      describe('when subject IS a string containing only tabs, spaces, returns etc', function() {
        it('should confirm', function() {
          expect({
            memberName: ' '
          }).toHaveWhitespaceString('memberName');
          expect({
            memberName: ''
          }).toHaveWhitespaceString('memberName');
        });
      });
      describe('when subject is NOT a string containing only tabs, spaces, returns etc', function() {
        it('should deny', function() {
          expect({
            memberName: 'has-no-whitespace'
          }).not.toHaveWhitespaceString('memberName');
          expect({
            memberName: 'has whitespace'
          }).not.toHaveWhitespaceString('memberName');
          expect({
            memberName: null
          }).not.toHaveWhitespaceString('memberName');
        });
      });
    }
  });

  describeToHaveX({
    name: 'toHaveStringLongerThan',
    whenPresent: function() {
      describe('when the subject and comparison ARE both strings', function() {
        describe('when the subject IS longer than the comparision string', function() {
          it('should confirm', function() {
            expect({
              memberName: 'abc'
            }).toHaveStringLongerThan('memberName', 'ab');
            expect({
              memberName: 'a'
            }).toHaveStringLongerThan('memberName', '');
          });
        });
        describe('when the subject is NOT longer than the comparision string', function() {
          it('should deny', function() {
            expect({
              memberName: 'ab'
            }).not.toHaveStringLongerThan('memberName', 'abc');
            expect({
              memberName: ''
            }).not.toHaveStringLongerThan('memberName', 'a');
          });
        });
      });
      describe('when the subject and comparison are NOT both strings', function() {
        it('should deny (we are asserting the relative lengths of two strings)', function() {
          expect({
            memberName: 'truthy'
          }).not.toHaveStringLongerThan('memberName', void(0));
          expect({
            memberName: void(0)
          }).not.toHaveStringLongerThan('memberName', 'truthy');
          expect({
            memberName: ''
          }).not.toHaveStringLongerThan('memberName', void(0));
          expect({
            memberName: void(0)
          }).not.toHaveStringLongerThan('memberName', '');
        });
      });
    }
  });

  describeToHaveX({
    name: 'toHaveStringShorterThan',
    whenPresent: function() {
      describe('when the subject and comparison ARE both strings', function() {
        describe('when the subject IS shorter than the comparision string', function() {
          it('should confirm', function() {
            expect({
              memberName: 'ab'
            }).toHaveStringShorterThan('memberName', 'abc');
            expect({
              memberName: ''
            }).toHaveStringShorterThan('memberName', 'a');
          });
        });
        describe('when the subject is NOT shorter than the comparision string', function() {
          it('should deny', function() {
            expect({
              memberName: 'abc'
            }).not.toHaveStringShorterThan('memberName', 'ab');
            expect({
              memberName: 'a'
            }).not.toHaveStringShorterThan('memberName', '');
          });
        });
      });
      describe('when the subject and comparison are NOT both strings', function() {
        it('should deny (we are asserting the relative lengths of two strings)', function() {
          expect({
            memberName: 'truthy'
          }).not.toHaveStringShorterThan('memberName', void(0));
          expect({
            memberName: void(0)
          }).not.toHaveStringShorterThan('memberName', 'truthy');
          expect({
            memberName: ''
          }).not.toHaveStringShorterThan('memberName', void(0));
          expect({
            memberName: void(0)
          }).not.toHaveStringShorterThan('memberName', '');
        });
      });
    }
  });

  describeToHaveX({
    name: 'toHaveStringSameLengthAs',
    whenPresent: function() {
      describe('when the subject and comparison ARE both strings', function() {
        describe('when the subject IS the same length as the comparision string', function() {
          it('should confirm', function() {
            expect({
              memberName: 'ab'
            }).toHaveStringSameLengthAs('memberName', 'ab');
          });
        });
        describe('when the subject is NOT the same length as the comparision string', function() {
          it('should deny', function() {
            expect({
              memberName: 'abc'
            }).not.toHaveStringSameLengthAs('memberName', 'ab');
            expect({
              memberName: 'a'
            }).not.toHaveStringSameLengthAs('memberName', '');
            expect({
              memberName: ''
            }).not.toHaveStringSameLengthAs('memberName', 'a');
          });
        });
      });
      describe('when the subject and comparison are NOT both strings', function() {
        it('should deny (we are asserting the relative lengths of two strings)', function() {
          expect({
            memberName: 'truthy'
          }).not.toHaveStringSameLengthAs('memberName', void(0));
          expect({
            memberName: void(0)
          }).not.toHaveStringSameLengthAs('memberName', 'truthy');
          expect({
            memberName: ''
          }).not.toHaveStringSameLengthAs('memberName', void(0));
          expect({
            memberName: void(0)
          }).not.toHaveStringSameLengthAs('memberName', '');
        });
      });
    }
  });

});
