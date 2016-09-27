function changeCompletely(element, index, array) {
  array[index] = ["eqs", "gfd", "adc", "ksv"][Math.floor(Math.random() * 4)];
}

function doToElementsInArray(array, callback) {
  array.forEach(callback);
}