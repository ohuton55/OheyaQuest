'use strict';

class SceneBattle {

	// 設定
	static options = {
		type:		null,
		enemyData: 	{},
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
		GameAnim.add(this.anim.bind(this, gameData)); // アニメの追加

	}

	//------------------------------------------------------------
	// たっぷ
	static tap(gameData, userData, x, y, type) {
		
		const options = this.options;
		if (type === 'down') {
			console.log('SceneBattle__tap');		
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
	
		// 描画
		UiBattleBase.draw(gameData, options, time);　// バトル基本動作
		UtilBattleMenu.draw(gameData, options);        // メニュー描画
		UtilBattleProcess.next(gameData, userData, options);  // テスト用	
	
	}
}










