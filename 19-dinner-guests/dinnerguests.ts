const guestList: string[] = ["Amir", "Bilal", "Asad"];

console.log("Initial invitation messages:");
guestList.forEach((guest) => {
    console.log(`Dear ${guest}, you are cordially invited to dinner. We would be honored to have your presence.`);
});

console.log("\nTotal number of people invited to dinner:", guestList.length);
