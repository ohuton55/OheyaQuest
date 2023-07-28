'use strict';

class UiMap {
	// マップと自キャラを描画する
	static draw(gameData, userData, time) {
		// 変数の初期化
		const w = gameData.w;
		const h = gameData.h;
		const mapW = gameData.mapW;
		const mapH = gameData.mapH;
		const chipSize = gameData.chipSize;
		const landImg = GameImage.images['land'];
		const charaImg = GameImage.images['chara'];
		
		// 描画エリアの初期化
		const layerId = gameData.layerIds.middle;
		const context = gameData.canvasArr[layerId].context;
		context.clearRect(0, 0, w, h);		// 更新ごとに領域をクリア
		
		// マップの描画用変数を初期化
		const squareW = w / chipSize | 0;	// 画面に入るマスの数
		const squareH = h / chipSize | 0;
		const centerX = squareW / 2 | 0;		// 中央マス座標
		const centerY = squareH / 2 | 0;
		const offsetX = userData.x - centerX;	// 中央マス座標から見た現在位置
		const offsetY = userData.y - centerY;
		const moveX = userData.xDiff * chipSize;  // 移動後の位置
		const moveY = userData.yDiff * chipSize;

		//-----------------------
		// マップの描画
		for (let y = -1; y <= squareH; y++) {
			for (let x = -1; x <= squareW; x++) {
				// 描画参照位置の計算
				const mapX = (x + mapW + offsetX) % mapW;
				const mapY = (y + mapH + offsetY) % mapH;
				// 土地描画
				const land = userData.mapArr[mapY * mapW + mapX];
				UiChip.draw(
					context, landImg, chipSize, chipSize,
					land, 0, x * chipSize + moveX, y * chipSize + moveY
				);
			}
		}
		
		// 自キャラ描画
		const x = squareW / 2 | 0;	// 中央....（7/25時点で使ってない
		const y = squareH / 2 | 0;	// 中央....（7/25時点で使ってない
		const charaX = (time.sum / 500 | 0) % 2; // キャラ　アニメ用切替
		// %4 …chara.pngのキャラが4等分だから
		
		UiChip.draw(
			context, charaImg, chipSize, chipSize,
			charaX, 0, centerX * chipSize, centerY * chipSize
			// 0…chipSizeを掛けているから　敵表示の場合は1
		);
	};
}







