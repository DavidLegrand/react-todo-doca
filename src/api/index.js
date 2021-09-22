const API = process.env.REACT_APP_API
export default API

export const arrToObj = (array) =>
  array.reduce((obj, item) => {
    obj[item.id] = item;
    return obj;
  }, {});

export const objToArr = (object) =>
  Object.keys(object).map((key) => object[key])
    .filter((item) => item);
