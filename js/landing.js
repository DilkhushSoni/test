$(function(){
    $(window).load(function(){
        $('.flexslider').flexslider({
            animation: "slide"
        });
    });

    $(".journey-type").click(function() {
    	$(".journey-type").removeClass("journey-type-active");
    	$(this).addClass("journey-type-active");
    	if($(this).attr("id") == "journey-type-family") {
    		$("#journey-theme-couple").hide();
    		$("#journey-theme-family").css("display","inline-block");
    	}
    	else {
    		$("#journey-theme-family").hide();
    		$("#journey-theme-couple").fadeIn();
    	}
    });

    $(".select-theme-btn").focus(function() {
    	$("#itinerary-type").fadeIn();
    });

    $(".select-itinerary-btn").focus(function() {
    	$(".itinerary-type").removeClass("itinerary-type-active");
    	$(this).parent().parent().parent().addClass("itinerary-type-active");
    	$("#suggested-itinerary").fadeIn();
    });
});