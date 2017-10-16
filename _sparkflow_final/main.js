$(function() {
  console.log("ad.preload");
  ad.preload([
  'https://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenMax.min.js', 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js']);
});

$(document).on('adInteraction', function () {
  // If an interaction is detected clear the auto close
  mraid.cancelAutoClose();
});

// Wait for the adReady or adClick event to initialize
$(document).on('adClick', function () {

});

$(document).on('adReady', function () {
  	ad.maxZoom = 1.0;
  	ad.minZoom = 1.0;
  	$('section.portrait').remove();     // removes all portrait scenes
  	$('section').removeClass("landscape");  // prevents the CSS rule to get applied
  	ad.setLoading('SCENE');
	setTimeout( function() { init(); }, 1000);
});

function init() {
  	WebFont.load({
    google: {
      families: ['Lato:900']
    }
  	});

  	mraid.setAutoClose(15 * 1000);

	console.log('init');
	var goToBtnSvg = '<svg version="1.1" class="goToBtnSvg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 120 120" style="enable-background:new 0 0 120 120;" xml:space="preserve"><circle class="redBg" style="fill:#B3292D;opacity:0;" cx="60" cy="60" r="49"/><path class="whiteRing" style="fill:#FFFFFF;" d="M60,110c-27.6,0-50-22.4-50-50s22.4-50,50-50s50,22.4,50,50S87.6,110,60,110z M60,14 c-25.4,0-46,20.6-46,46s20.6,46,46,46s46-20.6,46-46S85.4,14,60,14z"/><g id="txt_goTo"><path id="tx_g" style="fill:#FFFFFF;" d="M33.1,58.3h5.2v6.2c-0.7,0.5-1.5,0.9-2.4,1.2C35,65.8,34.2,66,33.2,66 c-1.2,0-2.3-0.2-3.3-0.6c-1-0.4-1.8-0.9-2.5-1.6c-0.7-0.7-1.2-1.5-1.6-2.4c-0.4-0.9-0.6-1.9-0.6-3c0-1.1,0.2-2.1,0.5-3 c0.4-0.9,0.9-1.7,1.5-2.4c0.7-0.7,1.5-1.2,2.4-1.5c1-0.4,2-0.5,3.2-0.5c0.6,0,1.2,0,1.7,0.1s1,0.2,1.5,0.4c0.4,0.2,0.9,0.4,1.2,0.6 c0.4,0.2,0.7,0.5,1,0.8l-1,1.5c-0.2,0.2-0.4,0.4-0.6,0.4c-0.2,0.1-0.5,0-0.8-0.2c-0.3-0.2-0.5-0.3-0.8-0.4 c-0.2-0.1-0.5-0.2-0.7-0.3s-0.5-0.1-0.8-0.2c-0.3,0-0.6,0-0.9,0c-0.6,0-1.2,0.1-1.7,0.3c-0.5,0.2-0.9,0.5-1.3,0.9 c-0.4,0.4-0.6,0.9-0.8,1.5c-0.2,0.6-0.3,1.2-0.3,1.9c0,0.8,0.1,1.5,0.3,2.1s0.5,1.1,0.9,1.5c0.4,0.4,0.9,0.7,1.4,0.9 s1.1,0.3,1.8,0.3c0.4,0,0.8,0,1.1-0.1s0.7-0.2,1-0.3v-2.2h-1.4c-0.2,0-0.4-0.1-0.5-0.2c-0.1-0.1-0.2-0.3-0.2-0.4V58.3z"/><path id="tx_o" style="fill:#FFFFFF;" d="M55.8,58.5c0,1.1-0.2,2-0.5,2.9c-0.4,0.9-0.9,1.7-1.5,2.4c-0.7,0.7-1.5,1.2-2.4,1.6 c-0.9,0.4-2,0.6-3.1,0.6s-2.2-0.2-3.1-0.6c-0.9-0.4-1.7-0.9-2.4-1.6c-0.7-0.7-1.2-1.5-1.5-2.4c-0.4-0.9-0.5-1.9-0.5-2.9 c0-1.1,0.2-2,0.5-2.9c0.4-0.9,0.9-1.7,1.5-2.4c0.7-0.7,1.5-1.2,2.4-1.6c0.9-0.4,2-0.6,3.1-0.6s2.2,0.2,3.1,0.6 c0.9,0.4,1.7,0.9,2.4,1.6c0.7,0.7,1.2,1.5,1.5,2.4C55.7,56.5,55.8,57.5,55.8,58.5z M52.4,58.5c0-0.7-0.1-1.4-0.3-1.9 c-0.2-0.6-0.5-1.1-0.8-1.5c-0.4-0.4-0.8-0.7-1.3-0.9s-1.1-0.3-1.7-0.3c-0.7,0-1.2,0.1-1.7,0.3c-0.5,0.2-0.9,0.5-1.3,0.9 c-0.4,0.4-0.6,0.9-0.8,1.5c-0.2,0.6-0.3,1.2-0.3,1.9c0,0.7,0.1,1.4,0.3,2c0.2,0.6,0.5,1.1,0.8,1.5c0.3,0.4,0.8,0.7,1.3,0.9 c0.5,0.2,1.1,0.3,1.7,0.3c0.6,0,1.2-0.1,1.7-0.3s0.9-0.5,1.3-0.9c0.4-0.4,0.6-0.9,0.8-1.5C52.3,59.9,52.4,59.2,52.4,58.5z"/><path id="tx_t" style="fill:#FFFFFF;" d="M76.3,53.9h-4.1v11.9h-3.4V53.9h-4.1v-2.7h11.6V53.9z"/><path id="tx_o_2" style="fill:#FFFFFF;" d="M93,58.5c0,1.1-0.2,2-0.5,2.9c-0.4,0.9-0.9,1.7-1.5,2.4s-1.5,1.2-2.4,1.6 c-0.9,0.4-2,0.6-3.1,0.6c-1.1,0-2.2-0.2-3.1-0.6c-0.9-0.4-1.7-0.9-2.4-1.6c-0.7-0.7-1.2-1.5-1.5-2.4c-0.4-0.9-0.5-1.9-0.5-2.9 c0-1.1,0.2-2,0.5-2.9s0.9-1.7,1.5-2.4c0.7-0.7,1.5-1.2,2.4-1.6c0.9-0.4,2-0.6,3.1-0.6c1.1,0,2.2,0.2,3.1,0.6s1.7,0.9,2.4,1.6 c0.7,0.7,1.2,1.5,1.5,2.4C92.8,56.5,93,57.5,93,58.5z M89.5,58.5c0-0.7-0.1-1.4-0.3-1.9s-0.5-1.1-0.8-1.5c-0.3-0.4-0.8-0.7-1.3-0.9 s-1.1-0.3-1.7-0.3c-0.7,0-1.2,0.1-1.7,0.3c-0.5,0.2-0.9,0.5-1.3,0.9c-0.4,0.4-0.6,0.9-0.8,1.5s-0.3,1.2-0.3,1.9 c0,0.7,0.1,1.4,0.3,2c0.2,0.6,0.5,1.1,0.8,1.5c0.3,0.4,0.8,0.7,1.3,0.9c0.5,0.2,1.1,0.3,1.7,0.3c0.6,0,1.2-0.1,1.7-0.3 s0.9-0.5,1.3-0.9c0.3-0.4,0.6-0.9,0.8-1.5C89.4,59.9,89.5,59.2,89.5,58.5z"/></g></svg>';
	var badlandsSvg = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1590 875" style="enable-background:new 0 0 1590 875;" xml:space="preserve" id="badlandsSvg"><g id="bg"><image style="overflow:visible;" width="1590" height="795" xlink:href="badlands.jpg" transform="matrix(1 0 0 1 0 80)"/><image style="overflow:visible;" width="1592" height="80" xlink:href="overlay_header.png" transform="matrix(1 0 0 1 -1 0)"/><g id="circs"><circle id="b3" style="fill:transparent;stroke:#B3292D;stroke-width:4;stroke-miterlimit:10;opacity:0;" cx="1315" cy="322" r="50"/><circle id="b2" style="fill:transparent;stroke:#B3292D;stroke-width:4;stroke-miterlimit:10;opacity:0;" cx="1061" cy="598" r="50"/><circle id="b1" style="fill:transparent;stroke:#B3292D;stroke-width:4;stroke-miterlimit:10;opacity:0;" cx="998" cy="720" r="50"/><circle id="a3" style="fill:transparent;stroke:#B3292D;stroke-width:4;stroke-miterlimit:10;opacity:0;" cx="520" cy="322" r="50"/><circle id="a2" style="fill:transparent;stroke:#B3292D;stroke-width:4;stroke-miterlimit:10;opacity:0;" cx="266" cy="598" r="50"/><circle id="a1" class="a1" style="fill:transparent;stroke:#B3292D;stroke-width:4;stroke-miterlimit:10;opacity:0;" cx="203" cy="720" r="50"/></g></g><g id="interface"><g id="A"><path style="fill:#FFFFFF;" d="M56.2,137.4h-5.8c-0.6,0-1.2-0.2-1.6-0.5c-0.4-0.3-0.7-0.7-0.9-1.2l-1.9-5.6H33.9l-1.9,5.6 c-0.2,0.4-0.5,0.8-0.9,1.1s-0.9,0.5-1.6,0.5h-5.8l12.4-32.1h7.6L56.2,137.4z M44.4,125.2l-3-8.8c-0.2-0.6-0.5-1.2-0.7-2 c-0.2-0.8-0.5-1.6-0.7-2.5c-0.2,0.9-0.5,1.7-0.7,2.5c-0.2,0.8-0.5,1.4-0.7,2l-2.9,8.7H44.4z"/></g><g id="B"><path style="fill:#FFFFFF;" d="M835.2,105.4c2.2,0,4.1,0.2,5.7,0.6s2.8,1,3.8,1.7s1.7,1.7,2.1,2.7c0.4,1.1,0.7,2.3,0.7,3.6 c0,0.7-0.1,1.4-0.3,2.1c-0.2,0.7-0.5,1.3-1,1.9c-0.4,0.6-1,1.1-1.7,1.6c-0.7,0.5-1.5,0.9-2.5,1.3c2.1,0.5,3.7,1.3,4.7,2.5 c1,1.1,1.5,2.6,1.5,4.4c0,1.4-0.3,2.6-0.8,3.8c-0.5,1.2-1.3,2.2-2.3,3.1c-1,0.9-2.3,1.6-3.8,2c-1.5,0.5-3.2,0.7-5.1,0.7h-12.8 v-32.1H835.2z M830.8,110.9v7.9h3.9c0.8,0,1.6-0.1,2.2-0.2c0.7-0.1,1.2-0.3,1.7-0.6s0.8-0.7,1.1-1.2c0.2-0.5,0.4-1.2,0.4-1.9 c0-0.8-0.1-1.4-0.3-1.9c-0.2-0.5-0.5-0.9-0.9-1.2c-0.4-0.3-0.9-0.5-1.5-0.7s-1.3-0.2-2.2-0.2H830.8z M836,131.8 c1,0,1.8-0.1,2.4-0.4s1.1-0.6,1.5-1c0.4-0.4,0.6-0.8,0.7-1.3s0.2-1,0.2-1.5c0-0.6-0.1-1.1-0.2-1.6c-0.2-0.5-0.4-0.9-0.8-1.2 c-0.4-0.3-0.9-0.6-1.5-0.7c-0.6-0.2-1.4-0.3-2.3-0.3h-5.2v8H836z"/></g><g id="score"><g id="score_1"><circle id="circ_1" style="fill:none;stroke:#FFFFFF;stroke-width:5;stroke-miterlimit:10;" cx="1432" cy="118" r="19"/><g id="txt_1"><path style="fill:#FFFEFF;" d="M1438.6,124.8v3.4h-12.4v-3.4h4.2v-11c0-0.3,0-0.6,0-0.8c0-0.3,0-0.6,0-0.9l-2.5,2.1 c-0.2,0.2-0.4,0.3-0.7,0.3s-0.4,0-0.6,0c-0.2,0-0.4-0.1-0.5-0.2c-0.2-0.1-0.3-0.2-0.3-0.3l-1.5-1.9l6.8-5.7h3.8v18.5H1438.6z"/></g><line id="strike_1" style="fill:none;stroke:#BE1E2D;stroke-width:8;stroke-miterlimit:10;opacity:0;" x1="1412" y1="138" x2="1452" y2="98"/></g><g id="score_2"><circle id="circ_2" style="fill:none;stroke:#FFFFFF;stroke-width:5;stroke-miterlimit:10;" cx="1488" cy="118" r="19"/><g id="txt_2"><path style="fill:#FFFEFF;" d="M1493.5,124c0.5,0,0.9,0.1,1.2,0.4c0.3,0.3,0.4,0.6,0.4,1.1v2.7h-15.4v-1.5c0-0.3,0.1-0.6,0.2-0.9 c0.1-0.3,0.3-0.6,0.6-0.9l6.3-6.3c0.5-0.5,1-1.1,1.4-1.5c0.4-0.5,0.7-1,1-1.4c0.3-0.5,0.5-0.9,0.6-1.4s0.2-1,0.2-1.5 c0-0.9-0.2-1.5-0.6-2s-1-0.7-1.9-0.7c-0.7,0-1.3,0.2-1.7,0.5c-0.5,0.4-0.8,0.8-1,1.4c-0.2,0.6-0.5,0.9-0.8,1.1 c-0.3,0.2-0.8,0.2-1.5,0.1l-2.5-0.4c0.2-1.1,0.5-2,0.9-2.8s1-1.5,1.7-2c0.7-0.5,1.4-0.9,2.3-1.2c0.9-0.3,1.8-0.4,2.8-0.4 c1.1,0,2.1,0.2,2.9,0.5s1.6,0.8,2.2,1.3c0.6,0.6,1.1,1.2,1.4,2c0.3,0.8,0.5,1.6,0.5,2.6c0,0.8-0.1,1.5-0.3,2.2 c-0.2,0.7-0.5,1.3-0.9,1.9c-0.4,0.6-0.8,1.2-1.4,1.8c-0.5,0.6-1.1,1.2-1.6,1.7l-4.3,4.4c0.5-0.2,1.1-0.3,1.6-0.4s1-0.1,1.5-0.1 H1493.5z"/></g><line id="strike_2" style="fill:none;stroke:#BE1E2D;stroke-width:8;stroke-miterlimit:10;opacity:0;" x1="1468" y1="138" x2="1508" y2="98"/></g><g id="score_3"><circle id="circ_3" style="fill:none;stroke:#FFFFFF;stroke-width:5;stroke-miterlimit:10;" cx="1546" cy="118" r="19"/><g id="txt_3"><path style="fill:#FFFEFF;" d="M1539.2,112.6c0.2-1.1,0.5-2,0.9-2.8s1-1.5,1.7-2c0.7-0.5,1.4-0.9,2.3-1.2 c0.9-0.3,1.8-0.4,2.8-0.4c1.1,0,2,0.2,2.9,0.5c0.8,0.3,1.5,0.7,2.1,1.2c0.6,0.5,1,1.1,1.3,1.8c0.3,0.7,0.5,1.4,0.5,2.2 c0,0.7-0.1,1.3-0.2,1.8s-0.3,1-0.6,1.4c-0.3,0.4-0.6,0.7-1,1c-0.4,0.3-0.9,0.5-1.4,0.7c2.4,0.9,3.6,2.5,3.6,5 c0,1.2-0.2,2.2-0.6,3c-0.4,0.9-1,1.6-1.7,2.1c-0.7,0.6-1.5,1-2.5,1.3s-1.9,0.4-2.9,0.4c-1,0-2-0.1-2.8-0.3 c-0.8-0.2-1.5-0.6-2.2-1s-1.2-1.1-1.7-1.8c-0.5-0.7-0.9-1.6-1.2-2.6l2.1-0.8c0.5-0.2,1-0.3,1.5-0.2c0.5,0.1,0.8,0.3,1,0.7 c0.5,0.8,0.9,1.4,1.4,1.8c0.5,0.4,1.1,0.6,1.8,0.6c0.5,0,1-0.1,1.4-0.3s0.7-0.4,1-0.7c0.3-0.3,0.4-0.6,0.6-0.9 c0.1-0.3,0.2-0.7,0.2-1.1c0-0.5,0-0.9-0.1-1.3s-0.2-0.7-0.5-1c-0.3-0.3-0.8-0.5-1.4-0.6c-0.6-0.1-1.4-0.2-2.5-0.2v-3.2 c0.9,0,1.6-0.1,2.2-0.2c0.6-0.1,1-0.3,1.3-0.6c0.3-0.2,0.5-0.5,0.6-0.9c0.1-0.4,0.1-0.7,0.1-1.2c0-0.9-0.2-1.5-0.6-2 s-1-0.7-1.9-0.7c-0.7,0-1.3,0.2-1.7,0.5c-0.5,0.4-0.8,0.8-1,1.4c-0.2,0.6-0.5,0.9-0.8,1.1c-0.3,0.2-0.8,0.2-1.5,0.1L1539.2,112.6 z"/></g><line id="strike_3" style="fill:none;stroke:#BE1E2D;stroke-width:8;stroke-miterlimit:10;opacity:0;" x1="1526" y1="138" x2="1566" y2="98"/></g></g><g id="frame"><rect x="1" y="81" style="fill:none;stroke:#FFFFFF;stroke-width:4;stroke-miterlimit:10;" width="1588" height="793"/><line style="fill:none;stroke:#FFFFFF;stroke-width:2;stroke-miterlimit:10;" x1="795" y1="81" x2="795" y2="874"/></g></g></svg>';
	var deadwoodSvg = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"viewBox="0 0 1590 875" style="enable-background:new 0 0 1590 875;" xml:space="preserve" id="deadwoodSvg"><g id="bg"><image style="overflow:visible;" width="1590" height="795" xlink:href="deadwood.jpg" transform="matrix(1 0 0 1 1 81)"/><image style="overflow:visible;" width="1592" height="80" xlink:href="overlay_header.png" transform="matrix(1 0 0 1 -1 0)"/><g id="circs"><circle id="b3" style="fill:transparent;stroke:#B3292D;stroke-width:4;stroke-miterlimit:10;opacity:0;" cx="1390" cy="325" r="50"/><circle id="b2" style="fill:transparent;stroke:#B3292D;stroke-width:4;stroke-miterlimit:10;opacity:0;" cx="1174" cy="389" r="50"/><circle id="b1" style="fill:transparent;stroke:#B3292D;stroke-width:4;stroke-miterlimit:10;opacity:0;" cx="876" cy="446" r="50"/><circle id="a3" style="fill:transparent;stroke:#B3292D;stroke-width:4;stroke-miterlimit:10;opacity:0;" cx="595" cy="325" r="50"/><circle id="a2" style="fill:transparent;stroke:#B3292D;stroke-width:4;stroke-miterlimit:10;opacity:0;" cx="379" cy="389" r="50"/><circle id="a1" style="fill:transparent;stroke:#B3292D;stroke-width:4;stroke-miterlimit:10;opacity:0;" cx="81" cy="446" r="50"/></g></g><g id="interface"><g id="A"><path style="fill:#FFFFFF;" d="M56.2,137.4h-5.8c-0.6,0-1.2-0.2-1.6-0.5c-0.4-0.3-0.7-0.7-0.9-1.2l-1.9-5.6H33.9l-1.9,5.6 c-0.2,0.4-0.5,0.8-0.9,1.1s-0.9,0.5-1.6,0.5h-5.8l12.4-32.1h7.6L56.2,137.4z M44.4,125.2l-3-8.8c-0.2-0.6-0.5-1.2-0.7-2 c-0.2-0.8-0.5-1.6-0.7-2.5c-0.2,0.9-0.5,1.7-0.7,2.5c-0.2,0.8-0.5,1.4-0.7,2l-2.9,8.7H44.4z"/></g><g id="B"><path style="fill:#FFFFFF;" d="M835.2,105.4c2.2,0,4.1,0.2,5.7,0.6s2.8,1,3.8,1.7s1.7,1.7,2.1,2.7c0.4,1.1,0.7,2.3,0.7,3.6 c0,0.7-0.1,1.4-0.3,2.1c-0.2,0.7-0.5,1.3-1,1.9c-0.4,0.6-1,1.1-1.7,1.6c-0.7,0.5-1.5,0.9-2.5,1.3c2.1,0.5,3.7,1.3,4.7,2.5 c1,1.1,1.5,2.6,1.5,4.4c0,1.4-0.3,2.6-0.8,3.8c-0.5,1.2-1.3,2.2-2.3,3.1c-1,0.9-2.3,1.6-3.8,2c-1.5,0.5-3.2,0.7-5.1,0.7h-12.8 v-32.1H835.2z M830.8,110.9v7.9h3.9c0.8,0,1.6-0.1,2.2-0.2c0.7-0.1,1.2-0.3,1.7-0.6s0.8-0.7,1.1-1.2c0.2-0.5,0.4-1.2,0.4-1.9 c0-0.8-0.1-1.4-0.3-1.9c-0.2-0.5-0.5-0.9-0.9-1.2c-0.4-0.3-0.9-0.5-1.5-0.7s-1.3-0.2-2.2-0.2H830.8z M836,131.8 c1,0,1.8-0.1,2.4-0.4s1.1-0.6,1.5-1c0.4-0.4,0.6-0.8,0.7-1.3s0.2-1,0.2-1.5c0-0.6-0.1-1.1-0.2-1.6c-0.2-0.5-0.4-0.9-0.8-1.2 c-0.4-0.3-0.9-0.6-1.5-0.7c-0.6-0.2-1.4-0.3-2.3-0.3h-5.2v8H836z"/></g><g id="score"><g id="score_1"><circle id="circ_1" style="fill:none;stroke:#FFFFFF;stroke-width:5;stroke-miterlimit:10;" cx="1432" cy="118" r="19"/><g id="txt_1"><path style="fill:#FFFEFF;" d="M1438.6,124.8v3.4h-12.4v-3.4h4.2v-11c0-0.3,0-0.6,0-0.8c0-0.3,0-0.6,0-0.9l-2.5,2.1 c-0.2,0.2-0.4,0.3-0.7,0.3s-0.4,0-0.6,0c-0.2,0-0.4-0.1-0.5-0.2c-0.2-0.1-0.3-0.2-0.3-0.3l-1.5-1.9l6.8-5.7h3.8v18.5H1438.6z"/></g><line id="strike_1" style="fill:none;stroke:#BE1E2D;stroke-width:8;stroke-miterlimit:10;opacity:0;" x1="1412" y1="138" x2="1452" y2="98"/></g><g id="score_2"><circle id="circ_2" style="fill:none;stroke:#FFFFFF;stroke-width:5;stroke-miterlimit:10;" cx="1488" cy="118" r="19"/><g id="txt_2"><path style="fill:#FFFEFF;" d="M1493.5,124c0.5,0,0.9,0.1,1.2,0.4c0.3,0.3,0.4,0.6,0.4,1.1v2.7h-15.4v-1.5c0-0.3,0.1-0.6,0.2-0.9 c0.1-0.3,0.3-0.6,0.6-0.9l6.3-6.3c0.5-0.5,1-1.1,1.4-1.5c0.4-0.5,0.7-1,1-1.4c0.3-0.5,0.5-0.9,0.6-1.4s0.2-1,0.2-1.5 c0-0.9-0.2-1.5-0.6-2s-1-0.7-1.9-0.7c-0.7,0-1.3,0.2-1.7,0.5c-0.5,0.4-0.8,0.8-1,1.4c-0.2,0.6-0.5,0.9-0.8,1.1 c-0.3,0.2-0.8,0.2-1.5,0.1l-2.5-0.4c0.2-1.1,0.5-2,0.9-2.8s1-1.5,1.7-2c0.7-0.5,1.4-0.9,2.3-1.2c0.9-0.3,1.8-0.4,2.8-0.4 c1.1,0,2.1,0.2,2.9,0.5s1.6,0.8,2.2,1.3c0.6,0.6,1.1,1.2,1.4,2c0.3,0.8,0.5,1.6,0.5,2.6c0,0.8-0.1,1.5-0.3,2.2 c-0.2,0.7-0.5,1.3-0.9,1.9c-0.4,0.6-0.8,1.2-1.4,1.8c-0.5,0.6-1.1,1.2-1.6,1.7l-4.3,4.4c0.5-0.2,1.1-0.3,1.6-0.4s1-0.1,1.5-0.1 H1493.5z"/></g><line id="strike_2" style="fill:none;stroke:#BE1E2D;stroke-width:8;stroke-miterlimit:10;opacity:0;" x1="1468" y1="138" x2="1508" y2="98"/></g><g id="score_3"><circle id="circ_3" style="fill:none;stroke:#FFFFFF;stroke-width:5;stroke-miterlimit:10;" cx="1546" cy="118" r="19"/><g id="txt_3"><path style="fill:#FFFEFF;" d="M1539.2,112.6c0.2-1.1,0.5-2,0.9-2.8s1-1.5,1.7-2c0.7-0.5,1.4-0.9,2.3-1.2 c0.9-0.3,1.8-0.4,2.8-0.4c1.1,0,2,0.2,2.9,0.5c0.8,0.3,1.5,0.7,2.1,1.2c0.6,0.5,1,1.1,1.3,1.8c0.3,0.7,0.5,1.4,0.5,2.2 c0,0.7-0.1,1.3-0.2,1.8s-0.3,1-0.6,1.4c-0.3,0.4-0.6,0.7-1,1c-0.4,0.3-0.9,0.5-1.4,0.7c2.4,0.9,3.6,2.5,3.6,5 c0,1.2-0.2,2.2-0.6,3c-0.4,0.9-1,1.6-1.7,2.1c-0.7,0.6-1.5,1-2.5,1.3s-1.9,0.4-2.9,0.4c-1,0-2-0.1-2.8-0.3 c-0.8-0.2-1.5-0.6-2.2-1s-1.2-1.1-1.7-1.8c-0.5-0.7-0.9-1.6-1.2-2.6l2.1-0.8c0.5-0.2,1-0.3,1.5-0.2c0.5,0.1,0.8,0.3,1,0.7 c0.5,0.8,0.9,1.4,1.4,1.8c0.5,0.4,1.1,0.6,1.8,0.6c0.5,0,1-0.1,1.4-0.3s0.7-0.4,1-0.7c0.3-0.3,0.4-0.6,0.6-0.9 c0.1-0.3,0.2-0.7,0.2-1.1c0-0.5,0-0.9-0.1-1.3s-0.2-0.7-0.5-1c-0.3-0.3-0.8-0.5-1.4-0.6c-0.6-0.1-1.4-0.2-2.5-0.2v-3.2 c0.9,0,1.6-0.1,2.2-0.2c0.6-0.1,1-0.3,1.3-0.6c0.3-0.2,0.5-0.5,0.6-0.9c0.1-0.4,0.1-0.7,0.1-1.2c0-0.9-0.2-1.5-0.6-2 s-1-0.7-1.9-0.7c-0.7,0-1.3,0.2-1.7,0.5c-0.5,0.4-0.8,0.8-1,1.4c-0.2,0.6-0.5,0.9-0.8,1.1c-0.3,0.2-0.8,0.2-1.5,0.1L1539.2,112.6 z"/></g><line id="strike_3" style="fill:none;stroke:#BE1E2D;stroke-width:8;stroke-miterlimit:10;opacity:0;" x1="1526" y1="138" x2="1566" y2="98"/></g></g><g id="frame"><rect x="1" y="81" style="fill:none;stroke:#FFFFFF;stroke-width:4;stroke-miterlimit:10;" width="1588" height="793"/><line style="fill:none;stroke:#FFFFFF;stroke-width:2;stroke-miterlimit:10;" x1="795" y1="81" x2="795" y2="874"/></g></g></svg>';
	var rushmoreSvg = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1590 875" style="enable-background:new 0 0 1590 875;" xml:space="preserve" id="rushmoreSvg"><g id="bg"><image style="overflow:visible;" width="1590" height="795" xlink:href="rushmore.jpg" transform="matrix(1 0 0 1 0 80)"/><image style="overflow:visible;" width="1592" height="80" xlink:href="overlay_header.png" transform="matrix(1 0 0 1 -1 0)"/><g id="circs"><circle id="b3" style="fill:transparent;stroke:#B3292D;stroke-width:4;stroke-miterlimit:10;opacity:0;" cx="1532" cy="748" r="50"/><circle id="b2" style="fill:transparent;stroke:#B3292D;stroke-width:4;stroke-miterlimit:10;opacity:0;" cx="1262" cy="656" r="50"/><circle id="b1" style="fill:transparent;stroke:#B3292D;stroke-width:4;stroke-miterlimit:10;opacity:0;" cx="900" cy="182" r="50"/><circle id="a3" style="fill:transparent;stroke:#B3292D;stroke-width:4;stroke-miterlimit:10;opacity:0;" cx="737" cy="748" r="50"/><circle id="a2" style="fill:transparent;stroke:#B3292D;stroke-width:4;stroke-miterlimit:10;opacity:0;" cx="467" cy="656" r="50"/><circle id="a1" style="fill:transparent;stroke:#B3292D;stroke-width:4;stroke-miterlimit:10;opacity:0;" cx="105" cy="182" r="50"/></g></g><g id="interface"><g id="A"><path style="fill:#FFFFFF;" d="M56.2,137.4h-5.8c-0.6,0-1.2-0.2-1.6-0.5c-0.4-0.3-0.7-0.7-0.9-1.2l-1.9-5.6H33.9l-1.9,5.6 c-0.2,0.4-0.5,0.8-0.9,1.1s-0.9,0.5-1.6,0.5h-5.8l12.4-32.1h7.6L56.2,137.4z M44.4,125.2l-3-8.8c-0.2-0.6-0.5-1.2-0.7-2 c-0.2-0.8-0.5-1.6-0.7-2.5c-0.2,0.9-0.5,1.7-0.7,2.5c-0.2,0.8-0.5,1.4-0.7,2l-2.9,8.7H44.4z"/></g><g id="B"><path style="fill:#FFFFFF;" d="M835.2,105.4c2.2,0,4.1,0.2,5.7,0.6s2.8,1,3.8,1.7s1.7,1.7,2.1,2.7c0.4,1.1,0.7,2.3,0.7,3.6 c0,0.7-0.1,1.4-0.3,2.1c-0.2,0.7-0.5,1.3-1,1.9c-0.4,0.6-1,1.1-1.7,1.6c-0.7,0.5-1.5,0.9-2.5,1.3c2.1,0.5,3.7,1.3,4.7,2.5 c1,1.1,1.5,2.6,1.5,4.4c0,1.4-0.3,2.6-0.8,3.8c-0.5,1.2-1.3,2.2-2.3,3.1c-1,0.9-2.3,1.6-3.8,2c-1.5,0.5-3.2,0.7-5.1,0.7h-12.8 v-32.1H835.2z M830.8,110.9v7.9h3.9c0.8,0,1.6-0.1,2.2-0.2c0.7-0.1,1.2-0.3,1.7-0.6s0.8-0.7,1.1-1.2c0.2-0.5,0.4-1.2,0.4-1.9 c0-0.8-0.1-1.4-0.3-1.9c-0.2-0.5-0.5-0.9-0.9-1.2c-0.4-0.3-0.9-0.5-1.5-0.7s-1.3-0.2-2.2-0.2H830.8z M836,131.8 c1,0,1.8-0.1,2.4-0.4s1.1-0.6,1.5-1c0.4-0.4,0.6-0.8,0.7-1.3s0.2-1,0.2-1.5c0-0.6-0.1-1.1-0.2-1.6c-0.2-0.5-0.4-0.9-0.8-1.2 c-0.4-0.3-0.9-0.6-1.5-0.7c-0.6-0.2-1.4-0.3-2.3-0.3h-5.2v8H836z"/></g><g id="score"><g id="score_1"><circle id="circ_1" style="fill:none;stroke:#FFFFFF;stroke-width:5;stroke-miterlimit:10;" cx="1432" cy="118" r="19"/><g id="txt_1"><path style="fill:#FFFEFF;" d="M1438.6,124.8v3.4h-12.4v-3.4h4.2v-11c0-0.3,0-0.6,0-0.8c0-0.3,0-0.6,0-0.9l-2.5,2.1 c-0.2,0.2-0.4,0.3-0.7,0.3s-0.4,0-0.6,0c-0.2,0-0.4-0.1-0.5-0.2c-0.2-0.1-0.3-0.2-0.3-0.3l-1.5-1.9l6.8-5.7h3.8v18.5H1438.6z"/></g><line id="strike_1" style="fill:none;stroke:#BE1E2D;stroke-width:8;stroke-miterlimit:10;opacity:0;" x1="1412" y1="138" x2="1452" y2="98"/></g><g id="score_2"><circle id="circ_2" style="fill:none;stroke:#FFFFFF;stroke-width:5;stroke-miterlimit:10;" cx="1488" cy="118" r="19"/><g id="txt_2"><path style="fill:#FFFEFF;" d="M1493.5,124c0.5,0,0.9,0.1,1.2,0.4c0.3,0.3,0.4,0.6,0.4,1.1v2.7h-15.4v-1.5c0-0.3,0.1-0.6,0.2-0.9 c0.1-0.3,0.3-0.6,0.6-0.9l6.3-6.3c0.5-0.5,1-1.1,1.4-1.5c0.4-0.5,0.7-1,1-1.4c0.3-0.5,0.5-0.9,0.6-1.4s0.2-1,0.2-1.5 c0-0.9-0.2-1.5-0.6-2s-1-0.7-1.9-0.7c-0.7,0-1.3,0.2-1.7,0.5c-0.5,0.4-0.8,0.8-1,1.4c-0.2,0.6-0.5,0.9-0.8,1.1 c-0.3,0.2-0.8,0.2-1.5,0.1l-2.5-0.4c0.2-1.1,0.5-2,0.9-2.8s1-1.5,1.7-2c0.7-0.5,1.4-0.9,2.3-1.2c0.9-0.3,1.8-0.4,2.8-0.4 c1.1,0,2.1,0.2,2.9,0.5s1.6,0.8,2.2,1.3c0.6,0.6,1.1,1.2,1.4,2c0.3,0.8,0.5,1.6,0.5,2.6c0,0.8-0.1,1.5-0.3,2.2 c-0.2,0.7-0.5,1.3-0.9,1.9c-0.4,0.6-0.8,1.2-1.4,1.8c-0.5,0.6-1.1,1.2-1.6,1.7l-4.3,4.4c0.5-0.2,1.1-0.3,1.6-0.4s1-0.1,1.5-0.1 H1493.5z"/></g><line id="strike_2" style="fill:none;stroke:#BE1E2D;stroke-width:8;stroke-miterlimit:10;opacity:0;" x1="1468" y1="138" x2="1508" y2="98"/></g><g id="score_3"><circle id="circ_3" style="fill:none;stroke:#FFFFFF;stroke-width:5;stroke-miterlimit:10;" cx="1546" cy="118" r="19"/><g id="txt_3"><path style="fill:#FFFEFF;" d="M1539.2,112.6c0.2-1.1,0.5-2,0.9-2.8s1-1.5,1.7-2c0.7-0.5,1.4-0.9,2.3-1.2 c0.9-0.3,1.8-0.4,2.8-0.4c1.1,0,2,0.2,2.9,0.5c0.8,0.3,1.5,0.7,2.1,1.2c0.6,0.5,1,1.1,1.3,1.8c0.3,0.7,0.5,1.4,0.5,2.2 c0,0.7-0.1,1.3-0.2,1.8s-0.3,1-0.6,1.4c-0.3,0.4-0.6,0.7-1,1c-0.4,0.3-0.9,0.5-1.4,0.7c2.4,0.9,3.6,2.5,3.6,5 c0,1.2-0.2,2.2-0.6,3c-0.4,0.9-1,1.6-1.7,2.1c-0.7,0.6-1.5,1-2.5,1.3s-1.9,0.4-2.9,0.4c-1,0-2-0.1-2.8-0.3 c-0.8-0.2-1.5-0.6-2.2-1s-1.2-1.1-1.7-1.8c-0.5-0.7-0.9-1.6-1.2-2.6l2.1-0.8c0.5-0.2,1-0.3,1.5-0.2c0.5,0.1,0.8,0.3,1,0.7 c0.5,0.8,0.9,1.4,1.4,1.8c0.5,0.4,1.1,0.6,1.8,0.6c0.5,0,1-0.1,1.4-0.3s0.7-0.4,1-0.7c0.3-0.3,0.4-0.6,0.6-0.9 c0.1-0.3,0.2-0.7,0.2-1.1c0-0.5,0-0.9-0.1-1.3s-0.2-0.7-0.5-1c-0.3-0.3-0.8-0.5-1.4-0.6c-0.6-0.1-1.4-0.2-2.5-0.2v-3.2 c0.9,0,1.6-0.1,2.2-0.2c0.6-0.1,1-0.3,1.3-0.6c0.3-0.2,0.5-0.5,0.6-0.9c0.1-0.4,0.1-0.7,0.1-1.2c0-0.9-0.2-1.5-0.6-2 s-1-0.7-1.9-0.7c-0.7,0-1.3,0.2-1.7,0.5c-0.5,0.4-0.8,0.8-1,1.4c-0.2,0.6-0.5,0.9-0.8,1.1c-0.3,0.2-0.8,0.2-1.5,0.1L1539.2,112.6 z"/></g><line id="strike_3" style="fill:none;stroke:#BE1E2D;stroke-width:8;stroke-miterlimit:10;opacity:0;" x1="1526" y1="138" x2="1566" y2="98"/></g></g><g id="frame"><rect x="1" y="81" style="fill:none;stroke:#FFFFFF;stroke-width:4;stroke-miterlimit:10;" width="1588" height="793"/><line style="fill:none;stroke:#FFFFFF;stroke-width:2;stroke-miterlimit:10;" x1="795" y1="81" x2="795" y2="874"/></g></g></svg>';
	var cspSvg = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1590 875" style="enable-background:new 0 0 1590 875;" xml:space="preserve" id="cspSvg"><g id="bg"><image style="overflow:visible;" width="1590" height="795" xlink:href="csp.jpg" transform="matrix(1 0 0 1 0 80)"/><image style="overflow:visible;" width="1592" height="80" xlink:href="overlay_header.png" transform="matrix(1 0 0 1 -1 0)"/><g id="circs"><circle id="b3" style="fill:transparent;stroke:#B3292D;stroke-width:4;stroke-miterlimit:10;opacity:0;" cx="1299" cy="645" r="50"/><circle id="b2" style="fill:transparent;stroke:#B3292D;stroke-width:4;stroke-miterlimit:10;opacity:0;" cx="1199" cy="545" r="50"/><circle id="b1" style="fill:transparent;stroke:#B3292D;stroke-width:4;stroke-miterlimit:10;opacity:0;" cx="990" cy="195" r="50"/><circle id="a3" style="fill:transparent;stroke:#B3292D;stroke-width:4;stroke-miterlimit:10;opacity:0;" cx="504" cy="645" r="50"/><circle id="a2" style="fill:transparent;stroke:#B3292D;stroke-width:4;stroke-miterlimit:10;opacity:0;" cx="404" cy="545" r="50"/><circle id="a1" style="fill:transparent;stroke:#B3292D;stroke-width:4;stroke-miterlimit:10;opacity:0;" cx="195" cy="195" r="50"/></g></g><g id="interface"><g id="A"><path style="fill:#FFFFFF;" d="M56.2,137.4h-5.8c-0.6,0-1.2-0.2-1.6-0.5c-0.4-0.3-0.7-0.7-0.9-1.2l-1.9-5.6H33.9l-1.9,5.6 c-0.2,0.4-0.5,0.8-0.9,1.1s-0.9,0.5-1.6,0.5h-5.8l12.4-32.1h7.6L56.2,137.4z M44.4,125.2l-3-8.8c-0.2-0.6-0.5-1.2-0.7-2 c-0.2-0.8-0.5-1.6-0.7-2.5c-0.2,0.9-0.5,1.7-0.7,2.5c-0.2,0.8-0.5,1.4-0.7,2l-2.9,8.7H44.4z"/></g><g id="B"><path style="fill:#FFFFFF;" d="M835.2,105.4c2.2,0,4.1,0.2,5.7,0.6s2.8,1,3.8,1.7s1.7,1.7,2.1,2.7c0.4,1.1,0.7,2.3,0.7,3.6 c0,0.7-0.1,1.4-0.3,2.1c-0.2,0.7-0.5,1.3-1,1.9c-0.4,0.6-1,1.1-1.7,1.6c-0.7,0.5-1.5,0.9-2.5,1.3c2.1,0.5,3.7,1.3,4.7,2.5 c1,1.1,1.5,2.6,1.5,4.4c0,1.4-0.3,2.6-0.8,3.8c-0.5,1.2-1.3,2.2-2.3,3.1c-1,0.9-2.3,1.6-3.8,2c-1.5,0.5-3.2,0.7-5.1,0.7h-12.8 v-32.1H835.2z M830.8,110.9v7.9h3.9c0.8,0,1.6-0.1,2.2-0.2c0.7-0.1,1.2-0.3,1.7-0.6s0.8-0.7,1.1-1.2c0.2-0.5,0.4-1.2,0.4-1.9 c0-0.8-0.1-1.4-0.3-1.9c-0.2-0.5-0.5-0.9-0.9-1.2c-0.4-0.3-0.9-0.5-1.5-0.7s-1.3-0.2-2.2-0.2H830.8z M836,131.8 c1,0,1.8-0.1,2.4-0.4s1.1-0.6,1.5-1c0.4-0.4,0.6-0.8,0.7-1.3s0.2-1,0.2-1.5c0-0.6-0.1-1.1-0.2-1.6c-0.2-0.5-0.4-0.9-0.8-1.2 c-0.4-0.3-0.9-0.6-1.5-0.7c-0.6-0.2-1.4-0.3-2.3-0.3h-5.2v8H836z"/></g><g id="score"><g id="score_1"><circle id="circ_1" style="fill:none;stroke:#FFFFFF;stroke-width:5;stroke-miterlimit:10;" cx="1432" cy="118" r="19"/><g id="txt_1"><path style="fill:#FFFEFF;" d="M1438.6,124.8v3.4h-12.4v-3.4h4.2v-11c0-0.3,0-0.6,0-0.8c0-0.3,0-0.6,0-0.9l-2.5,2.1 c-0.2,0.2-0.4,0.3-0.7,0.3s-0.4,0-0.6,0c-0.2,0-0.4-0.1-0.5-0.2c-0.2-0.1-0.3-0.2-0.3-0.3l-1.5-1.9l6.8-5.7h3.8v18.5H1438.6z"/></g><line id="strike_1" style="fill:none;stroke:#BE1E2D;stroke-width:8;stroke-miterlimit:10;opacity:0;" x1="1412" y1="138" x2="1452" y2="98"/></g><g id="score_2"><circle id="circ_2" style="fill:none;stroke:#FFFFFF;stroke-width:5;stroke-miterlimit:10;" cx="1488" cy="118" r="19"/><g id="txt_2"><path style="fill:#FFFEFF;" d="M1493.5,124c0.5,0,0.9,0.1,1.2,0.4c0.3,0.3,0.4,0.6,0.4,1.1v2.7h-15.4v-1.5c0-0.3,0.1-0.6,0.2-0.9 c0.1-0.3,0.3-0.6,0.6-0.9l6.3-6.3c0.5-0.5,1-1.1,1.4-1.5c0.4-0.5,0.7-1,1-1.4c0.3-0.5,0.5-0.9,0.6-1.4s0.2-1,0.2-1.5 c0-0.9-0.2-1.5-0.6-2s-1-0.7-1.9-0.7c-0.7,0-1.3,0.2-1.7,0.5c-0.5,0.4-0.8,0.8-1,1.4c-0.2,0.6-0.5,0.9-0.8,1.1 c-0.3,0.2-0.8,0.2-1.5,0.1l-2.5-0.4c0.2-1.1,0.5-2,0.9-2.8s1-1.5,1.7-2c0.7-0.5,1.4-0.9,2.3-1.2c0.9-0.3,1.8-0.4,2.8-0.4 c1.1,0,2.1,0.2,2.9,0.5s1.6,0.8,2.2,1.3c0.6,0.6,1.1,1.2,1.4,2c0.3,0.8,0.5,1.6,0.5,2.6c0,0.8-0.1,1.5-0.3,2.2 c-0.2,0.7-0.5,1.3-0.9,1.9c-0.4,0.6-0.8,1.2-1.4,1.8c-0.5,0.6-1.1,1.2-1.6,1.7l-4.3,4.4c0.5-0.2,1.1-0.3,1.6-0.4s1-0.1,1.5-0.1 H1493.5z"/></g><line id="strike_2" style="fill:none;stroke:#BE1E2D;stroke-width:8;stroke-miterlimit:10;opacity:0;" x1="1468" y1="138" x2="1508" y2="98"/></g><g id="score_3"><circle id="circ_3" style="fill:none;stroke:#FFFFFF;stroke-width:5;stroke-miterlimit:10;" cx="1546" cy="118" r="19"/><g id="txt_3"><path style="fill:#FFFEFF;" d="M1539.2,112.6c0.2-1.1,0.5-2,0.9-2.8s1-1.5,1.7-2c0.7-0.5,1.4-0.9,2.3-1.2 c0.9-0.3,1.8-0.4,2.8-0.4c1.1,0,2,0.2,2.9,0.5c0.8,0.3,1.5,0.7,2.1,1.2c0.6,0.5,1,1.1,1.3,1.8c0.3,0.7,0.5,1.4,0.5,2.2 c0,0.7-0.1,1.3-0.2,1.8s-0.3,1-0.6,1.4c-0.3,0.4-0.6,0.7-1,1c-0.4,0.3-0.9,0.5-1.4,0.7c2.4,0.9,3.6,2.5,3.6,5 c0,1.2-0.2,2.2-0.6,3c-0.4,0.9-1,1.6-1.7,2.1c-0.7,0.6-1.5,1-2.5,1.3s-1.9,0.4-2.9,0.4c-1,0-2-0.1-2.8-0.3 c-0.8-0.2-1.5-0.6-2.2-1s-1.2-1.1-1.7-1.8c-0.5-0.7-0.9-1.6-1.2-2.6l2.1-0.8c0.5-0.2,1-0.3,1.5-0.2c0.5,0.1,0.8,0.3,1,0.7 c0.5,0.8,0.9,1.4,1.4,1.8c0.5,0.4,1.1,0.6,1.8,0.6c0.5,0,1-0.1,1.4-0.3s0.7-0.4,1-0.7c0.3-0.3,0.4-0.6,0.6-0.9 c0.1-0.3,0.2-0.7,0.2-1.1c0-0.5,0-0.9-0.1-1.3s-0.2-0.7-0.5-1c-0.3-0.3-0.8-0.5-1.4-0.6c-0.6-0.1-1.4-0.2-2.5-0.2v-3.2 c0.9,0,1.6-0.1,2.2-0.2c0.6-0.1,1-0.3,1.3-0.6c0.3-0.2,0.5-0.5,0.6-0.9c0.1-0.4,0.1-0.7,0.1-1.2c0-0.9-0.2-1.5-0.6-2 s-1-0.7-1.9-0.7c-0.7,0-1.3,0.2-1.7,0.5c-0.5,0.4-0.8,0.8-1,1.4c-0.2,0.6-0.5,0.9-0.8,1.1c-0.3,0.2-0.8,0.2-1.5,0.1L1539.2,112.6 z"/></g><line id="strike_3" style="fill:none;stroke:#BE1E2D;stroke-width:8;stroke-miterlimit:10;opacity:0;" x1="1526" y1="138" x2="1566" y2="98"/></g></g><g id="frame"><rect x="1" y="81" style="fill:none;stroke:#FFFFFF;stroke-width:4;stroke-miterlimit:10;" width="1588" height="793"/><line style="fill:none;stroke:#FFFFFF;stroke-width:2;stroke-miterlimit:10;" x1="795" y1="81" x2="795" y2="874"/></g></g></svg>';
	var blackhillsSvg = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1590 875" style="enable-background:new 0 0 1590 875;" xml:space="preserve" id="blackhillsSvg"><g id="bg"><image style="overflow:visible;" width="1590" height="795" xlink:href="blackhills.jpg" transform="matrix(1 0 0 1 0 80)"/><image style="overflow:visible;" width="1592" height="80" xlink:href="overlay_header.png" transform="matrix(1 0 0 1 -1 0)"/><g id="circs"><circle id="b3" style="fill:transparent;stroke:#B3292D;stroke-width:4;stroke-miterlimit:10;opacity:0;" cx="1081" cy="612" r="100"/><circle id="b2" style="fill:transparent;stroke:#B3292D;stroke-width:4;stroke-miterlimit:10;opacity:0;" cx="1324" cy="242" r="50"/><circle id="b1" style="fill:transparent;stroke:#B3292D;stroke-width:4;stroke-miterlimit:10;opacity:0;" cx="928" cy="228" r="50"/><circle id="a3" style="fill:transparent;stroke:#B3292D;stroke-width:4;stroke-miterlimit:10;opacity:0;" cx="286" cy="612" r="100"/><circle id="a2" style="fill:transparent;stroke:#B3292D;stroke-width:4;stroke-miterlimit:10;opacity:0;" cx="529" cy="242" r="50"/><circle id="a1" style="fill:transparent;stroke:#B3292D;stroke-width:4;stroke-miterlimit:10;opacity:0;" cx="133" cy="228" r="50"/></g></g><g id="interface"><g id="A"><path style="fill:#FFFFFF;" d="M56.2,137.4h-5.8c-0.6,0-1.2-0.2-1.6-0.5c-0.4-0.3-0.7-0.7-0.9-1.2l-1.9-5.6H33.9l-1.9,5.6 c-0.2,0.4-0.5,0.8-0.9,1.1s-0.9,0.5-1.6,0.5h-5.8l12.4-32.1h7.6L56.2,137.4z M44.4,125.2l-3-8.8c-0.2-0.6-0.5-1.2-0.7-2 c-0.2-0.8-0.5-1.6-0.7-2.5c-0.2,0.9-0.5,1.7-0.7,2.5c-0.2,0.8-0.5,1.4-0.7,2l-2.9,8.7H44.4z"/></g><g id="B"><path style="fill:#FFFFFF;" d="M835.2,105.4c2.2,0,4.1,0.2,5.7,0.6s2.8,1,3.8,1.7s1.7,1.7,2.1,2.7c0.4,1.1,0.7,2.3,0.7,3.6 c0,0.7-0.1,1.4-0.3,2.1c-0.2,0.7-0.5,1.3-1,1.9c-0.4,0.6-1,1.1-1.7,1.6c-0.7,0.5-1.5,0.9-2.5,1.3c2.1,0.5,3.7,1.3,4.7,2.5 c1,1.1,1.5,2.6,1.5,4.4c0,1.4-0.3,2.6-0.8,3.8c-0.5,1.2-1.3,2.2-2.3,3.1c-1,0.9-2.3,1.6-3.8,2c-1.5,0.5-3.2,0.7-5.1,0.7h-12.8 v-32.1H835.2z M830.8,110.9v7.9h3.9c0.8,0,1.6-0.1,2.2-0.2c0.7-0.1,1.2-0.3,1.7-0.6s0.8-0.7,1.1-1.2c0.2-0.5,0.4-1.2,0.4-1.9 c0-0.8-0.1-1.4-0.3-1.9c-0.2-0.5-0.5-0.9-0.9-1.2c-0.4-0.3-0.9-0.5-1.5-0.7s-1.3-0.2-2.2-0.2H830.8z M836,131.8 c1,0,1.8-0.1,2.4-0.4s1.1-0.6,1.5-1c0.4-0.4,0.6-0.8,0.7-1.3s0.2-1,0.2-1.5c0-0.6-0.1-1.1-0.2-1.6c-0.2-0.5-0.4-0.9-0.8-1.2 c-0.4-0.3-0.9-0.6-1.5-0.7c-0.6-0.2-1.4-0.3-2.3-0.3h-5.2v8H836z"/></g><g id="score"><g id="score_1"><circle id="circ_1" style="fill:none;stroke:#FFFFFF;stroke-width:5;stroke-miterlimit:10;" cx="1432" cy="118" r="19"/><g id="txt_1"><path style="fill:#FFFEFF;" d="M1438.6,124.8v3.4h-12.4v-3.4h4.2v-11c0-0.3,0-0.6,0-0.8c0-0.3,0-0.6,0-0.9l-2.5,2.1 c-0.2,0.2-0.4,0.3-0.7,0.3s-0.4,0-0.6,0c-0.2,0-0.4-0.1-0.5-0.2c-0.2-0.1-0.3-0.2-0.3-0.3l-1.5-1.9l6.8-5.7h3.8v18.5H1438.6z"/></g><line id="strike_1" style="fill:none;stroke:#BE1E2D;stroke-width:8;stroke-miterlimit:10;opacity:0;" x1="1412" y1="138" x2="1452" y2="98"/></g><g id="score_2"><circle id="circ_2" style="fill:none;stroke:#FFFFFF;stroke-width:5;stroke-miterlimit:10;" cx="1488" cy="118" r="19"/><g id="txt_2"><path style="fill:#FFFEFF;" d="M1493.5,124c0.5,0,0.9,0.1,1.2,0.4c0.3,0.3,0.4,0.6,0.4,1.1v2.7h-15.4v-1.5c0-0.3,0.1-0.6,0.2-0.9 c0.1-0.3,0.3-0.6,0.6-0.9l6.3-6.3c0.5-0.5,1-1.1,1.4-1.5c0.4-0.5,0.7-1,1-1.4c0.3-0.5,0.5-0.9,0.6-1.4s0.2-1,0.2-1.5 c0-0.9-0.2-1.5-0.6-2s-1-0.7-1.9-0.7c-0.7,0-1.3,0.2-1.7,0.5c-0.5,0.4-0.8,0.8-1,1.4c-0.2,0.6-0.5,0.9-0.8,1.1 c-0.3,0.2-0.8,0.2-1.5,0.1l-2.5-0.4c0.2-1.1,0.5-2,0.9-2.8s1-1.5,1.7-2c0.7-0.5,1.4-0.9,2.3-1.2c0.9-0.3,1.8-0.4,2.8-0.4 c1.1,0,2.1,0.2,2.9,0.5s1.6,0.8,2.2,1.3c0.6,0.6,1.1,1.2,1.4,2c0.3,0.8,0.5,1.6,0.5,2.6c0,0.8-0.1,1.5-0.3,2.2 c-0.2,0.7-0.5,1.3-0.9,1.9c-0.4,0.6-0.8,1.2-1.4,1.8c-0.5,0.6-1.1,1.2-1.6,1.7l-4.3,4.4c0.5-0.2,1.1-0.3,1.6-0.4s1-0.1,1.5-0.1 H1493.5z"/></g><line id="strike_2" style="fill:none;stroke:#BE1E2D;stroke-width:8;stroke-miterlimit:10;opacity:0;" x1="1468" y1="138" x2="1508" y2="98"/></g><g id="score_3"><circle id="circ_3" style="fill:none;stroke:#FFFFFF;stroke-width:5;stroke-miterlimit:10;" cx="1546" cy="118" r="19"/><g id="txt_3"><path style="fill:#FFFEFF;" d="M1539.2,112.6c0.2-1.1,0.5-2,0.9-2.8s1-1.5,1.7-2c0.7-0.5,1.4-0.9,2.3-1.2 c0.9-0.3,1.8-0.4,2.8-0.4c1.1,0,2,0.2,2.9,0.5c0.8,0.3,1.5,0.7,2.1,1.2c0.6,0.5,1,1.1,1.3,1.8c0.3,0.7,0.5,1.4,0.5,2.2 c0,0.7-0.1,1.3-0.2,1.8s-0.3,1-0.6,1.4c-0.3,0.4-0.6,0.7-1,1c-0.4,0.3-0.9,0.5-1.4,0.7c2.4,0.9,3.6,2.5,3.6,5 c0,1.2-0.2,2.2-0.6,3c-0.4,0.9-1,1.6-1.7,2.1c-0.7,0.6-1.5,1-2.5,1.3s-1.9,0.4-2.9,0.4c-1,0-2-0.1-2.8-0.3 c-0.8-0.2-1.5-0.6-2.2-1s-1.2-1.1-1.7-1.8c-0.5-0.7-0.9-1.6-1.2-2.6l2.1-0.8c0.5-0.2,1-0.3,1.5-0.2c0.5,0.1,0.8,0.3,1,0.7 c0.5,0.8,0.9,1.4,1.4,1.8c0.5,0.4,1.1,0.6,1.8,0.6c0.5,0,1-0.1,1.4-0.3s0.7-0.4,1-0.7c0.3-0.3,0.4-0.6,0.6-0.9 c0.1-0.3,0.2-0.7,0.2-1.1c0-0.5,0-0.9-0.1-1.3s-0.2-0.7-0.5-1c-0.3-0.3-0.8-0.5-1.4-0.6c-0.6-0.1-1.4-0.2-2.5-0.2v-3.2 c0.9,0,1.6-0.1,2.2-0.2c0.6-0.1,1-0.3,1.3-0.6c0.3-0.2,0.5-0.5,0.6-0.9c0.1-0.4,0.1-0.7,0.1-1.2c0-0.9-0.2-1.5-0.6-2 s-1-0.7-1.9-0.7c-0.7,0-1.3,0.2-1.7,0.5c-0.5,0.4-0.8,0.8-1,1.4c-0.2,0.6-0.5,0.9-0.8,1.1c-0.3,0.2-0.8,0.2-1.5,0.1L1539.2,112.6 z"/></g><line id="strike_3" style="fill:none;stroke:#BE1E2D;stroke-width:8;stroke-miterlimit:10;opacity:0;" x1="1526" y1="138" x2="1566" y2="98"/></g></g><g id="frame"><rect x="1" y="81" style="fill:none;stroke:#FFFFFF;stroke-width:4;stroke-miterlimit:10;" width="1588" height="793"/><line style="fill:none;stroke:#FFFFFF;stroke-width:2;stroke-miterlimit:10;" x1="795" y1="81" x2="795" y2="874"/></g></g></svg>';
	var winScreenSvg = '';
	var winScreenDom = '<div id="winScreen"> <div id="wsBg"></div> <div id="wsFg"></div>   <div id="wsHeader"></div>    <div id="ctaWrapper"> <div id="cta1"></div> <div id="cta2"></div></div> <div id="wsHeadline"></div> </div>';
	//fill:#B3292D;
	var container = $('section.banner').find('#container');
	var columnWrapper = $('<div>', {id : 'columnWrapper'}).appendTo(container);
	var col1 = $('<div>', {id : 'col1', class : 'column'}).appendTo(columnWrapper);
	var col2 = $('<div>', {id : 'col2', class : 'column'}).appendTo(columnWrapper);
	var col3 = $('<div>', {id : 'col3', class : 'column'}).appendTo(columnWrapper);
	var col4 = $('<div>', {id : 'col4', class : 'column'}).appendTo(columnWrapper);
	var col5 = $('<div>', {id : 'col5', class : 'column'}).appendTo(columnWrapper);
	var colbg1 = $('<div>', {id : 'colbg1', class : 'columnBg'}).appendTo(col1);
	var colbg2 = $('<div>', {id : 'colbg2', class : 'columnBg'}).appendTo(col2);
	var colbg3 = $('<div>', {id : 'colbg3', class : 'columnBg'}).appendTo(col3);
	var colbg4 = $('<div>', {id : 'colbg4', class : 'columnBg'}).appendTo(col4);
	var colbg5 = $('<div>', {id : 'colbg5', class : 'columnBg'}).appendTo(col5);
	var colfg1 = $('<div>', {id : 'colfg1', class : 'columnFg'}).appendTo(col1);
	var colfg2 = $('<div>', {id : 'colfg2', class : 'columnFg'}).appendTo(col2);
	var colfg3 = $('<div>', {id : 'colfg3', class : 'columnFg'}).appendTo(col3);
	var colfg4 = $('<div>', {id : 'colfg4', class : 'columnFg'}).appendTo(col4);
	var colfg5 = $('<div>', {id : 'colfg5', class : 'columnFg'}).appendTo(col5);
	var info1 = $('<div>', {id : 'info1', class : 'info'}).appendTo(col1);
	var info2 = $('<div>', {id : 'info2', class : 'info'}).appendTo(col2);
	var info3 = $('<div>', {id : 'info3', class : 'info'}).appendTo(col3);
	var info4 = $('<div>', {id : 'info4', class : 'info'}).appendTo(col4);
	var info5 = $('<div>', {id : 'info5', class : 'info'}).appendTo(col5);
	var txt1 = $('<div>', {id : 'txt1', class : 'cTxt'}).appendTo(col1);
	var txt2 = $('<div>', {id : 'txt2', class : 'cTxt'}).appendTo(col2);
	var txt3 = $('<div>', {id : 'txt3', class : 'cTxt'}).appendTo(col3);
	var txt4 = $('<div>', {id : 'txt4', class : 'cTxt'}).appendTo(col4);
	var txt5 = $('<div>', {id : 'txt5', class : 'cTxt'}).appendTo(col5);
	var btnGt1 = $('<div>', {id : 'btnGt1', class : 'btnGt'}).appendTo(col1);
	var btnGt2 = $('<div>', {id : 'btnGt2', class : 'btnGt'}).appendTo(col2);
	var btnGt3 = $('<div>', {id : 'btnGt3', class : 'btnGt'}).appendTo(col3);
	var btnGt4 = $('<div>', {id : 'btnGt4', class : 'btnGt'}).appendTo(col4);
	var btnGt5 = $('<div>', {id : 'btnGt5', class : 'btnGt'}).appendTo(col5);
	var btnGtInner1 = $('<div>', {id : 'btnGtInner1', class : 'btnGtInner'}).appendTo(btnGt1);
	var btnGtInner2 = $('<div>', {id : 'btnGtInner2', class : 'btnGtInner'}).appendTo(btnGt2);
	var btnGtInner3 = $('<div>', {id : 'btnGtInner3', class : 'btnGtInner'}).appendTo(btnGt3);
	var btnGtInner4 = $('<div>', {id : 'btnGtInner4', class : 'btnGtInner'}).appendTo(btnGt4);
	var btnGtInner5 = $('<div>', {id : 'btnGtInner5', class : 'btnGtInner'}).appendTo(btnGt5);

	//var blackOverlay = $('<div>', {id : 'blackOverlay', class : 'blackOverlay'}).appendTo(container);
	var closeGame = $('<div>', {id : 'closeGame', class : 'closeGame'}).appendTo(container);

    var overlay = $('<div>', {id : 'overlay', class : 'overlay'}).appendTo(container);
	var timeleft;
	var coundDownTxt = $('<div id="countDownTxt"><p>TIME LEFT: <span id="timeLeftTxt">15</span> SECONDS</p></div>').appendTo(container);
	//overlay.append(badlandsSvg);
	$('.btnGtInner').append(goToBtnSvg);
	//var headline = $('<div>', {id : 'headline'}).appendTo(container);
  	var headline = $('<div id="headline"> <div id="headline_01"></div> <div id="headline_02"></div> <div id="headline_03"></div> </div>').appendTo(container);

    var gradient = $('<div>', {id : 'gradient'}).appendTo(container);


	var logo = $('<div>', {id : 'logo'}).appendTo(container);



	var t = TweenMax;
	var strikeNum;
	var won = false;
	var countDownTimer;
	t.set('.columnBg', {scale:1.1});

  	var tl = new TimelineMax({ paused : true });
	var bgs = [colbg1, colbg2, colbg3, colbg4, colbg5];
	var fgs = [colfg1, colfg2, colfg3, colfg4, colfg5];
	var txs = [txt1, txt2, txt3, txt4, txt5];
	var btgs = [btnGt1, btnGt2, btnGt3, btnGt4, btnGt5];
	var head = [$('#headline_01'), $('#headline_02'), $('#headline_03')];

  	$(logo).mouseover(function(e) {
    	t.to(this, 0.6, {height:'14vh', backgroundColor:'#681619', ease:Expo.easeOut});
    }).mouseout(function(e) {
    	t.to(this, 0.5, {height:'11.5vh', backgroundColor:'#b3282d', ease:Bounce.easeOut});
    }).click(function(e){
   		$('#goTo_SD').click();
   })


  	tl.add('init')
		  	.staggerFrom(bgs, 0.3, {opacity:0, scale:1.2, ease:Power2.easeOut}, 0.1, '+=0.2')
		  	.staggerFrom(fgs, 0.3, {opacity:0, scale:1.2, y:'+=40', ease:Power2.easeOut}, 0.1, '-=0.7')
		  	.staggerFrom(txs, 0.3, {opacity:0, y:'+=40', ease:Power2.easeOut}, 0.1, '-=0.6')
		  	.staggerFrom(btgs, 0.7, {opacity:0, scale:1.2, ease:Bounce.easeOut}, 0.1, '-=0.6')
		  	.from(logo, 0.4, {opacity:0, y:'-=40', ease:Power2.easeOut}, '-=0.9')
		  	.staggerFrom(head, 0.4, {opacity:0, y:'+=30', ease:Power2.easeOut}, 0.1, '-=0.6');

  	function mainTimeLine() {
		  tl.add('init')
		  	.staggerFrom(bgs, 0.3, {opacity:0, scale:1.2, ease:Power2.easeOut}, 0.1, '+=0.2')
		  	.staggerFrom(fgs, 0.3, {opacity:0, scale:1.2, y:'+=40', ease:Power2.easeOut}, 0.1, '-=0.7')
		  	.staggerFrom(txs, 0.3, {opacity:0, y:'+=40', ease:Power2.easeOut}, 0.1, '-=0.6')
		  	.staggerFrom(btgs, 0.7, {opacity:0, scale:1.2, ease:Bounce.easeOut}, 0.1, '-=0.6')
		  	.from(logo, 0.4, {opacity:0, y:'-=40', ease:Power2.easeOut}, '-=0.9')
		  	.staggerFrom(head, 0.4, {opacity:0, y:'+=30', ease:Power2.easeOut}, 0.1, '-=0.6');
	}

	function handleColumnOver(e) {
		t.to( $(e.currentTarget).find('.columnBg'), 2.5, {scale:1.0, opacity:0.5, ease:Expo.easeOut});
		t.to( $(e.currentTarget).find('.columnFg'), 2.5, {scale:1.05, ease:Expo.easeOut});
		t.to( $(e.currentTarget).find('.redBg'), 0.9, {opacity:1, scale:1.1, ease:Elastic.easeOut, transformOrigin:'center center'});
		t.to( $(e.currentTarget).find('.whiteRing'), 0.9, {scale:1.1, ease:Elastic.easeOut, transformOrigin:'center center'});
	}
	function handleColumnOut(e) {
		t.to( $(e.currentTarget).find('.columnBg'), 0.5, {scale:1.1, opacity:1,  ease:Power2.easeOut});
		t.to( $(e.currentTarget).find('.columnFg'), 0.5, {scale:1, ease:Power2.easeOut});
		t.to( $(e.currentTarget).find('.redBg'), 0.9, {opacity:0, scale:1, ease:Elastic.easeOut});
		t.to( $(e.currentTarget).find('.whiteRing'), 0.9, {scale:1, ease:Elastic.easeOut});
	}
	function handleColumnClick(e) {
      	mraid.cancelAutoClose();

      //t.to(blackOverlay, 0.3, {opacity:1, ease:Power2.easeOut});

        t.to(closeGame, 0.3, {opacity:1, ease:Power2.easeOut});


		t.to(overlay, 0.3, {opacity:1, ease:Power2.easeOut, delay:0.2});
		closeGame.css({zIndex: 900});
		overlay.css({zIndex: 910});
		switch (e.currentTarget.id) {
			case 'col1':
				console.log('col1');
                $('#open_BadLands').click();
				overlay.html('');
				overlay.append(badlandsSvg);
				initMatchGame('#badlandsSvg');
				break;
			case 'col2':
				console.log('col2');
                $('#open_DeadWood').click();
				overlay.html('');
				overlay.append(deadwoodSvg);
				initMatchGame('#deadwoodSvg');
				break;
			case 'col3':
				console.log('col3');
                $('#open_Rushmore').click();
				overlay.html('');
				overlay.append(rushmoreSvg);
				initMatchGame('#rushmoreSvg');
				break
			case 'col4':
				console.log('col4');
            	$('#open_CusterSP').click();
				overlay.html('');
				overlay.append(cspSvg);
				initMatchGame('#cspSvg');
				break
			case 'col5':
				console.log('col5');
            	$('#open_BlackHills').click();
				overlay.html('');
				overlay.append(blackhillsSvg);
				initMatchGame('#blackhillsSvg');
				break
		}
	}
	$('.column').mouseover(function(e) {
		handleColumnOver(e);
	}).mouseout(function(e){
		handleColumnOut(e);
	}).click(function(e){
		handleColumnClick(e);
	});
	function initMatchGame(targetSVG) {
		strikeNum = 0;
		matchCountDown();
		$(targetSVG).find('#a1').click( function(e) {
			if ($(this).css('opacity') == 0 ) {
				t.to(this, 0.2, {opacity:1});
				t.to( $(targetSVG).find('#b1'), 0.2, {opacity:1});
				handleStrike();
			}
		});
		$(targetSVG).find('#a2').click( function(e) {
			if ($(this).css('opacity') == 0 ) {
				t.to(this, 0.2, {opacity:1});
				t.to( $(targetSVG).find('#b2'), 0.2, {opacity:1});
				handleStrike();
			}
		});
		$(targetSVG).find('#a3').click( function(e) {
			if ($(this).css('opacity') == 0 ) {
				t.to(this, 0.2, {opacity:1});
				t.to( $(targetSVG).find('#b3'), 0.2, {opacity:1});
				handleStrike();
			}
		});
		$(targetSVG).find('#b1').click( function(e) {
			if ($(this).css('opacity') == 0 ) {
				t.to(this, 0.2, {opacity:1});
				t.to( $(targetSVG).find('#a1'), 0.2, {opacity:1});
				handleStrike();
			}
		});
		$(targetSVG).find('#b2').click( function(e) {
			if ($(this).css('opacity') == 0 ) {
				t.to(this, 0.2, {opacity:1});
				t.to( $(targetSVG).find('#a2'), 0.2, {opacity:1});
				handleStrike();
			}
		});
		$(targetSVG).find('#b3').click( function(e) {
			if ($(this).css('opacity') == 0 ) {
				t.to(this, 0.2, {opacity:1});
				t.to( $(targetSVG).find('#a3'), 0.2, {opacity:1});
				handleStrike();
			}
		});
		$(closeGame).click(function(){
			handleGameClose();
		});
		function handleGameClose() {
			console.log('handle game close');
			t.to('#countDownTxt', 0.3, {opacity:0, ease:Power2.easeOut});
			t.to(overlay, 0.3, {opacity:0, ease:Power2.easeOut});
			t.to(closeGame, 0.3, {opacity:0, ease:Power2.easeOut, delay:0.2, onComplete:overlayDepth});
			clearInterval(countDownTimer);
			function overlayDepth() {
				closeGame.css({ zIndex : -10 });
				overlay.css({ zIndex : -20 });
				//$('#countDownTxt').css({ opacity : 0 });
			}
		};
		function matchCountDown() {
			t.to('#countDownTxt', 0.3, {opacity:1, ease:Power2.easeOut});
			timeleft = 15;
			$('#timeLeftTxt').html(timeleft);
			countDownTimer = setInterval(function(){
				//document.getElementById("countdowntimer").textContent = timeleft;
				timeleft--;
				$('#timeLeftTxt').html(timeleft);
				//timeLeftTxt
				console.log(timeleft);
				if(timeleft <= 0) {
					console.log('OUT OF TIME!');
					clearInterval(countDownTimer);
					setTimeout( function() { handleEnd(targetSVG, false); }, 600);
				}
			}, 1000);
		}
		function handleStrike() {
			switch (strikeNum) {
				case 0:
					t.to( $(targetSVG).find('#strike_1'), 0.2, {opacity:1});
                	$('#difference_1_found').click();
					strikeNum = 1;
					break;
				case 1:
					t.to( $(targetSVG).find('#strike_2'), 0.2, {opacity:1});
                    $('#difference_2_found').click();
					strikeNum = 2;
					break;
				case 2:
					t.to( $(targetSVG).find('#strike_3'), 0.2, {opacity:1});
					clearInterval(countDownTimer);
					setTimeout( function() { handleEnd(targetSVG, true); }, 600);
                    $('#difference_3_found').click();
					strikeNum = 3;
					break;
			}
		}
		function handleEnd(targetSVG, won) {
			console.log('you got it! ' + targetSVG);


			overlay.html('');
			overlay.append(winScreenDom);
			if (won) {
				$('#wsHeadline').css({ backgroundImage : 'url(txt_greatFind.png)' });
			} else {
				$('#wsHeadline').css({ backgroundImage : 'url(txt_greatTry.png)' });
			}

          	t.staggerFrom(['#cta1', '#cta2'], 0.6, {scale:1.2, opacity:0.0, ease:Bounce.easeOut, delay:1.0}, 0.3);

			t.set('#wsBg', {backgroundSize:'110% 110%', 'filter' : 'blur(0px)'});
			t.set('#wsFg', {backgroundSize:'140% 140%'});
			switch (targetSVG) {
				case '#badlandsSvg':
					$('#wsBg').css({ backgroundImage : 'url(ws_badlands_bg.jpg)' });
					$('#wsFg').css({ backgroundImage : 'url(ws_badlands_fg.png)' });
					parallaxBl();
					break;
				case '#deadwoodSvg':
					$('#wsBg').css({ backgroundImage : 'url(ws_deadwood_bg.jpg)' });
					$('#wsFg').css({ backgroundImage : 'url(ws_deadwood_fg.png)' });
					parallaxDw();
					break;
				case '#rushmoreSvg':
					$('#wsBg').css({ backgroundImage : 'url(ws_rushmore_bg.jpg)' });
					$('#wsFg').css({ backgroundImage : 'url(ws_rushmore_fg.png)' });
					parallaxRm();
					break
				case '#cspSvg':
					$('#wsBg').css({ backgroundImage : 'url(ws_csp_bg.jpg)' });
					$('#wsFg').css({ backgroundImage : 'url(ws_csp_fg.png)' });
					parallaxCsp();
					break
				case '#blackhillsSvg':
					$('#wsBg').css({ backgroundImage : 'url(ws_blackhills_bg.jpg)' });
					$('#wsFg').css({ backgroundImage : 'url(ws_blackhills_fg.png)' });
					parallaxBh();
					break
			}
			function parallaxBl() {
				t.to('#wsBg', 4, {backgroundSize:'100% 100%', 'filter' : 'blur(2px)', ease:Expo.easeOut});
				t.to('#wsFg', 8, {backgroundSize:'100% 100%', x:'-=10', ease:Expo.easeOut});
			};
			function parallaxDw() {
				t.to('#wsBg', 4, {backgroundSize:'100% 100%', 'filter' : 'blur(2px)', ease:Expo.easeOut});
				t.to('#wsFg', 8, {backgroundSize:'100% 100%', ease:Expo.easeOut});
			};
			function parallaxRm() {
				t.to('#wsBg', 4, {backgroundSize:'100% 100%', 'filter' : 'blur(2px)', ease:Expo.easeOut});
				t.to('#wsFg', 8, {backgroundSize:'100% 100%', x:'-=200', y:'+=100', ease:Expo.easeOut});
			};
			function parallaxCsp() {
				t.to('#wsBg', 4, {backgroundSize:'100% 100%', 'filter' : 'blur(2px)', ease:Expo.easeOut});
				t.to('#wsFg', 8, {backgroundSize:'100% 100%', ease:Expo.easeOut});
			};
			function parallaxBh() {
				t.to('#wsBg', 4, {backgroundSize:'100% 100%', 'filter' : 'blur(2px)', ease:Expo.easeOut});
				t.to('#wsFg', 8, {backgroundSize:'100% 100%', x:'-=400', y:'-=40', ease:Expo.easeOut});
			};
			$('#cta1').mouseover(function(e) {
				t.to(this, 0.5, {scale:1.1, backgroundColor:'#681619', ease:Power3.easeOut});
			}).mouseout(function(e){
				t.to(this, 0.4, {scale:1.0, backgroundColor:'#b3282d', ease:Bounce.easeOut});
			}).click(function(e){
              $('#Explore_SD_CTA').click();
			});
			$('#cta2').mouseover(function(e) {
				t.to(this, 0.5, {scale:1.1, backgroundColor:'#681619', ease:Power3.easeOut});
			}).mouseout(function(e){
				t.to(this, 0.4, {scale:1.0, backgroundColor:'#b3282d', ease:Bounce.easeOut});
			}).click(function(e){
				handleGameClose();
                $('#ChooseAnotherScene').click();
			});
		}
	}
  	//mainTimeLine();
    tl.play();
}

// AdChoices Icon
$.ajax({
  url: "/sparkflow/formats/latest/adchoices.min.js",
  dataType: "script",
  cache: true,
  success: function () {
  AdChoices.init({
    corner: "br",
    //icon: true,
    url: "http://www.undertone.com/opt-out-tool?utm_source=AdChoiceIcon&utm_medium=IAAdChoicesIcon&utm_campaign=Privacy"
  });
  }
});

// Synch portrait and landscape view's scenes
var _lastSection,
  _condition = $('.landscape').length == $('.portrait').length && $('.landscape').length > 1;
$(document).on('adSceneChange adResize', function () {
  var _currentSection = $('section:visible'),
    _switchScene = function (view) {
    var _currentIndex = _currentSection.data('index'),
      _section = $('section.'+view+'[data-index='+_currentIndex+']');
    ad.switchToScene(_section.attr('class'), _currentIndex, _section.data('canvas'));
    };
  if (_condition && _currentSection[0].id != _lastSection) {
  _lastSection = _currentSection[0].id;
  if (_currentSection.hasClass('landscape')) _switchScene('portrait');
  else if (_currentSection.hasClass('portrait')) _switchScene('landscape');
  }
});