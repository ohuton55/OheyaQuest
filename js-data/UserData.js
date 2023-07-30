'use strict';

class UserData {
	
	constructor() {
		this.level = 1;
		this.exp  = 0;
		this.hp	= 100;
		this.hpMax = 100;
		this.mp 	= 100;
		this.mpMax = 100;
		this.at	= 10;
		this.df	= 10;	
	}
	
	//------------------------------------------------------------
	// 開始時点データに
	setStart(gameData) {
		// 乱数固定用シード（マップを生成するタネ
		this.seed =  + new Date();	// new Date().getTime() と同じ
		
		// 地図用データ
		this.mapArr = [];
		this.townArr = [];
		this.castle = [];
		
		// アイテム（宝もの配列と同じサイズで、0で埋めてある）
		// Arr.map() 埋める関数　.map(o => 0)で全てのインデックスに0を入れる
		this.item = gameData.treasureArr.map(o => 0);
		
		// 移動用データ
		this.direction = null;	// 方向
		this.moveCount = 0;	// 移動カウンター
		this.x = gameData.mapW / 2 | 0;
		this.y = gameData.mapH / 2 | 0;
		this.xDiff = 0;	// 差分
		this.yDiff = 0;
	}
}