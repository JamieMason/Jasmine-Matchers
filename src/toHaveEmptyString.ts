import { memberMatcherFor } from './lib/memberMatcherFor';
import { toBeEmptyString } from './toBeEmptyString';
export const toHaveEmptyString = memberMatcherFor(toBeEmptyString);
