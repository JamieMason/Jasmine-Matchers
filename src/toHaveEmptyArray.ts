import { memberMatcherFor } from './lib/memberMatcherFor';
import { toBeEmptyArray } from './toBeEmptyArray';
export const toHaveEmptyArray = memberMatcherFor(toBeEmptyArray);
