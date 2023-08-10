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
		options.state = 'menu';
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
		// 変数の初期化
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
		
		// 終了時エフェクト
		if (options.state === 'end') {
			const layerId = gameData.layerIds.front;
			const context = gameData.canvasArr[layerId].context;
		
			context.globalAlpha = 0.1;
			context.fillStyle = '#000';
			context.fillRect(0, 0, w, h);
			context.globalAlpha = 1;		// 透明度を戻す
			return;		// 通常描画は行わない
		}
		
		// 画面をクリア
		gameData.canvasArr[gameData.layerIds.middle].context.clearRect(0, 0, w, h);
		gameData.canvasArr[gameData.layerIds.front].context.clearRect(0, 0, w, h);
		console.log('err1');
		// 演出 - 次の進行へ　　^ ... 行頭にマッチ　$... 行末に
		if (options.state.match(/^(select|enemy)$/)) {
			// 進行がselect,enemyの時
			// if (UiBattleEffect.draw(gameData, options, time)) {	// 効果
				console.log('err2');
				UtilBattleProcess.next(gameData, userData, options);		// 次に進行
			//}
		console.log('state is select,enemy.');
		} else {
			console.log('menu or end');
		}
	
		// 描画
		// UiBattleNumEffect.draw(gameData, options, time);   // 数字効果
		UiBattleBase.draw(gameData, options, time);　// バトル基本動作
		UtilBattleMenu.draw(gameData, options);        // メニュー描画
		// UiStatus.draw(gameData, userData);	// ステータスの描画
	}
}














