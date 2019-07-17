import Phaser from 'phaser';
import Garden_JSON from './assets/garden.json';
import Grass from './assets/grass_LPC.png';

var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'root',
    backgroundColor: '#41b54c',
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    // assets go here!
    this.load.image('tiles', Grass); // load tileset image
    this.load.tilemapTiledJSON('map', Garden_JSON); // load json tilemap made in Tiled
}

function create ()
{
    const title = this.add.text(0,0, "Bird Clicker: A Game of Avian Incrementation", {fontFamily: "Fira Sans", fontSize: "32px"});

    const map = this.make.tilemap({key: "map"}); // create a tilemap from the json file
    const tileset = map.addTilesetImage("grass_LPC", "tiles"); // point map to tileset image file
    const grassLayer = map.createStaticLayer("grass", tileset, 0, 120); // render layer with tilemap and tileset data
}

function update ()
{
    // animations happen here
}