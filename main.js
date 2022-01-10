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

*/
// This clears the input and output 

function Clear(){ 
  document.getElementById("ScreenWidth").value = "";
  document.getElementById("ScreenHeight").value = "";
  document.getElementById("PxtoVwResult").innerHTML = "";
  document.getElementById("PxtoVhResult").innerHTML = "";
  document.getElementById("PxtoVW").value = '';
  document.getElementById("PxtoVh").value = '';

}

// This function clear the 
function Clearinfo(){
  document.getElementById("Screenwidthinfo").value = "";
  document.getElementById("Screenheightinfo").value = "";
}


 // It is declared to store the selected device weight
let DeviceWidth;

// It is declared to store the selected device height 
let DeviceHeight;

// Assigning the value or getting the value from user
let DeviceSelect;


// This function gets the choice of the client from the select input if and gives the output according to the selected device viewport width size
// if iphone the the first two input units will be filled with the predefined sized and they cannot be modified by the user
function Choice(){
  let DeviceSelect = document.getElementById("select").value;
    if(DeviceSelect == 'Iphone'){// for Iphone {
      // It changes the empty input to iphone max viewport size
       DeviceWidth = document.getElementById("ScreenWidth").value = 390;
       DeviceHeight = document.getElementById("ScreenHeight").value = 844;
       // It displays the selected device name of the header
       document.getElementById("HeaderDisplay").innerHTML = DeviceSelect;
      // It does not allow the user to change the value
     document.getElementById("ScreenWidth").disabled = true;
     document.getElementById("ScreenHeight").disabled = true;
     document.getElementById("HeaderDisplay").innerHTML = "These are the Iphone's screen Sizes"
     document.getElementById("MistakeDisplay").innerHTML = `You have Selected a Iphone's Screen Sizes🍎`;
     document.getElementById("Screenwidthinfo").innerHTML = "";
     document.getElementById("Screenheightinfo").innerHTML = "";     
    }else if(DeviceSelect == "Android"){
             // Viewport size of android device max size 
      DeviceWidth = document.getElementById("ScreenWidth").value = 400;
      DeviceHeight = document.getElementById("ScreenHeight").value = 85
      // It displays the selected device name of the header
      document.getElementById("HeaderDisplay").innerHTML = DeviceSelect;
      // It does not allow the user to change the value
     document.getElementById("ScreenWidth").disabled = true;
     document.getElementById("ScreenHeight").disabled = true;
     document.getElementById("HeaderDisplay").innerHTML = "These are the Android's screen Sizes";
     document.getElementById("MistakeDisplay").innerHTML = `You have Selected a Android's Screen Sizes📱`;
     document.getElementById("Screenwidthinfo").innerHTML = "";
     document.getElementById("Screenheightinfo").innerHTML = "";     
    }
    else if(DeviceSelect == "Tablet"){
      DeviceWidth = document.getElementById("ScreenWidth").value = 1024;
      DeviceHeight = document.getElementById("ScreenHeight").value = 1366;
       // It displays the selected device name of the header
      document.getElementById("HeaderDisplay").innerHTML = DeviceSelect;
       // It does not allow the user to change the value
      document.getElementById("ScreenWidth").disabled = true;
      document.getElementById("ScreenHeight").disabled = true;
      document.getElementById("HeaderDisplay").innerHTML = "These are the Tablet's screen Sizes";
      document.getElementById("MistakeDisplay").innerHTML = `You have Selected a Tablets screen sizes 🌠`;
      document.getElementById("Screenheightinfo").innerHTML = "";
      document.getElementById("Screenheightinfo").innerHTML = "";
     }else if(DeviceSelect == "Yourdevice"){ 
       // Here if the user select DeviceSelect option the function will fetch the screen width and displays it
       DeviceWidth = innerWidth;  // Here the device width and height is set to the
       DeviceHeidth = innerHeight;// clients inital device
       // It displays the selected device name of the header
       document.getElementById("HeaderDisplay").innerHTML = "This is your current screen sizes";
       document.getElementById("ScreenWidth").value = innerWidth;
       document.getElementById("ScreenHeight").value = innerHeight;
       document.getElementById("MistakeDisplay").innerHTML = "This is the width and height of your current screen";
       document.getElementById("Screenwidthinfo").innerHTML = "";
       document.getElementById("Screenheightinfo").innerHTML = "";
     }else if(DeviceSelect == "Custom"){ 
       if(DeviceWidth > 0 || DeviceHeight > 0){

       // Clearing the value if any value is present in the input
        DeviceWidth = document.getElementById("ScreenWidth").value = '';
        DeviceHeight = document.getElementById("ScreenHeight").value = '';
        
       // If any value filled it clears when selected custom
        document.getElementById("ScreenWidth").value = '';
        document.getElementById("ScreenHeight").value = '';
        
       // turned off the disabled placeholder while choosen custom 
        document.getElementById("ScreenWidth").disabled = false;
        document.getElementById("ScreenHeight").disabled = false;
       }
       // Heading if the custom value is selected
       document.getElementById("HeaderDisplay").innerHTML = "Enter the Custom values";
       document.getElementById("MistakeDisplay").innerHTML = "Enter a width and height you want to convert for 🔮";

       // Asks for the input from the user if the custom height
       document.getElementById("ScreenWidth").placeholder = "Enter the Width";
       document.getElementById("ScreenHeight").placeholder = "Enter the Height";
      
      // Storing the value entered by the user 
       DeviceWidth = document.getElementById("ScreenWidth").value;
       DeviceHeight = document.getElementById("ScreenHeight").value;
    }
  }

  // This function finds out the vw and vh value of the px input 
  function Calculate(){  
  
    // because the input is in string so we need to first convert it to number to convert to px
     let WidthToCalculate = Number(document.getElementById("ScreenWidth").value);
     let HeightToCalculate = Number(document.getElementById("ScreenHeight").value);
     //document.getElementById("hes").innerHTML = WidthToCalculate;
     /* The reason to do this if the value enter is Not a number it must give out a statement with indicates 
     not a number. Because it is not comparing in a directly (WidhtTocalculate = NaN or toNan) its not working
     So if the input is string and after convert it shows a NaN but the type of Nan is Number it has to be converted
     first to string and then Compared */
     let WidthToCalculateNaN = WidthToCalculate + "";
     let HeightToCalculateNaN = HeightToCalculate + ""; 
     document.getElementById("PxtoVwResult").innerHTML = "Enter a Postive Value";
document.getElementById("PxtoVhResult").innerHTML = "Enter a Postive Value";  
     console.log(typeof WidthToCalculate); // First
     console.log(typeof HeightToCalculate);
    if(WidthToCalculateNaN == 'NaN' || HeightToCalculateNaN == 'NaN'){
      document.getElementById('MistakeDisplay').innerHTML = "Not a Number";
      document.getElementById("PxtoVhResult").innerHTML = "Not a Number";
    }else if(WidthToCalculate == '' && HeightToCalculate == ''){
        document.getElementById('MistakeDisplay').innerHTML = "Give the Input";
     }else if(WidthToCalculate == ''){
     document.getElementById('MistakeDisplay').innerHTML = "Give the width";
    }else if(HeightToCalculate == ''){
      document.getElementById('MistakeDisplay').innerHTML = "Give the height";
    }
    let VwPxInput = Number(document.getElementById("PxtoVW").value);
    let VhPxInput = Number(document.getElementById("PxtoVh").value);
     // Here this cocersion takes place and it converts the NaN to String "NaN" 
     let VwPxInputNaN = VwPxInput + "";
     let VhPxInputNaN = VhPxInput + "";

     // Here this logic converts the px Viewport to Vw and Vh units 
    if(VwPxInput > 0 && VhPxInput > 0){
      let PxtoVw = WidthToCalculate * VwPxInput / 100;
      let PxtoVh = HeightToCalculate * VhPxInput / 100;
      document.getElementById("PxtoVwResult").innerHTML = `${PxtoVw}px is the ${VwPxInput} units of ${DeviceWidth}`;
      document.getElementById("PxtoVhResult").innerHTML = `${PxtoVh}px is the ${VhPxInput} units of ${DeviceHeight}`;   
    }else if(VwPxInput <= 0){
      document.getElementById("PxtoVwResult").innerHTML = "Enter a Postive Value";        
    }else if(VhPxInput <= 0){
      document.getElementById("PxtoVhResult").innerHTML = "Enter a Postive Value";  
    }
   
   /// This Displayes in the bigger text "H4" this is universal Problems
   // 1. If the value is not entered 
    if(VwPxInputNaN == 'NaN' || VhPxInputNaN == 'NaN'){
      document.getElementById('MistakeDisplay').innerHTML = "Enter a Valid value";      
   }else if(VwPxInput == 0 && VhPxInput == 0){
        document.getElementById('MistakeDisplay').innerHTML = "Enter the Vw and Vh units";
    }else if(VwPxInput == ''){
      document.getElementById('MistakeDisplay').innerHTML = "Enter the Vw units";
    }else if(VhPxInput == ''){
      document.getElementById('MistakeDisplay').innerHTML = "Enter the Vh units";
    }
  }

/*
  function color1(){
    document.getElementById('select').style.backgroundColor = "blue";
  }
  */