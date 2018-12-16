import toBeString from './toBeString';
export default (actual) => toBeString(actual) && actual.search(/\S/) === -1;
