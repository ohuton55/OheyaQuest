'use strict';

window.onload = function() {
	eruda.init();
	console.log('got it!');
	SceneTitle.start();
	
	var result = Boolean( window.TouchEvent );
	console.log(result);
	
	var result2 = Boolean(document.addEventListener);
	console.log(result2);
	
//	document.addEventListener("touchstart", TouchEventFunc);
//	document.addEventListener("touchmove", TouchEventFunc);
//	document.addEventListener("touchend", TouchEventFunc);
	document.getElementById("text-button").addEventListener("touchstart", TouchTextButton);
	document.getElementById("text-button").addEventListener("touchmove", TouchEventFunc);
//	document.getElementById("text-button").addEventListener("touchend", TouchEventFunc);
};

function TouchEventFunc(e) {
	// get the obj for TouchList
	var touch_list = e.changedTouches;
	
	// Accessing contains in order
	var num = touch_list.length;
	for(let i = 0; i < num; i++) {
		// get the obj for Touch
		var touch = touch_list[i];
		// test output
		console.log(touch);
	}
}

function TouchTextButton(e) {
	
	const x  = e.touches[0].pageX;
	const y = e.touches[0].pageY;
			document.getElementById("text").innerHTML = "X:" + x + ". Y:" + y;
		} 