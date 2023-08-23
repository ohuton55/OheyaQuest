'use strict';

class UtilBattleMenu {
	
	// メニュー初期化
	static init(gameData, userData, options) {
		options.menuArr = UtilMisc.getMyItemNames(gameData, userData, true, '> ');
		options.menuArr.unshift('> Sword');
	}
	//------------------------------------------------------------
	// メニュー描画
	static draw(gameData, options){
		const h = gameData.h;
		const chipSize = gameData.chipSize;
		
		// メニューに入れる文字は1行13文字まで
		const winSize = UiWin.getWinSize(options.menuArr.length, 13);
		winSize.x = chipSize / 2 | 0;
		winSize.y = h - winSize.h - chipSize / 2;
		options.menuWinSize = winSize;
		
		// ウィンドウ描画
		const layerId = gameData.layerIds.middle;
		const context = gameData.canvasArr[layerId].context;
		UiWin.drawWin(context, winSize.x, winSize.y, winSize.w, winSize.h);
		
		// 進行がselectなら選択いちを描画
		if (options.state === 'select') {
			// 選択位置描画
			const rect = UiWin.getLineRect(winSize.x, winSize.y,
				winSize, options.selectMenu);
			context.fillStyle = '#888';
			context.fillRect(rect.x, rect.y, rect.w, rect.h);
		}
		
		// メニュー描画
		options.menuArr.forEach(
			(t, i) => UiWin.drawWinText(context, winSize.x, winSize.y, t, i)
		);
	}
	
	//------------------------------------------------------------
	// メニュー　タップ判定
	static tap(gameData, userData, options, x, y) {
		if (options.state === 'menu') {
	
			// メニュー選択判定
			let select = -1;

			const winSize = options.menuWinSize;
			winSize.lineRect.forEach((o, i) => {
				// 各行の短形内をたっぷしているか判定
				const rect = UiWin.getLineRect(winSize.x, winSize.y, winSize, i);

				if (GameUtil.inRectObj(x, y, rect)) { console.log(i) }
				if (GameUtil.inRectObj(x, y, rect)) { select = i }	// 選択項目
			});
			
			// 洗濯しているか判定
			if (select != -1) {
				// 設定の更新
				options.state = 'select';	// 進行を「選択」に
				options.selectMenu = select;	// 選択項目(index)
				
				console.log(Object.keys(options.menuArr));
				console.log(options.menuArr[select]);
				console.log(options.menuArr[select].replace(/> |.*:/g, ""));
				console.log(options.menuArr[select].replace(/> |.*:/g, "").match(/([A-z]+)(\d*)/));
				// /g...グローバルマッチ
				// +...直前の文字または [...] や (...) で囲まれたものが1個以上連続するものにマッチ
				// \d...定義済み正規表現　- 数字文字([0-9])
				
				// メニューの取り出し
				const match = options.menuArr[select].replace(/> |.*:/g, "").match(/([A-z]+)(\d*)/);
				// 正規表現で検索し、一致した場合、一致した値を配列で返す
				// 配列のインデックスの0にマッチした該当の文字が入る
				// 見つからない場合はnull
					//  英字と数を分離して、項目を取り出す

				options.actionType = match[1];	// 選択行動
				options.actionLevel = match[2] * 1;   // 呪文レベル
				
				options.selectTime = GameAnim.time.sum;  // 選択時間
				
				UtilBattleData.calc(gameData, userData, options, 'user');	// 自キャラの値を計算
				// 効果音を鳴らす
				GameSound.play(options.actionType === 'Heal' ? 'seHeal' : 'seAt');
			}
		}
	}
}

















