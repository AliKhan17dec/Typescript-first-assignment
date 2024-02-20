function car_info(manufacturer: string, model: string, ...extras: { [key: string]: any }[]): { manufacturer: string, model: string, [key: string]: any } {
    let car: { manufacturer: string, model: string, [key: string]: any } = {
        manufacturer: manufacturer,
        model: model
    };

    for (let extra of extras) {
        for (let key in extra) {
            car[key] = extra[key];
        }
    }

    return car;
}

// Call the function with required information and additional key-value pairs
let car_details = car_info('Toyota', 'Corolla', { color: 'Blue' }, { year: 2024 });

// Print the object to make sure all the information was stored correctly
console.log(car_details);
