'use strict';

class SceneTitle {

	//------------------------------------------------------------
	// start
	static start(gameData) {
		console.log("SceneTitle_start!");	
		console.log(this.anim);
		console.log(gameData.layerIds.middle);
		//GameAnim.add(this.anim.bind(this, gameData));
		//GameAnim.add(this.anim(this, gameData));
		//GameAnim.add(this.anim(gameData));
		GameAnim.add(this.anim.bind(this, gameData));
		console.log(this);

		console.log("SceneTitle_end");
	}

	//------------------------------------------------------------
	// tap
	static tap(){
	
	
	}
	
	//------------------------------------------------------------
	// animation
	static anim(gameData, time){
		console.log(time.sum);
		console.log("start SeceneTitle");	
		const w = gameData.w;
		const h = gameData.h;
		const chipSize = gameData.chipSize;
		const w2 = w / 2;	// 横幅の半分

		const textArr = [
			'Ohuton Quest',
			'Please Click!',
			'Created by Yuuka Kumai',
			'Sound by Maoudmashii'
		];
		
		// Math() 与えられた数値以下の最大の整数
		// time.sum ... GameAnimが持つオブジェクト　bind()で紐づけて渡す？
		const isView = Math.floor(time.sum  / 200) % 5 >= 2; //  点滅表示用フラグ
		console.log(isView);
	
		// 描画準備
		const layerId = gameData.layerIds.middle;
		const context = gameData.canvasArr[layerId].context;
		context.clearRect(0, 0, w, h);		// 描画領域をクリア
	
		UiText.drawCenter( context, textArr[0], w2, h * 0.1, 36, 'white');
		if (isView) {
			UiText.drawCenter( context, textArr[1], w2, h * 0.6, 28, 'white');
		}
		UiText.drawCenter( context, textArr[2], w2, h * 0.86, 10, 'white');
		UiText.drawCenter( context, textArr[3], w2, h * 0.94, 10, 'white');
	
		//キャラの描画
		const charaImage = GameImage.images['chara'];
		const charaY = chipSize * 6.5;	//Y 位置
		const charaSize = chipSize * 7;
	
		console.log(charaImage);
		UiChip.draw(
			context, charaImage, chipSize, charaSize,  // 基本情報
			0, 0, chipSize * 1.5, charaY	// 座標情報
		);
		UiChip.draw(
			context, charaImage, chipSize, charaSize,
			3, 1, w - chipSize * 10, charaY	
		);
	}

}













