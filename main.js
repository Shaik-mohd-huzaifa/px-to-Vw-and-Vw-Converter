// This function checks the height and width and displays to the user
function checksize(){
  let knowScreenWidth = window.innerWidth;
  let knowScreenHeight = window.innerHeight;
  
  // It displays the screen size to the client
  document.getElementById("knowScreenWidth").innerHTML = ("Width: " + knowScreenWidth + "px");
  document.getElementById("knowscreenHeight").innerHTML = ("Height: " + knowScreenHeight + "px");
 
}
// This clears the input and output 

function Clear(){ 
  document.getElementById("PxtoVW").style.margin = "10px auto 30px auto";
  document.getElementById("PxtoVh").style.margin = "10px auto 30px auto";

   DeviceSelect = document.getElementById("select").value;
     if(DeviceSelect == 'Custom'){  
     // If the selected option is Custom only then this clears everthing
     document.getElementById("ScreenWidth").value = "";
     document.getElementById("ScreenHeight").value = "";
     document.getElementById("PxtoVwResult").innerHTML = "";
     document.getElementById("PxtoVhResult").innerHTML = "";
     document.getElementById("PxtoVW").value = '';
     document.getElementById("PxtoVh").value = '';
     document.getElementById("PxtoVW").placeholder = "Enter a Value";
     document.getElementById("PxtoVh").placeholder = "Enter a Value";
     }else{
  // Only clears the Px converted value and the convert and to convert input, because expect the option "Custom" all other values options are set with default values
     document.getElementById("PxtoVwResult").innerHTML = " ";
     document.getElementById("PxtoVW").value = '';
     document.getElementById("PxtoVhResult").innerHTML = " ";
     document.getElementById("PxtoVh").value = '';
    }
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
  DeviceSelect = document.getElementById('select').value;  
    

    if(DeviceSelect === 'Iphone'){
       // It changes the empty input to iphone max viewport size
       DeviceWidth = document.getElementById("ScreenWidth").value = 390;
       DeviceHeight = document.getElementById("ScreenHeight").value = 844;
       
       // It displays the selected device name of the header
       document.getElementById("HeaderDisplay").innerHTML = DeviceSelect;
       
       // It does not allow the user to change the value
       document.getElementById("ScreenWidth").disabled = true;
       document.getElementById("ScreenHeight").disabled = true;
       document.getElementById("HeaderDisplay").innerHTML = "Iphone"
       document.getElementById("MistakeDisplay").innerHTML = `You have Selected a Iphone's Screen Sizes🍎`;
       document.getElementById("PxtoVW").value = " ";
       document.getElementById("PxtoVh").value = " ";

       // This clears the results or any error below the to convert input
       document.getElementById("PxtoVwResult").innerHTML = "";
       document.getElementById("PxtoVhResult").innerHTML = "";
    }else if(DeviceSelect === "Android"){
       // Viewport size of android device max size 
       DeviceWidth = document.getElementById("ScreenWidth").value = 400;
       DeviceHeight = document.getElementById("ScreenHeight").value = 850;
       // It displays the selected device name of the header
       document.getElementById("HeaderDisplay").innerHTML = DeviceSelect;
       // It does not allow the user to change the value
       document.getElementById("ScreenWidth").disabled = true;
       document.getElementById("ScreenHeight").disabled = true;
       document.getElementById("HeaderDisplay").innerHTML = "Android";
       document.getElementById("MistakeDisplay").innerHTML = `You have Selected a Android's Screen Sizes📱`;    
       document.getElementById("PxtoVW").value = " ";
       document.getElementById("PxtoVh").value = " ";
       // This clears the results or any error below the to convert input
       document.getElementById("PxtoVwResult").innerHTML = "";
       document.getElementById("PxtoVhResult").innerHTML = "";
    }else if(DeviceSelect === "Tablet"){
       // Maximum screen size of a tablet
       DeviceWidth = document.getElementById("ScreenWidth").value = 1024;
       DeviceHeight = document.getElementById("ScreenHeight").value = 1366;
       // It displays the selected device name of the header
       document.getElementById("HeaderDisplay").innerHTML = DeviceSelect;
       // It does not allow the user to change the value
       document.getElementById("ScreenWidth").disabled = true;
       document.getElementById("ScreenHeight").disabled = true;
       document.getElementById("HeaderDisplay").innerHTML = "Tablet";
       document.getElementById("MistakeDisplay").innerHTML = `You have Selected a Tablets screen sizes 🌠`;
       document.getElementById("PxtoVW").value = " ";
       document.getElementById("PxtoVh").value = " ";
       // This clears the results or any error below the to convert input
       document.getElementById("PxtoVwResult").innerHTML = "";
       document.getElementById("PxtoVhResult").innerHTML = "";
    }else if(DeviceSelect === "Yourdevice"){ 
       // Here if the user select DeviceSelect option the function will fetch the screen width and displays it
       DeviceWidth = innerWidth;  // Here the device width and height is set to the
       DeviceHeight = innerHeight;// clients inital device
       // It displays the selected device name of the header
       document.getElementById("HeaderDisplay").innerHTML = "Current screen";
       document.getElementById("ScreenWidth").value = innerWidth;
       document.getElementById("ScreenHeight").value = innerHeight;
       document.getElementById("MistakeDisplay").innerHTML = "This is the width and height of your current screen";
       document.getElementById("PxtoVW").value = " ";
       document.getElementById("PxtoVh").value = " ";
       // This clears the results or any error below the to convert input
       document.getElementById("PxtoVwResult").innerHTML = "";
       document.getElementById("PxtoVhResult").innerHTML = "";  
       
     }else if(DeviceSelect === "Custom"){ 
       // turned off the disabled placeholder while choosen custom  
       document.getElementById("ScreenWidth").disabled = false;
       document.getElementById("ScreenHeight").disabled = false;
       // Heading if the custom value is selected
       document.getElementById("HeaderDisplay").innerHTML = "Enter the Custom values";
       document.getElementById("MistakeDisplay").innerHTML = "Enter a width and height you want to convert for 🔮";
       // Asks for the input from the user if the custom height and Width
       document.getElementById("ScreenWidth").placeholder = "Enter the Width";
       document.getElementById("ScreenHeight").placeholder = "Enter the Height";
       document.getElementById("PxtoVW").value = " ";
       document.getElementById("PxtoVh").value = " "; 
       // This clears the results or any error below the to convert input
       document.getElementById("PxtoVwResult").innerHTML = "";
       document.getElementById("PxtoVhResult").innerHTML = "";
    }
}

