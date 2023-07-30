'use strict';

class SceneEvent {
	// 変数の初期化
	static options = {};
	
	static start(gameData, userData, options) {
		this.options = options;	// eventOptを入れる

		GameView.add(this.tap.bind(this, gameData, userData));
		GameAnim.add(this.anim.bind(this, gameData));
	}
	
	//------------------------------------------------------------
	// タップ
	static tap(gameData, userData, x, y, type) {
		// 変数の初期化
		const options = this.options;	 // eventOpt
		
		 if (type === 'down') {
		 	// 変数の初期化
		 	const w = gameData.w;
		 	const h = gameData.h;
		 	
		 	// 描画対象を初期化
		 	const layerId = gameData.layerIds.front;
		 	const context = gameData.canvasArr[layerId].context;
		 	context.clearRect(0, 0, w, h);
		 	
		 	if (options.town) {
		 		SceneMap.start(gameData, userData);
		 	}
		 } 
	}
	
	//------------------------------------------------------------
	// アニメーション
	static anim(gameData) {
		// 変数の初期化
		const options = this.options;
		const w = gameData.w;
		const h = gameData.h;
		const chipSize = gameData.chipSize;
		
		// 描画の初期化
		const layerId = gameData.layerIds.front;
		const context = gameData.canvasArr[layerId].context;
		context.clearRect(0, 0, w, h);
		
		// 背景描画
		context.fillStyle = '#000';
		let backY = 0;	// 背景のY位置
		let backX = 0;
		if (options.town) {
			backY = h * 0.1 | 0;
			backX = w * 0.05 | 0;
		}
		context.fillRect(backX, backY, w - backX * 2, h - backY * 2);  // 塗りつぶす
		
		// 描画用関数（ずらしつつ最大3行に描画する）
		let y = h * 0.3 | 0;
		const draw = function(txt, fontW) {
			UiText.drawCenter(context, txt, w / 2 | 0, y, fontW, 'white');
			y += h * 0.2 | 0;	// Y位置移動
		};
		
		//-----------------------------------------
		// 文字の描画（イベントの種類ごとに変える）
		if (options.town) {
			draw('Town', 20);
			if (options.heal) {
				draw('Sleep deeply...HP is maxed', 10);
			}
			if (options.item !== undefined) {
				draw(`Get a "${gameData.treasureArr[options.item]}"!`, 10);
			}
		}
	}
}












