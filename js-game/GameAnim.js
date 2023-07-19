'use strict';

class GameAnim {
	//------------------------------------------------------------
	// アニメーション実行用関数（ブラウザ依存を吸収）
	static requestAnim(cb) {
		return ('HEY!');
		
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
		this.flagStop = false;
		this.time.old = + new Date();		// 旧 初期化
		console.log(this.time.old);
		
		// アニメーションループ（再帰）
		const anmFnc = () => {
			this.update();
			//if(! this.flagStop) { this.requestAnim(anmFnc) }	// 再描画して実行
		};
		anmFnc();	// 初回実行
		console.log(this.time.sum);
	};
 	//------------------------------------------------------------
 	
 	//------------------------------------------------------------
 	// アニメーションの更新
 	static update() {
 		// 差分時間と経過時間を計算
 		const time = this.time;
 		console.log(time);
 		time.now +=  new Date();
 	};	//------------------------------------------------------------
	// 更新実行関数を設定
	static add(func) {
		this.funcUpdate = func;
	};

}