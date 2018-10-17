const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sum = list.reduce(
  function (sum, currentNumber) {
    return sum + currentNumber;
  },
  0
);

console.log('Original:', list);
console.log('Sum:', sum);
