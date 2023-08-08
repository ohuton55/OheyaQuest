'use strict';

class SceneBattle {

	// 設定
	static options = {
		type:		null,
		state:		null,
		enemyData: 	{},
		actionType:		null,
		actionLevel:		null,
		selectMenu:		null,
		selectTime: 		null,
		enemyRect: 	{},
		menuWinSize: 	{},
		menuArr: 		[]
	}
	
	//------------------------------------------------------------
	// 開始
	static start(gameData, userData, type) {

		// 変数の初期化
		const options = this.options;
		const w = gameData.w;
		const h = gameData.h;
		const chipSize = gameData.chipSize;
		
		options.type = type;
		options.enemyRect = {
			x:	w - chipSize * 13.5,
			y:	0,
			w:	chipSize * 13.5,
			h:	h
		};

		UtilBattleData.init(gameData, userData, options);   // 初期化処理

		UtilBattleMenu.init(gameData, userData, options);	// メニュー初期化
		
		GameView.add(this.tap.bind(this, gameData, userData)); // タップの追加
		GameAnim.add(this.anim.bind(this, gameData, userData)); // アニメの追加

	}

	//------------------------------------------------------------
	// たっぷ
	static tap(gameData, userData, x, y, type) {
		
		const options = this.options;
		if (type === 'down') {
			// メニューたっぷ判定
			UtilBattleMenu.tap(gameData, userData, options, x, y);
		}
	}
	
	//------------------------------------------------------------
	// アニメ
	static anim(gameData, userData, time) {
		
		// 変数の初期化
		const options = this.options;
		const w = gameData.w;
		const h = gameData.h;
		
		// 画面をクリア
		gameData.canvasArr[gameData.layerIds.middle].context.clearRect(0, 0, w, h);
		gameData.canvasArr[gameData.layerIds.front].context.clearRect(0, 0, w, h);
		
		// 演出 - 次の進行へ
		
	
		// 描画
		UiBattleBase.draw(gameData, options, time);　// バトル基本動作
		UtilBattleMenu.draw(gameData, options);        // メニュー描画
		UtilBattleProcess.next(gameData, userData, options);  // テスト用	
	
	}
}










