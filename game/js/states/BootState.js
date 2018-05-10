var Bomberman = Bomberman || {};

Bomberman.BootState = function () {
    "use strict";
    Phaser.State.call(this);
};

Bomberman.BootState.prototype = Object.create(Phaser.State.prototype);
Bomberman.BootState.prototype.constructor = Bomberman.BootState;

Bomberman.BootState.prototype.init = function (level_file) {
    "use strict";
    this.level_file = level_file;
    this.next_state = next_state;
};

Bomberman.BootState.prototype.preload = function () {
    "use strict";
    this.load.json("level_file", this.level_file);
};

Bomberman.BootState.prototype.create = function () {
    "use strict";
    var level_text;
    level_text = this.game.cache.JSON("level_file");
    this.game.state.start("LoadingState", true, false, level_text);
};