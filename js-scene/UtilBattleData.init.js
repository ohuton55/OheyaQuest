'use strict';

class UtilBattleData {
	// 戦闘データを初期化
	static init(gameData, userData, options) {
	
	// 変数の初期化
	const en = Object.assign({}, gameData.enemyData[options.type]);
	options.enemyData = en;
	
	// レベルのレートを計算する
	if (options.type === 'last') {
		en.level = 1;
	} else {
		const rate = GameUtil.minMax(1, userData.level / 2 | 0, 5);	// 1 〜5 倍
		en.level = 1 + gameData.xors.random() % rate;	}

	// 値決定（レベルで0.5刻み）	
	en.hp 		= en.hp * (0.5 + en.level / 2) | 0;
	en.hpMax  = en.hp;
	en.at		= en.at * (0.5 + en.level / 2) | 0;
	en.df 		= en.df * (0.5 + en.level / 2) | 0;
	};
}
