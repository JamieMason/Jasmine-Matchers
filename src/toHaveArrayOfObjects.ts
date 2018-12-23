import { memberMatcherFor } from './lib/memberMatcherFor';
import { toBeArrayOfObjects } from './toBeArrayOfObjects';
export const toHaveArrayOfObjects = memberMatcherFor(toBeArrayOfObjects);
