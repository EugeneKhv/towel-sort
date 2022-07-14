
// You should implement your task here.
module.exports = function towelSort(matrix) {
  if(Array.isArray(matrix) == false || matrix.length == 0) return [];
  return matrix.map((item, index) => {
      if (index % 2 !== 0) {
         return item.reverse().join();
      }
      return item.join()
  }).join(',').split(',').map(item => item = +item);
}
