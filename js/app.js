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

  // concatenate...
  let updatedDisplayValue = SPAN.innerText + event.target.value;

  SPAN.innerText = updatedDisplayValue;

  // let currentValue = SPAN.innerText;

  // let test = (currentValue += keyValue);
  // console.log(test);
});
