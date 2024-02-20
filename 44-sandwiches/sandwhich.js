function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Sandwich summary:");
    console.log("Bread");
    for (var _a = 0, items_1 = items; _a < items_1.length; _a++) {
        var item = items_1[_a];
        console.log(item);
    }
    console.log("Bread");
}
// Call the function three times with a different number of arguments each time
make_sandwich('Turkey', 'Lettuce', 'Tomato');
make_sandwich('Ham', 'Cheese');
make_sandwich('Peanut Butter', 'Jelly');
