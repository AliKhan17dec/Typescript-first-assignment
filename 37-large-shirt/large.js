function make_shirt(size, message) {
    if (size === void 0) { size = 'Large'; }
    if (message === void 0) { message = 'I love TypeScript'; }
    console.log("The shirt size is ".concat(size, " and the message printed on it is: \"").concat(message, "\""));
}
// Call the function with default values
make_shirt(); // Large shirt with default message
make_shirt('Medium'); // Medium shirt with default message
// Call the function with different values
make_shirt('Small', 'Hello, World!'); // Small shirt with custom message
