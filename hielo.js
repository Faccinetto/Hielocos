let velocidadHieloco = 10;
let velocidadRotacion = 0.1;
class Hielo extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y) {
        super(scene, x, y, 'hieloco');
        scene.add.existing(this);
        this.setInteractive();
    }
    preUpdate(){
        this.update();
    }
    update(){
        this.y += velocidadHieloco;
        this.rotation += velocidadRotacion; //en Radianes 2PI=360°
        if(this.y > (ALTO+100)){
            this.removeInteractive();
            this.removedFromScene();
            this.destroy();
        }
    }
}