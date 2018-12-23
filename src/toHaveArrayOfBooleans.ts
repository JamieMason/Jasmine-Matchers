import { memberMatcherFor } from './lib/memberMatcherFor';
import { toBeArrayOfBooleans } from './toBeArrayOfBooleans';
export const toHaveArrayOfBooleans = memberMatcherFor(toBeArrayOfBooleans);
