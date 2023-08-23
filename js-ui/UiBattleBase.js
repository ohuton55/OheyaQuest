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
		
		// 自ダメージ演出（赤くする）
		if (options.state == 'enemy') {
			context.globalAlpha = 0.5;
			context.fillStyle = '#f00';		// ダメージ色　赤
			context.fillRect(0, 0, rect.w, rect.h);
			context.globalAlpha = 1;		// 透明度を戻す
		}
		
		// 敵ステータスの描画
		const en = options.enemyData;
		const text = `${en.name} Lv.${en.level}`;
		const text2 = `HP ${en.hp}/${en.hpMax}  `
			+ `AT:${en.at} DF:${en.df}`;
		UiText.drawCenter(context, text, rect.w / 2 | 0, 24, 10, 'white');
		UiText.drawCenter(context, text2, rect.w / 2 | 0, 42, 5, 'white')
		
		// キャラを揺らす
		let moveX = 0;
		let moveY = 0;
		if (options.state !== 'menu' && options.actionType !== 'Heal') {
			moveX = ((time.sum / 50 | 0) * 17 % 4) - 2;   // 揺れ移動X
			moveY = ((time.sum / 50 | 0) * 31 % 4) - 2;   // 揺れ移動Y
		}
		
		// 敵キャラ描画
		const refX = en.image;
		const refY = 1;
		const charaImg = GameImage.images['chara'];
		const drawSize = chipSize * 9;
		const drawX = ((rect.w - drawSize) / 2 | 0) + moveX;
		const drawY = ((rect.h - drawSize) / 2 + (drawSize / 8) | 0) + moveY;
		UiChip.draw(
			context, charaImg, chipSize, drawSize,
			refX, refY, drawX, drawY
		);
		
		context.restore();	// 原点復帰
	}
}












