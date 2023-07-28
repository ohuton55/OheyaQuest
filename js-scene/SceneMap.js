'use strict';

class SceneMap {
	// tap()使用の変数を初期化
	static options = {
		keepDown: false,	// 押下を維持する
		direction: null,		// 方向
		lastMove: 0,			// 最終移動時間
		unitTime: 250		// どのくらい時間をかけて移動するか
	}

	static start(gameData, userData) {
		
		GameView.add(this.tap.bind(this, gameData));	// タップを登録
		GameAnim.add(this.anim.bind(this, gameData, userData));  // アニメを登録	
	}
	
	static tap(gameData, x, y, type) {
		// 変数の初期化
		const options = this.options;		// 設定
	
		// 押しっぱなしのとき
		if (type === 'down') 			{ options.keepDown = true }
		if (type === 'up' || type === 'leave') { options.keepDown = false }
			
		// 方向の判定
		options.direction = UtilMapDirection.check(x, y, gameData.w, gameData.h);
	}
			
	static anim(gameData, userData, time) {
		// 変数を初期化
		const options = this.options;
	
		// 計算→描画
		UtilMapMove.move(gameData, userData, options, time);	// 移動計算
		UiMap.draw(gameData, userData, time);	  // マップと自キャラ描画
	}
}
















