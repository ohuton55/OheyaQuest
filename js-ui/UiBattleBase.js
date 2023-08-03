'use strict';

class UiBattleBase {
	// 戦闘基本描画
	static draw(gameData, options, time) {

		// 変数の初期化
		const chipSize = gameData.chipSize;
		const rect = options.enemyRect;
		
		// 描画の初期化
		const layerId = gameData.layerIds.middle;
		const context = gameData.canvasArr[layerId].context;
		context.save();
		context.translate(rect.x, rect.y);	// 原点移動
		context.fillStyle = '#000';
		
		UiWin.drawWin(context, 0, 0, rect.w, rect.h);
		
		// 敵データ
		//const en = options.enemyData;
		//const text = `${en.name}    Lv. ${en.level} `
		//	+ `HP ${en.hp} / ${hpMax}`
		//	+ `AT ${en.at}   DF ${en.df}`;
		//console.log(text);		
	}
}












