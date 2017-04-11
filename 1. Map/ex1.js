var list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var squares = list.map(function (num) {
  return num * num;
});

console.log('Original:', list);
console.log('Squares:', squares);
