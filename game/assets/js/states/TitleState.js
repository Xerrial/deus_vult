var Deusvult = Deusvult || {};

Deusvult.TitleState = function () {
    "use strict";
    Phaser.State.call(this);
}

Deusvult.TitleState.prototype = Object.create(Phaser.State.prototype);
Deusvult.TitleState.prototype.constructor = Deusvult.TitleState;

Deusvult.TitleState.prototype.init = function (level_data) {
    "use strict";
    this.level_data = level_data;
    
    //this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;

    
}
Deusvult.TitleState.prototype.preload = function () {
    "use strict";
    this.load.json("menu_items", this.level_data);
}

Deusvult.TitleState.prototype.create = function () {
    "use strict";
    var level_dat, title_position, title_style, title, menu_position, menu_items, menu_properties, menu_item_name, menu_item, menu;
    
    this.level_dat = game.cache.getJSON("menu_items");
    // create groups
    this.groups = {};
    this.level_dat.groups.forEach(function (group_name) {
        this.groups[group_name] = this.game.add.group();
    }, this);
    
    this.prefabs = {};
    
    // adding title
    title_position = new Phaser.Point(0.5 * this.game.world.width, 0.3 * this.game.world.height);
    title_style = {font: "36px Arial", fill: "#FFF"};
    title = new Deusvult.TextPrefab(this, "title", title_position, {text: "chto-to tam", style: title_style, group: "menu_items"});
    title.anchor.setTo(0.5);
    
    // adding menu
    menu_position = new Phaser.Point(0, 0);
    menu_items = [];
    for (menu_item_name in this.level_dat.menu_items) {
        if (this.level_dat.menu_items.hasOwnProperty(menu_item_name)) {
            menu_item = this.level_dat.menu_items[menu_item_name];
            menu_items.push(new Deusvult.MenuItem(this, menu_item_name, menu_item.position, menu_item.properties));
        }
    }
    menu_properties = {texture: "", group: "background", menu_items: menu_items};
    menu = new Deusvult.MainMenu(this, "menu", menu_position, menu_properties);
};