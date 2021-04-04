class TableauStart extends Phaser.Scene {
    /*constructor(){
      super("bootGame");
    }*/
  
    preload ()
    {
        this.load.image('startBG', 'assets/startBackground.png');
        this.load.image('startB', 'assets/StartBouton.png');
        this.load.image('logo', 'assets/PlatformerLogoRemastered.png');
        //this.load.spritesheet('cp', 'assets/cp.png', { frameWidth: 206, frameHeight: 184 } );
        this.load.audio('welcome', 'assets/Sound/Dark-Hero-3.mp3');
    }
  
    create()
    {
        this.welcome = this.sound.add('welcome');
  
        //----------on affiche les images à l'écran----------

        this.add.sprite(game.config.width/2, game.config.height/2, 'startBG');
        this.add.sprite(game.config.width/2, game.config.height/2, 'startBG');
  

        // ----------on affiche les boutons----------

        let startB = this.add.sprite(game.config.width/2-8, game.config.height -150, 'startB');
        let startB2 = this.add.sprite(game.config.width/2-8, game.config.height -50, 'startB');
        let startB3 = this.add.sprite(game.config.width/2-8, game.config.height -250, 'startB');
        //startB.scale = 0.5;


        // ----------on affiche les textes que l'on veut faire apparaître (boutons, titre...)----------

        let startBText2 = this.add.text(game.config.width/2-70, game.config.height -65, "Credits [-]",{font: "28px visitor", fill:"#000000"});
        let startBText3 = this.add.text(game.config.width/2-70, game.config.height -165, "Load [-]",{font: "28px visitor", fill:"#000000"});
        let startBText = this.add.text(game.config.width/2-70, game.config.height -265, "Play [enter]",{font: "28px visitor", fill:"#000000"}); //375,560,FFF
        //tweens permet de donner un petit effet à la cible voulue (target)
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
        })
        
        //----------quelques effets supplémentaires symphatiques----------

        /*let plight = this.add.pointlight(game.config.width/2+60, game.config.height/2-160, 0, 200, 0.5);
        plight.attenuation = 0.05;
        plight.color.setTo(255, 100, 0);*//*
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
  

        //----------on initialise les touches du clavier pour lancer le jeu, activer/desactiver des options, etc----------

        this.input.keyboard.on('keydown-ENTER', function () //'keydown-SPACE', function () 
        {
            this.cameras.main.fadeOut(1000, 0, 0, 0)
            this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => 
            {
                /*if(Tableau.current){
                    Tableau.current._destroy();
                }
                this.game.scene.start(tableau);
                this.scene.start("aventureBegining");*/
                this.game.scene.start("aventureBegining");
            })
        }, this);/*

        this.input.keyboard.on('keydown-SPACE', function () {
            this.cameras.main.fadeOut(1000, 0, 0, 0)
            this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
              this.scene.start("tiledGame");
            })
          }, this);*/
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
//Tableau.current=null;
