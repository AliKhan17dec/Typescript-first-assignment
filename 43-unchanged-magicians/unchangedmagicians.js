var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
function make_great(magicians) {
    var great_magicians = [];
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var magician = magicians_2[_i];
        great_magicians.push("the Great ".concat(magician));
    }
    return great_magicians;
}
// Define an array of magician's names
var magician_names = ['David Copperfield', 'Harry Houdini', 'Penn Jillette', 'Teller'];
// Call the make_great function with a copy of the array
var great_magicians = make_great(__spreadArray([], magician_names, true));
// Call the show_magicians function to display the original array
console.log("Original Magicians:");
show_magicians(magician_names);
// Call the show_magicians function to display the modified array
console.log("\nModified Magicians:");
show_magicians(great_magicians);
