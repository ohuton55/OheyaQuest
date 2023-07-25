'use strict';

class SceneMap {

	static start(gameData) {
		
		console.log('start___SceneMap');
		GameAnim.add(this.anim.bind(this, gameData));	

	}
	
	static anim(gameData, time) {
		UiMap.draw(gameData, time);
	}
}