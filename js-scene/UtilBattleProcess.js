'use strict';

class UtilBattleProcess {

	// 進行
	static next(gameData, userData, options) {
		const enemy = options.enemyData;
		
		// メニュー選択後
		if (options.state === 'select') {
			options.state = 'enemy';
			
			if (enemy.hp === 0) {
				// 敵をやっつけたら
				this.next(gameData, userData, options);  // 次の処理に
				return;	
			}
			options.actionType = enemy.skill;
			options.actionLevel = enemy.level;
			options.selectTime = GameAnim.time.sum;
			
			UtilBattleData.calc(gameData, userData, options, 'enemy');  // 敵計算
			GameSound.play('seAt');	// 攻撃SE
			
		} else if (options.state === 'enemy') {
			
			if (userData.hp === 0) {
			
				options.state = 'end';	// 進行を終了に
				const levelUp = UtilLevel.addExp(gameData, userData, enemy.hpMax / 20 | 0);
				userData.hp = 20;	// 負けた時のHP
				userData.mp = 20;	// 負けた時のMP
				
				const eventOpt = {lose: 1, levelUp: levelUp};				
				setTimeout(() => SceneEvent.start(gameData, userData, eventOpt), 	500);
			} else if (enemy.hp === 0) {
	
				options.state = 'end';
				let eventOpt;
				
				if (options.type === 'last') {
					// ボス戦なら
					userData.setStart(gameData);   // 初期状態に
					UtilUrlData.save(userData);
					eventOpt = {winLast: 1};
				} else {
					// 通常戦闘なら
				
					const levelUp = UtilLevel.addExp(gameData, userData, 
									enemy.hpMax / 10 | 0);
					eventOpt = {win: 1, levelUp: levelUp};
				}
				
				// 一定時間後にイベントに移行
				setTimeout(() => SceneEvent.start(gameData, userData, eventOpt), 500);						
			} else {
				// 戦闘継続
				options.state = 'menu';
			}
		}
	}
}









