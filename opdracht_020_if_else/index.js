const age = (24);
const isFemale = false;
const driverStatus = "bob";
const name = "Sarah";
const totalAmount = (59);



/*age to get in club 18*/
if (age > 17) {

    console.log("Welcome in!");


} else {
    console.log("Stay out!");
}
/*child Discount*/

if (age > 17 && age < 25) {

    console.log("You get 50% discount!");
} else {
    console.log("you're old, you pay full!");

}
/*ladies night isFemale?*/
if (isFemale) {

    console.log("50% discount!");

} else {
    console.log("We are not gender-racist only someone has to pay the bills!  ");
}


/* bob?*/
if ("bob") {

    console.log("Drive save!");

} else {

    console.log("Do not drive!!!");
}
/*Is your name Sarah or Bram?*/

if ("Sarah" || "Bram") {

    console.log("Free beer!");
} else {

    console.log("You get none");
}

/*total amount goodies*/

if (totalAmount > 24.99 && totalAmount < 49.99) {

    console.log("Free Balls");

}else {

    console.log("");
}

if (totalAmount > 50 && totalAmount< 99.99) {

    console.log("Free Nachos! ");

} else {

    console.log("");
}
if (totalAmount >99.99) {

    console.log("Winner winner chicken diner, you get free champagne!!");

} else {

    console.log("");
}