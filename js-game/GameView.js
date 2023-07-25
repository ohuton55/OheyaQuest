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
		
		this.initTap();
		this.autoResize();
	};
	//------------------------------------------------------------
	// 画面サイズの自動変更
	static autoResize() {
		const funcResize = () => {
			this.calcRect();	// 対象矩形の計算
			this.fitCanvas();	// 全キャンバスを画面にフィット
		};
		funcResize();
	};
	//------------------------------------------------------------
	// 対象矩形の計算
	static calcRect() {
		console.log('start__calcRect()');
		// ウィンドウサイズ
		const winW = window.innerWidth;
		const winH = window.innerHeight;

		// アプリ短形の計算
		this.rect.w = Math.min(winW, winH * this.w / this.h) | 0;
		this.rect.h = Math.min(winH, winW * this.h / this.w) | 0;
		this.rect.x = (winW - this.rect.w) / 2 | 0;
		this.rect.y = (winH - this.rect.h) / 2 | 0;
	};
	//------------------------------------------------------------
	// 全キャンバスを画面にフィット
	static fitCanvas() {
		this.element.querySelectorAll('canvas').forEach(o => {
			o.style.left = `${this.rect.x}px`;
			o.style.top = `${this.rect.y}px`;
			o.style.width = `${this.rect.w}px`;
			o.style.height = `${this.rect.h}px`;
		});
	}	
	//------------------------------------------------------------
	static initTap() {
		console.log('GameView_initTap()');
			// 使用イベント
		const events = {
			// マウス系
			mousedown:   'down',	// 押下
			mouseup:     'up',		// 解放
			mousemove:   'move',	// 移動
			mouseenter:  'enter',	// 侵入
			mouseleave:  'up',  	// 離脱
			// タッチ系
			touchstart:  'down',	// 押下
			touchend:    'up',		// 解放
			touchmove:   'move',	// 移動
			touchcancel: 'up'   	// 離脱
		};
		
		const fnc = type => {
			return e => {
				// クライアント位置取得（モバイルではタッチを利用			
				const eX = (e.changedTouches ? e.changedTouches[0] : e).clientX;
				const eY = (e.changedTouches ? e.changedTouches[0] : e).clientY;
				// イベント位置の計算（相対サイズからゲーム内位置を求める）
				console.log(eX);
				console.log(eY);
				console.log(type);
			}
		}
		
		this.element.addEventListener('touchstart', fnc('touchstart'));
		console.log(events['touchstart']);
	};
}













