// Define an array of country objects
const countries: { name: string, capital: string, population: number }[] = [
    { name: "USA", capital: "Washington D.C.", population: 331000000 },
    { name: "China", capital: "Beijing", population: 1444216107 },
    { name: "India", capital: "New Delhi", population: 1393409038 },
    { name: "Brazil", capital: "Brasília", population: 212559417 },
    { name: "Russia", capital: "Moscow", population: 145934462 }
];

// Print information about each country
countries.forEach((country) => {
    console.log(`Country: ${country.name}`);
    console.log(`Capital: ${country.capital}`);
    console.log(`Population: ${country.population}`);
    console.log();
});
