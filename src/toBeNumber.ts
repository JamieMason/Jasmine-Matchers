import { is } from './lib/is';
export const toBeNumber = (actual) =>
  !isNaN(parseFloat(actual)) && !is.String(actual);
