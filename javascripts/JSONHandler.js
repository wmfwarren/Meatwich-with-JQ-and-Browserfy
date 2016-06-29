"use strict";

	var sandwichMaker = require("./main.js");

	/////***JSON Objects***\\\\\
	var breads = null;
	var meats = null;
	var cheeses = null;
	/////***JSON Getters***\\\\\
	var getBreads = function() {
		return breads;
	}
	var getMeats = function() {
		return meats;
	}
	var getCheeses = function() {
		return cheeses;
	}
	/////***Function Calls***\\\\\
	var JSONLoadListener = function(){
				getBreadsJSON()
				.then(function (data){
					breads = data;
					return (getMeatsJSON(data));
				}).then(function (data){
					meats = data
					return (getCheesesJSON(data));
				}).then(function (data){
					cheeses = data;
					foodPicker(breads, getCheeses, getMeats);
					return ;
				})};
		// })();

	/////***Promises***\\\\\
	var getBreadsJSON = function(event){
				return new Promise((resovle, reject) => {
					$.ajax({
		      	url: "../json/breads.json"
		    	}).done(function(data) {
		      	resovle(data);
		    	}).fail(function(xhr, status, error) {
		      	reject(error);
					});
				});
			};
	var getMeatsJSON = function(event){
				return new Promise((resovle, reject) => {
					$.ajax({
		      	url: "../json/meats.json"
		    	}).done(function(data) {
		      	resovle(data);
		    	}).fail(function(xhr, status, error) {
		      	reject(error);
					});
				});
			};
	var getCheesesJSON = function(event){
				return new Promise((resovle, reject) => {
					$.ajax({
		      	url: "../json/cheeses.json"
		    	}).done(function(data) {
		      	resovle(data);
		    	}).fail(function(xhr, status, error) {
		      	reject(error);
					});
				});
			};

JSONLoadListener();

module.exports = {JSONLoadListener, getBreads, getCheeses, getMeats};