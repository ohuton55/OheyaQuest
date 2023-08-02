'use strict';

class GameData {

	constructor() {
		// 描画用設定
		this.w = 320;
		this.h = 240;
		this.bg = '#000';
		
		this.layerMax = 3;
		this.layerIds = {
			bg:		0,	// 背景
			middle:  1,	// 中
			front:	2	// 手前
		};
		
		// マップ用設定
		this.mapW = 64;
		this.mapH = 48;
		this.chipSize = 16;
		
		// 土地の配列番号
		this.landIds = {
			plain:    0,	// 平地
			forest:  1,	// 森
			mountain:  2, // 山
			water:	3,	// 水
			town:	4,	// 街
			castle:  5	// 城
		};
		
		// 乱数用関数
		this.xors = new GameUtil.Xors();	// 乱数初期化（バトルで使用
		
		//  おたから配列
		this.treasureArr = [
			//呪文
			'Spell:Heal', 'Spell:Heal', 'Spell:Heal',	// 回復*3
			'Spell:Fire', 'Spell:Fire', 'Spell:Fire',	// 火炎*3
			'Spell:Ice', 'Spell:Ice', 'Spell:Ice',	// 氷結*3
			// 鉄鎧
			'IronBody', 'IronArm', 'IronLeg', 'IronHead',
			// 強装備
			'HeroSword', 'WisdomRing', 'FairyShield'
		];
		
		// 敵データ
		this.enemyData = {};
		
		this.enemyData[this.landIds.plain] = {
			name:	'Goblin',
			rate:	20,
			image:	 0,
			hp:		50,
			at:		10,
			df:		5,
			skill:	'Sword'
		};
		this.enemyData[this.landIds.forest] = {
			name:	'Elf',
			rate:	5,
			image:	 1,
			hp:		100,
			at:		20,
			df:		10,
			skill:	'Arrow'
		};
		this.enemyData[this.landIds.mountain] = {
			name:	'Roc',
			rate:	10,
			image:	 2,
			hp:		200,
			at:		40,
			df:		30,
			skill:	'Wind'
		};
		this.enemyData['last'] = {
			name:	'Dark King',
			image:	 3,
			hp:		999,
			at:		499,
			df:		99,
			skill:	'Death'
		};
	}
}







