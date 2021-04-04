class TableauStart extends Phaser.Scene {
    /*constructor(){
      super("bootGame");
    }*/
  
    preload ()
    {
        this.load.image('startBG', 'assets/startBackground.png');
        this.load.image('startB', 'assets/StartBouton.png');
        //this.load.spritesheet('cp', 'assets/cp.png', { frameWidth: 206, frameHeight: 184 } );
        this.load.audio('welcome', 'assets/Sound/Dark-Hero-3.mp3');
    }
  
    create()
    {
        this.welcome = this.sound.add('welcome');
  
        //this.add.text(160,200,">> CAMPFIRE INVASION <<",{font: "70px visitor", fill:"#FFF"});
        this.add.sprite(game.config.width/2, game.config.height/2, 'startBG');
  
        /*let plight = this.add.pointlight(game.config.width/2+60, game.config.height/2-160, 0, 200, 0.5);
        plight.attenuation = 0.05;
        plight.color.setTo(255, 100, 0);*/
  
  
        let startB = this.add.sprite(game.config.width/2-8, game.config.height -150, 'startB');
        //startB.scale = 0.5;
        let startBText = this.add.text(game.config.width/2-100, game.config.height -165, "Play [SPACEBAR] .",{font: "28px visitor", fill:"#000000"}); //375,560,FFF
        this.tweens.add(
        {
            targets:[/*startB,*/startBText],
            duration:3000,
            yoyo: true,
            repeat:-1,
            delay:Math.random()*1000,
            alpha:
            {
                startDelay:Math.random()*5000,
                from:0,
                to:1,
            }
        })/*
  
        this.tweens.add(
        {
            targets:plight,
            duration:2000,
            yoyo: true,
            repeat:-1,
            delay:Math.random()*1000,
            alpha:
            {
                startDelay:Math.random()*5000,
                from:0,
                to:1,
            }
        })*/
  
        this.input.keyboard.on('keydown-SPACE', function () 
        {
            this.cameras.main.fadeOut(1000, 0, 0, 0)
            this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => 
            {
                if(Tableau.current){
                    Tableau.current._destroy();
                }
                this.game.scene.start(tableau);
                this.scene.start("Cimetiere");
            })
        }, this);
        /*
        this.input.keyboard.on('keydown-A', function () 
        {
            this.a.play({volume:.5});
            this.add.sprite(Math.random()*game.config.width, Math.random()*game.config.height, 'cp').play('spin', true);
        }, this);*/
  
    }/*

    static goTableau(tableau){
        if(Tableau.current){
            Tableau.current._destroy();
        }
        game.scene.start(tableau);
    }*/     


}

/**
 * Le tableau en cours
 * @type {null|Tableau}
 */
Tableau.current=null;
