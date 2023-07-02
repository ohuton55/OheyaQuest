'use strict;'
// 厳格に構文エラーをチェックするモード

// DevTool: Eruda初期化
eruda.init();

// DOMツリーの構築が完了したあと、開始する
document.addEventListener('DOMContentLoaded', function() {
//	let element = document.getElementById('test');
//	element.insertAdjacentHTML('afterend', '<p>DOMContentLoaded</p>');

	// 変数
//	const gameData = new GameData();	// ゲームデータ
//	const userData = new UserData();	// ユーザーデータ
//	userData.setStart(gameData);	// 開始時点データにセット
	//------------------------------------------------------
	// 初期化
//	const id = '#app';
	// canvasArrの初期化
//	gameData.canvasArr = GameCanvas.initCanvasArr(id, gameData);
//	GameView.init(id, gameData); // 表示の初期化
	//------------------------------------------------------
	// リソース
	
	
	
	// リソース読み込み後開始
	
	// ゲーム開始
//	SceneTitle.start(gameData, userData); // タイトル開始
	SceneTitle.start();
	SceneTitle.anim();
//	GameAnim.start();	// アニメーション開始
	console.log("test_main.js");
});