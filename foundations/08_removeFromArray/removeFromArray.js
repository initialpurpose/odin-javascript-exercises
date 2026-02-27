const removeFromArray = function(array, ...params) {
  for (let i = 0; i < params.length; i++) {
    let repeat = true;

    while (repeat) {
      const index = array.indexOf(params[i]);
      if (index > -1) array.splice(index, 1);

      if (array.indexOf(params[i]) === -1) {
        repeat = false;
      }
    }
  }

  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
