function longest_string(word) {
  let arr1 = word.match(/\w[a-z]{0,}/gi);
  let result = arr1[0];

  for (let x = 1; x < arr1.length; x++) {
    if (result.length < arr1[x].length) {
      result = arr1[x];
    }
  }
  return result;
}
console.log(longest_string("Prashant Jagannath Khade"));
