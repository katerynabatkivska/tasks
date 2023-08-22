const printNumbersWithRepetition = (a, b) => {
  for (let i = a; i <= b; i++) {
    for (let j = 0; j < i - a + 1; j++) {
      console.log(i);
    }
  }
}
