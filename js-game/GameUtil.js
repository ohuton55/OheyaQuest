'use strict';

class GameUtil {
	// 変数の初期化
	//static ua = {};
	//------------------------------------------------------------
	
	
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
			const t = x ^ (x << 11);
			console.log (t);
			x = y; y = z; z = w;
			console.log(x);
			console.log(y);
			console.log(w);
			console.log(t>>8);
			console.log(t^(t>>8));
			console.log(w>>19);
			console.log(w^(w>>19));
			console.log((w^(w>>19))^(t^(t>>8)));
			console.log('-------------');
			return w =  (w^(w>>19))^(t^(t>>8));
		}
	};
}