const separateByType = arr => {
  const resultArrays = {
    numberArray: [],
    stringArray: [],
    arrayArray: [],
    otherArray: []
  };

  for (const element of arr) {
    if (typeof element === 'number') {
      resultArrays.numberArray.push(element);
    } else if (typeof element === 'string') {
      resultArrays.stringArray.push(element);
    } else if (Array.isArray(element)) {
      resultArrays.arrayArray.push(element);
    } else {
      resultArrays.otherArray.push(element);
    }
  }

  return resultArrays;
}
