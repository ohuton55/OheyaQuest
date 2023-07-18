'use strict';

class GameData {

	constructor() {
		// 描画用設定
//		this.w = 320;
//		this.h = 240;
		
		if(window.orientation == 90) {		// 横向きなら
//			this.h = window.screen.width * 0.7;
			this.w = 700;
//			this.w = window.screen.height * 0.7;
			this.h = 525;
		} else {
//			this.w = window.screen.width  * 0.7;
			this.w = 700;
//			this.h = window.screen.height * 0.7;
			this.h = 525;
		}
		this.bg = '#000';
		
		this.layerMax = 3;
		this.layerIds = {
			bg:		0,	// 背景
			middle:  1,	// 中
			front:	2	// 手前
		};
		

		// マップ用設定
		this.mapW = 64;
		this.mapH = 48;
		this.chipSize = 16;
	
	};
}
