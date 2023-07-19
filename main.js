'use strict';

window.onload = function() {
	eruda.init();
	console.log('got it!');
	const gameData  = new GameData();	// ゲーム データ
	
	const test2 = new GameAnim();
	console.log(Object.keys(test2));
	//------------------------------------------------------------
	// 初期化
	const id = '#app';
	// canvasArrを初期化する
	console.log('Go initCanvasArr()');
	gameData.canvasArr = GameCanvas.initCanvasArr(id, gameData);
	console.log(gameData.canvasArr[0].context);
	//------------------------------------------------------------
	console.log(Object.keys(gameData));
	console.log(Object.keys(gameData.canvasArr[0]));
	console.log(gameData.canvasArr[2].context.imageSmoothingEnabled);
			
	var result = Boolean( window.TouchEvent );
	console.log(result);
	
	var result2 = Boolean(document.addEventListener);
	console.log(result2)

	//------------------------------------------------------------
	// リソース読み込み
	const promiseArr = [];
	
	// 画像
	promiseArr.push(GameImage.load('fontBlack', 'image/fontBlack.png'));
	promiseArr.push(GameImage.load('fontWhite', 'image/fontWhite.png'));
	console.log('promise is...');
	
	Promise.all(promiseArr).then(arg => {
		UiText.setImage('black', GameImage.images['fontBlack']);
		UiText.setImage('white', GameImage.images['fontWhite']);
		console.log('promiseall_ok!');
		SceneTitle.start();
		console.log(GameImage.images['fontBlack']);
		console.log(GameImage.images['fontWhite']);
		SceneTitle.anim(gameData);
	});
	
	document.getElementById("text-button").addEventListener("touchstart", TouchTextButton);
	document.getElementById("text-button").addEventListener("touchmove", testContext);
	//------------------------------------------------------------


	
//	document.addEventListener("touchstart", TouchEventFunc);
//	document.addEventListener("touchmove", TouchEventFunc);
//	document.addEventListener("touchend", TouchEventFunc);


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
		
function testContext(e) {

	const x = e.touches[0].pageX;
	const y = e.touches[0].pageY;
	var targetClass = getRuleBySelector('.cvl');
	var cv = document.getElementById('cvl');	// 要素を得る
	var ct = cv.getContext('2d');		// 2D(平面)コンテキストを得る
	ct.fillStyle = '#0f0f0f';
	cv.width = x;
	cv.height = y;
	ct.fillRect(0, 0, cv.width, cv.height);

	const image = new Image();
	image.src = 'image/test.png';	
	image.style.imageRendering = '-webkit-optimize-contrast';
	image.style.imageRendering = '-moz-crisp-edges';
	image.style.imageRendering = 'pixelated';
	ct.drawImage(image, 0 + x / 5 , 0 + y / 5, 500, 500,  100,  100, 200, 200);
	
	GameImage.load('fontWhite', 'image/fontWhite.png');
	UiText.setImage('white', GameImage.images['fontWhite']);
	GameImage.load('fontBlack', 'image/fontBlack.png');
	UiText.setImage('black', GameImage.images['fontBlack']);
	
	
//	const test = new GameData();
//	console.log(test.w);	
	
//	const w = gameData.w;
//	const h = gameData.h;
	
//	console.log(w)
//	console.log(h)

	UiText.draw(ct, 'onaka ippai!', 100, 220, 5, 'white');
	UiText.drawFrame(ct, 'Frame test', 200, 100, 10, 'black', 1);
	UiText.drawFrame(ct, 'Frame test', 200, 200, 10, 'white', 1);
	//UiText.testFrame(ct, 'Frame TEST', 200, 100, 5, 'black', 1);
	//UiText.testFrame(ct, 'Frame TEST', 200, 100, 5, 'white', 1);
	
//	const fontH = 10;
//	const text = 'TEST';
//	for (let i = 0; i < text.length; i++) {
//		const refY = text.charCodeAt(i) * fontH;	// Y参照位置
//		ct.drawImage(image, 0, refY, 5, 10, 100 + i * 28, 50, 28, 55
//		);
//	}
//	document.body.appendChild(image);
}		

// 指定セレクタのCSSルールを取得する
function getRuleBySelector(sele) {
	var i, j, sheets, rules, rule = null;
	
		// stylesheetのリストを取得
		sheets = document.styleSheets;
		for (i=0; i < sheets.length; i++) {
			// そのstylesheetが持つcssルールのリストを取得
			rules = sheets[i].cssRules;
			for(j=0; j < rules.lenth; j++){
				// セレクタが一致するか調べる
				if (sele === rules[j].selectorText) {
					rule = rules[j];
					break;
				}
			}
		}
		return rule;
}
	
			
	
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		