var guestList = ["Amir", "Bilal", "Asad"];
guestList.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you are cordially invited to dinner. We would be honored to have your presence."));
});
console.log("".concat(guestList[1], " can't make it to the dinner."));
guestList[1] = "Fahad"; // Replace "Bilal" with "Fahad"
guestList.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you are cordially invited to dinner. We would be honored to have your presence."));
});
