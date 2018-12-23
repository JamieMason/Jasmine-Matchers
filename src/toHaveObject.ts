import { memberMatcherFor } from './lib/memberMatcherFor';
import { toBeObject } from './toBeObject';
export const toHaveObject = memberMatcherFor(toBeObject);
