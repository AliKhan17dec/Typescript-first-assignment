function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

// Define an array of magician's names
let magician_names: string[] = ['David Copperfield', 'Harry Houdini', 'Penn Jillette', 'Teller'];

// Call the show_magicians function
show_magicians(magician_names);
