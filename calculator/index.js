const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value); 
        // eval() has a security risk, only use it for tutorials
    }
    catch(error){
        display.value = "Syntax Error";
    }
    
}