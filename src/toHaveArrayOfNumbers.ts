import { memberMatcherFor } from './lib/memberMatcherFor';
import { toBeArrayOfNumbers } from './toBeArrayOfNumbers';
export const toHaveArrayOfNumbers = memberMatcherFor(toBeArrayOfNumbers);
