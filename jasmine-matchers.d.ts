declare namespace jasmine {
  interface Matchers<T> {
    toBeAfter(otherDate: Date, expectationFailOutput?: any): boolean;
    toBeArray(expectationFailOutput?: any): boolean;
    toBeArrayOfBooleans(expectationFailOutput?: any): boolean;
    toBeArrayOfNumbers(expectationFailOutput?: any): boolean;
    toBeArrayOfObjects(expectationFailOutput?: any): boolean;
    toBeArrayOfSize(size: number, expectationFailOutput?: any): boolean;
    toBeArrayOfStrings(expectationFailOutput?: any): boolean;
    toBeBefore(otherDate: Date, expectationFailOutput?: any): boolean;
    toBeBoolean(expectationFailOutput?: any): boolean;
    toBeCalculable(expectationFailOutput?: any): boolean;
    toBeDate(expectationFailOutput?: any): boolean;
    toBeEmptyArray(expectationFailOutput?: any): boolean;
    toBeEmptyObject(expectationFailOutput?: any): boolean;
    toBeEmptyString(expectationFailOutput?: any): boolean;
    toBeEvenNumber(expectationFailOutput?: any): boolean;
    toBeFalse(expectationFailOutput?: any): boolean;
    toBeFunction(expectationFailOutput?: any): boolean;
    toBeGreaterThanOrEqualTo(otherNumber: number, expectationFailOutput?: any): boolean;
    toBeHtmlString(expectationFailOutput?: any): boolean;
    toBeIso8601(expectationFailOutput?: any): boolean;
    toBeJsonString(expectationFailOutput?: any): boolean;
    toBeLessThanOrEqualTo(otherNumber: number, expectationFailOutput?: any): boolean;
    toBeLongerThan(other: string, expectationFailOutput?: any): boolean;
    toBeNear(number: number, epsilon: number, expectationFailOutput?: any): boolean;
    toBeNonEmptyArray(expectationFailOutput?: any): boolean;
    toBeNonEmptyObject(expectationFailOutput?: any): boolean;
    toBeNonEmptyString(expectationFailOutput?: any): boolean;
    toBeNumber(expectationFailOutput?: any): boolean;
    toBeObject(expectationFailOutput?: any): boolean;
    toBeOddNumber(expectationFailOutput?: any): boolean;
    toBeRegExp(expectationFailOutput?: any): boolean;
    toBeSameLengthAs(other: string, expectationFailOutput?: any): boolean;
    toBeShorterThan(other: string, expectationFailOutput?: any): boolean;
    toBeString(expectationFailOutput?: any): boolean;
    toBeTrue(expectationFailOutput?: any): boolean;
    toBeValidDate(expectationFailOutput?: any): boolean;
    toBeWhitespace(expectationFailOutput?: any): boolean;
    toBeWholeNumber(expectationFailOutput?: any): boolean;
    toBeWithinRange(floor: number, ceiling: number, expectationFailOutput?: any): boolean;

    toEndWith(subString: string, expectationFailOutput?: any): boolean;

    toHaveArray(key: string, expectationFailOutput?: any): boolean;
    toHaveArrayOfBooleans(key: string, expectationFailOutput?: any): boolean;
    toHaveArrayOfNumbers(key: string, expectationFailOutput?: any): boolean;
    toHaveArrayOfObjects(key: string, expectationFailOutput?: any): boolean;
    toHaveArrayOfSize(key: string, size?: number, expectationFailOutput?: any): boolean;
    toHaveArrayOfStrings(key: string, expectationFailOutput?: any): boolean;
    toHaveBoolean(key: string, expectationFailOutput?: any): boolean;
    toHaveCalculable(key: string, expectationFailOutput?: any): boolean;
    toHaveDate(key: string, expectationFailOutput?: any): boolean;
    toHaveDateAfter(key: string, otherDate: Date, expectationFailOutput?: any): boolean;
    toHaveDateBefore(key: string, otherDate: Date, expectationFailOutput?: any): boolean;
    toHaveEmptyArray(key: string, expectationFailOutput?: any): boolean;
    toHaveEmptyObject(key: string, expectationFailOutput?: any): boolean;
    toHaveEmptyString(key: string, expectationFailOutput?: any): boolean;
    toHaveEvenNumber(key: string, expectationFailOutput?: any): boolean;
    toHaveFalse(key: string, expectationFailOutput?: any): boolean;
    toHaveHtmlString(key: string, expectationFailOutput?: any): boolean;
    toHaveIso8601(key: string, expectationFailOutput?: any): boolean;
    toHaveJsonString(key: string, expectationFailOutput?: any): boolean;
    toHaveMember(key: string, expectationFailOutput?: any): boolean;
    toHaveMethod(key: string, expectationFailOutput?: any): boolean;
    toHaveNonEmptyArray(key: string, expectationFailOutput?: any): boolean;
    toHaveNonEmptyObject(key: string, expectationFailOutput?: any): boolean;
    toHaveNonEmptyString(key: string, expectationFailOutput?: any): boolean;
    toHaveNumber(key: string, expectationFailOutput?: any): boolean;
    toHaveNumberWithinRange(key: string, floor: number, ceiling: number, expectationFailOutput?: any): boolean;
    toHaveObject(key: string, expectationFailOutput?: any): boolean;
    toHaveOddNumber(key: string, expectationFailOutput?: any): boolean;
    toHaveString(key: string, expectationFailOutput?: any): boolean;
    toHaveStringLongerThan(key: string, other: string, expectationFailOutput?: any): boolean;
    toHaveStringSameLengthAs(key: string, other: string, expectationFailOutput?: any): boolean;
    toHaveStringShorterThan(key: string, other: string, expectationFailOutput?: any): boolean;
    toHaveTrue(key: string, expectationFailOutput?: any): boolean;
    toHaveUndefined(key: string, expectationFailOutput?: any): boolean;
    toHaveWhitespaceString(key: string, expectationFailOutput?: any): boolean;
    toHaveWholeNumber(key: string, expectationFailOutput?: any): boolean;

    toStartWith(subString: string, expectationFailOutput?: any): boolean;

    toThrowAnyError(expectationFailOutput?: any): boolean;
    toThrowErrorOfType(type: string, expectationFailOutput?: any): boolean;
  }
}
