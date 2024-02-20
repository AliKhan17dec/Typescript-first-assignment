function make_shirt(size: string = 'Large', message: string = 'I love TypeScript'): void {
    console.log(`The shirt size is ${size} and the message printed on it is: "${message}"`);
}

// Call the function with default values
make_shirt(); // Large shirt with default message
make_shirt('Medium'); // Medium shirt with default message

// Call the function with different values
make_shirt('Small', 'Hello, World!'); // Small shirt with custom message
