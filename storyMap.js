$(document).ready(function(){
	$(".storyMapToggle").toggle(
	      function(){
	      	$(".map").css({"background-color":"rgba(255, 255, 255, 1)"});
	      	$(".story").css({"background-color":"rgba(255, 255, 255, 0.6)"});
	      	$(".rsContent img").css({"display":"none"});
	      },
	      function () {
	      	$(".story").css({"background-color":"rgba(255, 255, 255, 1)"});
	      	$(".map").css({"background-color":"rgba(255, 255, 255, 0.6)"});
	      	$(".rsContent img").css({"display":"block"});
	      }
	    );
	   }); 