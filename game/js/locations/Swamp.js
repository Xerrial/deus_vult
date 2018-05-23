var Deusvult = Deusvult || {};

Deusvult.Swamp = function () {
	"use strict";
	Phaser.State.call(this);
	this.prefab_classes = {
	        //"player": Deusvult.Player.prototype.constructor,
	        "crab": Deusvult.Crab.prototype.constructor
	        //"target": Deusvult.Target.prototype.constructor,
	        //"life_item": Deusvult.LifeItem.prototype.constructor
	    };
	    
}

Deusvult.Swamp.prototype = Object.create(Phaser.State.prototype);
Deusvult.Swamp.prototype.constructor = Deusvult.Swamp;

Deusvult.Swamp.prototype.init = function () {
	"use strict";
	this.game.renderer.renderSession.roundPixels = true;
	this.physics.startSystem(Phaser.Physics.ARCADE);
	
};

Deusvult.Swamp.prototype.preload = function () {
	"use strict";
	this.load.pack('main', 'assets/pack.json');
	
	
};

Deusvult.Swamp.prototype.create = function () {
	"use strict";
	var _swamp = this.add.tilemap('swamp1');
	_swamp.addTilesetImage('tileset');
	var _swamp_layer = _swamp.createLayer(0);
	_swamp_layer.resizeWorld();
	
	var enemyGroup = this.add.group();
	
	var crab1 = new Deusvult.Crab(this.game, 288.0, 192.0);
	enemyGroup.add(crab1);
	
	var crab2 = new Deusvult.Crab(this.game, 368.0, 292.0);
	enemyGroup.add(crab2);
	
	
	
	this.fEnemies_group = enemyGroup;
	this.fLevel1_collisions = _swamp_layer;
};

Deusvult.Swamp.prototype.update = function() {

	this.physics.arcade.collide(this.fEnemies_group,
			this.fLevel1_collisions);
};