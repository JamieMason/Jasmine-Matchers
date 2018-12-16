import toBeObject from './toBeObject';
import toHaveMember from './toHaveMember';

export default (key, actual) =>
  toBeObject(actual) &&
  toHaveMember(key, actual) &&
  typeof actual[key] === 'undefined';
