'use strict';

UtilBattleData.calc = 
	function(gameData, userData, options, userType) {

		const en = options.enemyData;
		const user = userData;
		let at, df, heal, mp, dmg;
		const spell = [0, 1, 3, 6][options.actionLevel];  //呪文の値
		
		// ショトカ
		const minMax = GameUtil.minMax;
		const random = gameData.xors.random;
		
		if (userType === 'user') {
			
			// 行動の種類で値を設定
			const a = options.actionType;
			const n = options.actionLevel;	// 呪文レベル
			
			if (a === 'Sword') { mp = 0; at = user.at / 2 | 0; df = en.df}			if (a === 'Heal') { mp = 10; heal = n * n * 50; }
			if (a === 'Fire') { mp = 25 * n; at = 20 * spell; df = en.df / 2}
			if (a === 'Ice') { mp = 25 * n; at = 15 * spell; df = 1}
		
			if (user.mp < mp) {
				heal = dmg = 0;
			} else {
				if (heal) {
				
					// 自分を回復
					user.hp = minMax(1, user.hp + heal, user.hpMax);
					
				} else {
					// 敵へのダメージ
					dmg = (at + random() % at) - (random() % df);
					dmg = minMax(1, dmg | 0, 999);
					en.hp = minMax(0, en.hp - dmg, 999);
				}
				// 自分のMPを消費
				user.mp = minMax(0, user.mp - mp, 999);
			}
		} else if (userType === 'enemy') {
		
			const a  = options.actionType;
			if (a === 'Sword') { at = en.at / 2 | 0; df = user.df }
			if (a === 'Arrow') { at = en.at / 2 | 0; df = user.df / 4 }
			if (a === 'Wind') { at = en.at / 2 | 0; df = user.df / 2 }
			if (a === 'Death') { at = en.at / 2 | 0; df = user.df }
			
			// 自分へのダメージ
			dmg = (at + random() % at) - (random() % df);
			dmg = minMax(1, dmg | 0, 999);
			user.hp = minMax(0, user.hp - dmg, 999);
		}
		
		// 数字効果用の値
		options.numEffectNum = heal || dmg;
		options.numEffectLast = GameAnim.time.sum;
}
	
	
	
	
	
	
	
	
	
	