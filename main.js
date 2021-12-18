// First lets Take the input and Store into a variable

let InputValue = document.getElementById("VW").InnerHTML;

// Before everthing lets Create a Clear function to clear the result
function Clear(){
    document.getElementById().InnerHTML = '';
    document.getElementById().InnerHTML = '';
    document.getElementById().InnerHTML = '';
    document.getElementById().InnerHTML = '';
}

// Lets first convert it to Vw under a function
// Function for ViewPort Width
function ViewPortWidth(){
  // Here the product is stored in a varible so that can be displayed in DOM  
let $viewportWidthValue = InputValue * 0.24271844660194175;
document.getElementById("VWAnswer").InnerHTML = $viewportWidthValue;
}

