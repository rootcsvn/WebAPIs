/* Car Proprties 
*   Make, Model, Year, Weight, Colour.
*
*   Actions associted with a car ~ Accelerate, Stop, Honk, Turn)
*/

var car = {
    make: "Mercedes-Benz",
    model: "G class",
    year: 2023,
    weight: "5,800 pounds",
    colour: "dark grey",
    actions: {
        accelerate: "100km/hr",
        stop: "on red",
        honk: "Beep Beep",
        turn: "right"
    },
    driver: {
        name: "Ben",
        license: "CA",
        Address: "Manila"
    }
}

var owner = car.driver.name;
var sound = car.actions.honk;

console.log(sound);
console.log(owner);

alert(car.make + " is the best brand of automobiles." + " " + owner + " owns a " + car.colour + " " + car.model + " " + "wagon." )
