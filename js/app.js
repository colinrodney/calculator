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

  // store value of clicked button to variable
  let keyValue = event.target.value;

  // chk if key clicked has data-* attribute + do something
  if (event.target.hasAttribute("data-action")) {
    // some mathematical operation to be performed...(some function)...
    let x = event.target.getAttribute("data-action");
    console.log("data-action button", x);
  } else {
    // console.log(keyValue);
  }

  // chk if value in display-window is 0...
  if (SPAN.textContent === "0") {
    // console.log(`0`); <-- TESTING

    // replace 0 w/ key value
    SPAN.innerText = event.target.value;
  } else {
    // console.log(`not 0`); <-- TESTING

    // concatenate addl input ey clicks to existing display-window value
    let updatedDisplayValue = SPAN.innerText + event.target.value;
    SPAN.innerText = updatedDisplayValue;
  }
});
