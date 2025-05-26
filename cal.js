const display = document.getElementById("display");

function appendTo(input){
    display.value +=input;

}

function calculate(){
    try{
            display.value=eval(display.value);


    }catch (e) {
        display.value = "Error";
    }

}

function clearNum(){
    display.value="";

}