$(document).ready(function(){
	$(".menu_icon").click(function(){
		$('.cancel').css('transform','translateX(0)');
		$('.cancel').css('opacity','1');
		$('.overlay').css('visibility','visible');
		$(".upper-inner-circle").css('transform','translate(27%,-31%) scale(1)');
		$(".upper-outer-circle").css('transform','translate(38%,-35%) scale(1)');
		$(".lower-inner-circle").css('transform','translate(-27%,31%) scale(1)');
		$(".lower-outer-circle").css('transform','translate(-36.5%,33%) scale(1)');
	});

	$(".cancel").click(function(){
		$('.cancel').css('transform','translateX(-100px)');
		$('.cancel').css('opacity','0');
		$('.overlay').css('visibility','hidden');
		$(".upper-inner-circle").css('transform','translate(27%,-31%) scale(0)');
		$(".upper-outer-circle").css('transform','translate(38%,-35%) scale(0)');
		$(".lower-inner-circle").css('transform','translate(-27%,31%) scale(0)');
		$(".lower-outer-circle").css('transform','translate(-36.5%,33%) scale(0)');
	});
});