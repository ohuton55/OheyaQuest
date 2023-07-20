'use strict';

class SceneTitle {

	//------------------------------------------------------------
	// start
	static start(gameData) {
		console.log("SceneTitle_start!");	
		GameAnim.add(this.anim.bind(gameData));
		console.log("SceneTitle_end");
	}

	//------------------------------------------------------------
	// tap
	static tap(){
	
	
	}
	
	//------------------------------------------------------------
	// animation
	static anim(gameData, time){
	
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
	
	// Math() 与えられた数値以下の最大の整数
	// time.sum ... GameAnimが持つオブジェクト　bind()で紐づけて渡す？
	// time.sum...20 / 200 0.1 0.0.2
	
	const isView = Math.floor(time.sum  / 200) % 5 >= 2; //  点滅表示用フラグ
	
	// 描画準備
	const layerId = gameData.layerIds.middle;
	const context = gameData.canvasArr[layerId].context;
	//context.clearRect(0, 0, w, h);		// 描画領域をクリア
	
	UiText.draw(context, 'onaka ippai!', 100, 220, 28, 'white');
	if (isView) {
		UiText.drawCenter( context, textArr[0], w2, h * 0.2, 28, 'white');	}
	UiText.drawCenter( context, textArr[1], w2, h * 0.6, 10, 'white');	UiText.drawCenter( context, textArr[2], w2, h * 0.86, 10, 'white');
	UiText.drawCenter( context, textArr[3], w2, h * 0.94, 10, 'white');
	
	
	}

}