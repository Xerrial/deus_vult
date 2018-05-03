var Deusvult = Deusvult || {};

Deusvult.MenuItem = function (game_state, name, position, properties) {
    "use strict";
    Deusvult.TextPrefab.call(this, game_state, name, position, properties);
    
    this.anchor.setTo(0.5);
    
    this.on_selection_animation = this.game_state.game.add.tween(this.scale);
    this.on_selection_animation.to({x: 1.5 * this.scale.x, y: 1.5 * this.scale.y}, 500);
    this.on_selection_animation.to({x: this.scale.x, y: this.scale.y}, 500);
    this.on_selection_animation.repeatAll(-1);
    
    this.level_file = properties.level_file;
    this.state_name = properties.state_name;
};

Deusvult.MenuItem.prototype = Object.create(Deusvult.TextPrefab.prototype);
Deusvult.MenuItem.prototype.constructor = Deusvult.MenuItem;

Deusvult.MenuItem.prototype.selection_over = function () {
    "use strict";
    if (this.on_selection_animation.isPaused) {
        this.on_selection_animation.resume();
    } else {
        this.on_selection_animation.start();
    }
};

Deusvult.MenuItem.prototype.selection_out = function () {
    "use strict";
    this.on_selection_animation.pause();
};

Deusvult.MenuItem.prototype.select = function () {
    "use strict";
    // starts game state
    this.game_state.state.start("BootState", true, false, this.level_file, this.state_name);
};