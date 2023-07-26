'use strict';

class UtilMap {
	// マップを自動生成するよ
	static gen(gameData, seed) {
	
		const xors = new GameUtil.Xors(seed);	// 乱数生成	
		const landIds = gameData.landIds;	// 土地
		const w = gameData.mapW;
		const h = gameData.mapH;
		const size = w * h;	// マップサイズ
		const mapArr = new Array(size).fill(landIds.plain);	// マップ配列　平地で埋める
	
		// 山
		for (let y = 0; y < h; y++) {
			for(let x = 0; x < w; x++) {
				if (xors.random() % 60 !== 0) { continue }	// 60/1の確率で山生成を始める
				console.log('start__mountain');
				//const max = 10 + (this.random(seed)) % 50;  //	// 山をまく回数
				const max = 10 + xors.random() % 50;
				for (let i = 0; i < max; i++) {
					const x2 = (x + (xors.random() % 7) - 25 + w) % w;
					const y2 = (y + (xors.random() % 7) - 25 + h) % h;
					const n = y2 * w + x2;
					mapArr[n] = landIds.mountain;
				}		
			}
		}
		
		// マップを返す
		return {mapArr: mapArr};
	};
	
	static random(max) {
		return Math.floor(Math.random() * max);
	}
}