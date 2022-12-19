const car = {
    price: 2000,
    color: "red",
    numDoors: 4,
};

if (car.price < 2000 || (car.color == "red" && car.numDoors == 4)) {
    console.log("Well, take it");
} else {
    console.log("We keep looking");
}