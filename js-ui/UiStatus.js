'use strict';

class UiStatus {

	static draw(gameData, userData) {
	
		// ステータス文字列
		const level = userData.level;
		const exp   = userData.exp;
		const hp	= userData.hp;
		const mp	= userData.mp;
		const hpMax = userData.hpMax;
		const mpMax = userData.mpMax;
		const at 	= userData.at;
		const df 	= userData.df;
		
		// 描画用文字列配列
		const text = [
			`Lv ${level}    Exp ${exp}`,
			`HP ${hp} / ${hpMax}`,
			`MP ${mp} / ${mpMax}`,
			`AT ${at}   DF ${df}`
		];
	
		// 変数の初期化
		const layerId = gameData.layerIds.middle;
		const context = gameData.canvasArr[layerId].context;
		const x = gameData.chipSize / 2 | 0;
		const y = gameData. chipSize / 2 | 0;
		
		const winSize = UiWin.getWinSize(text.length, text[0].length);
		UiWin.drawWin(context, x, y, winSize.w, winSize.h);
		// 文字描画    t...text   i...index
		text.forEach((t, i) => UiWin.drawWinText(context, x, y, t, i));
	}
}






