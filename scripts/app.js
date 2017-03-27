/*
$(document).ready(function(){     
	$("body").append("<h1>HELLO</h1>");
});
*/

function blinker() {
    $('.blink_me').fadeOut(1500);
    $('.blink_me').fadeIn(1500);
}

setInterval(blinker, 1000); //Runs every second