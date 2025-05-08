//prompt users for froyo flavors
let inputFlavor = prompt("Please provide your froyo order separated by commas.", "Example: vanilla, vanilla, coffee");

//insert user input into an array of flavors
let arrayFlavors = inputFlavor.split(",");

//store inputs of froyo flavors
console.log(arrayFlavors);

//build an object to track which flavors were counted so far
const flavorType = {
    flavor: ""
};


//build a way to see how many of each flavor they ordered (ex: 3 vanilla, 2 coffee, 1 strawberry)
function flavorTracker(flavor) {
    return flavor
}

//write a function that takes an array of 'user' objects and adds a new property called initials.
