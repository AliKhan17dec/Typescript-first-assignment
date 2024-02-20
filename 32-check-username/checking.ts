let current_users: string[] = ['john', 'sarah', 'emma', 'michael', 'adam'];
let new_users: string[] = ['sarah', 'peter', 'EMMA', 'linda', 'matt'];

for (let new_user of new_users) {
    let is_existing: boolean = false;
    
    for (let current_user of current_users) {
        if (new_user.toLowerCase() === current_user.toLowerCase()) {
            is_existing = true;
            break;
        }
    }
    
    if (is_existing) {
        console.log(`Sorry, the username '${new_user}' is already taken. Please choose a different one.`);
    } else {
        console.log(`Congratulations! The username '${new_user}' is available.`);
    }
}
