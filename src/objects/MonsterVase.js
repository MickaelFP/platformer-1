class MonsterVase extends Phaser.Physics.Arcade.Sprite{
    /**
     *
     * @param {Tableau} scene
     * @param x
     * @param y
     */
    constructor(scene, x, y) {                                                              //OBLIGATOIRE
        super(scene, x, y,"vase");                                                       //OBLIGATOIRE
        //pas de gravité
        this.body.allowGravity=false;

        //this.physics.add.sprite(300,this.sys.canvas.height-70,"monster-zombie");
        this.setDisplaySize(32,32);
        //this.setCollideWorldBounds(true);
        //this.setBounce(0);
        //this.setBodySize(this.body.width,this.body.height);
        //this.setVelocityX(0);
        //this.physics.add.overlap(this.player, this.monstre, this.hitSpike, null, this);
    }

    vaseBroke(object,onComplete)
    {
        let me=this;
        me.broke.visible=true;
        me.broke.rotation = Phaser.Math.Between(0,6);
        me.broke.x=object.x;
        me.broke.y=object.y;
        me.tweens.add(
            {
            targets:me.broke,
            duration:200,
            displayHeight:
            {
                from:40,
                to:70,
            },
            displayWidth:
            {
                from:40,
                to:70,
            },
            onComplete: function () 
            {
                //me.broke.visible=false;
                onComplete();
            }
        })
    } // FIN DE VASEBROKE

    hitVase(player){
        let me=this;
        if(me.isDead !== true){ //si notre vase n'est pas déjà détruit
            if(
                // si le player descend
                player.body.velocity.y > 0
                // et si le bas du player est plus haut que le monstre
                && player.getBounds().bottom < me.getBounds().top+30
    
            ){
                ui.gagne();
                me.isDead=true; //ok le monstre est mort
                me.disableBody(true,true);//plus de collisions
                me.vaseBroke(vase,function(){
                    //à la fin de la petite anim...ben il se passe rien :)
                })
                //petit son de mort du monstre
                
                /*
                me.music = this.sound.add('broke');
    
                var musicConfig = 
                {
                    mute: false,
                    volume: 0.3,
                    rate : 1,
                    detune: 0,
                    seek: 0,
                    loop: false,
                    delay:0,
                }
                me.music.play(musicConfig);
                */

                //notre joueur rebondit sur le monstre
                player.directionY=500;
            }
    
        }
    }
}