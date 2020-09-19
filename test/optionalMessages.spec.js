it('should handle optional messages', () => {
  const MSG = 'some optional message';
  let _undefined;
  expect(new Date('2013-01-01T01:00:00.000Z')).toBeAfter(
    new Date('2013-01-01T00:00:00.000Z'),
    MSG
  );
  expect([]).toBeArray(MSG);
  expect([]).toBeArrayOfSize(0, MSG);
  expect(new Date('2013-01-01T00:00:00.000Z')).toBeBefore(
    new Date('2013-01-01T01:00:00.000Z'),
    MSG
  );
  expect(true).toBeBoolean(MSG);
  expect('1').toBeCalculable(MSG);
  expect(new Date()).toBeDate(MSG);
  expect([]).toBeEmptyArray(MSG);
  expect({}).toBeEmptyObject(MSG);
  expect('').toBeEmptyString(MSG);
  expect(2).toBeEvenNumber(MSG);
  expect(() => {}).toBeFunction(MSG);
  expect('<element>text</element>').toBeHtmlString(MSG);
  expect('2013-07-08T07:29:15.863Z').toBeIso8601(MSG);
  expect('{}').toBeJsonString(MSG);
  expect('abc').toBeLongerThan('ab', MSG);
  expect(4.23223432434).toBeNear(4, 0.25, MSG);
  expect([null]).toBeNonEmptyArray(MSG);
  expect({ a: 1 }).toBeNonEmptyObject(MSG);
  expect(' ').toBeNonEmptyString(MSG);
  expect(1).toBeNumber(MSG);
  expect(new Object()).toBeObject(MSG);
  expect(1).toBeOddNumber(MSG);
  expect(new RegExp()).toBeRegExp(MSG);
  expect('ab').toBeSameLengthAs('ab', MSG);
  expect('ab').toBeShorterThan('abc', MSG);
  expect('').toBeString(MSG);
  expect(new Date()).toBeValidDate(MSG);
  expect(' ').toBeWhitespace(MSG);
  expect(1).toBeWholeNumber(MSG);
  expect(0).toBeWithinRange(0, 2, MSG);
});
