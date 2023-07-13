	'use strict';
	
	class GameImage {
		// 変数の初期化
		static images = {}; // 読み込んだ画像を格納する用
	
		// 読み込み
		static load(id, url) {
			const image = this.images[id] = new Image();
			image.src = url;
			 /* ドット絵表示 */
  			image.style.imageRendering = '-webkit-optimize-contrast';  /* Safari */
  			image.style.imageRendering = '-moz-crisp-edges';	  /* FireFox */
			image.style.imageRendering = 'pixelated';
		}
	}