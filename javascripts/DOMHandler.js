"use strict";

var sandwichMaker = require("./main.js");

//this function selects the food based on the drop down menu
var foodPicker = function(breadObj, cheeseObj, meatObj){
	var foodTypeArray = ["meat", "cheese", "bread"];
	$(document).on("change", ".itemPicker", function(){
		for(let i = 0; i < foodTypeArray.length; i++){
			if($(this).prop("id") === foodTypeArray[i]){
				// console.log("this JQ", $(this).prop("id") );
				
			}
		}
	});
}

module.exports = foodPicker;