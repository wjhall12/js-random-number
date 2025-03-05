//FIND A RANDOM NUMBER BETWEEN 0 AND 1

// let randomNum = Math.random();

// console.log(randomNum)//this will generate a random number between 0 and 1. Everytime you refresh you will get a new number with a long decimal portion in the console most likely.

//What if we had a six sided dice and we want to find a number between 0 and 6?

//FIND A RANDOM NUMBER BETWEEN 0 AND 6

// let randomNum = Math.random() * 6;

// console.log(randomNum)//we added * 6 to get a random number between 0 and 6

//FIND A RANDOM NUMBER BETWEEN 0 AND 6, without the decimal numbers at the end

// let randomNum = Math.floor(Math.random() * 6);//we add Math.floor() and put the Math.random() inside the () to get a number without a decimal. now everytime you refresh you should get a number between 0 and 6

// console.log(randomNum)

//FIND A RANDOM NUMBER BETWEEN 1 AND 6

// let randomNum = Math.floor(Math.random() * 6) + 1;//now we have a random whole number between 1 and 6. No zeros. You can do this for any number, maybe 1 to 100.
// console.log(randomNum)


//FIND A RANDOM NUMBER BETWEEN TWO NUMBERS LIKE 50 - 100

// const min = 50;
// const max = 100;

// let randomNum = Math.floor(Math.random() * (max - min)) + min;//we added a const for the min and max then added this to the equation and surrounded thenm by an addtional () then add the min outside the last )

// console.log(randomNum)



//NOW LET'S CREATE OUR RANDOM NUMBER GENERATOR

/*
    Here's the HTML
    <button id="myButton">roll</button><br>
    <label id="myLabel"></label>
*/

/*
    Here's the CSS
        body {
            font-family: Verdana, Geneva, Tahoma, sans-serif;
            text-align: center;
        }   

        #myButton {
            font-size: 3em;
            padding: 5px 25px;
            border-radius: 5px;
        }

        #myLabel {
            font-size: 3em;
        }
*/


// const myButton = document.getElementById("myButton");
// const myLabel = document.getElementById("myLabel");
// const min = 1;
// const max = 6;
// let randomNum;

// myButton.onclick = function() {
//     randomNum = Math.floor(Math.random() * max) + min;
//     myLabel.textContent = randomNum;
// }
//Now when you click the Roll button a number between 1 and 6 should appear


//NOW LET'S CREATE OUR RANDOM NUMBER GENERATOR FOR 3 DICE INSTEAD OF 1

/*
    Here's the HTML
        <button id="myButton">roll</button><br>
        <label id="label1" class="myLabels"></label><br>
        <label id="label2" class="myLabels"></label><br>
        <label id="label3" class="myLabels"></label><br>

    Here's the CSS
        body {
            font-family: Verdana, Geneva, Tahoma, sans-serif;
            text-align: center;
            }

        #myButton {
            font-size: 3em;
            padding: 5px 25px;
            border-radius: 5px;
        }

        .myLabels {
            font-size: 3em;
        }

*/

const myButton = document.getElementById("myButton");
const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");
const min = 1;
const max = 6;
let randomNum1;
let randomNum2;
let randomNum3;

myButton.onclick = function() {
    randomNum1 = Math.floor(Math.random() * max) + min;
    randomNum2 = Math.floor(Math.random() * max) + min;
    randomNum3 = Math.floor(Math.random() * max) + min;
    label1.textContent = randomNum1;
    label2.textContent = randomNum2;
    label3.textContent = randomNum3;
}