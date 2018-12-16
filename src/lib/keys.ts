import reduce from './reduce';

export default (object) =>
  reduce(object, (keys, value, key) => keys.concat(key), []);
