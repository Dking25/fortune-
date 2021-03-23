
let fortune = ["relaxation by stress", "hmmmmmmmm try again", "Death by Hugs", "Love by Death","Luck by Misfortune", "Pain by Comfort"];
let answer = Math.floor(Math.random()*fortune.length);
function teller(){
if(answer === 0){
    console.log(fortune[0]);

}else if (answer === 1){
    console.log(fortune[1]);

}else if (answer === 2){
    console.log(fortune[2]);
}
else if (answer === 3){
    console.log(fortune[3]);

}else if (answer === 4){
    console.log(fortune[4]);

}else {
    console.log(fortune[5]);
}
}

teller();

// What is the Difference between a Front-End Developer and a Back-End Developer?
// A Front-end Developer is the designer of the webpage, creating the functionality as well as the style of the page 
// picking out the layout the color as well as what types of functions happen on the page 
// the best example of this role is like being at a resturant the Front-end developer being the dining room area of the 
// resturant as well as being the waiter 

// The Back-End Devloper deals more with the data side of the website pulling information from the database that is established 
// with the website and then pulling information from the webiste back into the data base 
// the best example for the Back-End Developer in a resturant setting is that they are the kitchen area and provide the food and 
// the meal to the customer and the information.
