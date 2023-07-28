'use strict';

class UtilMapDirection {
	// w ... 200
	// h ... 150
	// x ... 100
	// y ... 170
	// rate ... 200 / 150;  4/3 = 1.33..
	// x で画面を分割する→ w で画面を分割する
	// 100 / 170 = 0.588...
	// 1.33 を超えるとき、上か右
	
	static check(x, y, w, h) {
		// 変数の初期化
		const rate = w / h;	// 比率
		let direction = ''; 	// 方向
	
		// 方向の判定　画面をxで分割
		if (x / y > rate) {
			// 上か右
			if ((w - x) / y > rate) {
				direction = 'U';	// up
			} else {
				direction = 'R';	// right
			}
		} else {
			// 左か下
			if ((w - x) / y > rate) {
				direction = 'L';	// left
			} else {
				direction = 'D';	// down
			}
		}
	
		// 方向を返す
		return direction;
	}
}