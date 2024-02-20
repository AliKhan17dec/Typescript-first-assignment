function make_sandwich(...items: string[]): void {
    console.log("Sandwich summary:");
    console.log("Bread");
    for (let item of items) {
        console.log(item);
    }
    console.log("Bread");
}

// Call the function three times with a different number of arguments each time
make_sandwich('Turkey', 'Lettuce', 'Tomato');
make_sandwich('Ham', 'Cheese');
make_sandwich('Peanut Butter', 'Jelly');
