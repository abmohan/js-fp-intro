const stanleyCupVictories = [
  { city: 'Toronto', country: 'CAN', wins: 13 },
  { city: 'Montreal', country: 'CAN', wins: 23 },
  { city: 'Detroit', country: 'USA', wins: 11 },
  { city: 'Boston', country: 'CAN', wins: 6 },
  { city: 'Edmonton', country: 'CAN', wins: 5 },
  { city: 'Chicago', country: 'USA', wins: 5 }
];

const winningAmericanCities = stanleyCupVictories.filter(function (dataPoint) {
  // fill this in
})
.map(function (dataPoint) {
  // fill this in, too
});

console.log('Stanley Cup Victories', stanleyCupVictories);
console.log('Winning American cities', winningAmericanCities);
