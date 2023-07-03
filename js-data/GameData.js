'use strict';

class GameData {
	// コンストラクター
	constructor() {
		// 描画用設定
		this.w = 320;	// 描画領域　横幅
		this.h = 240;	// 描画領域　高さ
		this.bg = '#f0f';	// 背景色
		
		this.layerMax = 3;	// レイヤー最大数
		this.laylerIds =. {	// レイヤーID
			bg: 0,
			middle: 1,
			front: 2		
		};
	
	}
}