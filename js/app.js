console.log("connected"); // CONNECTED!

// DOM ELEMENTS

// input display window
const SPAN = document.getElementById("display-window");

// input buttons
const INPUTBUTTON = document.getElementsByTagName("input");

// TEST ELEMENTS
// console.log(`span:`, SPAN);
// console.log(`input buttons:`, INPUTBUTTON);

// attach eventlisteners to each input button...
for (let i = 0; i < INPUTBUTTON.length; i++) {
  INPUTBUTTON[i].addEventListener("click", () => {
    // show value of button clicked @ display window
    SPAN.innerText = INPUTBUTTON[i].value;
  });
}
