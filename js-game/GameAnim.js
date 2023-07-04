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
	 //-------------------------------------------------
	 // アニメーション用変数
	 static funcUpdate = null;	// 更新用実行関数（アニメ更新のたび、呼び出される
	 static time = {
	 	sum:  0,
	 	old:  null,
	 	now:  0,
	 	diff:  0
	 };
	 static flagStop = false;		// 停止フラグ
	  //-------------------------------------------------
	  // アニメーションの開始
	  static start() {
	  	this.flagStop = false;		// 停止フラグを偽に
	  	this.time.old = + new Date();		// oldtimeを初期化
	  	
	  	// アニメーションループ
	  	const anmFnc = () => {
	  		this.update();
	  		if (! this.flagStop) { this.requestAnim(anmFnc) } // 再描画で実行
	  	};
	  	anm Fnc();	// 初回実行
	  };
  	  //-------------------------------------------------
  	  // アニメーションの停止
  	  static stop() {
  	  	this.flagStop = true;		// 停止フラグを真に
  	  };
    	  //-------------------------------------------------
    	  // アニメーションの更新
    	  static update() {
    	  	// 差分時間と経過時間を計算
    	  	const time = this.time;
    	  	time.now =+ new Date();	// newtimeの設定
    	  	
    	  	// ポーズ時を考慮して、1秒以上遅延があるなら、一旦差分を0にする
    	  	if (time.old == null || time.now - time.old >= 1000) {
    	  		time.old = time.now;
    	  	}
    	  	// time.oldがnullなら0を、そうでないなら差分をtime.diffに代入
    	  	time.diff = time.old == null ? 0 : time.now - time.old;
    	  	time.sum += time.diff;	// 時間の合計
    	  	time.old = time.now;		// old timeを更新
    	  	
    	  	// 更新実行関数を実行
    	  	if (typeof this.funcUpdate === 'function'){
    	  		this.funcUpdate(this.time);
    	  	}
    	  };
    	  //-------------------------------------------------
    	  // 更新実行関数を設定
    	  static add(func){
    	  	this.funcUpdate = func;
    	  }
}