$(document).ready(function(){
    $("#formOne").submit(function(event){
        event.preventDefault();
        const value = parseInt($("input#number").val());

        if(value < 1 || value > 3999) {
            alert ("Enter a number between 1 and 3999");
        }
    })    
});

// function numberToRoman(value) {
//     let romanNumerals = {I:1, IV:4, V:5, IX:9, X:10}
//     let value = "";

//     if(value < 1 || value > 3999) {
//         alert ("Enter a number between 1 and 3999");
//     }
// }

// console.log(numberToRoman(1));

// // 1. No letters, only intergers
// // 2. No intergers higher than 3999
// // 3. No negative numbers
// // 4. No more than 3 consective roman numerals
// // 5.

// let romanNumber = ["I","V","X","L","C","D","M"]
// let value;

// function numberToRoman(romanNumber, value) {
//     value = 1;
    
// }
// value@value.length-1 <= 3 return I's

