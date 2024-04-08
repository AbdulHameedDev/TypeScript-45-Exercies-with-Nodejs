"use strict";
// Making a Function
function make_shirt(size = "Large", printMessage = "I Love TypeScript") {
    console.log(`Creating a ${size} shirt with the ${printMessage} prints on shirt`);
}
// Calling a funtion with by-default  values
make_shirt();
// Calling a funtion now with Medium size and default message
make_shirt("Medium");
// Calling a function now with Small size and also Different Print Message
make_shirt("Small", "I Love JavaScript");
