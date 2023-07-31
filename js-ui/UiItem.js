'use strict';

class UiItem {
	// アイテムの描画
	static draw(gameData, userData) {
		// アイテムリストをつくる
		const arr = UtilMIsc.getMyItemNames(gameData, userData, false, ' ');
		
		if (arr.length === 0) { return }	// アイテムがない時、飛ばす
		// .unshift(); ... 先頭に要素を追加する、新しい配列の長さを返す
		arr.unshift('Item:');
		
		// 変数の初期化
		const layerId = gameData.layerIds.middle;
		const context = gameData.canvasArr[layerId].context;
		
		const charW = 5;
		const lineH = 10;
		
		const chipSize = gameData.chipSize;
		const x = chipSize / 2 | 0;
		const y = gameData. h - (chipSize / 8 | 0) - arr.length * lineH;
		
		// アイテムの描画...1行ずつ内容を描画
		arr.forEach(
			(t, i) => UiText.drawFrame(context, t, x, y + i * lineH, charW, 'white')
		);
	}
}