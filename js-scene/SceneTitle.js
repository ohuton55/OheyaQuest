'use strict';

class SceneTitle {

	//------------------------------------------------------------
	// start
	static start(gameData, userData) {

		GameView.add(this.tap.bind(this, gameData, userData));	// タップの登録
		GameAnim.add(this.anim.bind(this, gameData));	// アニメの登録
	}

	//------------------------------------------------------------
	// tap
	static tap(gameData, userData, x, y, type){
		if (type === 'down') {
		
			// 保存データの復帰
			UtilUrlData.load(userData);
			
			// 地図関連を初期化
			const result = UtilMap.gen(gameData, userData.seed);

			userData.mapArr = result.mapArr;	// ランダム後マップ
			userData.townArr = result.townArr;	// 街
			userData.castle = result.castle;		// 城
			userData.moveCount = 0;	// マップ表示直後の戦闘を避ける
			
			// シーン移動
			SceneMap.start(gameData, userData);
		}
	}
	
	//------------------------------------------------------------
	// animation
	static anim(gameData, time){
		const w = gameData.w;
		const h = gameData.h;
		const chipSize = gameData.chipSize;
		const w2 = w / 2;	// 横幅の半分

		const textArr = [
			'Ohuton Quest',
			'Please Click!',
			'Created by Harusame Udon',
			'Sound by Maoudamashii'
		];
		
		// Math() 与えられた数値以下の最大の整数
		// time.sum ... GameAnimが持つオブジェクト　bind()で紐づけて渡す？
		const isView = Math.floor(time.sum  / 200) % 5 >= 2; //  点滅表示用フラグ
	
		// 描画準備
		const layerId = gameData.layerIds.middle;
		const context = gameData.canvasArr[layerId].context;
		context.clearRect(0, 0, w, h);		// 描画領域をクリア
	
		UiText.drawCenter( context, textArr[0], w2, h * 0.2 | 0, 24, 'white');
		if (isView) {
			UiText.drawCenter( context, textArr[1], w2, h * 0.6 | 0, 10, 'white');
		}
		UiText.drawCenter( context, textArr[2], w2, h * 0.86 | 0, 5, 'white');
		UiText.drawCenter( context, textArr[3], w2, h * 0.94 | 0, 5, 'white');
	
		//キャラの描画
		const charaImage = GameImage.images['chara'];
		const charaY = chipSize * 6.5;	//Y 位置
		const charaSize = chipSize * 4;
	
		UiChip.draw(
			context, charaImage, chipSize, charaSize,  // 基本情報
			0, 0, chipSize, charaY	// 座標情報
		);
		UiChip.draw(
			context, charaImage, chipSize, charaSize,
			3, 1, w - chipSize * 5, charaY	
		);
	}

}













