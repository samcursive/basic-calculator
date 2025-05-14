// Calculator Program

const display = document.getElementById('display');

//To Clear The Display
function clearDisplay(){
    display.value = "";
}

//To Show Values On The Display
function appendToDisplay(input){
    display.value += input;

}

//To Calculate Values
function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }

}