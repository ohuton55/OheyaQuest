'use strict';

class UiText {
	// 変数の初期化
	static fontW = 5;
	static fontH = 10;
	static images = {black: null, white: null};
	
	//------------------------------------------------------------
	//  画像設定
	static seImage(id, image) {
		this.images[id] = image;
	}
	//------------------------------------------------------------
	// 文字描画
	static draw( context, text, x, y, charW, color) {
		// 白か黒のフォント画像を取得
		const image = this.images[color];
	
		// 文字列の文字コードから画像を切り出して描画
		for(let i = 0; i < text.length; i++) {
			const refY = text.charCodeAt(i) * this.fontH;  // Y参照位置
			context.drawImage(image,
				0, refY, this.fontW, this.fontH,
				x + charW * i, y | 0, charW, charW * this.fontH / this.fontW | 0
			);	
		}
	};
}