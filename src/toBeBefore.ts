import toBeDate from './toBeDate';

export default (otherDate, actual) =>
  toBeDate(actual) &&
  toBeDate(otherDate) &&
  actual.getTime() < otherDate.getTime();
