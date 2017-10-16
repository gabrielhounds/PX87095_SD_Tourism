$(document).ready(function(){

	var t = TweenMax;

	t.set('#wsBg', {scale:1.2});

	t.to('#wsBg', 10, {scale:1.0, ease:Expo.easeOut});
	t.to('#wsFg', 10, {left:'-=100', top:'-=30', ease:Expo.easeOut, transformOrigin:'bottom left'});



})