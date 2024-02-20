var current_users = ['john', 'sarah', 'emma', 'michael', 'adam'];
var new_users = ['sarah', 'peter', 'EMMA', 'linda', 'matt'];
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var new_user = new_users_1[_i];
    var is_existing = false;
    for (var _a = 0, current_users_1 = current_users; _a < current_users_1.length; _a++) {
        var current_user = current_users_1[_a];
        if (new_user.toLowerCase() === current_user.toLowerCase()) {
            is_existing = true;
            break;
        }
    }
    if (is_existing) {
        console.log("Sorry, the username '".concat(new_user, "' is already taken. Please choose a different one."));
    }
    else {
        console.log("Congratulations! The username '".concat(new_user, "' is available."));
    }
}
