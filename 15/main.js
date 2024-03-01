var guestList = ["Hamza", "Usman", "Ayesha", "Areeba"];
var dontCome = guestList[0];
console.log(dontCome, "Nai Ahh skta");
guestList.splice(0, 1, "Amirr");
guestList.forEach(function (guest) { return console.log("Salam ".concat(guest, ", would u like to Dinner with me?")); });
