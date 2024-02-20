const guestList: string[] = ["Amir", "Bilal", "Asad"];

guestList.forEach((guest) => {
    console.log(`Dear ${guest}, you are cordially invited to dinner. We would be honored to have your presence.`);
});

console.log(`${guestList[1]} can't make it to the dinner.`);

guestList[1] = "Fahad"; // Replace "Bilal" with "Fahad"

guestList.forEach((guest) => {
    console.log(`Dear ${guest}, you are cordially invited to dinner. We would be honored to have your presence.`);
});
