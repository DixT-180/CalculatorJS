let currentTotal =0;
var prevoius_op = 0;
var buffer = 0;
var display = document.querySelector(".console")
clears = document.querySelector(".clear");
clears.addEventListener("click",function(event){
    buffer = 0;
    currentTotal = 0;
    display.innerText = 0;
})
numbers = document.querySelectorAll(".num");
console.log(numbers);
for (item of numbers){
    item.addEventListener("click",function(event){
        buttonText = event.target.innerText;
        if (buffer == 0){
            buffer = buttonText; //write first num first digit
        }
        else {
            buffer =buffer+buttonText ; //concatenate the digits together 
        }
        display.innerText = buffer;
        console.log("buffer",buffer);
    })
}


symbols = document.querySelector(".add");
symbols.addEventListener("click",function(event){
    buttonText = event.target.innerText;
    if (buffer!=0){
        currentTotal = parseInt(buffer) + parseInt(currentTotal)
        display.innerText = currentTotal;
        on_click_var = currentTotal;
        console.log("cuttenTotal",currentTotal);
        prevoius_op = currentTotal;
        buffer = 0;
    }
})

minus = document.querySelector(".min");
minus.addEventListener("click",function(event){
    buttonText = event.target.innerText;
    if (buffer!=0){
        currentTotal = -parseInt(buffer)-parseInt(currentTotal)
        display.innerText = currentTotal;
        on_click_var = currentTotal;
        console.log("currentTotal",currentTotal);
        prevoius_op = currentTotal;
        buffer = 0;
    }
})

currentTotal=1
muls = document.querySelector(".mul");
muls.addEventListener("click",function(event){
    buttonText = event.target.innerText;
    if (buffer!=0){
        if (currentTotal==0){
            currentTotal = 1;
        }
        currentTotal = parseInt(buffer) * parseInt(currentTotal);
        console.log("ct",currentTotal)
        display.innerText = currentTotal;
        on_click_var = currentTotal;
        buffer = 0
        
    }
    else{

    }
})

currentTotal = 1;
division = document.querySelector(".divid");
division.addEventListener("click",function(event){
    buttonText = event.target.innerText;
    if (buffer!=0){
        if (currentTotal==0){
            currentTotal=1;
        }
        currentTotal = parseInt(buffer) / parseInt(currentTotal);
        result = 1 / currentTotal;
        display.innerText = result;
        on_click_var = result;
        console.log("currentTotal",currentTotal);
        buffer = 0;
    }
})









