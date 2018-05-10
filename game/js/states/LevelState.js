var Deusvult = Deusvult || {};

Deusvult.LevelState = function () {
    "use strict";
    Phaser.State.call(this);
}

Deusvult.LevelState.prototype = Object.create(Phaser.State.prototype);
Deusvult.LevelState.prototype.constructor = Deusvult.LevelState;

Deusvult.LevelState.prototype.init = function (level_data) {
    "use strict";
    this.level_data = level_data;
    
    //this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    //this.scale.pageAlignHorizontally = true;
    //this.scale.pageAlignVertically = true;
}

Deusvult.LevelState.prototype.preload = function () {
    "use strict";
    //this.load.json("menu_items", this.level_data);
    //this.load.json("assets", this.level_data);
    this.load.spritesheet('profile', 'assets/images/heart.png', 193, 71);
    this.load.spritesheet('back', 'assets/images/heart.png', 193, 71);
    var level_text, lt_parse;
    

    //this.level_dat = game.cache.getJSON("menu_items");
    var assets, asset_loader, asset_key, asset;
    assets = this.level_data.assets;
    //alert(assets);
    for (asset_key in assets) { // load assets according to asset key
        if (assets.hasOwnProperty(asset_key)) {
            asset = assets[asset_key];
            
            switch (asset.type) {
            case "image":
                this.load.image(asset_key, asset.source);
                break;
            case "spritesheet":
                this.load.spritesheet(asset_key, asset.source, asset.frame_width, asset.frame_height, asset.frames, asset.margin, asset.spacing);
                break;
            case "tilemap":
                this.load.tilemap(asset_key, asset.source, null, Phaser.Tilemap.TILED_JSON);
                break;
            }
        }
    } 
}

Deusvult.LevelState.prototype.create = function () {
    "use strict";
    var button, mass_button, level_dat, title_position, title_style, title, menu_position, menu_items, menu_properties, menu_item_name, menu_item, menu;
    var l_choose, level_count, l_sprites, ls_count, l_text, l_button;
    this.input.mouse.mouseWheelCallback = mouseWheel;
    
    function mouseWheel(event) {
        if(this.input.mouse.wheelDelta === Phaser.Mouse.WHEEL_UP) {
            this.camera.x -= 30;
            this.camera.update();
            this.camera.x -= 10;
            //Deusvult.LevelState.prototype.render();
            //console.log(game.direction);
        } else {
            this.camera.x += 30;
            this.camera.update();
            this.camera.x += 10;
            //Deusvult.LevelState.prototype.render();
            //console.log(game.direction);
        }
      }

    // вывод уровней
    l_sprites = [];
    l_text = [];
    l_button = [];
    level_count = 30;
    ls_count = 0;
    for (l_choose in this.level_data.levels) {
        if (this.level_data.levels.hasOwnProperty(l_choose)) {
            l_sprites[ls_count] = this.add.sprite(level_count, 150, "level_panel");
            l_sprites[ls_count].inputEnabled = true;
            var style = { font: this.level_data.levels[l_choose].properties.style.font, fill: this.level_data.levels[l_choose].properties.style.fill, wordWrap: true, wordWrapWidth: l_sprites[ls_count].width, align: "center" };

            l_text[ls_count] = game.add.text(level_count + 160, 210, this.level_data.levels[l_choose].properties.text, style);
            l_text[ls_count].anchor.set(0.5);
            
            this.add.image(level_count + 10, 247, this.level_data.levels[l_choose].properties.image);
            l_button[ls_count] = this.add.button(level_count + 140, 540, "goal_image", level_load);
            l_button[ls_count].file = this.level_data.levels[l_choose].properties.level_file;
            level_count += 350;
            ls_count++;
        }
    }
    game.world.setBounds(0, 0, level_count, 720);

    function level_load () {
        console.log(this.file);
        game.state.start("BootState", true, false, this.file);
  //alert(level_file);
    }

    this.stage.backgroundColor = '#cfb1a4';
    menu_position = new Phaser.Point(0, 0);
    menu_items = [];
    button = [];

    // функции перехода к другим игровым окнам
    mass_button = [
        function b_profile () {
            //alert(menu_items[0].properties.level_file);

        },
        function b_menu () {
            //alert(menu_items[1].properties.level_file);
            game.state.start("TitleState", true, false, menu_items[1].properties.level_file);
        }
    ];

    // вывод кнопок, отвечающих за переход к другим окнам
    var mb_count = 0;
    for (menu_item_name in this.level_data.menu_items) {
        if (this.level_data.menu_items.hasOwnProperty(menu_item_name)) {
            menu_item = this.level_data.menu_items[menu_item_name];
            //console.log(menu_item);
            menu_items[mb_count] = menu_item;
            button[menu_item_name] = this.add.button(menu_item.position.x, menu_item.position.y, menu_item_name, mass_button[mb_count++]);
            button[menu_item_name].fixedToCamera = true;
            //menu_items.push(button[menu_item_name]);
        }
    }
}


  
  Deusvult.LevelState.prototype.render = function () {
    //game.debug.text('SCROLL DIRECTION: ' + game.direction, game.world.centerX, game.world.centerY);
    //game.debug.cameraInfo(game.camera, 32, 32);
  }