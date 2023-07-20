'use strict';

class GameAnim {
	//------------------------------------------------------------
	// アニメーション実行用関数（ブラウザ依存を吸収）
	static requestAnim(cb) {
		return(
			window.requestAnimationFrame		       ||
			window.webkitRequestAnimationFrame  ||
			window.mozRequestAnimationFrame     ||
			window.oRequestAnimationFrame	       ||
			window.msRequestAnimationFrame  ||
			(cb => window.setTimeout(cb, 1000 / 60))
		)(cb); 	
		// どのブラウザにも該当しない場合、およそ60FPSくらいで描画
	};
	//------------------------------------------------------------
	// アニメーション用変数
	static funcUpdate = null;		// 更新実行関数(SceneTitle.tap,anim)
	static time = {
    			sum: 0,
    			old: null,	// 旧 Date
    			now:  0,		// 新 Date
    			diff: 0
	};
	static flagStop = false;	// 停止フラグ
	//------------------------------------------------------------
	// アニメーションの開始
	static start() {
		console.log(this.funcUpdate);
		this.flagStop = false;
		this.time.old = + new Date();		// 旧 初期化
		console.log('Game.anim.start()_time.old is');
		console.log(this.time.old);
		console.log(this.time.diff);
		// アニメーションループ（再帰）
		const anmFnc = () => {
			this.update();
			if(! this.flagStop) { this.requestAnim(anmFnc) }	// 再描画して実行
		};
		anmFnc();	// 初回実行
	};
 	//------------------------------------------------------------
 	// アニメーションの停止
 	static stop() {
 		this.flagStop = true;
 	}
 	//------------------------------------------------------------
 	// アニメーションの更新
 	static update() {

 		// 差分時間と経過時間を計算
 		const time = this.time;
 		time.now +=  new Date();

 		// 1秒以上遅延があったら、いったん差分を0にできるらしい
 		if (time.old == null || time.now - time.old >= 1000){
 			time.old = time.now;
 			console.log('diff !!');
 		}
 		
 		console.log('not diff is _____ 0');
 		// time.oldがnullだったら0 そうでなければ差分をdiffに代入
 		//time.diff = time.old == null ? 0 : time.now - time.old;
 		if (time.old == null) {
 			time.diff = 0;
 		} else {
 			time.diff = time.now - time.old;
 		}
 		console.log('time.diff___is');
 		console.log(time.diff);
 		
 		
 		time.sum += time.diff;
 		time.old = time.now;
 		
 		// 更新実行関数をスタート
 		if (typeof this.funcUpdte === 'function') {
 			this.funcUpdate(this.time);
 			console.log('start__funcUpdate');
 		}
 	};	//------------------------------------------------------------
	// 更新実行関数を設定
	static add(func) {
		this.funcUpdate = func;
		console.log('start__GameAnim.add');
	};

}