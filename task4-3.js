function calcRectangleArea(width, height) {
  if (typeof width !== 'number' || typeof height !== 'number') {
    throw new Error("Both width and height must be numbers.");
  }
  
  return width * height;
}

try {
  const widthInput = prompt("Enter the width of the rectangle:");
  const heightInput = prompt("Enter the height of the rectangle:");
  
  const width = parseFloat(widthInput);
  const height = parseFloat(heightInput);

  if (isNaN(width) || isNaN(height)) {
    throw new Error("Invalid input. Please enter valid numbers.");
  }
  
  const area = calcRectangleArea(width, height);
  console.log(`The area of the rectangle is: ${area}`);
} catch (error) {
  console.error(`Error: ${error.message}`);
}
