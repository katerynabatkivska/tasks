const randArray = k => {
  const array = [];
  for (let i = 0; i < k; i++) {
    const randomNumber = Math.floor(Math.random() * 500) + 1;
    array.push(randomNumber);
  }
  return array;
}
