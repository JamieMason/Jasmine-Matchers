import { memberMatcherFor } from './lib/memberMatcherFor';
import { toBeString } from './toBeString';
export const toHaveString = memberMatcherFor(toBeString);
