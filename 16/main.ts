// Creating a Guest List Array
let guestList = ["Hamza", "Usman", "Ayesha", "Areeba"];

// Making variable for those guest who cant come
let dontCome = guestList[0];

// Print the name of guest who cant come
console.log(dontCome, "Naii Ahh Sakty han");

// Add or Remove Values from Guest List Array
guestList.splice(0, 1, "Amirr");

// Message Print for Bigger Table
console.log("Good News ! We have Found a Bigger Table For Dinner.");

// Adding a new guest at starting index of array
guestList.unshift("Ali");

// Adding a new guest at ending index of array
guestList.push("Zain");

// Making a variable for storing a middle index of our guest list array
let middleIndex: number = Math.floor(guestList.length / 2);

// Adding a new guest to middle index of array
guestList.splice(middleIndex, 0, "Osama");

// Print Message of Updated List
console.log("Updated List of our Guests");

// Sending a invitation message to our guests one by one with thier names
guestList.forEach(oneguest => console.log(`Salam ${oneguest}, would you like to dinner with me`));



