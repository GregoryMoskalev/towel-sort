// You should implement your task here.

module.exports = function towelSort(matrix) {
  towel = [];

  if (matrix) {
    matrix.forEach((element, index) => {
      if (index % 2) {
        element = element.reverse();
      }
    });

    for (let array of matrix) {
      for (let element of array) {
        towel.push(element);
      }
    }
  }
  
  return towel;
};
