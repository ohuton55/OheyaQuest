'use strict';

class GameView {
	// 変数の初期化
	static w = 0;		// キャンバス横幅
	static h = 0;		// キャンバス高さ
	static element = null;	// 対象要素
	static rect = {};	// 対象短形
	static funcTap = null; 	// タップ実行関数
	
	// ビューの初期化
	static init(selectorId, {w, h}) {
		this.w = w;
		this.h = h;
		this.element = document.querySelector(selectorId); // 要素を選択
		console.log('start___GameView_init()');

		this.initTap();	// タップの初期化
	};
	//------------------------------------------------------------
	// タップの初期化
	static initTap() {
		// 使用イベント
		const events = {
			// マウス系
			mousedown:	'down',
			mouseup:		'up',
			mousemove:	'move',
			mouseenter:	'enter',
			mouseleave:	'up',
			// タッチ系
			touchstart:		'down',
			touchend:		'up',
			touchmove:		'move'
			touchcancel:	'up'
		};
	
		// イベント処理関数
		//const fnc = type => {
		//	return e => {
				// クライアント位置取得（モバイルではタッチを利用）
				//const eX = ;
		//		console.log(e.changedTouches);
		//	}	
		//};
		
		// イベントの登録
		//const type = events['touchstart'];
		//this.element.addEventListener('touchstart', fnc(type));
	};
}













