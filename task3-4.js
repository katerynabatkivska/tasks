const compact = arr => {
  const uniqueArray = [];
  for (const element of arr) {
    if (!uniqueArray.includes(element)) {
      uniqueArray.push(element);
    }
  }
  return uniqueArray;
}
