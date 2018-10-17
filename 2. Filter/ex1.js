const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evens = list.filter(function (num) {
  return num % 2 === 0;
});

// ES6 alternative: num => num % 2 === 0;

console.log('Original:', list);
console.log('Even numbers:', evens);
