'use strict';

class UtilLevel {
	// 能力値計算	
	static calc = function(gameData, userData) {
		// 基本値計算
		userData.at = 15 + (userData.level - 1) * 5;
		userData.df = 10 + (userData.level - 1) * 5;
		userData.hpMax = 100 + (userData.level - 1) * 25;
		userData.mpMax = 100 + (userData.level - 1) * 25;
		
		// アイテムの効果を適用
		userData.item.forEach((o, i) => {
			if (o != 1) { return }	// 1=所有していないため飛ばす
		
			const treasure = gameData.treasureArr[i];
			if (treasure === 'IronBody') { userData.hpMax *= 1.3 }
			if (treasure === 'IronArm') { userData.hpMax *= 1.3 }
			if (treasure === 'IronLeg') { userData.hpMax *= 1.3 }
			if (treasure === 'IronHead') { userData.hpMax *= 1.3 }
			if (treasure === 'HeroSword') { userData.at *= 2.5 }
			if (treasure === 'WisdomRing') { userData.mpMax *= 2.5 }
			if (treasure === 'FairyShield') { userData.df *= 2.5 }
		});
		
		// 範囲ないに値を収める（小数点切り捨て
		userData.at 		= GameUtil.minMax(1, userData.at | 0, 999);
		userData.df		= GameUtil.minMax(1, userData.df | 0, 999);
		userData.hpMax = GameUtil.minMax(1, userData.hpMax | 0, 999);
		userData.mpMax = GameUtil.minMax(1, userData.mpMax | 0, 999);
		userData.hp		= GameUtil.minMax(1, userData.hp | 0, userData.hpMax);
		userData.mp	= GameUtil.minMax(1, userData.mp | 0, userData.mpMax);		
		console.log(`at:${userData.at} df:${userData.df} hp:${userData.hp} mp:${userData.mp}`);
	};
		//------------------------------------------------------------
		// 経験値追加
}













