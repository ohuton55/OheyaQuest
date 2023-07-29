'use strict';

class UtilMapMove {

	static move(gameData, userData, options, time) {
		// 移動終了のとき
		if (time.sum > options.lastMove + options.unitTime) {
			
			// イベント判定
			UtilMapEvent.check(gameData, userData, options)
			
			// おしっぱなしか
			if (options.keepDown) {	
				options.lastMove = time.sum;	// 最終時間を更新
				this.moveStart(gameData, userData, options);
				this.moveMiddle(userData, options, time);
			} else {
				userData.direction = null;	// 移動方向をリセット
				this.moveMiddle(userData, options, time);
			}
		} else {
			// 移動中の時	
			this.moveMiddle(userData, options, time);
		}
	}
	
	//-----------------------------------------------------------
	// 移動開始
	static moveStart(gameData, userData, options) {
		
		// 方向から移動先を計算
		let x = userData.x + {U: 0, D: 0, R: 1, L: -1}[options.direction];
		let y = userData.y + {U: -1, D: 1, R: 0, L: 0}[options.direction];
		
		// マップをループ
		x = (x + gameData.mapW) % gameData.mapW;
		y = (y + gameData.mapH) % gameData.mapH;
		
		// 移動できない範囲を指定
		const land = userData.mapArr[y * gameData.mapW + x];	// 座標に対応する土地配列の値
		if (land == gameData.landIds.water) {
			// 水マスだったら入れない
			userData.direction = null;
			return;
		}
		
		// 移動を反映する
		userData.x = x;
		userData.y = y;
		userData.direction = options.direction;
		userData.moveCount ++;	// 移動カウントを更新
	}
	
	//-----------------------------------------------------------
	// 移動中処理...経過時間から、移動アニメを作る
	static moveMiddle(userData, options, time) {
		
		// 単位時間あたりの移動した比率を、0-1.0で出す
		let rate = ( time.sum - options.lastMove ) / options.unitTime;
		rate = GameUtil.minMax(0, rate, 1);
		
		// 差分
		// 方向が空の時、差分をリセット
		if (userData.direction === null) { userData.xDiff = userData.yDiff = 0 }
		// 方向入力がある時、差分を計算.  xDiff,yDiffは移動アニメ処理にかんでる
		if (userData.direction === 'U') { userData.yDiff = -(1 - rate) }
		if (userData.direction === 'D') { userData.yDiff = (1 - rate) }
		if (userData.direction === 'L') { userData.xDiff = -(1 - rate) }
		if (userData.direction === 'R') { userData.xDiff = (1 - rate) }
	}
}








