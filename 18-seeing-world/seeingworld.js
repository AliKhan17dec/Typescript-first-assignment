var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var placesToVisit = ["Japan", "Italy", "Australia", "Iceland", "Brazil"];
console.log("Original Order:");
console.log(placesToVisit);
console.log("\nAlphabetical Order:");
console.log(__spreadArray([], placesToVisit, true).sort());
console.log("\nOriginal Order (not modified):");
console.log(placesToVisit);
console.log("\nReverse Alphabetical Order:");
console.log(__spreadArray([], placesToVisit, true).sort().reverse());
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
