module.exports = function check(str, bracketsConfig) {
  let strArr = str.split("");
  let length = str.length / 2;
  while (length > 0) {
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < bracketsConfig.length; j++) {
        if (
          strArr[i] == bracketsConfig[j][0] &&
          strArr[i + 1] == bracketsConfig[j][1]
        ) {
          strArr.splice(i, 2);
        }
      }
    }
    length--;
  }
  return strArr.length == 0;
};


