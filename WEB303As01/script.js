/*
	WEB 303 Assignment 1 - jQuery
	Alain Yosseph Rivera Sanchez
*/

$(document).ready(function(){
	var Salary = $('input#yearly-salary');
	var Percentage = $('input#percent');
	var Result = $('#amount');
	(Salary).on('keyup',function(){
	let val = Salary[0].value * Percentage[0].value;
	Result.text('$'.concat(val.toFixed(2))) ;
});
	(Percentage).on('keyup',function(){
		let val = Salary[0].value * Percentage[0].value / 100;
		Result.text('$'.concat(val.toFixed(2))) ;
	}); 
})