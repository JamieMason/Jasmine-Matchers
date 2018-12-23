import { toBeBefore } from './toBeBefore';
export const toBeAfter = (otherDate, actual) => toBeBefore(actual, otherDate);
