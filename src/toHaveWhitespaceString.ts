import { memberMatcherFor } from './lib/memberMatcherFor';
import { toBeWhitespace } from './toBeWhitespace';
export const toHaveWhitespaceString = memberMatcherFor(toBeWhitespace);
