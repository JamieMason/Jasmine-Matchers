describe('toContainSubstring', () => {
  describe('when invoked', () => {
    describe('when subject is NOT an undefined or empty string', () => {
      describe('when subject is a string whose characters contain the expected string', () => {
        it('should confirm', () => {
          expect('jamie').toContainSubstring('am');
        });
      });
      describe('when subject is a string whose characters DO NOT contain the expected string', () => {
        it('should deny', () => {
          expect('jamie').not.toContainSubstring('jamm');
          expect('Jamie').not.toContainSubstring('jam');
        });
      });
    });
    describe('when subject IS an undefined or empty string', () => {
      it('should deny', () => {
        let _undefined;
        expect('').not.toContainSubstring('');
        expect(_undefined).not.toContainSubstring('');
        expect(_undefined).not.toContainSubstring('undefined');
        expect('undefined').not.toContainSubstring(_undefined);
      });
    });
  });
});
