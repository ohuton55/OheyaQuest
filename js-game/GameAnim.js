'use strict';

class GameAnim {
	// アニメーション実行用関数　ブラウザ依存を吸収するよ
	static requetAnim(cb) {
		return (
			// ベンダープレフィックスも入れておく
			window.requestAnimationFrame		      ||
			window.mozRequestAnimationFrame      ||
			window.webkitRequestAnimationFrame  ||
			window.oRequestAnimationFrame	      ||			window.msRequestAnimationFrame  ||
			// どれにも使えるメソッドがないブラウザで開いた時は60FPS、setTimeoutでの描画にする
			(cb => window.setTimeout(cb, 1000 / 60))		)(cb);		
	};
	
}