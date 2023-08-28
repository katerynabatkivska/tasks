function sumSliceArray(arr, first, second) {
  if (typeof first !== 'number' || typeof second !== 'number') {
    throw new Error("Both 'first' and 'second' must be numbers.");
  }
  
  if (first < 0 || second < 0 || first >= arr.length || second >= arr.length) {
    throw new Error("Index out of range.");
  }

  return arr[first] + arr[second];
}

try {
  const inputArr = [1, 2, 3, 4, 5, 6];
  const firstIndex = parseInt(prompt("Enter the first index:"));
  const secondIndex = parseInt(prompt("Enter the second index:"));
  
  const result = sumSliceArray(inputArr, firstIndex, secondIndex);
  console.log(`The sum of elements at index ${firstIndex} and ${secondIndex} is: ${result}`);
} catch (error) {
  console.error(`Error: ${error.message}`);
}
