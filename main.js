$(document).ready(function() {
	"use strict";

	var numberRumbler = function(number){
		
		var str_0 = number.toString();
		var arr_0 = [];
		var obj_0 = {};
		
		for(var i = 0; i <= str_0.length-1 ; ++i) {
				//console.log("for loop: " + Number(str_0[i]));
				arr_0.push(Number(str_0[i]));
			}
			/*	
entrar el valor actual, se suma lo suma al valor siguiente,
devuelve el valor producto, se repite el ciclo


function sumUp(actualVal,sigVal,prodVal){
	var prodVal = actualVal + sigVal;
   	return prodVal;
   }*/	

   $("#output").val(arr_0.reduce(addThem, 0));

   console.log(arr_0.reduce(addThem, 0))

   function addThem(a, b) {

   	return a + b;
   }

}		
  console.log($("#input").val());
 
$("#button").click(function() {
		//console.log("button clicked");
		numberRumbler($("#input").val());
	});


});