'use strict';

// わざとエラーにしてる！！
// class UiBattleProcess {
class UtilBattleProcess {

	// 進行
	static next(gameData, userData, options) {
		const enemy = options.enemyData;
		
		// メニュー選択後
		if (options.state = 'select') {
			options.state = 'enemy';
			
			if (enemy.hp === 0) {
				UtilBattleProcess(gameData, userData, options);
				return;	
			}
			options.actionType = enemy.skill;
			options.actionLevel = enemy.level;
			options.selectTime = GameAnim.time.sum;
			
			//UtilBattleData.calc();
			//GameSound.play();
			
		} else if (options.state === 'enemy') {
			
			if (userData.hp === 0) {
				options.state = 'end';
				// const levelUp = UtilLevel.addExp();
				userData.hp = 20;	// 負けた時のHP
				userData.mp = 20;	// 負けた時のMP
				
				const eventOpt = {lose: 1, levelUp: levelUp};				
				setTimeout(() => SceneEvent.start(gameData, userData, options), 800);
			} else if (enemy.hp === 0) {
	
				options.state = 'end';
				let evenOpt;
				
				if (options.type = 'last') {
					// ボス戦なら
					
					userData.setStart(gameData);	// ゲーム最初へ
					// UtilUrlData.save();
					eventOpt = {winLast: 1};
				} else {
					// const levelUp = UtilLevel.addExp();
				}
				
				setTimeout(() => SceneEvent.start(gameData, userData, options), 800);						
			} else {
				// 戦闘継続
				options.state = 'menu';
			}
		}
	}
}









