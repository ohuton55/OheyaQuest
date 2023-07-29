'use strict';

class UserData {
	
	
	setStart(gameData) {
		// 乱数固定用シード（マップを生成するタネ
		this.seed =  + new Date();	// new Date().getTime() と同じ
		
		// 地図用データ
		this.mapArr = [];
		this.townArr = [];
		this.castle = [];
		
		// 移動用データ
		this.direction = null;	// 方向
		this.moveCount = 0;	// 移動カウンター
		this.x = gameData.mapW / 2 | 0;
		this.y = gameData.mapH / 2 | 0;
		this.xDiff = 0;	// 差分
		this.yDiff = 0;
		
		console.log('Finish__setStart!!');
	}
}