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

let widthcolc = document.querySelectorAll('#hes');

function size(){
  widthcolc.textContent = screen.innerWidth;
  
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


let h1 = document.querySelectorAll("#hes").innerHTML;
let DeviceWidth; // It is declared to store the selected device weight
let DeviceHeight; // It is declared to store the selected device height 
// Assigning the value or getting the value from user
let DeviceSelect;


function Choice(){
  let DeviceSelect = document.getElementById("select").value;
    if(DeviceSelect == 'Iphone'){// for Iphone {
      // It changes the empty input to iphone max viewport size
       DeviceWidth = 
       DeviceHeight = 
      document.getElementById("ScreenWidth").value = 390;
      document.getElementById("ScreenHeight").value = 844;
      // It does not allow the user to change the value
     document.getElementById("ScreenWidth").disabled = true;
     document.getElementById("ScreenHeight").disabled = true;
    }else if(DeviceSelect == "Android"){
      DeviceWidth = 
      DeviceHeight = 
       // Viewport size of android device max size 
     document.getElementById("ScreenWidth").value = 400;
     document.getElementById("ScreenHeight").value = 854;
      // It does not allow the user to change the value
     document.getElementById("ScreenWidth").disabled = true;
     document.getElementById("ScreenHeight").disabled = true;
    }
    else if(DeviceSelect == "Tablet"){
      DeviceWidth = 
      DeviceHeight = 
      document.getElementById("ScreenWidth").value = 1024;
      document.getElementById("ScreenHeight").value = 1366;
       // It does not allow the user to change the value
      document.getElementById("ScreenWidth").disabled = true;
      document.getElementById("ScreenHeight").disabled = true;
     }else if(DeviceSelect == "Custom"){DeviceHeight = 
       // Here if the user select DeviceSelect option the function will fetch the screen width and displays it
       DeviceWidth = innerWidth;  // Here the device width and height is set to the
       DeviceWidth = innerWidth;// clients inital device
      document.getElementById("ScreenWidth").value = innerWidth;
      document.getElementById("ScreenHeight").value = innerWidth;
     }

  }

  function Colcolate(){  // It is a string so we need to first convert it to number to convert to px
     let WidthToCalculate = Number(document.getElementById("ScreenWidth").value);
     let HeightToCalculate = Number(document.getElementById("ScreenHeight").value);
     //document.getElementById("hes").innerHTML = WidthToCalculate;
     /* The reason to do this if the value enter is Not a number it must give out a statement with indicates 
     not a number. Because it is not comparing in a directly (WidhtTocalculate = NaN or toNan) its not working
     So if the input is string and after convert it shows a NaN but the type of Nan is Number it has to be converted
     first to string and then Compared */
     let WidthToCalculateNaN = WidthToCalculate + "";
     let HeightToCalculateNaN = HeightToCalculate + "";   
     console.log(typeof WidthToCalculate); // First
     console.log(typeof HeightToCalculate);
    if(WidthToCalculateNaN == 'NaN' || HeightToCalculateNaN == 'NaN'){
      document.getElementById('hes').innerHTML = "Not a Number";
    }else if(WidthToCalculate == '' && HeightToCalculate == ''){
        document.getElementById('hes').innerHTML = "Give the Input";
     }else if(WidthToCalculate == ''){
     document.getElementById('hes').innerHTML = "Give the width";
    }else if(HeightToCalculate == ''){
      document.getElementById('hes').innerHTML = "Give the height";
    }
    let VwPxInput = Number(document.getElementById("PxtoVW").value);
    let VhPxInput = Number(document.getElementById("PxtoVh").value);
     // Here this cocersion takes place and it converts the NaN to String "NaN" 
     let VwPxInputNaN = VwPxInput + "";
     let VhPxInputNaN = VhPxInput + "";

     // Here this logic converts the px Viewport to Vw and Vh units 
    let PxtoVw = WidthToCalculate * VwPxInput / 100;
    let PxtoVh = HeightToCalculate * VhPxInput / 100;
    
   if(VwPxInputNaN == 'NaN' || VhPxInputNaN == 'NaN'){
      document.getElementById('').innerHTML = "Enter a Valid value";      
   }else if(VwPxInput == '' && VhPxInput == ''){
        document.getElementById('').innerHTML = "Enter the Vw and Vh units"
    }else if(VwPxInput == ''){
      document.getElementById('').innerHTML = "Enter the Vw units"
    }else if(VhPxInput == ''){
      document.getElementById('').innerHTML = "Enter the Vh units"
    }
    document.getElementById("PxtoVwResult").innerHTML = PxtoVw;
    document.getElementById("PxtoVhResult").innerHTML = PxtoVh;  
  }
