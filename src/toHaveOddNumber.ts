import { memberMatcherFor } from './lib/memberMatcherFor';
import { toBeOddNumber } from './toBeOddNumber';
export const toHaveOddNumber = memberMatcherFor(toBeOddNumber);
