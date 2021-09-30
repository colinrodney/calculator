console.log("connected"); // CONNECTED!

// DOM ELEMENTS

// input display window
const SPAN = document.getElementById("display-window");

// input buttons
const INPUTBUTTON = document.getElementsByTagName("input");

const KEYPAD = document.getElementById("keypad");
console.log(KEYPAD);

// TEST ELEMENTS
console.log(`span:`, SPAN);
// console.log(`input buttons:`, INPUTBUTTON);

// attach event listeners @ each input button via event delegation
KEYPAD.addEventListener("click", (event) => {
  // chk working
  // console.log(event.target); <-- refers to element that triggered event

  // chk if key clicked has data-* attribute + do something
  if (event.target.hasAttribute("data-action")) {
    let x = event.target.getAttribute("data-action");
    console.log("data-action button", x);
  } else {
    console.log("number key");
  }

  // Display value of clicked button @ display window
  SPAN.innerText = event.target.value;
});

// attach eventlisteners to each input button...
// for (let i = 0; i < INPUTBUTTON.length; i++) {
//   INPUTBUTTON[i].addEventListener("click", () => {
//     // show value of button clicked @ display window
//     SPAN.innerText = INPUTBUTTON[i].value;

//     // chk if button clicked has data-* attribute
//     if (INPUTBUTTON[i].hasAttribute("data-action")) {
//       console.log("true");
//     } else {
//       console.log("false");
//     }
//   });
// }

// // grab and store display window input values
// function test(INPUTBUTTON) {
//   let inputArr = [];
//   inputArr.push(INPUTBUTTON.value);
//   console.log(inputArr);
// }
