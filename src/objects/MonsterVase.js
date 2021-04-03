class MonsterVase extends ObjetEnnemi{
    /**
     *
     * @param {Tableau} scene
     * @param x
     * @param y
     */
    constructor(scene, x, y) {                                                              //OBLIGATOIRE
        super(scene, x, y,"vase");                                                       //OBLIGATOIRE
        //pas de gravité
        this.body.allowGravity=true;

        //this.physics.add.sprite(300,this.sys.canvas.height-70,"monster-zombie");
        this.setDisplaySize(32,32);
        //this.setCollideWorldBounds(true);
        //this.setBounce(0);
        //this.setBodySize(this.body.width,this.body.height);
        this.setVelocityX(0);
        //this.physics.add.overlap(this.player, this.monstre, this.hitSpike, null, this);

    }
}