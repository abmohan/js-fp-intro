var numbers = [2, 40, 88, 37, 28, 45, 61, 12, 33, 20, 89, 53, 79, 30, 18, 39, 29, 81, 40, 100];

var numberSummary = numbers.reduce(
  function (totalEvens, number) {
    // fill this in

    return totalEvens;
  },
  { evens: 0, odds: 0 }
);

console.log('List of numbers', numbers);
console.log('Number summary', numberSummary);
