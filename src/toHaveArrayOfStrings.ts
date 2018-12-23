import { memberMatcherFor } from './lib/memberMatcherFor';
import { toBeArrayOfStrings } from './toBeArrayOfStrings';
export const toHaveArrayOfStrings = memberMatcherFor(toBeArrayOfStrings);
