'use strict';

class UiChip {

	static draw(
		// 基本情報
		context, image, chipSize, drawSize,
		
		// 座標情報
		refX, refY, drawX, drawY
	) {
		// 描画
		context.drawImage(
			// 画像
			image,
			// 参照情報座標
			chipSize * refX | 0,	// 画像参照X
			chipSize * refY | 0,	// 画像参照Y
			chipSize  | 0,		// 画像参照 横幅
			chipSize  | 0,		// 画像参照 高さ
			// 描画座標情報
			drawX | 0,		// 描画X
			drawY | 0,		// 描画Y
			drawSize | 0,	// 描画横幅
			drawSize | 0		// 描画高さ
		);
	}
}