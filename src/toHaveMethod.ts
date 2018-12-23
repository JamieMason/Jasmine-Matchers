import { memberMatcherFor } from './lib/memberMatcherFor';
import { toBeFunction } from './toBeFunction';
export const toHaveMethod = memberMatcherFor(toBeFunction);
