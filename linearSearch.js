function linearSearch(searchTerm, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === searchTerm) {
      console.log(i)
      return i
    }
  }
  console.log(undefined);
  return undefined;
}

linearSearch(4, [1, 2, 3]);

function globalLinearSearch(searchTerm, arr) {
  const allIndices = [];
  for (let i = 0; i < arr.length; i++)
  {
    if (arr[i] === searchTerm) {
      allIndices.push(i);
    }
  }
  if(!allIndices) {
    return undefined;
  }
  console.log(allIndices);
  return allIndices;
}
globalLinearSearch(1, [1, 2, 19, 3, 9, 3, 1, 1]);

module.exports = { linearSearch, globalLinearSearch };
