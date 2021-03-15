
exports.min = function min (array) {
  if(arguments.length && array.length !== 0){
    return Math.min.apply(null, array);
  } else
  return 0;
}

exports.max = function max (array) {
  if(arguments.length && array.length !== 0){
    return Math.max.apply(null, array);
  } else
  return 0;
}

exports.avg = function avg (array) {
  if(arguments.length && array.length !== 0){
    const sum = array.reduce((a, b) => a + b, 0);
    const avg = (sum / array.length) || 0;
    return avg;
  } else
  return 0;
}
