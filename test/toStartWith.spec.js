describe('toStartWith', () => {
  describe('when invoked', () => {
    describe('when subject is NOT an undefined or empty string', () => {
      describe('when subject is a string whose leading characters match the expected string', () => {
        it('should confirm', () => {
          expect('jamie').toStartWith('jam');
        });
      });
      describe('when subject is a string whose leading characters DO NOT match the expected string', () => {
        it('should deny', () => {
          expect(' jamie').not.toStartWith('jam');
          expect('Jamie').not.toStartWith('jam');
        });
      });
    });
    describe('when subject IS an undefined or empty string', () => {
      it('should deny', () => {
        let _undefined;
        expect('').not.toStartWith('');
        expect(_undefined).not.toStartWith('');
        expect(_undefined).not.toStartWith('undefined');
        expect('undefined').not.toStartWith(_undefined);
      });
    });
  });
});
