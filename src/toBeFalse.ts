import { is } from './lib/is';
export const toBeFalse = (actual) => actual === false || is.False(actual);
