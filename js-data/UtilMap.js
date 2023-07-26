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
				const max = 10 + xors.random() % 50;		// 山をまく回数
				for (let i = 0; i < max; i++) {
					const x2 = (x + (xors.random() % 7) - 25 + w) % w;
					const y2 = (y + (xors.random() % 7) - 25 + h) % h;
					const n = y2 * w + x2;
					mapArr[n] = landIds.mountain;
				}		
			}
		}
		
	// 森と水
	for (let i = 0; i < size; i++) {
		if (xors.random() % 6 === 0) { mapArr[i] = landIds.forest};	// 6/1で森へ
		if (xors.random() % 12 === 0) { mapArr[i] = landIds.water};	// 12/1で水へ
	}
	
	// ゲーム開始地点は平地にする
	const xStrt = w /2 | 0;	// 開始地点X
	const yStrt = h / 2 | 0;	// 開始地点Y
	for (let y = -1; y < 2; y++) {
		for (let x = -1; x < 2; x++) {
			const yPln = (yStrt + y + h) % h * w; 	// （スタート地点+差分+画面高さ）画面高さで割った余り×キャンバス幅
			const xPln = (xStrt + x + w) % w; 	// （スタート地点+差分+画面幅）画面幅で割った余り
			const i = yPln + xPln;
			mapArr[i] = landIds.plain;	// 開始地点から3x3ますを平地にする
		}
	}
	
	// 敵城を作る…マップの端っこ（0.8-1.0 , 0 - 0.2）に召喚
	// 0.8 - 1.0 ... A = w * 0.8 | 0;
	// 			 B = (A * w) % w;
	//0.    - 0.2 ... C = % (w * 0.4 | 0);
	// random	    = xors.random()
	//端っこ召喚　 = (A + random %  C )  % w;
	const x = ((w * 0.8 | 0) + xors.random() % (w * 0.4 | 0)) % w;
	const y = ((h * 0.8 | 0) + xors.random() % (h * 0.4 | 0)) % h;
	const castle = { x: x, y: y };	// 城のXY位置とっとく
	mapArr[y * w + x] = landIds.castle;	// ますを城にする
		
		// マップを返す
		return {mapArr: mapArr};
	};
	
	static random(max) {
		return Math.floor(Math.random() * max);
	}
}