$(document).ready(function(){
	$(".toggle").toggle(
	      function(){
	      	$(".main p").css({"display":"block"});
	      	$(".toggle").css({"background":"url(_img/buttonRedPlusMinus.png) no-repeat left bottom"});
	      },
	      function () {
	      	$(".main p").css({"display":"none"});
	      	$(".toggle").css({"background":"url(_img/buttonRedPlusMinus.png) no-repeat left top"});
	      }
	    );
	   }); 
	   