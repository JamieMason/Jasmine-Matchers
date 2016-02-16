'use strict';

/*
 * Copyright © Jamie Mason, @fold_left,
 * https://github.com/JamieMason
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation files
 * (the "Software"), to deal in the Software without restriction,
 * including without limitation the rights to use, copy, modify, merge,
 * publish, distribute, sublicense, and/or sell copies of the Software,
 * and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
 * BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
 * ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

var jasmineMatchers = require('jasmine-matchers-loader');

var matchers = {
    toBeAfter: require('./toBeAfter'),
    toBeArray: require('./toBeArray'),
    toBeArrayOfBooleans: require('./toBeArrayOfBooleans'),
    toBeArrayOfNumbers: require('./toBeArrayOfNumbers'),
    toBeArrayOfObjects: require('./toBeArrayOfObjects'),
    toBeArrayOfSize: require('./toBeArrayOfSize'),
    toBeArrayOfStrings: require('./toBeArrayOfStrings'),
    toBeBefore: require('./toBeBefore'),
    toBeBoolean: require('./toBeBoolean'),
    toBeCalculable: require('./toBeCalculable'),
    toBeDate: require('./toBeDate'),
    toBeEmptyArray: require('./toBeEmptyArray'),
    toBeEmptyObject: require('./toBeEmptyObject'),
    toBeEmptyString: require('./toBeEmptyString'),
    toBeEvenNumber: require('./toBeEvenNumber'),
    toBeFalse: require('./toBeFalse'),
    toBeFunction: require('./toBeFunction'),
    toBeHtmlString: require('./toBeHtmlString'),
    toBeIso8601: require('./toBeIso8601'),
    toBeJsonString: require('./toBeJsonString'),
    toBeLongerThan: require('./toBeLongerThan'),
    toBeNonEmptyArray: require('./toBeNonEmptyArray'),
    toBeNonEmptyObject: require('./toBeNonEmptyObject'),
    toBeNonEmptyString: require('./toBeNonEmptyString'),
    toBeNumber: require('./toBeNumber'),
    toBeObject: require('./toBeObject'),
    toBeOddNumber: require('./toBeOddNumber'),
    toBeSameLengthAs: require('./toBeSameLengthAs'),
    toBeShorterThan: require('./toBeShorterThan'),
    toBeString: require('./toBeString'),
    toBeTrue: require('./toBeTrue'),
    toBeWhitespace: require('./toBeWhitespace'),
    toBeWholeNumber: require('./toBeWholeNumber'),
    toBeWithinRange: require('./toBeWithinRange'),
    toEndWith: require('./toEndWith'),
    toImplement: require('./toImplement'),
    toStartWith: require('./toStartWith'),
    toThrowAnyError: require('./toThrowAnyError'),
    toThrowErrorOfType: require('./toThrowErrorOfType'),
    toHaveArray: require('./toHaveArray'),
    toHaveArrayOfBooleans: require('./toHaveArrayOfBooleans'),
    toHaveArrayOfNumbers: require('./toHaveArrayOfNumbers'),
    toHaveArrayOfObjects: require('./toHaveArrayOfObjects'),
    toHaveArrayOfSize: require('./toHaveArrayOfSize'),
    toHaveArrayOfStrings: require('./toHaveArrayOfStrings'),
    toHaveBoolean: require('./toHaveBoolean'),
    toHaveCalculable: require('./toHaveCalculable'),
    toHaveDate: require('./toHaveDate'),
    toHaveDateAfter: require('./toHaveDateAfter'),
    toHaveDateBefore: require('./toHaveDateBefore'),
    toHaveEmptyArray: require('./toHaveEmptyArray'),
    toHaveEmptyObject: require('./toHaveEmptyObject'),
    toHaveEmptyString: require('./toHaveEmptyString'),
    toHaveEvenNumber: require('./toHaveEvenNumber'),
    toHaveFalse: require('./toHaveFalse'),
    toHaveHtmlString: require('./toHaveHtmlString'),
    toHaveIso8601: require('./toHaveIso8601'),
    toHaveJsonString: require('./toHaveJsonString'),
    toHaveMember: require('./toHaveMember'),
    toHaveMethod: require('./toHaveMethod'),
    toHaveNonEmptyArray: require('./toHaveNonEmptyArray'),
    toHaveNonEmptyObject: require('./toHaveNonEmptyObject'),
    toHaveNonEmptyString: require('./toHaveNonEmptyString'),
    toHaveNumber: require('./toHaveNumber'),
    toHaveNumberWithinRange: require('./toHaveNumberWithinRange'),
    toHaveObject: require('./toHaveObject'),
    toHaveOddNumber: require('./toHaveOddNumber'),
    toHaveString: require('./toHaveString'),
    toHaveStringLongerThan: require('./toHaveStringLongerThan'),
    toHaveStringSameLengthAs: require('./toHaveStringSameLengthAs'),
    toHaveStringShorterThan: require('./toHaveStringShorterThan'),
    toHaveTrue: require('./toHaveTrue'),
    toHaveWhitespaceString: require('./toHaveWhitespaceString'),
    toHaveWholeNumber: require('./toHaveWholeNumber')
};

jasmineMatchers.add(matchers);

module.exports = matchers;
