/*let num = prompt("Enter number between 1 - 100");

if (num < 25) {
    document.write("Less than 25!");
} else if (num >= 25 &&  num < 50) { 
    document.write("Between 25 and 50!");
} else if (num >= 50 && num < 75) {
    document.write("Between 50 - 75!!");
} else {
    document.write("Between 75 - 100");
}*/

/*let firstName = prompt("What is your first name?");
let lastName = prompt("What is your last name?");
document.write(firstName + " " + lastName);*/

let num = parseInt(Math.random()*10) + 1;
let guess = parseInt(prompt("Guess a number between 1 - 10"));

while (guess != num){
    alert("Wrong! Try Again");
 guess = prompt("Guess a number between 1 - 10");
}
alert("Good Job!")
 
/* Loops
While loop - A while loop is a loop that runs as long as a condition is true*/

/*let skyIsBlue = true

while(skyIsBlue === true) {
    document.write("its true")
if(counter === 5){
let skyIsBlue = false
}
counter ++
}


let userName = prompt("What is your name?")
while(userName != "Avis") {
    alert("please input Avis")
    userName = prompt("What is your name?")
}
*/