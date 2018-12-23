import { memberMatcherFor } from './lib/memberMatcherFor';
import { toBeNonEmptyArray } from './toBeNonEmptyArray';
export const toHaveNonEmptyArray = memberMatcherFor(toBeNonEmptyArray);
