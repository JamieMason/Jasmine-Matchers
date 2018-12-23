import { memberMatcherFor } from './lib/memberMatcherFor';
import { toBeArray } from './toBeArray';
export const toHaveArray = memberMatcherFor(toBeArray);
