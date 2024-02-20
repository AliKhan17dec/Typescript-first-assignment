function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

function make_great(magicians: string[]): string[] {
    let great_magicians: string[] = [];
    for (let magician of magicians) {
        great_magicians.push(`the Great ${magician}`);
    }
    return great_magicians;
}

// Define an array of magician's names
let magician_names: string[] = ['David Copperfield', 'Harry Houdini', 'Penn Jillette', 'Teller'];

// Call the make_great function with a copy of the array
let great_magicians: string[] = make_great([...magician_names]);

// Call the show_magicians function to display the original array
console.log("Original Magicians:");
show_magicians(magician_names);

// Call the show_magicians function to display the modified array
console.log("\nModified Magicians:");
show_magicians(great_magicians);
