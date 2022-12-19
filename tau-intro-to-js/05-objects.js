const cookie = {
    name: "Chocolate Chip",
    isGlutenFree: false,
    eatCookie: function (){
        console.log("I am and miling eating " + this.name);
    } 
};
cookie.name = "Chip Chocolate";
cookie.isGlutenFree = true;
//console.log(cookie["+Yummy"]);


class Cookie {
    constructor(name, isGlutenFree) {
        this.name = name;
        this.isGlutenFree = isGlutenFree;
    }
    eatCookie(){
        console.log("I'm munching on this " + this.name);
    };
}
const myCookie = new Cookie('Iced MOatmeal', false);
console.log(myCookie["name"]);
cookie.eatCookie();
console.log(myCookie.eatCookie(this.name));
myCookie.eatCookie();
console.log(cookie);