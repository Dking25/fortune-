
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