const getRandomElement = arr => {
  if (!Array.isArray(arr)) throw new Error('Expected an array');
  return arr[Math.floor(Math.random() * arr.length)];
}

const getElementById = (id, arr) => {
    if (!Array.isArray(arr)) throw new Error('Expected an array');
    let toReturn = null;
    arr.forEach(element => {
      if ( element.id == id) toReturn = element;
    });
    return toReturn;
}

const getElementIndexById = (id, arr) => {
    if (!Array.isArray(arr)) throw new Error('Expected an array');
    let toReturn = null;
    arr.forEach(element => {
      if ( element.id == id) toReturn = id;
    });
    return toReturn;
}
module.exports = {
  getRandomElement,
  getElementById,
  getElementIndexById
};
