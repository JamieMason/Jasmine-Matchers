import { memberMatcherFor } from './lib/memberMatcherFor';
import { toBeNonEmptyString } from './toBeNonEmptyString';
export const toHaveNonEmptyString = memberMatcherFor(toBeNonEmptyString);
