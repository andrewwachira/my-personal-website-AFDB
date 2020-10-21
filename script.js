
//Navbar animation
$(document).ready(function(){


$(window).scroll(function(){
	if( $(document).scrollTop()> $("nav").height()){
		$("nav").addClass("scrolled");
	}else{
		$("nav").removeClass("scrolled");
	}
});


$("ul").find("a").click(function(){
	var navlink  = $(this).attr("href");

 $("html,body").animate({
	scrollTop: $(navlink).offset().top - 100
 },2000);
return false;

});

});
