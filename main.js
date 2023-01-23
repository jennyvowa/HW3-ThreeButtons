let messages = document.getElementById("result");
let origArray = [2,3,4];
let arrayBoxNumber = document.querySelectorAll('.number');

document.addEventListener("DOMContentLoaded", function (event) {

    // add value 2,3,4 of origgArray to input boxes 
    assignValuesToInput(origArray);  

    // button 2 - calculate the power of 3
    // event listener -> on click -> call anonymous function - a unnamed function 
    document.getElementById("button2").addEventListener("click", function (){
        let cubeArray = origArray.map(toCube);
        assignValuesToInput(cubeArray);  

    });

    // button 3 - calculate the power of 4
    // event listener -> on click -> call funtion by name - toTheFourth
    document.getElementById("button3").addEventListener("click", toTheFourth);

    
});

// button 1 - calculate square
// onclick funtion on html -> call function Square
function Square (){
    let squareArray = origArray.map(toSquare);
    assignValuesToInput(squareArray);  
}

//for each item in origArray
// multiple to itself
function toSquare(num){
    return num * num;
}

function toCube(num){
    return num * num * num; 
}

function toTheFourth(num){
    let fourthArray = origArray.map(toFourth);
    assignValuesToInput(fourthArray);   
}

function toFourth(num){
    return num * num * num * num; 
}

function assignValuesToInput(coppiedArray){
    for(let numbox = 0; numbox < arrayBoxNumber.length; numbox++){
        arrayBoxNumber[numbox].value = coppiedArray[numbox];
    }
}