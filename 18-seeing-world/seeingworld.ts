const placesToVisit: string[] = ["Japan", "Italy", "Australia", "Iceland", "Brazil"];

console.log("Original Order:");
console.log(placesToVisit);

console.log("\nAlphabetical Order:");
console.log([...placesToVisit].sort());

console.log("\nOriginal Order (not modified):");
console.log(placesToVisit);

console.log("\nReverse Alphabetical Order:");
console.log([...placesToVisit].sort().reverse());

console.log("\nOriginal Order (not modified):");
console.log(placesToVisit);

placesToVisit.reverse();
console.log("\nReversed Order:");
console.log(placesToVisit);

placesToVisit.reverse();
console.log("\nOriginal Order Restored:");
console.log(placesToVisit);

placesToVisit.sort();
console.log("\nSorted Alphabetical Order:");
console.log(placesToVisit);
