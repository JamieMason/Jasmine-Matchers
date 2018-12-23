import { memberMatcherFor } from './lib/memberMatcherFor';
import { toBeNonEmptyObject } from './toBeNonEmptyObject';
export const toHaveNonEmptyObject = memberMatcherFor(toBeNonEmptyObject);
