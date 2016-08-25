$(document).ready(function(){
	var state = "product";
	var goProduct = function(){
	    localStorage.infview=state="product";
	    $("ul").css({"display":"none"});
	    $(".story img").css({"display":"block"});
	    $('<div class="summary">Show Product View</div>').replaceAll('.product .summary');
	    $('<div class="summary">Hide Story View</div>').replaceAll('.story .summary');
	    $(".story .summary").css({"color":"rgba(255, 0, 0, 0.9)"});
	    $(".product .summary").css({"color":"rgba(67, 67, 67, 0.9)"});
	    $(".product .summary").css({"background":"url(buttonGrayPlusMinusSmaller.png) no-repeat left top"});
	    $(".story .summary").css({"background":"url(buttonGrayPlusMinusSmaller.png) no-repeat left bottom"});
	};
	var goStory =  function(){
	    localStorage.infview=state="story";
	    $("ul").css({"display":"block"});
	    $(".story img").css({"display":"none"});
	    $('<div class="summary">Show Story View</div>').replaceAll('.story .summary');
	    $('<div class="summary">Hide Product View</div>').replaceAll('.product .summary');
	    $(".story .summary").css({"color":"rgba(67, 67, 67, 0.9)"});
	    $(".product .summary").css({"color":"rgba(255, 0, 0, 0.9)"});
	    $(".product .summary").css({"background":"url(buttonGrayPlusMinusSmaller.png) no-repeat left bottom"});
	    $(".story .summary").css({"background":"url(buttonGrayPlusMinusSmaller.png) no-repeat left top"});
	};
	var switchState = function(){
	    if (state == "product")
		goStory();
	    else
		goProduct();
	}
	$(".product").on("click", switchState);
	$(".story").on("click", switchState);

	if (localStorage.infview == "story") { 
	    goStory();
	} else {
	    goProduct();
	}
});