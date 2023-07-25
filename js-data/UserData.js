'use strict';

class UserData {
	
	
	setStart(gameData) {
		
		// 地図用データ
		this.mapArr = [];
		
		// 移動用データ
		this.x = gameData.mapW / 2 | 0;
		this.y = gameData.mapH / 2 | 0;
		this.xDiff = 0;
		this.yDiff = 0;
		
		console.log('Finish__setStart!!');
	}
}