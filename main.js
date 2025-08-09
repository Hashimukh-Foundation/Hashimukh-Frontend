function myFunction(a, n) {
  return a[n];
}

console.log(myFunction([1, 2, 3, 4, 5], 3));
// expected: 3
console.log(myFunction([10, 9, 8, 7, 6], 5));
// expected: 6
console.log(myFunction([7, 2, 1, 6, 3], 1));
// expected: 7
