
// You should implement your task here.

module.exports = function towelSort (matrix) {
  return matrix === undefined || matrix.length === 0
  ? []
  : matrix.reduce(
      (total, currentValue, index) =>
        index % 2 === 0
          ? [...total, ...currentValue]
          : [...total, ...currentValue.reverse()],
      []
    );
}
