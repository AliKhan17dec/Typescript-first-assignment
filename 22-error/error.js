// Define an array of country objects
var countries = [
    { name: "USA", capital: "Washington D.C.", population: 331000000 },
    { name: "China", capital: "Beijing", population: 1444216107 },
    { name: "India", capital: "New Delhi", population: 1393409038 },
    { name: "Brazil", capital: "Brasília", population: 212559417 },
    { name: "Russia", capital: "Moscow", population: 145934462 }
];
// Introduce an index error by accessing an invalid index
console.log(countries[5]); // This will produce an index error because there is no element at index 5
// Correct the error by accessing a valid index
console.log(countries[4]); // Accessing index 4 (Russia) instead of 5
// Print information about each country
countries.forEach(function (country) {
    console.log("Country: ".concat(country.name));
    console.log("Capital: ".concat(country.capital));
    console.log("Population: ".concat(country.population));
    console.log();
});
