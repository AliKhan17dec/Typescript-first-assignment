var names = ["Muneeb", "Saad", "Adil", "Fahad"];
var greetingMessage = "Hello, ";
names.forEach(function (name) {
    console.log("".concat(greetingMessage).concat(name, "!"));
});
