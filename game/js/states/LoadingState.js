var Deusvult = Deusvult || {};

Deusvult.LoadingState = function () {
    "use strict";
    Phaser.State.call(this);
}

Deusvult.LoadingState.prototype = Object.create(Phaser.State.prototype);
Deusvult.LoadingState.prototype.constructor = Deusvult.LoadingState;

Deusvult.LoadingState.prototype.init = function (level_data) {
    "use strict";
    this.level_data = level_data;
    //this.next_state = next_state;
}

Deusvult.LoadingState.prototype.preload = function () {
    "use strict";
    console.log(this.level_data);
    
};

Deusvult.LoadingState.prototype.create = function () {
    "use strict";
    this.game.state.start("TitleState", true, false, "assets/levels/main_screen.json");
};