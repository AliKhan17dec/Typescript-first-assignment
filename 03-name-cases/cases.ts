const personName: string = "Ali khan";

console.log(personName.toLowerCase());
console.log(personName.toUpperCase());
console.log(personName.replace(/\b\w/g, (char) => char.toUpperCase()));
