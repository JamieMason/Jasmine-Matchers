import { memberMatcherFor } from './lib/memberMatcherFor';
import { toBeIso8601 } from './toBeIso8601';
export const toHaveIso8601 = memberMatcherFor(toBeIso8601);
