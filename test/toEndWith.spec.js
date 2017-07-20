describe('toEndWith', () => {
  describe('when invoked', () => {
    describe('when subject is NOT an undefined or empty string', () => {
      describe('when subject is a string whose trailing characters match the expected string', () => {
        it('should confirm', () => {
          expect('jamie').toEndWith('mie');
        });
      });
      describe('when subject is a string whose trailing characters DO NOT match the expected string', () => {
        it('should deny', () => {
          expect('jamie ').not.toEndWith('mie');
          expect('jamiE').not.toEndWith('mie');
        });
      });
    });
    describe('when subject IS an undefined or empty string', () => {
      it('should deny', () => {
        let _undefined;
        expect('').not.toEndWith('');
        expect(_undefined).not.toEndWith('');
        expect(_undefined).not.toEndWith('undefined');
        expect('undefined').not.toEndWith(_undefined);
      });
    });
  });
});
