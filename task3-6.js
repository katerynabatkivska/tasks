function calc(a, b, op) {
  switch (op) {
    case 1:
      return a - b;
    case 2:
      return a * b;
    case 3:
      if (b !== 0) {
        return a / b;
      } else {
        return "Division by zero is not allowed";
      }
    default:
      return a + b;
  }
}




