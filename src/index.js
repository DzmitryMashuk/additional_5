module.exports = function check(str, bracketsConfig) {
  let pair = [];
  
  bracketsConfig.forEach(function(value) {
    pair.push(value[0] + value[1]);
  });

  for (let i = 0; i < pair.length; i++) {
    let index = str.indexOf(pair[i]);
    if (-1 !== index) {
      str = str.replace(str.substring(index, index + 2), "");
      i   = -1;
    }
  }

  if (0 === str.length) {
    return true;
  }

  return false;
}