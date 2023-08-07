'use strict';

// わざとエラーにしてる！！
class UiBattleProcess {

	// 進行
	static next(gameData, userData, options) {
		
		setTimeout(() => SceneBattle.start(gameData, userData, options), 1500);

	}
}









