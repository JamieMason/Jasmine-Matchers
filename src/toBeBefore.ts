import { toBeDate } from './toBeDate';

export const toBeBefore = (otherDate, actual) =>
  toBeDate(actual) &&
  toBeDate(otherDate) &&
  actual.getTime() < otherDate.getTime();
