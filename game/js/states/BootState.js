var Deusvult = Deusvult || {};

Deusvult.BootState = function () {
    "use strict";
    Phaser.State.call(this);
};

Deusvult.BootState.prototype = Object.create(Phaser.State.prototype);
Deusvult.BootState.prototype.constructor = Deusvult.BootState;

Deusvult.BootState.prototype.init = function (level_file) {
    "use strict";
    this.level_file = level_file;
};

Deusvult.BootState.prototype.preload = function () {
    "use strict";
    this.game.load.json("level_file", this.level_file);
};

Deusvult.BootState.prototype.create = function () {
    "use strict";
    var level_text;
    level_text = this.game.cache.getJSON("level_file");
    this.game.state.start("Swamp", true, false);
};