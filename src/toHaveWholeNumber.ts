import { memberMatcherFor } from './lib/memberMatcherFor';
import { toBeWholeNumber } from './toBeWholeNumber';
export const toHaveWholeNumber = memberMatcherFor(toBeWholeNumber);
