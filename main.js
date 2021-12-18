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
function Px_to_ViewPortWidth(){
  // Here the product is stored in a varible so that can be displayed in DOM  
let $Px_to_viewportWidthValue = InputValue * 0.24271844660194175;
document.getElementById("PxtoVWAnswer").InnerHTML = $Px_to_viewportWidthValue;
}


// Function for ViewPort Height 
function Px_to_ViewPortHeight(){
// Here the product is stored in a varible so that can be displayed in DOM  
let $Px_to_viewportHeightValue = InputValue * 0.24271844660194175;
document.getElementById("PxtoVHAnswer").InnerHTML = $Px_to_viewportHeightValue;
}


