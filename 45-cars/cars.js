function car_info(manufacturer, model) {
    var extras = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        extras[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    for (var _a = 0, extras_1 = extras; _a < extras_1.length; _a++) {
        var extra = extras_1[_a];
        for (var key in extra) {
            car[key] = extra[key];
        }
    }
    return car;
}
// Call the function with required information and additional key-value pairs
var car_details = car_info('Toyota', 'Corolla', { color: 'Blue' }, { year: 2024 });
// Print the object to make sure all the information was stored correctly
console.log(car_details);
