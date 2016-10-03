// Utilisation de jQuery

$(document).ready(function(){

	$('.smallSection:not(#one)').hide();


	$('#button1').click(function(){
		$(".smallSection").hide();
		$("#one").fadeIn("slow");
	});

	$('#button2').click(function(){
		$(".smallSection").hide();
		$("#two").fadeIn("slow");
	});

	$('#button4').click(function(){
		$(".smallSection").hide();
		$("#three").fadeIn("slow");
	});




});