describe('Strings', function() {

  describe('toBeEmptyString', function() {
    describe('when invoked', function() {
      describe('when subject IS a string with no characters', function() {
        it('should confirm', function() {
          expect('').toBeEmptyString();
        });
      });
      describe('when subject is NOT a string with no characters', function() {
        it('should deny', function() {
          expect(' ').not.toBeEmptyString();
        });
      });
    });
  });

  describe('toBeNonEmptyString', function() {
    describe('when invoked', function() {
      describe('when subject IS a string with at least one character', function() {
        it('should confirm', function() {
          expect(' ').toBeNonEmptyString();
        });
      });
      describe('when subject is NOT a string with at least one character', function() {
        it('should deny', function() {
          expect('').not.toBeNonEmptyString();
          expect(null).not.toBeNonEmptyString();
        });
      });
    });
  });

  describe('toBeString', function() {
    describe('when invoked', function() {
      describe('when subject IS a string of any length', function() {
        it('should confirm', function() {
          expect('').toBeString();
          expect(' ').toBeString();
        });
      });
      describe('when subject is NOT a string of any length', function() {
        it('should deny', function() {
          expect(null).not.toBeString();
        });
      });
    });
  });

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

  describe('toBeJsonString', function() {
    describe('when invoked', function() {
      describe('when subject IS a string of parseable JSON', function() {
        it('should confirm', function() {
          expect('{}').toBeJsonString();
          expect('[]').toBeJsonString();
          expect('[1]').toBeJsonString();
        });
      });
      describe('when subject is NOT a string of parseable JSON', function() {
        it('should deny', function() {
          expect('[1,]').not.toBeJsonString();
          expect('<>').not.toBeJsonString();
          expect(null).not.toBeJsonString();
          expect('').not.toBeJsonString();
          expect(void(0)).not.toBeJsonString();
        });
      });
    });
  });

  describe('toBeWhitespace', function() {
    describe('when invoked', function() {
      describe('when subject IS a string containing only tabs, spaces, returns etc', function() {
        it('should confirm', function() {
          expect(' ').toBeWhitespace();
          expect('').toBeWhitespace();
        });
      });
      describe('when subject is NOT a string containing only tabs, spaces, returns etc', function() {
        it('should deny', function() {
          expect('has-no-whitespace').not.toBeWhitespace();
          expect('has whitespace').not.toBeWhitespace();
          expect(null).not.toBeWhitespace();
        });
      });
    });
  });

  describe('toStartWith', function() {
    describe('when invoked', function() {
      describe('when subject is NOT an undefined or empty string', function() {
        describe('when subject is a string whose leading characters match the expected string', function() {
          it('should confirm', function() {
            expect('jamie').toStartWith('jam');
          });
        });
        describe('when subject is a string whose leading characters DO NOT match the expected string', function() {
          it('should deny', function() {
            expect(' jamie').not.toStartWith('jam');
            expect('Jamie').not.toStartWith('jam');
          });
        });
      });
      describe('when subject IS an undefined or empty string', function() {
        it('should deny', function() {
          expect('').not.toStartWith('');
          expect(void(0)).not.toStartWith('');
          expect(void(0)).not.toStartWith('undefined');
          expect('undefined').not.toStartWith(void(0));
        });
      });
    });
  });

  describe('toEndWith', function() {
    describe('when invoked', function() {
      describe('when subject is NOT an undefined or empty string', function() {
        describe('when subject is a string whose trailing characters match the expected string', function() {
          it('should confirm', function() {
            expect('jamie').toEndWith('mie');
          });
        });
        describe('when subject is a string whose trailing characters DO NOT match the expected string', function() {
          it('should deny', function() {
            expect('jamie ').not.toEndWith('mie');
            expect('jamiE').not.toEndWith('mie');
          });
        });
      });
      describe('when subject IS an undefined or empty string', function() {
        it('should deny', function() {
          expect('').not.toEndWith('');
          expect(void(0)).not.toEndWith('');
          expect(void(0)).not.toEndWith('undefined');
          expect('undefined').not.toEndWith(void(0));
        });
      });
    });
  });

  describe('toBeLongerThan', function() {
    describe('when invoked', function() {
      describe('when the subject and comparison ARE both strings', function() {
        describe('when the subject IS longer than the comparision string', function() {
          it('should confirm', function() {
            expect('abc').toBeLongerThan('ab');
            expect('a').toBeLongerThan('');
          });
        });
        describe('when the subject is NOT longer than the comparision string', function() {
          it('should deny', function() {
            expect('ab').not.toBeLongerThan('abc');
            expect('').not.toBeLongerThan('a');
          });
        });
      });
      describe('when the subject and comparison are NOT both strings', function() {
        it('should deny (we are asserting the relative lengths of two strings)', function() {
          expect('truthy').not.toBeLongerThan(void(0));
          expect(void(0)).not.toBeLongerThan('truthy');
          expect('').not.toBeLongerThan(void(0));
          expect(void(0)).not.toBeLongerThan('');
        });
      });
    });
  });

  describe('toBeShorterThan', function() {
    describe('when invoked', function() {
      describe('when the subject and comparison ARE both strings', function() {
        describe('when the subject IS shorter than the comparision string', function() {
          it('should confirm', function() {
            expect('ab').toBeShorterThan('abc');
            expect('').toBeShorterThan('a');
          });
        });
        describe('when the subject is NOT shorter than the comparision string', function() {
          it('should deny', function() {
            expect('abc').not.toBeShorterThan('ab');
            expect('a').not.toBeShorterThan('');
          });
        });
      });
      describe('when the subject and comparison are NOT both strings', function() {
        it('should deny (we are asserting the relative lengths of two strings)', function() {
          expect('truthy').not.toBeShorterThan(void(0));
          expect(void(0)).not.toBeShorterThan('truthy');
          expect('').not.toBeShorterThan(void(0));
          expect(void(0)).not.toBeShorterThan('');
        });
      });
    });
  });

  describe('toBeSameLengthAs', function() {
    describe('when invoked', function() {
      describe('when the subject and comparison ARE both strings', function() {
        describe('when the subject IS the same length as the comparision string', function() {
          it('should confirm', function() {
            expect('ab').toBeSameLengthAs('ab');
          });
        });
        describe('when the subject is NOT the same length as the comparision string', function() {
          it('should deny', function() {
            expect('abc').not.toBeSameLengthAs('ab');
            expect('a').not.toBeSameLengthAs('');
            expect('').not.toBeSameLengthAs('a');
          });
        });
      });
      describe('when the subject and comparison are NOT both strings', function() {
        it('should deny (we are asserting the relative lengths of two strings)', function() {
          expect('truthy').not.toBeSameLengthAs(void(0));
          expect(void(0)).not.toBeSameLengthAs('truthy');
          expect('').not.toBeSameLengthAs(void(0));
          expect(void(0)).not.toBeSameLengthAs('');
        });
      });
    });
  });

});
