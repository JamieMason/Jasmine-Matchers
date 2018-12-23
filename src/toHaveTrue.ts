import { memberMatcherFor } from './lib/memberMatcherFor';
import { toBeTrue } from './toBeTrue';
export const toHaveTrue = memberMatcherFor(toBeTrue);
