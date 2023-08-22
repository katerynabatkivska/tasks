const createArray = (start, end) => {
  if (typeof start !== 'number' || typeof end !== 'number') {
    return "Invalid input, both parameters must be numbers.";
  }
  
  const resultArray = [];
  for (let i = start; i <= end; i++) {
    resultArray.push(i);
  }
  
  return resultArray;
}

