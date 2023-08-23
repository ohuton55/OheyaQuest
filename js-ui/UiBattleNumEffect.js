'use strict';

class UiBattleNumEffect {

	// すうじエフェクト描画
	static draw(gameData, options, time) {
		// 最終数字効果がなければ飛ばす
		if (! options.numEffectLast) { return }

		// 時間の計算
		const diff = time.sum - options.numEffectLast;   // 時間差分
		const timeMax = 500;	// 最大
		
		// 終了判定
		if (diff > timeMax) {
			options.numEffectLast = undefined;
			return;
		}
		
		// 描画用変数の初期化
		const rect = options.enemyRect;		// 敵短形
		const charW = 50;		// 文字情報
		const x = rect.x + rect.w / 2 | 0;
		const move = Math.sin(diff / timeMax * Math.PI);	// 移動
		const y = rect.y + rect.h - move * charW * 2;
		
		// 描画
		const layerId = gameData.layerIds.front;
		const context = gameData.canvasArr[layerId].context;
		UiText.drawFrame(context, '' + options.numEffectNum,  // フチ文字
			x, y, charW, 'white', 1);
	}
}










