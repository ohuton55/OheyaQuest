'use strict';

class SceneEvent {
	// 変数の初期化
	static options = {}; 
	
	static start(gameData, userData, options) {
		this.options = options;	// eventOptを入れる
		
		if (options.town) { GameSound.play('seTown'); }// 街到着
		if (options.win) { GameSound.playBGM('bgmWin') }  // 戦闘勝利
		if (options.lose) { GameSound.playBGM('bgmLose') }  // 敗北
		if (options.winLast) { GameSound.playBGM('bgmFin') }  // ラスボス勝利

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
		 	
		 	if (options.battle) {
				SceneBattle.start(gameData, userData, options.battleType);
		 	} else if (options.win || options.lose) {
		 		SceneMap.start(gameData, userData);  // マップへ
		 	} else if (options.winLast) {
		 		SceneTitle.start(gameData, userData);  // タイトルへ
		 	} else {
 				//GameSound.play('seTown');// 街到着
		 		SceneMap.start(gameData, userData);  // マップ開始
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
		if (options.town || options.battle) {
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
		if (options.battle) {
			// 戦闘開始
			draw('Battle!!', 20);
			draw('VS  ' + gameData.enemyData[options.battleType].name, 15);
			if (options.battleType === 'last' ) {
				draw('Last battle...', 10);
			}
		}
		if (options.win) {
			y = h * 0.4 | 0;
			draw('You Win!', 30);
			if (options.levelUp) {
				draw('Level Up!', 15);
			}
		}
		if (options.lose) {
			// 敗北
			y = h * 0.4 | 0;
			draw('You Lose..', 30);
			if (options.levelUp) {
				draw('but Level Up.', 15);
			}
		}
		if (options.winLast) {
			draw('You won the last battle.', 10);
			draw('You saved the kingdom!', 10);
			
			const charaImage = GameImage.images['chara'];
			const charaSize = chipSize * 4;
			
			UiChip.draw(
				context, charaImage, chipSize, charaSize,
				0, 0, (w - charaSize) / 2, y - chipSize * 1.5
			);
		}
	}
}












