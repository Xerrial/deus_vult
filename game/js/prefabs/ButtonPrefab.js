var Deusvult = Deusvult || {};

Deusvult.ButtonPrefab = function (game_state, name, position, properties) {
    "use strict";
    Phaser.Button.call(this, game_state.game, position.x, position.y, name);
    
    this.game_state = game_state;
    
    this.name = name;
    
    this.game_state.groups[properties.group].add(this);
    
    this.game_state.prefabs[name] = this;
};

Deusvult.ButtonPrefab.prototype = Object.create(Phaser.Button.prototype);
Deusvult.ButtonPrefab.prototype.constructor = Deusvult.ButtonPrefab;