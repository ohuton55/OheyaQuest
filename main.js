'use strict';

window.onload = function() {
	eruda.init();

	const gameData  = new GameData();	// ゲーム データ

	//------------------------------------------------------------
	// 初期化
	const id = '#app';
	// canvasArrを初期化する
	gameData.canvasArr = GameCanvas.initCanvasArr(id, gameData);
	GameView.init(id, gameData);	// 表示の初期化	
	//------------------------------------------------------------
	// リソース読み込み
	const promiseArr = [];
	
	// 画像
	promiseArr.push(GameImage.load('land',		'image/land.png'));
	promiseArr.push(GameImage.load('chara', 	   'image/chara.png'));
	promiseArr.push(GameImage.load('fontBlack', 'image/fontBlack.png'));
	promiseArr.push(GameImage.load('fontWhite', 'image/fontWhite.png'));
	
	Promise.all(promiseArr).then(arg => {
		UiText.setImage('black', GameImage.images['fontBlack']);
		UiText.setImage('white', GameImage.images['fontWhite']);
		console.log('promiseall_ok!');
		
		// ゲーム開始
		SceneTitle.start(gameData);  	// タイトル開始
		GameAnim.start();	// アニメーション開始
	});
};

	
			
	
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		