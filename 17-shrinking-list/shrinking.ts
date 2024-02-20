const guestList: string[] = ["Amir", "Bilal", "Asad", "Usama", "Kashif", "Usman"];

// Print initial invitation messages
console.log("Initial invitation messages:");
guestList.forEach((guest) => {
    console.log(`Dear ${guest}, you are cordially invited to dinner. We would be honored to have your presence.`);
});

// Inform that only two people can be invited for dinner
console.log("\nUnfortunately, the new dinner table won't arrive in time, and we can only invite two people for dinner.");

// Remove guests from the list until only two names remain
while (guestList.length > 2) {
    const removedGuest = guestList.pop();
    console.log(`Sorry ${removedGuest}, we can't invite you to dinner.`);
}

// Print invitation messages to the two remaining guests
console.log("\nInvitation messages to the two remaining guests:");
guestList.forEach((guest) => {
    console.log(`Dear ${guest}, you are still cordially invited to dinner. We would be honored to have your presence.`);
});

// Remove the last two names from the list to have an empty list
guestList.pop();
guestList.pop();

// Print the empty list
console.log("\nUpdated guest list:", guestList);
