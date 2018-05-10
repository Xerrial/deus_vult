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
    this.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');
    this.load.json("menu_items", this.level_data);
    this.load.json("level_choose", "assets/levels/level_choose.json");
    this.load.spritesheet('button', 'assets/images/heart.png', 193, 71);
    this.load.spritesheet('start_game', 'assets/images/portal.png', 193, 71);
    this.load.spritesheet('rate', 'assets/images/heart.png', 193, 71);
    this.load.spritesheet('profile', 'assets/images/heart.png', 193, 71);
}

Deusvult.TitleState.prototype.create = function () {
    "use strict";
    var level_text, lt_parse, button, mass_button, level_dat, title_position, title_style, title, menu_position, menu_items, menu_properties, menu_item_name, menu_item, menu;
    this.game.config.level_choose = game.cache.getJSON("level_choose");
    
    this.stage.backgroundColor = '#264A54';
    this.level_dat = game.cache.getJSON("menu_items");
    game.world.setBounds(0, 0, 1080, 720);
    this.input.mouse.mouseWheelCallback = null;

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
    button = [];

    // функции перехода к другим игровым окнам
    mass_button = [
        function b_start_game () {
            //alert(menu_items[0].properties.level_file);
            
            console.log(this.game.config.level_choose);
            game.state.start("LevelState", true, false, this.game.config.level_choose /*menu_items[0].properties.level_file*/);
        },
        function b_rate () {
            //alert(menu_items[1].properties.level_file);
        },
        function b_profile () {
            //alert(menu_items[2].properties.level_file);
        }
    ];

    var mb_count = 0;
    for (menu_item_name in this.level_dat.menu_items) {
        if (this.level_dat.menu_items.hasOwnProperty(menu_item_name)) {
            menu_item = this.level_dat.menu_items[menu_item_name];
            console.log(menu_item);
            menu_items[mb_count] = menu_item;
            button[menu_item_name] = this.add.button(menu_item.position.x, menu_item.position.y, menu_item_name, mass_button[mb_count++]);
            //menu_items.push(button[menu_item_name]);
        }
    }
    
    
    //g_button = this.add.button(game)
    menu_properties = {texture: "", group: "background", menu_items: menu_items};
    menu = new Deusvult.MainMenu(this, "menu", menu_position, menu_properties);
};
