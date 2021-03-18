class TableauTiled extends Tableau{
    /**
     * Ce tableau démontre comment se servir de Tiled, un petit logiciel qui permet de designer des levels et de les importer dans Phaser (entre autre).
     *
     * Ce qui suit est très fortement inspiré de ce tuto :
     * https://stackabuse.com/phaser-3-and-tiled-building-a-platformer/
     *
     * Je vous conseille aussi ce tuto qui propose quelques alternatives (la manière dont son découpées certaines maisons notamment) :
     * https://medium.com/@michaelwesthadley/modular-game-worlds-in-phaser-3-tilemaps-1-958fc7e6bbd6
     */
    preload() {
        super.preload();
        // ------pour TILED-------------

        // nos images
        this.load.image('star', 'assets/Os.png');
        this.load.image('tiles', 'assets/tilemaps/tableauTiledTilesetCimetiere.png');

        //les données du tableau qu'on a créé dans TILED
        this.load.tilemapTiledJSON('map', 'assets/tilemaps/tableauTiledCimetiere.json'); // original -> 'tableauTiled.json' & 2nd 'MapTiledLongueur.json'

        // -----et puis aussi-------------
        this.load.image('monster-fly', 'assets/chauve-souris.png'); // original 'monster-fly'
        this.load.image('night', 'assets/nuitEtoileCarre_1.png');
        this.load.image('platformStone', 'assets/platformStone.png');
        this.load.image('chateauLoin', 'assets/chateauLoin_x896_2.png');
        this.load.image('bossSpectre', 'assets/spectre.png');
        this.load.image('grilleHerbe', 'assets/grille_x896_2.png');
        this.load.image('colines', 'assets/colinesForet_x896.png');
        this.load.image('ombresTombes', 'assets/ombresTombes_x896_2.png');
        this.load.image('fog', 'assets/brouillard.png');
        this.load.image('light', 'assets/light.png');

        this.load.spritesheet('zombie2', 'assets/Spritesheet/zombie2.png', { frameWidth: 32, frameHeight: 48 } );

        //atlas de texture généré avec https://free-tex-packer.com/app/
        //on y trouve notre étoiles et une tête de mort
        this.load.atlas('particles', 'assets/particles/particlesM.png', 'assets/particles/particles.json'); // original 'particles.png'
    }
    create() {
        super.create();

        //on en aura besoin...
        let ici=this;
        let hauteurSol = 64;
        let hauteurDif = 448;

        //--------chargement de la tile map & configuration de la scène-----------------------

        //notre map
        this.map = this.make.tilemap({ key: 'map' });
        //nos images qui vont avec la map
        this.tileset = this.map.addTilesetImage('tableauTiledTilesetCimetiere', 'tiles'); // original 'tableauTiledTilset'

        //on agrandit le champ de la caméra du coup
        let largeurDuTableau=this.map.widthInPixels;
        let hauteurDuTableau=this.map.heightInPixels;
        this.physics.world.setBounds(0, 0, largeurDuTableau,  hauteurDuTableau);
        this.cameras.main.setBounds(0, 0, largeurDuTableau, hauteurDuTableau);
        this.cameras.main.startFollow(this.player, true, 1, 1);

        //---- ajoute les plateformes simples ----------------------------

        this.solides = this.map.createLayer('solides', this.tileset, 0, 0);
        //this.lave = this.map.createLayer('lave', this.tileset, 0, 0);
        this.derriere = this.map.createLayer('derriere', this.tileset, 0, 0);
        //this.devant = this.map.createLayer('devant', this.tileset, 0, 0);

        // plateformes columbariums
        let plate1=this.physics.add.sprite(200,293+hauteurDif); // ,"platformStone");
        plate1.setDisplaySize(113,7);
        plate1.setOrigin(0,0); // pour positionner plus facilement
        plate1.body.allowGravity=0; // la gravité n'a pas d'effet ici
        plate1.setImmovable(true); // ne bouge pas quand on rentre dedans
        plate1.refreshBody();

        let plate2=this.physics.add.sprite(776,293+hauteurDif);
        plate2.setDisplaySize(113,7);
        plate2.setOrigin(0,0);
        plate2.body.allowGravity=0;
        plate2.setImmovable(true);
        plate2.refreshBody();

        let plate3=this.physics.add.sprite(1288,293+hauteurDif);
        plate3.setDisplaySize(113,7);
        plate3.setOrigin(0,0);
        plate3.body.allowGravity=0;
        plate3.setImmovable(true);
        plate3.refreshBody();

        let plate4=this.physics.add.sprite(1864,293+hauteurDif);
        plate4.setDisplaySize(113,7);
        plate4.setOrigin(0,0);
        plate4.body.allowGravity=0;
        plate4.setImmovable(true);
        plate4.refreshBody();

        let plate5=this.physics.add.sprite(2312,293+hauteurDif);
        plate5.setDisplaySize(113,7);
        plate5.setOrigin(0,0);
        plate5.body.allowGravity=0;
        plate5.setImmovable(true);
        plate5.refreshBody();

        let plate6=this.physics.add.sprite(2760,293+hauteurDif);
        plate6.setDisplaySize(113,7);
        plate6.setOrigin(0,0);
        plate6.body.allowGravity=0;
        plate6.setImmovable(true);
        plate6.refreshBody();

        let plate7=this.physics.add.sprite(3208,293+hauteurDif);
        plate7.setDisplaySize(113,7);
        plate7.setOrigin(0,0);
        plate7.body.allowGravity=0;
        plate7.setImmovable(true);
        plate7.refreshBody();

        let plate8=this.physics.add.sprite(3784,293+hauteurDif);
        plate8.setDisplaySize(113,7);
        plate8.setOrigin(0,0);
        plate8.body.allowGravity=0;
        plate8.setImmovable(true);
        plate8.refreshBody();

        let plate9=this.physics.add.sprite(4296,293+hauteurDif);
        plate9.setDisplaySize(113,7);
        plate9.setOrigin(0,0);
        plate9.body.allowGravity=0;
        plate9.setImmovable(true);
        plate9.refreshBody();

        let plate10=this.physics.add.sprite(4872,293+hauteurDif);
        plate10.setDisplaySize(113,7);
        plate10.setOrigin(0,0);
        plate10.body.allowGravity=0;
        plate10.setImmovable(true);
        plate10.refreshBody();

        let plate11=this.physics.add.sprite(5384,293+hauteurDif);
        plate11.setDisplaySize(113,7);
        plate11.setOrigin(0,0);
        plate11.body.allowGravity=0;
        plate11.setImmovable(true);
        plate11.refreshBody();

        let plate12=this.physics.add.sprite(5960,293+hauteurDif);
        plate12.setDisplaySize(113,7);
        plate12.setOrigin(0,0);
        plate12.body.allowGravity=0;
        plate12.setImmovable(true);
        plate12.refreshBody();

        let plate13=this.physics.add.sprite(7624,293+hauteurDif);
        plate13.setDisplaySize(113,7);
        plate13.setOrigin(0,0);
        plate13.body.allowGravity=0;
        plate13.setImmovable(true);
        plate13.refreshBody();

        let plate14=this.physics.add.sprite(8776,293+hauteurDif);
        plate14.setDisplaySize(113,7);
        plate14.setOrigin(0,0);
        plate14.body.allowGravity=0;
        plate14.setImmovable(true);
        plate14.refreshBody();

        // plateformes mausolés
        let plate15=this.physics.add.sprite(447,183+hauteurDif); // ,"platformStone");
        plate15.setDisplaySize(194,11);
        plate15.setOrigin(0,0); // pour positionner plus facilement
        plate15.body.allowGravity=0; // la gravité n'a pas d'effet ici
        plate15.setImmovable(true); // ne bouge pas quand on rentre dedans
        plate15.refreshBody();

        let plate16=this.physics.add.sprite(1535,183+hauteurDif);
        plate16.setDisplaySize(194,11);
        plate16.setOrigin(0,0);
        plate16.body.allowGravity=0;
        plate16.setImmovable(true);
        plate16.refreshBody();

        let plate17=this.physics.add.sprite(3455,183+hauteurDif);
        plate17.setDisplaySize(194,11);
        plate17.setOrigin(0,0);
        plate17.body.allowGravity=0;
        plate17.setImmovable(true);
        plate17.refreshBody();

        let plate18=this.physics.add.sprite(4031,183+hauteurDif);
        plate18.setDisplaySize(194,11);
        plate18.setOrigin(0,0);
        plate18.body.allowGravity=0;
        plate18.setImmovable(true);
        plate18.refreshBody();
        
        let plate19=this.physics.add.sprite(4543,183+hauteurDif);
        plate19.setDisplaySize(194,11);
        plate19.setOrigin(0,0);
        plate19.body.allowGravity=0;
        plate19.setImmovable(true);
        plate19.refreshBody();

        let plate20=this.physics.add.sprite(5631,183+hauteurDif);
        plate20.setDisplaySize(194,11);
        plate20.setOrigin(0,0);
        plate20.body.allowGravity=0;
        plate20.setImmovable(true);
        plate20.refreshBody();

        let plate21=this.physics.add.sprite(7871,183+hauteurDif);
        plate21.setDisplaySize(194,11);
        plate21.setOrigin(0,0);
        plate21.body.allowGravity=0;
        plate21.setImmovable(true);
        plate21.refreshBody();

        let plate22=this.physics.add.sprite(8191,183+hauteurDif);
        plate22.setDisplaySize(194,11);
        plate22.setOrigin(0,0);
        plate22.body.allowGravity=0;
        plate22.setImmovable(true);
        plate22.refreshBody();

        let plate23=this.physics.add.sprite(8511,183+hauteurDif);
        plate23.setDisplaySize(194,11);
        plate23.setOrigin(0,0);
        plate23.body.allowGravity=0;
        plate23.setImmovable(true);
        plate23.refreshBody();

        //on définit les collisions, plusieurs méthodes existent:

        // 1 La méthode que je préconise (il faut définir une propriété dans tiled pour que ça marche)
        //permet de travailler sur un seul layer dans tiled et des définir les collisions en fonction des graphiques
        //exemple ici https://medium.com/@michaelwesthadley/modular-game-worlds-in-phaser-3-tilemaps-1-958fc7e6bbd6
        //this.solides.setCollisionByProperty({ collides: true });
        //this.lave.setCollisionByProperty({ collides: true });

        // 2 manière la plus simple (là où il y a des tiles ça collide et sinon non)
        this.solides.setCollisionByExclusion(-1, true);
        //this.lave.setCollisionByExclusion(-1, true);

        // 3 Permet d'utiliser l'éditeur de collision de Tiled...mais ne semble pas marcher pas avec le moteur de physique ARCADE, donc oubliez cette option :(
        //this.map.setCollisionFromCollisionGroup(true,true,this.plateformesSimples);

        //----------les étoiles (objets) ---------------------

        // c'est un peu plus compliqué, mais ça permet de maîtriser plus de choses...
        this.stars = this.physics.add.group({
            allowGravity: true,
            immovable: false,
            bounceY:0
        });
        this.starsObjects = this.map.getObjectLayer('stars')['objects'];
        // On crée des étoiles pour chaque objet rencontré
        this.starsObjects.forEach(starObject => {
            // Pour chaque étoile on la positionne pour que ça colle bien car les étoiles ne font pas 64x64
            let star = this.stars.create(starObject.x+32, starObject.y+32 , 'particles','star');
        });


        //----------les monstres volants (objets tiled) ---------------------

        let monstersContainer=this.add.container();
        this.flyingMonstersObjects = this.map.getObjectLayer('flyingMonsters')['objects'];
        // On crée des montres volants pour chaque objet rencontré
        this.flyingMonstersObjects.forEach(monsterObject => {
            let monster=new MonsterFly(this,monsterObject.x,monsterObject.y);
            monstersContainer.add(monster);
        });

        this.zombiesObjects = this.map.getObjectLayer('zombies')['objects'];
        // On crée des zombies pour chaque objet rencontré
        this.zombiesObjects.forEach(monsterObject => {
            let monster=new MonsterZombie(this,monsterObject.x,monsterObject.y);
            monstersContainer.add(monster);
        });
        
        this.bossSpectreObjects = this.map.getObjectLayer('bossSpectre')['objects'];
        // On crée des zombies pour chaque objet rencontré
        this.bossSpectreObjects.forEach(monsterObject => {
            let monster=new MonsterBossSpectre(this,monsterObject.x+7600,monsterObject.y);
            monstersContainer.add(monster);
            this.physics.add.collider(monster, this.solides);
        });


        //--------effet sur la lave------------------------

        /*this.laveFxContainer=this.add.container();
        this.lave.forEachTile(function(tile){ //on boucle sur TOUTES les tiles de lave pour générer des particules
            if(tile.index !== -1){ //uniquement pour les tiles remplies

                /*
                //dé-commenter pour mieux comprendre ce qui se passe
                console.log("lave tile",tile.index,tile);
                let g=ici.add.graphics();
                laveFxContainer.add(g);
                g.setPosition(tile.pixelX,tile.pixelY)
                g.lineStyle(1,0xFF0000);
                g.strokeRect(0, 0, 64, 64);
                */

            /*    //on va créer des particules
                let props={
                    frame: [
                        //'star', //pour afficher aussi des étoiles
                        'death-white'
                    ],
                    frequency:200,
                    lifespan: 2000,
                    quantity:2,
                    x:{min:-32,max:32},
                    y:{min:-12,max:52},
                    tint:[  0xC11A05,0x883333,0xBB5500,0xFF7F27 ],
                    rotate: {min:-10,max:10},
                    speedX: { min: -10, max: 10 },
                    speedY: { min: -20, max: -30 },
                    scale: {start: 0, end: 1},
                    alpha: { start: 1, end: 0 },
                    blendMode: Phaser.BlendModes.ADD,
                };
                let props2={...props}; //copie props sans props 2
                props2.blendMode=Phaser.BlendModes.MULTIPLY; // un autre blend mode plus sombre

                //ok tout est prêt...ajoute notre objet graphique
                let laveParticles = ici.add.particles('particles');

                //ajoute le premier émetteur de particules
                laveParticles.createEmitter(props);
                //on ne va pas ajouter le second effet émetteur mobile car il consomme trop de ressources
                if(!ici.isMobile) {
                    laveParticles.createEmitter(props2); // ajoute le second
                }
                // positionne le tout au niveau de la tile
                laveParticles.x=tile.pixelX+32;
                laveParticles.y=tile.pixelY+32;
                ici.laveFxContainer.add(laveParticles);

                //optimisation (les particules sont invisibles et désactivées par défaut)
                //elles seront activées via update() et optimizeDisplay()
                laveParticles.pause();
                laveParticles.visible=false;
                //on définit un rectangle pour notre tile de particules qui nous servira plus tard
                laveParticles.rectangle=new Phaser.Geom.Rectangle(tile.pixelX,tile.pixelY,64,64);

            }
            

        })*/

        //--------allez on se fait un peu la même en plus simple mais avec les étoiles----------

        let starsFxContainer=ici.add.container();
        this.stars.children.iterate(function(etoile) {
            let particles=ici.add.particles("particles","star");
            let emmiter=particles.createEmitter({
                tint:[  0xFFFFFF,0xE8E8E8,0xDBDBDB,0xCCCCCC ], // original [  0xFF8800,0xFFFF00,0x88FF00,0x8800FF ]
                rotate: {min:0,max:360},
                scale: {start: 0.2, end: 0.2},
                alpha: { start: 1, end: 0 },
                blendMode: Phaser.BlendModes.ADD,
                speed:40
            });
            etoile.on("disabled",function(){
                emmiter.on=false;
            })
            emmiter.startFollow(etoile);
            starsFxContainer.add(particles);
        });




        //----------débug---------------------
        
        //pour débugger les collisions sur chaque layer
        let debug=this.add.graphics().setAlpha(this.game.config.physics.arcade.debug?0.75:0);
        if(this.game.config.physics.arcade.debug === false){
            debug.visible=false;
        }
        //débug solides en vers
        this.solides.renderDebug(debug,{
            tileColor: null, // Couleur des tiles qui ne collident pas
            collidingTileColor: new Phaser.Display.Color(0, 255, 0, 255), //Couleur des tiles qui collident
            faceColor: null // Color of colliding face edges
        });
        /*//debug lave en rouge
        this.lave.renderDebug(debug,{
            tileColor: null, // Couleur des tiles qui ne collident pas
            collidingTileColor: new Phaser.Display.Color(255, 0, 0, 255), //Couleur des tiles qui collident
            faceColor: null // Color of colliding face edges
        }); */


        //---------- parallax ciel (rien de nouveau) -------------

        //on change de ciel, on fait une tileSprite ce qui permet d'avoir une image qui se répète
        this.sky=this.add.tileSprite(
            0,
            0,
            this.sys.canvas.width,
            this.sys.canvas.height,
            'night'
        );
        this.sky.setOrigin(0,0);
        this.sky.setScrollFactor(0);//fait en sorte que le ciel ne suive pas la caméra
        this.sky2=this.add.tileSprite(
            0,
            0,
            this.sys.canvas.width,
            this.sys.canvas.height,
            'night'
        );
        this.sky2.setOrigin(0,0);
        this.sky2.setScrollFactor(0);
        this.sky2.blendMode=Phaser.BlendModes.ADD;

        this.sky3=this.add.tileSprite
        (
            0,
            0,
            this.sys.canvas.width,
            this.sys.canvas.height,
            'chateauLoin'
        );
        this.sky3.setScrollFactor(0);
        this.sky3.setOrigin(0,0);
        
        this.sky4=this.add.tileSprite
        (
            0,
            0,
            this.sys.canvas.width,
            this.sys.canvas.height,
            'colines'
        );
        this.sky4.setScrollFactor(0);
        this.sky4.setOrigin(0,0);
        
        this.sky5=this.add.tileSprite
        (
            0,
            0,
            this.sys.canvas.width,
            this.sys.canvas.height,
            'grilleHerbe'
        );
        this.sky5.setScrollFactor(0);
        this.sky5.setOrigin(0,0);
        
        /*
        this.sky6=this.add.tileSprite
        (
            0,
            0,
            this.sys.canvas.width,
            this.sys.canvas.height,
            'fog'
        );
        this.sky6.setScrollFactor(0);
        this.sky6.setOrigin(0,0);*/

        this.skyDevant=this.add.tileSprite
        (
            0,
            0,
            this.sys.canvas.width,
            this.sys.canvas.height,
            'ombresTombes'
        );
        this.skyDevant.setScrollFactor(0);
        this.skyDevant.setOrigin(0,0);

        //---------- effet de brouillard ---------------------


        //---------- sources lumineuses ---------------------

        this.pointLight = this.add.pointlight(350, 770, (0, 0, 0), 100, 0.15, 0.1);
        this.pointLight.color.r = 255;
        this.pointLight.color.g = 200;
        this.pointLight.color.b = 0;

        this.pointLight2 = this.add.pointlight(750, 770, (0, 0, 0), 100, 0.15, 0.1);
        this.pointLight2.color.r = 255;
        this.pointLight2.color.g = 200;
        this.pointLight2.color.b = 0;

        //----------collisions---------------------

        //quoi collide avec quoi?
        this.physics.add.collider(this.player, this.solides);
        this.physics.add.collider(this.stars, this.solides);
        //si le joueur touche une étoile dans le groupe...
        this.physics.add.overlap(this.player, this.stars, this.ramasserEtoile, null, this);
        //quand on touche la lave, on meurt
        this.physics.add.collider(this.player, this.lave,this.playerDie,null,this);
        //plateformes
        this.physics.add.collider(this.stars, plate1); // les étoiles rebondissent dessus
        this.physics.add.collider(this.player, plate1); // le joueur rebondit dessus
        this.physics.add.collider(this.stars, plate2);
        this.physics.add.collider(this.player, plate2);
        this.physics.add.collider(this.stars, plate3);
        this.physics.add.collider(this.player, plate3);
        this.physics.add.collider(this.stars, plate4);
        this.physics.add.collider(this.player, plate4);
        this.physics.add.collider(this.stars, plate5);
        this.physics.add.collider(this.player, plate5);
        this.physics.add.collider(this.stars, plate6);
        this.physics.add.collider(this.player, plate6);
        this.physics.add.collider(this.stars, plate7);
        this.physics.add.collider(this.player, plate7);
        this.physics.add.collider(this.stars, plate8);
        this.physics.add.collider(this.player, plate8);
        this.physics.add.collider(this.stars, plate9);
        this.physics.add.collider(this.player, plate9);
        this.physics.add.collider(this.stars, plate10);
        this.physics.add.collider(this.player, plate10);
        this.physics.add.collider(this.stars, plate11);
        this.physics.add.collider(this.player, plate11);
        this.physics.add.collider(this.stars, plate12);
        this.physics.add.collider(this.player, plate12);
        this.physics.add.collider(this.stars, plate13);
        this.physics.add.collider(this.player, plate13);
        this.physics.add.collider(this.stars, plate14);
        this.physics.add.collider(this.player, plate14);
        this.physics.add.collider(this.stars, plate15);
        this.physics.add.collider(this.player, plate15);
        this.physics.add.collider(this.stars, plate16);
        this.physics.add.collider(this.player, plate16);
        this.physics.add.collider(this.stars, plate17);
        this.physics.add.collider(this.player, plate17);
        this.physics.add.collider(this.stars, plate18);
        this.physics.add.collider(this.player, plate18);
        this.physics.add.collider(this.stars, plate19);
        this.physics.add.collider(this.player, plate19);
        this.physics.add.collider(this.stars, plate20);
        this.physics.add.collider(this.player, plate20);
        this.physics.add.collider(this.stars, plate21);
        this.physics.add.collider(this.player, plate21);
        this.physics.add.collider(this.stars, plate22);
        this.physics.add.collider(this.player, plate22);
        this.physics.add.collider(this.stars, plate23);
        this.physics.add.collider(this.player, plate23);


        //--------- Z order -----------------------

        //on définit les z à la fin
        let z=1000; //niveau Z qui a chaque fois est décrémenté.
        debug.setDepth(z--);

        this.skyDevant.setDepth(z--);
        //this.devant.setDepth(z--);

        //this.sky6.setDepth(z--);

        this.blood.setDepth(z--);
        this.blood2.setDepth(z--);

        this.pointLight.setDepth(z--);
        this.pointLight2.setDepth(z--);       

        monstersContainer.setDepth(z--);
        this.stars.setDepth(z--);
        starsFxContainer.setDepth(z--);
        this.solides.setDepth(z--);
        //this.laveFxContainer.setDepth(z--);
        //this.lave.setDepth(z--);
        this.player.setDepth(z--);
        this.derriere.setDepth(z--);

        this.sky5.setDepth(z--);
        this.sky4.setDepth(z--);
        this.sky3.setDepth(z--);
        this.sky2.setDepth(z--);
        this.sky.setDepth(z--);

        /*
        debug.setDepth(13);
        this.solides.setDepth(z--);
        monstersContainer.setDepth(11)
        this.blood.setDepth(11);
        this.blood2.setDepth(11);
        this.devant.setDepth(12);
        */

    }

    /**
     * Permet d'activer, désactiver des éléments en fonction de leur visibilité dans l'écran ou non
     */
    optimizeDisplay(){
        //return;
        let world=this.cameras.main.worldView; // le rectangle de la caméra, (les coordonnées de la zone visible)
        /*
        // on va activer / désactiver les particules de lave
        for( let particule of this.laveFxContainer.getAll()){ // parcours toutes les particules de lave
            if(Phaser.Geom.Rectangle.Overlaps(world,particule.rectangle)){
                //si le rectangle de la particule est dans le rectangle de la caméra
                if(!particule.visible){
                    //on active les particules
                    particule.resume();
                    particule.visible=true;
                }
            }else{
                //si le rectangle de la particule n'est PAS dans le rectangle de la caméra
                if(particule.visible){
                    //on désactive les particules
                    particule.pause();
                    particule.visible=false;
                }
            }
        }
        */
        // ici vous pouvez appliquer le même principe pour des monstres, des étoiles etc...
    }

    /**
     * Fait se déplacer certains éléments en parallax
     */
    moveParallax(){
        //le ciel se déplace moins vite que la caméra pour donner un effet paralax
        this.sky.tilePositionX=this.cameras.main.scrollX*0.01;
        this.sky.tilePositionY=this.cameras.main.scrollY*0.6;

        this.sky2.tilePositionX=this.cameras.main.scrollX*0+100;
        this.sky2.tilePositionY=this.cameras.main.scrollY*0.7+100;

        ///le chateau sur la coline
        this.sky3.tilePositionX=this.cameras.main.scrollX*0.05;//*0.6//*0.3+500;
        this.sky3.tilePositionY=this.cameras.main.scrollY+44;//+24//*0.1;    
                
        //les colines
        this.sky4.tilePositionX=this.cameras.main.scrollX*0.6;//*0.3//*0.6;
        this.sky4.tilePositionY=this.cameras.main.scrollY+22;//+22//*0.2;
                    
        //la grille avec herbes
        this.sky5.tilePositionX=this.cameras.main.scrollX*0.8;//*0.6//0.15;
        this.sky5.tilePositionY=this.cameras.main.scrollY+22;//+0//*0.05;

        //le brouillard
        //this.sky6.tilePositionX=this.cameras.main.scrollX*1.2;//*0.6//0.15;
        //this.sky6.tilePositionY=this.cameras.main.scrollY;//+0//*0.05;

        //les ombres devant
        this.skyDevant.tilePositionX=this.cameras.main.scrollX*1.4;//*0.6//0.15;
        this.skyDevant.tilePositionY=this.cameras.main.scrollY;//+0//*0.05;
    }


    update(){
        super.update();
        this.moveParallax();

        //optimisation
        //teste si la caméra a bougé
        let actualPosition=JSON.stringify(this.cameras.main.worldView);
        if(
            !this.previousPosition
            || this.previousPosition !== actualPosition
        ){
            this.previousPosition=actualPosition;
            this.optimizeDisplay();
        }
    }




}

