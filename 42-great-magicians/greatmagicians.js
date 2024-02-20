function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great ".concat(magicians[i]);
    }
}
// Define an array of magician's names
var magician_names = ['David Copperfield', 'Harry Houdini', 'Penn Jillette', 'Teller'];
// Call the make_great function
make_great(magician_names);
// Call the show_magicians function to see the modified list
show_magicians(magician_names);