function makechoice(){
  DeviceSelect = document.getElementById("select").value;     
    

  if(DeviceSelect === 'Iphone'){
     // It changes the empty input to iphone max viewport size
     DeviceWidth = document.getElementById("ScreenWidth").value = 390;
     DeviceHeight = document.getElementById("ScreenHeight").value = 844;
  }
}

// This function finds out the vw and vh value of the px input 
function Calculate(){  
      
  // because the input is in string so we need to first convert it to number to convert to px
  let WidthToCalculate = Number(document.getElementById("ScreenWidth").value);
  let HeightToCalculate = Number(document.getElementById("ScreenHeight").value);
  
  // here the last 2 input bottom margin will be reduced because it has <p> after calculating
  
  document.getElementById("PxtoVW").style.margin = "10px auto 10px auto";
  document.getElementById("PxtoVh").style.margin = "10px auto 10px auto";


  /* The reason to do this if the value enter is Not a number it must give out a statement with indicates 
  not a number. Because it is not comparing in a directly (WidhtTocalculate = NaN or toNan) its not working
  no if the input is string and after convert it shows a NaN but the type of Nan is Number it has to be converted
  first to string and then Compared */
     
  let WidthToCalculateNaN = WidthToCalculate + "";
  let HeightToCalculateNaN = HeightToCalculate + ""; 
    
  // document.getElementById("PxtoVwResult").innerHTML = "Enter a Postive Value";
  // document.getElementById("PxtoVhResult").innerHTML = "Enter a Postive Value";  
     
  console.log(typeof WidthToCalculate); // First
  console.log(typeof HeightToCalculate);
    
     // If both the values are stings this one is executed
  if(WidthToCalculate == 'Nan' && HeightToCalculate == 'Nan'){
    document.getElementById('MistakeDisplay').innerHTML = "Invalid Value Entered";
    document.getElementById('ScreenWidth').placeholder = "Invalid Value";
    document.getElementById('ScreenHeight').placeholder = "Invalid Value";
  
  // This one Works when the Custom Screen Width is not a number or string  
  }
  else if(WidthToCalculateNaN == 'NaN'){
    
    document.getElementById('MistakeDisplay').innerHTML = "Not a Number";
    document.getElementById("ScreenWidth").value = "";
    document.getElementById("ScreenWidth").placeholder = "Invalid Value";
    
  }
  // This one Works when the Custom Screen Height is not a number or string 
  else if(HeightToCalculateNaN == 'NaN'){
    
    document.getElementById('MistakeDisplay').innerHTML = "Not a Number";
    document.getElementById("ScreenHeight").value = "";
    document.getElementById("ScreenHeight").placeholder = "Invalid Value";
   
  }
  // If the input value is empty then this one is worked   
  else if(WidthToCalculate == '' && HeightToCalculate == ''){
    document.getElementById('MistakeDisplay').innerHTML = "Give the Input to Convert";
    document.getElementById('ScreenWidth').placeholder = "Enter the Value";
    document.getElementById('ScreenHeight').placeholder = "Enter the Value";
    
  }  
  // If the input value is empty then this one works
  else if(WidthToCalculate == ''){
  
  document.getElementById('MistakeDisplay').innerHTML = "Enter the width";
  document.getElementById('ScreenWidth').placeholder = "Enter the Value";

  }
  // If the input value is empty then this one works
  else if(HeightToCalculate == '')
  {
    document.getElementById('MistakeDisplay').innerHTML = "Enter the height";
    document.getElementById('ScreenHeight').placeholder = "Enter the Value";
  }

  DeviceWidth = document.getElementById("ScreenWidth").value;
  DeviceHeight = document.getElementById("ScreenHeight").value;
  
  // Here the Number entered in String form is converted to Number
  let VwPxInput = Number(document.getElementById("PxtoVW").value);
  let VhPxInput = Number(document.getElementById("PxtoVh").value);

   // Here this cocersion takes place and it converts the NaN to String "NaN" 
   let VwPxInputNaN = VwPxInput + "";
   let VhPxInputNaN = VhPxInput + "";
    
   // Declaring here to be used globally  
   let PxtoVw;
   let PxtoVh;
     
   // Here this logic converts the px Viewport to Vw and Vh units 
   if(VwPxInput > 0 || VhPxInput > 0){
    
    PxtoVw = WidthToCalculate * VwPxInput / 100;
    PxtoVh = HeightToCalculate * VhPxInput / 100;
     
    // If both the numver are positive and 
    document.getElementById("PxtoVwResult").innerHTML = `${PxtoVw}px is the ${VwPxInput} units of ${DeviceWidth}`;
    document.getElementById("PxtoVhResult").innerHTML = `${PxtoVh}px is the ${VhPxInput} units of ${DeviceHeight}`;  
      
    }
   // If both the values are Nan then this one is executed
   else if(VwPxInputNaN == 'NaN' && VhPxInputNaN == 'NaN'){
    
    document.getElementById('MistakeDisplay').innerHTML = "Enter a Valid value";  
    document.getElementById("PxtoVW").value = '';  
    document.getElementById("PxtoVW").placeholder = "Invalid Value";
    document.getElementById("PxtoVh").value = ''; 
    document.getElementById("PxtoVh").placeholder = "Invalid Value";    
     
   }
   // If the Number to convert in Vw is Nan of empty then this one is executed
   else if(VwPxInput <= 0 && VhPxInput <= 0){
    
    document.getElementById("PxtoVW").placeholder = "Invalid Value";
    document.getElementById("PxtoVW").value = '';       
    document.getElementById("PxtoVh").placeholder = "Invalid Value";  
    document.getElementById("PxtoVh").value = '';
   
  }
   // If either the width input is nan or less than 0 this will execute
  if(VwPxInput <= 0 || VwPxInputNaN == 'NaN'){

   document.getElementById("PxtoVW").placeholder = "Invalid Value";
   document.getElementById("PxtoVW").value = '';       
    
  // If the Number to convert in Vh is Nan of empty then this one is executed    
  }
  else if(VhPxInput <= 0 || VhPxInputNaN == 'NaN'){

   document.getElementById("PxtoVh").placeholder = "Invalid Value";  
   document.getElementById("PxtoVh").value = '';

  } 
  // This Displayes in the bigger text "H4" this is universal Problems
  else if(VwPxInput == 0 && VhPxInput == 0){
    
   document.getElementById('MistakeDisplay').innerHTML = "Enter the Vw and Vh units";
  
  }
  // If the Vw input is empty
  else if(VwPxInput == ''){
  
   document.getElementById('MistakeDisplay').innerHTML = "Enter the Vw units";
  
  }
  // if the Vh input is empty
  else if(VhPxInput == ''){
   
   document.getElementById('MistakeDisplay').innerHTML = "Enter the Vh units";
    
  }
  }