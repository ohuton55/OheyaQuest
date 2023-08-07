'use strict';

class UtilBattleMenu {
	
	// メニュー初期化
	static init(gameData, userData, options) {
		options.menuArr = UtilMisc.getMyItemNames(gameData, userData, true, '> ');
		options.menuArr.unshift('> Sword');
	}
	//------------------------------------------------------------
	// メニュー描画
	static draw(gameData, options){
		const h = gameData.h;
		const chipSize = gameData.chipSize;
		
		// メニューに入れる文字は1行13文字まで
		const winSize = UiWin.getWinSize(options.menuArr.length, 13);
		winSize.x = chipSize / 2 | 0;
		winSize.y = h - winSize.h - chipSize / 2;
		options.menuWinSize = winSize;
		
		// ウィンドウ描画
		const layerId = gameData.layerIds.middle;
		const context = gameData.canvasArr[layerId].context;
		UiWin.drawWin(context, winSize.x, winSize.y, winSize.w, winSize.h);
		
		// 進行がselectなら選択いちを描画
		if (options.state === 'select') {
			// 選択位置描画
			const rect = UiWin.getLineRect(winSize.x, winSize.y,
				winSize, options.selectMenu);
			context.fillStyle = '#888';
			context.fillRect(rect.x, rect.y, rect.w, rect.h);
		}
		
		// メニュー描画
		options.menuArr.forEach(
			(t, i) => UiWin.drawWinText(context, winSize.x, winSize.y, t, i)
		);
	}
	
	//------------------------------------------------------------
	// メニュー　タップ判定
	
}









