/* const age = 19;

if (age <= 12) {
    console.log("Child")
}
    else if (age >= 20) {
        console.log("Adult")
    }
else {
    console.log("Teenager")
} */
/* 
const calPer = (amount, percent) => {
  const result = (amount * percent) / 100;
  console.log(result);
};
calPer(200, 10);
 */
/* let newpassword = [];
const password = "secrets";

for (let i = 0; i < password.length; i++) {
  if (password[i] === "r") {
    newpassword.push(R);
  }  else {
      newpassword.push(password[i]);
  }
}
console.log(newpassword.join(""));
 */

/* 
const ans = (a, b, c, d) => {
let answer = a*b - c + d / 2;
console.log(answer);
}
ans(10, 2, 6, 2)
 */

/* //find the cube root of 4*7-3
const cubeRoot = (a, b, c) => {
  console.log(Math.cbrt(a * b - c));
};
cubeRoot(4, 7, 3);

//find the answer for 3*47 divided  by 4*70
const calcDiv = (a, b, c, d) => {
  let ans = (a * b) / (c * d);
  console.log(ans);
};
calcDiv(3, 47, 4, 70);

//find 300% of 120
const perc = (a, b) => {
  let percentage = (a / b) * 100;
  console.log(percentage + "%");
};
perc(300, 120);
 */
/* 
const background = document.getElementById("background");

background.style.border = "3px solid Aquamarine"
background.style.width = '500px'
background.style.padding = '30px'

const  header = document.querySelector(".header");
header.style.color = 'Aquamarine'
header.innerHTML = 'The Heading Block'

const title = document.querySelector(".title");
title.style.color = 'aqua'
title.innerText = 'The Title Block'

const description = document.querySelector(".description");
description.style.color = 'pink'
description.textContent = 'Description'


const button = document.querySelector(".btn")
button.style.marginTop = '50px'

button.addEventListener ("click", changeTextColor);
function changeTextColor(){
  button.style.color = 'whitesmoke'
  button.style.background = 'green'
button.style.borderStyle = 'none'
button.style.padding = '3px 8px'

} */


//selecting the first div
const background = document.querySelector("#background");
const header = document.querySelector(".header");
const title = document.querySelector(".title");
const description = document.querySelector(".description");
const btn = document.querySelector(".btn");

// default style for the first div
background.style.padding = "40px";
background.style.width = "400px";

//creating function for the event listener in first div
const changeTextColor = () => {
  background.style.background = "#1B4B3D";
  background.style.padding = "40px";
  header.style.color = "#D2EFE7";
  title.style.color = "#41B493";
  description.style.color = "#D2EFE7";

  //nested function styling for first div
  secondHeader.style.color = "black";
  secondTitle.style.color = "black";
  secondDescription.style.color = "black";
  second.style.background = "white";

};

//creating event listener for second div
btn.addEventListener("click", changeTextColor);


//selecting the second div
const second = document.querySelector("#second");
const secondBtn = document.querySelector(".secondBtn");
const secondHeader = document.querySelector(".secondHeader");
const secondTitle = document.querySelector(".secondTitle");
const secondDescription = document.querySelector(".secondDescription");

//default style for the second div
second.style.padding = "40px";
second.style.width = "400px";

//creating function for the event listener in second div

const secondChangeTextColor = () => {

  second.style.background = "#8F0021";
  second.style.padding = "40px";
  secondHeader.style.color = "#FFADC0";
  secondTitle.style.color = "#F50039";
  secondDescription.style.color = "#FFADC0";

  //nested function styling for first div
  background.style.background = "white";
  header.style.color = "black";
  title.style.color = "black";
  description.style.color = "black";
};
//creating event listener for second div
secondBtn.addEventListener("click", secondChangeTextColor);
