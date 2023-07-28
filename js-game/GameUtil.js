'use strict';

class GameUtil {
	// 変数の初期化
	//static ua = {};
	//------------------------------------------------------------
	// 最小〜最大の範囲にnを収める
	static minMax(min, n, max) {
		return Math.max(min, Math.min(n, max));
	}
	
	//------------------------------------------------------------
	// Xorshift
	// 	new GameUtil.Xors(n); として使う
	static Xors = function(n) {
		let x, y, z, w;
		
		// シード（関数　引数n
		this.seed = n => {
			x = 123456789;	y = 362436069;  z = 521288629;  w = 88675123;
			if (typeof n === 'number') { w = n }	// 引数の型が数字型だったら
		}
		this.seed(n);	// 初回実行
		
		// 呼び出すごとにランダムシャッフル
		this.random = () => {
			const t = x ^ (x << 11);	// 11bit分左シフトして、排他的論理和
			x = y; y = z; z = w;	// 移す
			// wを19bit分みぎシフトして、排他的論理和			// tを8bit分みぎシフトして、排他的論理和
			// さらにXOR
			return w =  (w^(w>>19))^(t^(t>>8));
		}
	};
}