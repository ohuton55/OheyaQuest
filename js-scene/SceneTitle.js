'use strict';

class SceneTitle {

	static start() {

		console.log("test");	
		console.log(document.getElementById("myid"));
		document.getElementById("text-button").onclick = function(){
			document.getElementById("text").innerHTML = "CLICKED!";
		} 
	}

}