'use strict';

class SceneTitle {

	//------------------------------------------------------------
	// start
	static start() {

		console.log("test");	
		console.log(document.getElementById("myid"));
		this.test();
	}

	static test() {
		console.log(this);		
	}	
	//------------------------------------------------------------
	// tap
	static tap(){
	
	
	}
	
	//------------------------------------------------------------
	// animation
	static anim(gameData){
	
	console.log("start SeceneTitle");	
	const w = gameData.w;
	const h = gameData.h;
	
	console.log(w);
	console.log(h);
		
	
	}

}