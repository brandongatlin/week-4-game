// create array of possible scores user wants to add up to exactly
var possibleAllowance = [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120];

// use array to create random number and assign it to var monthlyAllowance
var monthlyAllowance = possibleAllowance[Math.floor(Math.random() * possibleAllowance.length)];

// console.log check = true
console.log(monthlyAllowance);

// push var monthlyAllowance to #yourAllowance
$("#yourAllowance").html("$ " + monthlyAllowance);

// create array possibleCost for possible values of all purchases
var possibleCost = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// create variables for each icon image and assign random values to them?
var carCost = possibleCost[Math.floor(Math.random() * possibleCost.length)];
console.log(carCost);

var diamondCost = possibleCost[Math.floor(Math.random() * possibleCost.length)];
console.log(diamondCost);

var amazonCost = possibleCost[Math.floor(Math.random() * possibleCost.length)];
console.log(amazonCost);

var planeCost = possibleCost[Math.floor(Math.random() * possibleCost.length)];
console.log(planeCost);




//testing
$(document).ready(function() {

    $("#car").on("click", function() {

        $("#yourBill").html("$ " + carCost);
    });

    $("#diamond").on("click", function() {

        $("#yourBill").html("$ " + diamondCost);
    });

    $("#amazon").on("click", function() {

        $("#yourBill").html("$ " + amazonCost);
    });

    $("#plane").on("click", function() {

        $("#yourBill").html("$ " + planeCost);
    });

});