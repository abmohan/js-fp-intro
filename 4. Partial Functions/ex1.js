function multiplier(num1, num2) {
  return num1 * num2;
}

const doubler = multiplier.bind(null, 2);

const numbers = [5, 6, 10, 5, 3, 3, 7, 3, 5, 5, 6, 3, 3, 8, 6, 6, 10, 3, 9, 2];
const numbersDoubled = numbers.map(doubler);

console.log('numbers', numbers);
console.log('numbers, doubled', numbersDoubled);
