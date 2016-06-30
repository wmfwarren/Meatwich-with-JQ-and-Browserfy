"use strict";

var sandwichMaker = require("./main.js");

//this function selects the food based on the drop down menu
var foodPicker = function(bread_Obj, cheese_Obj, meat_Obj){
	var foodTypeArray = ["meat", "cheese", "bread"];
	var price = 0;
	$(document).on("change", ".itemPicker", function(){
		for(let i = 0; i < foodTypeArray.length; i++){
			if($(this).prop("id") === foodTypeArray[i]){
				$("#meatwichOutput").append(`<p class="item">${$(this).val()}</p>`);
				price += 
			}
		}
	});
}

module.exports = foodPicker;