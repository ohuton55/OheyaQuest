'use strict';

class SceneTitle {

	//------------------------------------------------------------
	// start
	static start() {

		console.log("test");	
		console.log(document.getElementById("myid"));
		this.test();
	}

	static test() {
		console.log(this);		
	}	
	//------------------------------------------------------------
	// tap
	static tap(){
	
	
	}
	
	//------------------------------------------------------------
	// animation
	static anim(gameData){
	
	console.log("start SeceneTitle");	
	const w = gameData.w;
	const h = gameData.h;
	const chipDize = gameData.chipSize;
	const w2 = w / 2;	// 横幅の半分

	const textArr = [
		'Ohuton Quest',
		'Please Click!',
		'Created by Yuuka Kumai',
		'Sound by Maoudmashii'
	];
	const test2 = new GameAnim();
	console.log(Object.keys(test2));
	
	// Math() 与えられた数値以下の最大の整数
	// time.sum ... GameAnimが持つオブジェクト　bind()で紐づけて渡す？
	// time.sum...20 / 200 0.1 0.0.2
	
	console.log(textArr[0]);
//	const isView = Math.floor(time.sum  / 200) % 5 >= 2; //  点滅表示用フラグ
	
	// 描画準備
//	const layerId = gameData.layerIds.middle;
//	const context = gameData.canvasArr[layerId].context;
	
	
//	context.clearRect(0, 0, w, h);		// 描画領域をクリア
	
	console.log('UiText_');
	//UiText.drawCenter( context, textArr[0], w2, h * 0.2, 28 'white');
	console.log(gameData.canvasArr[0].context);
	const context = gameData.canvasArr[0].context;
	console.log(context);
	//UiText.drawCenter( context, 'TEST!!!!', w2, h * 0.2, 28, 'white');

	
	const image = new Image();
	image.src = 'image/test.png';
	console.log(image);	
	context.drawImage(image, 100, 100, 500, 500,  0, 0, 200, 200);
	UiText.draw(context, 'onaka ippai!', 100, 220, 5, 'white');

	console.log(w);
	console.log(h);
		
	
	}

}