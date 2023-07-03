'use strict';

class UiText {
	// 変数の初期化
	static fontW = 5;
	static fontH = 10;
	static images = {black: null, white: null};	// 画像
	//------------------------------------------------------------
	// 文字描画
	// color - black, white
	static draw(context, text, x, y, charW, color) {
		// 白か黒のフォント画像を取得
		const image = this.images[color];
		
		// 文字列の文字コードから画像を切り出して描画する
		for( let i = 0; i < text.length; i ++) {
			const refY = text.charCodeAt(i) * this.fontH;  // Y参照位置
			context.drawImage(image,	// 1文字描画
				0, refY, this.fontW, this.fontH,
				x + charW * i, y | 0, charW, charW * this.fontH / this.fontW | 0
			);
		}
	};
	//------------------------------------------------------------
	// 文字描画　中央位置
	static drawCenter(context, text, x, y, charW, color) {
		x -= text.length * charW / 2 | 0;	// X方向を半分左に
		y -= charW * this.fontH / this.fontW / 2 | 0;  // Y方向を半分上に
		this.draw(context, text, x, y, charW, color);  //文字描画				
	};
}