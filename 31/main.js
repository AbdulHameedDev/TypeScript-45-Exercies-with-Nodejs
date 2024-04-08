// Creating a Array with 5 Values
var userNames = ["Mahad", "Ali", "Zeeshan", "Admin", "Usman"];
// Remove all values from our Array Now our Array is empty
userNames = [];
// If Statment for checking Lenght of our Array is empty?
if (userNames.length === 0) {
    console.log("Your Array in Empty We need to find some users!");
}
else {
    // If Array is not empty Use ForEach Loop on Array
    userNames.forEach(function (oneUser) {
        if (oneUser === "Admin") {
            console.log("Hello ".concat(oneUser, ", would you like to see a status report?"));
        }
        else {
            console.log("Hello ".concat(oneUser, ", thank you for logging in again."));
        }
    });
}
