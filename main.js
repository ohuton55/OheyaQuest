'use strict';

eruda.init();

SceneTitle.start();

function OnButtonClick() {
console.log(document.getElementById('myid'))
}

function domFinished(){
	alert('DOMContentLoaded');
	const btn = document.getElementById('btn');
	btn.addEventListner('click',  OnButtonClick);
}

//window.onload = function() {document.addEventListner('DOMContentLoaded', domFinished)};

window.onload = function() { console.log(document.getElementById('btn')) };

