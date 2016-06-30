"use strict";

var sandwichMaker = require("./main.js");

//this function selects the food based on the drop down menu
var foodPicker = function(bread_Obj, cheese_Obj, meat_Obj){
	var foodTypeArray = ["bread", "cheese", "meat"];
	var foodObjArray = [bread_Obj, cheese_Obj, meat_Obj]; //this line sup with the foodTypeArray indices
	var price = 0;
	$(document).on("change", ".itemPicker", function(){
		for(let i = 0; i < foodTypeArray.length; i++){
			if($(this).prop("id") === foodTypeArray[i]){
				$("#meatwichOutput").append(`<p class="item">${$(this).val()}</p>`);
				// let currentFoodType = foodObjArray[i]; //current food and price object
				// let currentFoodTypeArray = $(this).val();
				// currentFoodTypeArray = currentFoodTypeArray.toLowerCase();
				// console.log("currentFoodType", currentFoodType);
				// for(let j = 0 ; j < currentFoodType[foodTypeArray[i]].length; j++) {
				// 	let currentItem = currentFoodType[`${currentFoodTypeArray}`];
				// 	// let itemPrice = currentFoodType;
				// 	console.log("itemPrice", currentItem);
				}
			}
		}
		$(this).val("none"); //reset the value to none
	})
};

module.exports = foodPicker;