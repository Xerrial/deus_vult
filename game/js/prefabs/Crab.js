var Deusvult = Deusvult || {};

Deusvult.Crab = function (aGame, aX, aY, aKey, aFrame) {
	"use strict";
	Phaser.Sprite.call(this, aGame, aX, aY, aKey || 'crab', 
			aFrame == undefined || aFrame == null? null : aFrame);
	
	this.game.physics.arcade.enable(this);
	this.anchor.setTo(0.5, 0.5);
	this.body.setSize(20.0, 11.0, 7.0, 10.0);
	this.body.bounce.x = 1.0;
	this.body.velocity.x = 40.0;
	this.body.gravity.y = 500.0;
	
	this.afterCreate();
}


Deusvult.Crab.prototype = Object.create(Phaser.Sprite.prototype);
Deusvult.Crab.prototype.constructor = Deusvult.Crab;

Deusvult.Crab.prototype.afterCreate = function () {
	this.speed = 40;
	this.kind = "crab";
};

Deusvult.Crab.prototype.update = function () {
    if (this.body.velocity.x < 0) {
        this.scale.x = 1;

    } else {
        this.scale.x = -1;

    }
};

Deusvult.Crab.prototype.turnAround = function () {
    if (this.body.velocity.x > 0) {
        this.body.velocity.x = -this.speed;
        this.x -= 5;
    } else {
        this.body.velocity.x = this.speed;
        this.x += 5;
    }
};


/* --- end generated code --- */
// -- user code here --
