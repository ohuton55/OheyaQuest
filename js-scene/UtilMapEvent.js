'use strict';

class UtilMapEvent {
	//  イベント判定
	static check(gameData, userData, options) {
		// 
		const x = userData.x;
		const y = userData.y;
		let eventOpt;
		
		// 最後の判定位置を踏んでいても無視する
		if (options.lastX === x && options.lastY ===y) { return false }
	
		// 最後の判定位置を取っておく
		options.lastX = x;
		options.lastY = y;
		
		// 開始直後は発生させない
		if (userData.moveCount < 2) { return false }
		
		//------------------------------------------------------------
		// 街位置を取得 
		// テスト関数に一致すればインデックスを、一致しなければ-1を返す
		const townIndex = userData.townArr.findIndex(
			o => o.x === x && o.y === y
		);
		
		// 街判定
		if (townIndex !== -1) {
			// 街だよ
			eventOpt = { town: 1, heal: 1 };	// 街、回復　を設定
			
			// その街のおたからをすでに持っているか判定 0=false
			if (! userData.item[townIndex]) {
				// その街の宝を持っていないとき=0
				userData.item[townIndex] = 1;	// 宝ものげっと
				eventOpt.item = townIndex;		// おたからげっとイベント追加
			}
			
			SceneEvent.start(gameData, userData, eventOpt);
		}
	}

}











