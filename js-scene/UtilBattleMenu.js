'use strict';

class UtilBattleMenu {
	
	// メニュー初期化
	static init( gameData, userData, options) {
		options.menuArr = UtilMisc.getMyItemNames(gameData, userData, true, '>');
		options.menuArr.unshift('> Sword');
	}
	
	// メニュー描画
	static draw(gameData, options){
		const h = gameData.h;
		const chipSize = gameData.chipSize;
		
		// メニューに入れる文字は1行13文字まで
		const winSize = UiWin.getWinSize(menuArr.length, 13);
		winSize.x = chipSize / 2 | 0;
		winSize.y = h - chipSize / 2 | 0;
		options.menuWinSize = winSize;
		
~
	}

}





