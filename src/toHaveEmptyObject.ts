import { memberMatcherFor } from './lib/memberMatcherFor';
import { toBeEmptyObject } from './toBeEmptyObject';
export const toHaveEmptyObject = memberMatcherFor(toBeEmptyObject);
