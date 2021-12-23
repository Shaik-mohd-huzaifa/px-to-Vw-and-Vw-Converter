// First lets Take the input and Store into a variable
/*
let InputValue = document.getElementById("VW").innerHTML;

// Before everthing lets Create a Clear function to clear the result
function Clear(){
    document.getElementById().innerHTML = '';
    document.getElementById().innerHTML = '';
    document.getElementById().innerHTML = '';
    document.getElementById().innerHTML = '';
}

// Lets first convert it to Vw under a function
// Function for ViewPort Width
function Px_to_ViewPortWidth(){
  // Here the product is stored in a varible so that can be displayed in DOM  
let $Px_to_viewportWidthValue = InputValue * 0.24271844660194175;
document.getElementById("PxtoVWAnswer").innerHTML = $Px_to_viewportWidthValue;
}


// Function for ViewPort Height 
function Px_to_ViewPortHeight(){
// Here the product is stored in a varible so that can be displayed in DOM  
let $Px_to_viewportHeightValue = InputValue * 0.;
document.getElementById("PxtoVHAnswer").innerHTML = $Px_to_viewportHeightValue;
}
*/

// Example to test the innerWidth for ViewPort Width
function input(){
    let input = document.getElementById("Px1").value;
    console.log(input);
    let vve = window.innerWidth;
    let VVww = vve / 100 * input;
   document.getElementById("h1").innerHTML = VVww; 
      console.log(vve);
}

console.log(window.innerWidth);


function Clear(){
  document.getElementById("Px1").value = '';
  document.getElementById("h1").innerHTML = '';
}

let widthcolc = document.querySelector('#h1');

function size(){
  widthcolc.textContent = window.innerWidth;
  
}

window.onresize = size;

window.addEventListener('resize', size);



function color(){
 // let Iphone = document.getElementById("Select").value;
//console.log(Iphone);
  let $colorclass = document.getElementById("knowScreenWidth");
  if($colorclass.className = "Width"){
    $colorclass.className += " mody";
  }
  else{
    $colorclass = "Width";
  }
}


function Know(){
  let h1 = document.querySelectorAll("#hes").innerHTML;
    let Iphone = document.getElementById("select").value;
     console.log(typeof Iphone);
    if(Iphone == 'Iphone') {
      document.getElementById("hes").style.color = "Blue";
    }
}