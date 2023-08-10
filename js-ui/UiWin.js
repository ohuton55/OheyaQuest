'use strict';

class UiWin {
	// 変数の初期化
	static marginX = 8;
	static marginY = 5;
	static lineH = 13;	// 行の高さ

	//------------------------------------------------------------
	// ウィンドウ描画　外側から、黒白黒で枠を描く
	static drawWin(context, x, y, w, h) {
		// 外側黒
		context.fillStyle = '#000';
		context.fillRect(x, y, w, h);
		
		// 枠白
		context.fillStyle = '#fff';
		context.fillRect(x + 1, y + 1, w - 2, h - 2);
		
		// 内側黒
		context.fillStyle = '#000';
		context.fillRect(x + 2, y + 2, w - 4, h - 4);
	};
	
	//------------------------------------------------------------
	// ウィンドウ サイズ取得　行数と文字数から、必要なウィンドウ サイズを計算
	static getWinSize(lineLen, textLen) {
		// 変数の初期化
		const w = this.marginX * 2 + textLen * UiText.fontW;
		const h = this.marginY * 2 + (lineLen - 1) * this.lineH + UiText.fontH;
		const lineRect = [];	// 各行の短形配列（ウィンドウ左上を0,0とした座標）
		// 各行の短形を計算
		for (let i = 0; i < lineLen; i++) {
			lineRect.push({
				x: 3,
				y: this.marginY + i * this.lineH - 2,  // 0なら3
				w: w - 6,	// 3 * 2
				h: this.lineH
			});
		}	
		// 横幅、高さ、各行の矩形配列 を戻す
		return { w: w, h: h, lineRect: lineRect }
	};
	
	//------------------------------------------------------------
	// ウィンドウ文字描画　1行分描画
	//   lineNum - 行番号。Y位置計算に使用
	static drawWinText(context, x, y, text, lineNum) {
		const dX = x + this.marginX;
		const dY = y + this.marginY + lineNum * this.lineH;
		UiText.draw(context, text, dX, dY, UiText.fontW, 'white');
	};
	
	//------------------------------------------------------------
	// 1 行分の短形をゲット　ウィンドウサイズをもとにする
	static getLineRect(x, y, winSize, i) {
		const o = winSize.lineRect[i];	// ウィンドウサイズから行の短形を指定
		
		return {x: x + o.x, y:  y + o.y, w: o.w, h: o.h};
		// o.x  o.y. ... パディングの分　XY位置を調整する
	}
}


























