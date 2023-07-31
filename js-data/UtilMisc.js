'use strict';

class UtilMisc {

	static getMyItemNames(gameData, userData, onlySpell, padHead) {
	// onlySpell ... true / false ... 呪文だけ取得したい時はtrue
	
		const  arr = [];	// 結果
		const spell = {};	// 呪文レベル計算用
		
		// 持っているアイテムを探して文字列配列を作る
		userData.item.forEach((x, i) => {
			if (! x) { return }	// 無効(0=false)は飛ばす
			
			let name = gameData.treasureArr[i];
			let isSpell = !! name.match(/Spell:/);	// Spell:に一致するか
			
			if (! isSpell && onlySpell) { return }	// 呪文のみ取得していて、アイテムなら飛ばす
			
			if (isSpell) {
				// 呪文
				if (! spll[name]) {	// 呪文配列にない時
					spell[name] = 1;		// 1つ目
				} else {
					spell[name] ++;		// 2つ目+1, +1,,,
				}
				name +=  spell[name];	// 呪文レベルを末尾に追加
			}
			
			arr.push(padHead + name);	// 頭埋め文字列を追加して、配列へ
		});
		return arr;
	}
}