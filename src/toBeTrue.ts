import { is } from './lib/is';
export const toBeTrue = (actual) => actual === true || is.True(actual);
