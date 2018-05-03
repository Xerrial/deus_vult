var config = {
    width: 1080,
    height: 720,
    renderer: Phaser.CANVAS,
    parent: 'deusvult',
    antialias: true,
    multiTexture: true,
    //state: {
        //preload: preload,
        //create: create,
        //update: update,
        //render: render
    //}
}
var Deusvult = Deusvult || {};
var game = new Phaser.Game(config);

 game.state.add("BootState", new Deusvult.BootState());
// game.state.add("LoadingState", new Deusvult.LoadingState());
game.state.add("TitleState", new Deusvult.TitleState());
// game.state.add("LevelState", new Deusvult.LevelState());
game.state.start("TitleState", true, false, "assets/levels/main_screen.json");

/*function preload ()
{
    //this.load.setBaseURL('http://labs.phaser.io');

    // this.load.image('sky', 'assets/one.jpg');
    this.load.image('background', 'assets/two.jpg');
    this.load.image('background', 'assets/two.jpg');
    this.load.image('character', 'assets/images/sprites/char1.png');
    this.load.spritesheet('button', 'assets/images/intrf/larger.png', 40, 40);
    this.load.image('sky', 'assets/images/intrf/smaller.png');
}

var button;
var player;
var bullet;

var controls;
var leftKey;
var rightKey;

function create ()
{

    this.physics.startSystem(Phaser.Physics.ARCADE);
    //game.physics.arcade.gravity.y = 1000;
    this.add.tileSprite(0, 0, 1080, 720, 'background');
    

    this.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;
    //this.input.onDown.add(gofull, this);

    button = this.add.button(this.world.centerX - 95, 0, 'button', gofull, this, 2, 1, 0);
    // leftKey = this.input.keyboard.addKey(Phaser.Keyboard.A);
    // rightKey = this.input.keyboard.addKey(Phaser.Keyboard.D);

    // Игрок
    player = game.add.sprite(100, 600, 'character');
    player.anchor.setTo(0.5, 0.5);
    this.physics.arcade.enable(player);
    player.body.collideWorldBounds = true;
    //this.camera.follow(player);

    controls = {
        right: this.input.keyboard.addKey(Phaser.Keyboard.D),
        left: this.input.keyboard.addKey(Phaser.Keyboard.A)
    }


        // button.input.onDown.add(gofull, this);

    // var particles = this.add.particles('red');

    // var emitter = particles.createEmitter({
    //     speed: 100,
    //     scale: { start: 1, end: 0 },
    //     blendMode: 'ADD'
    // });

    // var logo = this.physics.add.image(400, 100, 'logo');

    // logo.setVelocity(100, 200);
    // logo.setBounce(1, 1);
    // logo.setCollideWorldBounds(true);

    // emitter.startFollow(logo);
}

function gofull(button) {

    if (this.scale.isFullScreen) {
        button.loadTexture('sky');
        this.scale.stopFullScreen();
        
    }
    else {
        this.scale.startFullScreen(false);
    }

    }


function update() {

    if (controls.right.isDown)
        {
            player.body.velocity.x += 20;
            player.scale.setTo(1,1); 
        }
        else if (controls.left.isDown)
        {
            player.body.velocity.x -= 20;
            player.scale.setTo(1,1);      
        }
        else{
            player.body.velocity.x = 0;
        }
}

function render () {
}
*/