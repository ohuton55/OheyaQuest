	'use strict';
	
	class GameImage {
		// 変数の初期化
		static images = {}; // 読み込んだ画像を格納する用
	
		// 読み込み
		static load(id, url) {
			
			// プロミスオブジェクトを戻す
			return  new Promise((resolve, reject) => {
				const image = this.images[id] = new Image();
				// 画像が読み込まれたら、resolveを実行
				image.onload = () => resolve('load image:' +	 id); 
				image.onerror = reject;
				image.src = url;	// URLを指定する
			});
		}
	}