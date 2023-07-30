'use strict';

class UiMapFull {
	// 全体マップを描画

	static draw(gameData, userData, time) {
		// 変数を初期化
		const mapW = gameData.mapW;
		const mapH = gameData.mapH;
		const chipSize = gameData.chipSize;
		const pointSize = 1;
		const margin = 2;
		
		const originX = gameData.w - chipSize / 2 - mapW * pointSize - margin;  // 原点X位置
		const originY = margin + chipSize / 2;	// 原点Y位置
		
		const isView = (time.sum / 500 | 0) % 2 === 0;  // 点滅表示用
		const landImage = GameImage.images['land'];  // 土地の画像
		
		// 描画対象の初期化
		const layerId = gameData.layerIds.middle;
		const context = gameData.canvasArr[layerId].context;
		
		context.save();		// コンテキストを変更前に保存しておく
		context.translate(originX, originY);	// コンテキスト変形
		
		// 土台
		context.fillStyle = '#000';
		context.fillRect(
			-margin, 
			-margin,
			mapW * pointSize + margin * 2,
			mapH * pointSize + margin * 2
		);
		
		// 全体マップ
		for (let y = 0; y < mapH; y++) {
			for (let x = 0; x < mapW; x++) {
				const land = userData.mapArr[y * mapW + x];
				UiChip.draw(
					context, landImage, chipSize, pointSize,
					land, 0, x * pointSize, y * pointSize
				);
			}
		}
		
		// 街
		context.fillStyle = isView ? '#00f' : '#f0f';
		userData.townArr.forEach(o => context.fillRect(
			o.x * pointSize,
			o.y * pointSize,
			pointSize,
			pointSize
		));
		
		// ボス城 
		context.fillStyle = isView ? '#80f' : '#ff0';
		context.fillRect(
			userData.castle.x * pointSize - 1,
			userData.castle.y * pointSize - 1,
			pointSize + 1,
			pointSize + 1
		);
		
		// 現在地
		context.fillStyle = isView ? '#00f' : '#fff';
		context.fillRect(
			userData.x * pointSize - 1,
			userData.y * pointSize - 1,
			pointSize + 1,
			pointSize + 1
		);
		
		context.restore();	// コンテキストを復帰させる
	};
}









