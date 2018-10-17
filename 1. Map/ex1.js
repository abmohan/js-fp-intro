const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const squares = list.map(function (num) {
  return num * num;
});

// ES6 shorthand alternative: const squares = num => num * num;

console.log('Original:', list);
console.log('Squares:', squares);
