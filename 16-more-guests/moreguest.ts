const guestList: string[] = ["Amir", "Bilal", "Asad"];

// Print initial invitation messages
console.log("Initial invitation messages:");
guestList.forEach((guest) => {
    console.log(`Dear ${guest}, you are cordially invited to dinner. We would be honored to have your presence.`);
});

// Inform about the bigger dinner table
console.log("We found a bigger dinner table!");

// Add one new guest to the beginning of the array
guestList.unshift("Usama");

// Add one new guest to the middle of the array
const middleIndex: number = Math.floor(guestList.length / 2);
guestList.splice(middleIndex, 0, "Kashif");

// Add one new guest to the end of the array using push()
guestList.push("Usman");

// Print new set of invitation messages
console.log("\nUpdated invitation messages:");
guestList.forEach((guest) => {
    console.log(`Dear ${guest}, you are cordially invited to dinner. We would be honored to have your presence.`);
});
