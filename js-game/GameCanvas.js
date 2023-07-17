'use strict';

class GameCanvas {

	static genCanvas(w, h) {
	
		console.log('test"!"');
		const canvas = document.createElement('canvas'); // 描画領域を定義する
		canvas.setAttribute('width', w);
		canvas.setAttribute('height', h);	
		const context = canvas.getContext('2d');  // 2Dコンテキストを描画領域に追加して、描画インターフェースを持たせる
		context.imageSmoothingEnabled = false; // ドット絵用設定にする
		
		// オブジェクトを戻り値とする
		return {canvas: canvas, context: context, w: w, h: h};
	}
	
	
	//------------------------------------------------------------
	// キャンバス配列を初期化する
	//	 {w: 横幅数値, h: 横幅数値, layerMax: 最大レイヤー数, bg: 背景色}
	static initCanvasArr(selectorId, {w, h, layerMax, bg}) {
	
		const canvasArr = [];	
		const element = document.querySelector(selectorId); // 要素#appを取得

		console.log(layerMax);
		for (let i = 0; i < layerMax; i++) {
			const c = this.genCanvas(w, h);	// レイヤー枚数分、キャンバスを生成する
			
			// 一番下は、背景色で塗りつぶす
			if (i === 0) {
				c.context.fillStyle = bg;
				c.context.fillRect(0, 0, c.w, c.h);
			}
			
			element.appendChild(c.canvas);		// DOMに追加する
			canvasArr.push(c);	
		}
		
		// キャンバス用配列をもどす
		return canvasArr;
	}
}